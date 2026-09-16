const path=require('path');
const root=path.resolve(__dirname,'..');
const chapters=[];
for(let n=1;n<=10;n++) chapters.push(require(path.join(root,'assets','data',`chapter${String(n).padStart(2,'0')}.js`)));

let issues=[];
function inspectString(s,label){
  for(let i=0;i<s.length;i++){
    const code=s.charCodeAt(i);
    if(code<32 && code!==10 && code!==9) issues.push(`${label}: control char ${code}`);
  }
  const dollars=(s.match(/\$\$/g)||[]).length;
  if(dollars%2!==0) issues.push(`${label}: unmatched $$ delimiter`);
  const begins=(s.match(/\\begin\{/g)||[]).length;
  const ends=(s.match(/\\end\{/g)||[]).length;
  if(begins!==ends) issues.push(`${label}: begin/end mismatch ${begins}/${ends}`);
  if(/\\times\s*$/.test(s)) issues.push(`${label}: suspicious trailing \\times`);
}
function walk(x,label){
  if(typeof x==='string') inspectString(x,label);
  else if(Array.isArray(x)) x.forEach((v,i)=>walk(v,`${label}[${i}]`));
  else if(x&&typeof x==='object') Object.entries(x).forEach(([k,v])=>walk(v,`${label}.${k}`));
}
chapters.forEach((c,i)=>walk(c,`chapter${i+1}`));
if(issues.length){
  console.error(issues.slice(0,50).join('\n'));
  throw new Error(`Markup audit found ${issues.length} issue(s).`);
}
console.log('PASS: no control-character, display-math delimiter, or LaTeX begin/end issues detected.');
