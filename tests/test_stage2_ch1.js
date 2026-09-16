const data=require('../assets/stage2_ch1.js');
let e=[];
if(data.sessions.length!==3)e.push('Expected 3 sessions');
for(const s of data.sessions){
 if(s.problems.length!==6)e.push(`${s.section}: expected 6 problems`);
 const d=s.problems.map(p=>p.difficulty);
 if(d.filter(x=>x==='Easy').length!==2)e.push(`${s.section}: expected 2 easy`);
 if(d.filter(x=>x==='Medium').length!==3)e.push(`${s.section}: expected 3 medium`);
 if(d.filter(x=>x==='Slightly challenging').length!==1)e.push(`${s.section}: expected 1 challenge`);
 for(const p of s.problems){if(!p.solution)e.push(`${p.id}: missing solution`);if(!p.similar)e.push(`${p.id}: missing similar practice`);}
}
if(e.length){console.error(e.join('\n'));process.exit(1);}
console.log('PASS: 3 sessions, 18 problems, difficulty mix, solutions, and similar practice validated.');
