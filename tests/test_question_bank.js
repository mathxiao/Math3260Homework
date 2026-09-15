const path=require('path');
const data=require(path.join(__dirname,'..','assets','questions.js'));
const grader=require(path.join(__dirname,'..','assets','grader.js'));
let errors=[];
const sessions=data.chapters.flatMap(c=>c.sessions);
if(sessions.length!==52) errors.push(`Expected 52 sessions, found ${sessions.length}`);
const probs=sessions.flatMap(s=>s.problems);
if(probs.length!==104) errors.push(`Expected 104 problems, found ${probs.length}`);
const ids=new Set();
for(const s of sessions){
  if(s.problems.length!==2) errors.push(`${s.section} does not have exactly 2 problems`);
  for(const p of s.problems){
    if(ids.has(p.id)) errors.push(`Duplicate id ${p.id}`); ids.add(p.id);
    const resp=grader.canonicalResponse(p);
    if(!grader.grade(p,resp)) errors.push(`Canonical response did not grade correctly for ${p.id}: ${JSON.stringify(resp)}`);
  }
}
// Parser spot checks
const spots=[['fraction',Math.abs(grader.safeNumber('1/3')-1/3)<1e-12],['pi',Math.abs(grader.safeNumber('pi/4')-Math.PI/4)<1e-12],['sqrt',Math.abs(grader.safeNumber('sqrt(2)')-Math.sqrt(2))<1e-12]];
for(const [name,ok] of spots) if(!ok) errors.push(`Parser failed ${name} check`);
const z=grader.parseComplex('-0.5+1.5i'); if(Math.abs(z.re+.5)>1e-12||Math.abs(z.im-1.5)>1e-12) errors.push('Complex parser check failed');
if(errors.length){console.error(errors.join('\n'));process.exit(1);} else console.log(`PASS: ${sessions.length} sessions, ${probs.length} problems, canonical grading and parser checks successful.`);
