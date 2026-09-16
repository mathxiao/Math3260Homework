(function(){'use strict';
const chapters=Object.values(window.MATH3260_STAGE2_CHAPTERS||{}).sort((a,b)=>a.number-b.number);
const G=window.Stage2Grader;
if(!chapters.length||!G){document.getElementById('content').textContent='Homework data could not be loaded.';return;}

const STORAGE_KEY='math3260-stage2-v2';
let saved={bestScores:{}};
try{
  const raw=localStorage.getItem(STORAGE_KEY);
  if(raw)saved=Object.assign(saved,JSON.parse(raw));
}catch(e){console.warn('Progress could not be loaded.',e);}
let activeChapter=1;
let activeSection=chapters[0].sessions[0].section;

function persist(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(saved));}catch(e){console.warn('Progress could not be saved.',e);}}
function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
function authored(s){return esc(s).replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/\\n/g,'<br>');}
function typeset(root){if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([root]).catch(console.error);}
function chapter(){return chapters.find(c=>c.number===activeChapter);}
function current(){return chapter().sessions.find(s=>s.section===activeSection);}
function best(section){return Number(saved.bestScores?.[section]||0);}
function totalSessions(){return chapters.reduce((a,c)=>a+c.sessions.length,0);}
function totalProblems(){return chapters.reduce((a,c)=>a+c.sessions.reduce((b,s)=>b+s.problems.length,0),0);}
function completedSessions(){return chapters.reduce((a,c)=>a+c.sessions.filter(s=>best(s.section)>=s.problems.length).length,0);}
function totalBest(){return chapters.reduce((a,c)=>a+c.sessions.reduce((b,s)=>b+Math.min(best(s.section),s.problems.length),0),0);}

function response(p){
  if(p.type==='choice')return `<div class="choices">${p.options.map(o=>`<label class="choice"><input type="radio" name="${esc(p.id)}" value="${esc(o.value)}"> <span>${authored(o.label)}</span></label>`).join('')}</div>`;
  if(p.type==='number')return `<span class="field wide"><label>Answer</label><input type="text" id="${p.id}" inputmode="text" placeholder="e.g. 3/2 or sqrt(2)"></span>`;
  if(p.type==='complex')return `<span class="field wide"><label>Complex answer</label><input type="text" id="${p.id}" inputmode="text" placeholder="e.g. 4-3i"></span>`;
  if(p.type==='vector')return `<div class="vector-input">${p.answer.map((_,i)=>`<span class="field"><label>${esc(p.labels?.[i]||('Entry '+(i+1)))}</label><input type="text" id="${p.id}_${i}"></span>`).join('')}</div>`;
  if(p.type==='matrix'){
    const cols=p.answer[0].length;
    return `<div class="matrix-wrap"><div class="matrix" style="grid-template-columns:repeat(${cols},minmax(82px,110px))">${p.answer.flatMap((row,r)=>row.map((_,c)=>`<input type="text" id="${p.id}_${r}_${c}" aria-label="row ${r+1}, column ${c+1}">`)).join('')}</div></div>`;
  }
  return '';
}
function read(p){
  if(p.type==='choice'){const e=document.querySelector(`input[name="${CSS.escape(p.id)}"]:checked`);return e?e.value:'';}
  if(p.type==='number'||p.type==='complex')return document.getElementById(p.id)?.value??'';
  if(p.type==='vector')return p.answer.map((_,i)=>document.getElementById(`${p.id}_${i}`)?.value??'');
  if(p.type==='matrix')return p.answer.map((row,r)=>row.map((_,c)=>document.getElementById(`${p.id}_${r}_${c}`)?.value??''));
  return '';
}
function simProblem(p){return {...p.similar,id:p.id+'_sim'};}

function updateHero(){
  document.getElementById('courseStats').innerHTML=
    `<strong>${completedSessions()} / ${totalSessions()}</strong> sessions completed &nbsp;·&nbsp; <strong>${totalBest()} / ${totalProblems()}</strong> best-score points`;
}
function renderChapterNav(){
  const el=document.getElementById('chapterNav');
  el.innerHTML=chapters.map(c=>`<button class="chapter-btn ${c.number===activeChapter?'active':''}" data-ch="${c.number}">Ch. ${c.number}</button>`).join('');
  el.querySelectorAll('[data-ch]').forEach(b=>b.onclick=()=>{
    activeChapter=Number(b.dataset.ch);
    activeSection=chapter().sessions[0].section;
    renderAll();
    window.scrollTo({top:0,behavior:'smooth'});
  });
}
function renderSessionNav(){
  const c=chapter();
  document.getElementById('chapterHeading').textContent=`Chapter ${c.number}: ${c.title}`;
  const el=document.getElementById('sessionNav');
  el.innerHTML=c.sessions.map(s=>{
    const b=best(s.section), done=b>=s.problems.length;
    return `<button class="session-btn ${s.section===activeSection?'active':''} ${done?'done':''}" data-sec="${esc(s.section)}">${esc(s.section)} <span>${b}/${s.problems.length}</span></button>`;
  }).join('');
  el.querySelectorAll('[data-sec]').forEach(b=>b.onclick=()=>{
    activeSection=b.dataset.sec;
    renderAll();
    document.getElementById('content').scrollIntoView({behavior:'smooth',block:'start'});
  });
}
function moveSession(delta){
  const flat=chapters.flatMap(c=>c.sessions.map(s=>({chapter:c.number,section:s.section})));
  const i=flat.findIndex(x=>x.section===activeSection);
  const target=flat[i+delta];
  if(!target)return;
  activeChapter=target.chapter; activeSection=target.section; renderAll();
  window.scrollTo({top:0,behavior:'smooth'});
}

function renderSession(){
  const s=current();
  let h=`<section class="session"><div class="session-head"><div><div class="eyebrow">Session ${esc(s.section)}</div><h2>${authored(s.title)}</h2><div class="focus">${authored(s.focus)}</div><div class="best-line">Saved best score: <strong>${best(s.section)} / ${s.problems.length}</strong></div></div><div class="score" id="score">0 / ${s.problems.length}</div></div>`;
  s.problems.forEach((p,i)=>{
    const sp=simProblem(p);
    h+=`<article class="problem" id="card_${p.id}">
      <div class="problem-top"><strong>Problem ${i+1}</strong><span class="difficulty">${esc(p.difficulty)}</span></div>
      <div class="prompt">${authored(p.prompt)}</div>
      <div class="answer">${response(p)}</div>
      <div class="actions"><button class="btn" id="hint_${p.id}">Hint</button><button class="btn" id="solbtn_${p.id}" style="display:none">Show full solution</button></div>
      <div class="hintbox" id="hintbox_${p.id}">${authored(p.hint||'No hint provided.')}</div>
      <div class="feedback" id="fb_${p.id}"></div>
      <div class="solution" id="sol_${p.id}">${authored(p.solution)}</div>
      <div class="similar" id="sim_${p.id}">
        <strong>Similar practice</strong>
        <div class="prompt">${authored(sp.prompt)}</div>
        <div class="answer">${response(sp)}</div>
        <div class="actions"><button class="btn" id="simcheck_${p.id}">Check similar problem</button><button class="btn" id="simsolbtn_${p.id}" style="display:none">Show similar solution</button></div>
        <div class="feedback" id="simfb_${p.id}"></div>
        <div class="solution" id="simsol_${p.id}">${authored(sp.solution||'')}</div>
      </div>
    </article>`;
  });
  h+=`<div class="session-actions">
    <button class="btn" id="prevSession">Previous session</button>
    <button class="btn primary" id="checkAll">Check all answers</button>
    <button class="btn" id="nextSession">Next session</button>
  </div></section>`;
  const root=document.getElementById('content');
  root.innerHTML=h;
  typeset(root);

  s.problems.forEach(p=>{
    const sp=simProblem(p);
    document.getElementById(`hint_${p.id}`).onclick=()=>{
      const box=document.getElementById(`hintbox_${p.id}`);
      box.classList.toggle('show'); typeset(box);
    };
    document.getElementById(`solbtn_${p.id}`).onclick=()=>{
      const box=document.getElementById(`sol_${p.id}`);
      box.classList.toggle('show'); typeset(box);
    };
    document.getElementById(`simcheck_${p.id}`).onclick=()=>{
      const ok=G.grade(sp,read(sp)),f=document.getElementById(`simfb_${p.id}`);
      f.className='feedback show '+(ok?'ok':'no');
      f.textContent=ok?'Correct — good recovery practice.':'Not correct yet. Try the similar problem again.';
      document.getElementById(`simsolbtn_${p.id}`).style.display='inline-block';
    };
    document.getElementById(`simsolbtn_${p.id}`).onclick=()=>{
      const box=document.getElementById(`simsol_${p.id}`);
      box.classList.toggle('show'); typeset(box);
    };
  });

  document.getElementById('checkAll').onclick=()=>{
    let score=0;
    s.problems.forEach(p=>{
      const ok=G.grade(p,read(p)); if(ok)score++;
      const card=document.getElementById(`card_${p.id}`),f=document.getElementById(`fb_${p.id}`);
      card.classList.remove('correct','incorrect'); card.classList.add(ok?'correct':'incorrect');
      f.className='feedback show '+(ok?'ok':'no');
      f.textContent=ok?'Correct.':'Not correct yet. A similar practice problem is now available below.';
      document.getElementById(`solbtn_${p.id}`).style.display='inline-block';
      if(!ok){const sim=document.getElementById(`sim_${p.id}`);sim.classList.add('show');typeset(sim);}
    });
    document.getElementById('score').textContent=`${score} / ${s.problems.length}`;
    if(score>best(s.section)){saved.bestScores[s.section]=score;persist();}
    renderChapterNav(); renderSessionNav(); updateHero();
    const bestLine=document.querySelector('.best-line strong'); if(bestLine)bestLine.textContent=`${best(s.section)} / ${s.problems.length}`;
  };
  document.getElementById('prevSession').onclick=()=>moveSession(-1);
  document.getElementById('nextSession').onclick=()=>moveSession(1);
}

function renderAll(){renderChapterNav();renderSessionNav();updateHero();renderSession();}
document.getElementById('resetProgress').onclick=()=>{
  if(confirm('Reset all saved Stage 2 best scores on this browser?')){
    saved={bestScores:{}};persist();renderAll();
  }
};
renderAll();
})();
