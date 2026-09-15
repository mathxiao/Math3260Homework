const fs=require('fs');
const path=require('path');
const root=path.join(__dirname,'..');
const data=require(path.join(root,'assets','questions.js'));
let errors=[];

const sessions=data.chapters.flatMap(c=>c.sessions);
const strings=[];
for(const s of sessions){
  for(const p of s.problems){
    for(const [field,val] of Object.entries({prompt:p.prompt,hint:p.hint,solution:p.solution,label:p.label})){
      if(typeof val==='string') strings.push([`${s.section}/${p.id}/${field}`,val]);
    }
    if(Array.isArray(p.labels)) p.labels.forEach((v,i)=>{if(typeof v==='string')strings.push([`${s.section}/${p.id}/labels[${i}]`,v]);});
    if(Array.isArray(p.options)) p.options.forEach((o,i)=>{if(typeof o.label==='string')strings.push([`${s.section}/${p.id}/option[${i}]`,o.label]);});
  }
}

for(const [where,s] of strings){
  // Tabs and other C0 controls indicate an escaped TeX command such as \times was interpreted by JS.
  if(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/.test(s) || s.includes('\t')) errors.push(`${where}: unexpected control character/tab`);
  const dollars=(s.match(/(?<!\\)\$/g)||[]).length;
  if(dollars%2!==0) errors.push(`${where}: unmatched $ delimiter`);
  const begins=[...s.matchAll(/\\begin\{([^}]+)\}/g)].map(m=>m[1]);
  const ends=[...s.matchAll(/\\end\{([^}]+)\}/g)].map(m=>m[1]);
  if(JSON.stringify(begins)!==JSON.stringify(ends)) errors.push(`${where}: unmatched LaTeX environment(s)`);
}

const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
if(!index.includes('assets/vendor/mathjax/tex-svg-full.js')) errors.push('index.html does not use the bundled MathJax path');
if(/cdn\.jsdelivr\.net|cdnjs\.cloudflare\.com|unpkg\.com/.test(index)) errors.push('index.html still contains an external CDN dependency');
for(const rel of ['assets/app.js','assets/grader.js','assets/questions.js','assets/styles.css','assets/vendor/mathjax/tex-svg-full.js','assets/vendor/mathjax/LICENSE']){
  if(!fs.existsSync(path.join(root,rel))) errors.push(`missing required file: ${rel}`);
}

// Runtime regression checks for the specific malformed \times cases.
const s21=sessions.find(s=>s.section==='2.1');
const s66=sessions.find(s=>s.section==='6.6');
for(const s of [s21,s66]){
  for(const p of s.problems){
    for(const o of p.options||[]){
      if(o.label.includes('\t')) errors.push(`${s.section}/${p.id}: choice label contains a tab instead of \\times`);
    }
  }
}

if(errors.length){console.error(errors.join('\n'));process.exit(1);}
console.log(`PASS: audited ${strings.length} authored strings; delimiters/environments/control characters/local MathJax dependencies are valid.`);
