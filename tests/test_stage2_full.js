const path=require('path');
const root=path.resolve(__dirname,'..');
const G=require(path.join(root,'assets','stage2_grader.js'));
const chapters=[];
for(let n=1;n<=10;n++) chapters.push(require(path.join(root,'assets','data',`chapter${String(n).padStart(2,'0')}.js`)));

function fail(msg){throw new Error(msg);}
function canonical(p){
  if(p.type==='choice') return String(p.answer);
  if(p.type==='number') return String(p.answer);
  if(p.type==='complex'){
    const [re,im]=p.answer;
    return `${re}${im>=0?'+':''}${im}i`;
  }
  if(p.type==='vector') return p.answer.map(String);
  if(p.type==='matrix') return p.answer.map(row=>row.map(String));
  fail(`Unknown type ${p.type}`);
}
let sessions=0, problems=0, similar=0;
const counts={Easy:0,Medium:0,'Slightly challenging':0};
const ids=new Set();
for(const ch of chapters){
  if(ch.number<1||ch.number>10) fail(`Bad chapter number ${ch.number}`);
  for(const s of ch.sessions){
    sessions++;
    if(s.problems.length!==6) fail(`${s.section} has ${s.problems.length} problems`);
    const mix=s.problems.map(p=>p.difficulty).join('|');
    if(mix!=='Easy|Easy|Medium|Medium|Medium|Slightly challenging') fail(`${s.section} difficulty mix incorrect`);
    for(const p of s.problems){
      problems++; counts[p.difficulty]++;
      if(ids.has(p.id)) fail(`Duplicate id ${p.id}`); ids.add(p.id);
      if(!p.hint||!p.solution||!p.similar||!p.similar.solution) fail(`Missing support text for ${p.id}`);
      if(!G.grade(p,canonical(p))) fail(`Canonical main answer does not grade for ${p.id}`);
      const sp={...p.similar,id:p.id+'_sim'};
      if(!G.grade(sp,canonical(sp))) fail(`Canonical similar answer does not grade for ${p.id}`);
      similar++;
    }
  }
}
if(sessions!==52) fail(`Expected 52 sessions; found ${sessions}`);
if(problems!==312) fail(`Expected 312 problems; found ${problems}`);
if(similar!==312) fail(`Expected 312 similar problems; found ${similar}`);
if(counts.Easy!==104||counts.Medium!==156||counts['Slightly challenging']!==52) fail(`Difficulty totals incorrect: ${JSON.stringify(counts)}`);

const parserTests=[
  ['3/2',1.5],['sqrt(2)',Math.sqrt(2)],['pi/4',Math.PI/4],['2^3',8],['-1/4',-0.25]
];
for(const [raw,val] of parserTests) if(!G.close(G.num(raw),val)) fail(`Numeric parser failed ${raw}`);
const complexTests=[
  ['4-3i',[4,-3]],['i',[0,1]],['-i',[0,-1]],['-1+sqrt(3)i',[-1,Math.sqrt(3)]],['2',[2,0]]
];
for(const [raw,z] of complexTests){
  const got=G.complexValue(raw);
  if(!G.close(got[0],z[0])||!G.close(got[1],z[1])) fail(`Complex parser failed ${raw}: ${got}`);
}
console.log(`PASS: ${chapters.length} chapters, ${sessions} sessions, ${problems} primary problems, ${similar} similar-practice problems.`);
console.log(`PASS: difficulty totals Easy=${counts.Easy}, Medium=${counts.Medium}, Slightly challenging=${counts['Slightly challenging']}.`);
console.log('PASS: canonical grading and numeric/complex parser checks.');
