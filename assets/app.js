(function(){
  "use strict";
  const data=window.HOMEWORK_DATA, grader=window.HWGrader;
  const STORAGE_KEY='math3260-stage1-v1';
  let state=loadState();
  let activeSection=null;
  let mathQueue=Promise.resolve();

  function loadState(){
    try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||{answers:{},sessions:{}};}catch{return {answers:{},sessions:{}};}
  }
  function saveState(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch{/* storage unavailable: keep in-memory state for this visit */}}
  function allSessions(){return data.chapters.flatMap(ch=>ch.sessions);}
  function sessionBySection(sec){return allSessions().find(s=>s.section===sec);}
  function sessionIndex(sec){return allSessions().findIndex(s=>s.section===sec);}
  function isDone(sec){return (state.sessions[sec]?.bestScore||0)===2;}
  function completedCount(){return allSessions().filter(s=>isDone(s.section)).length;}

  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }

  // Question-bank text is authored as plain text with LaTeX delimiters and a small
  // Markdown-style convention for **bold**. Escape it before DOM insertion so that
  // authored math is safe, then restore only the supported bold convention.
  function authoredHtml(s){
    return escapeHtml(s??'').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');
  }

  function setMathStatus(message){
    const el=document.getElementById('mathStatus');
    if(!el) return;
    if(message){el.textContent=message;el.hidden=false;}else{el.textContent='';el.hidden=true;}
  }

  function queueTypeset(root){
    if(!root) return mathQueue;
    mathQueue=mathQueue.then(async()=>{
      const mj=window.MathJax;
      if(!mj) throw new Error('MathJax did not load.');
      if(mj.startup?.promise) await mj.startup.promise;
      if(!document.documentElement.contains(root)) return;
      if(typeof mj.typesetPromise!=='function') throw new Error('MathJax typesetting is unavailable.');
      await mj.typesetPromise([root]);
      setMathStatus('');
    }).catch(err=>{
      console.error('Mathematics rendering error:',err);
      setMathStatus('Mathematics could not be rendered. Please refresh the page. If the problem continues, contact the instructor.');
    });
    return mathQueue;
  }

  function renderSidebar(){
    const nav=document.getElementById('chapterNav'); nav.innerHTML='';
    data.chapters.forEach(ch=>{
      const d=document.createElement('details'); d.open=activeSection ? String(activeSection).startsWith(ch.number+'.') : ch.number===1;
      const sum=document.createElement('summary'); sum.textContent=`Chapter ${ch.number}: ${ch.title}`; d.appendChild(sum);
      ch.sessions.forEach(s=>{
        const b=document.createElement('button'); b.className='session-link'+(activeSection===s.section?' active':'')+(isDone(s.section)?' done':'');
        b.textContent=`${s.section} ${s.title}`; b.onclick=()=>goSession(s.section); d.appendChild(b);
      }); nav.appendChild(d);
    });
    const count=completedCount(), total=data.sessionCount, pct=100*count/total;
    document.getElementById('sideProgress').style.width=pct+'%';
    document.getElementById('sideProgressLabel').textContent=`${count} of ${total} sessions complete`;
  }

  function renderMobileSelect(){
    const sel=document.getElementById('mobileSelect'); sel.innerHTML='<option value="">Jump to session…</option>';
    data.chapters.forEach(ch=>ch.sessions.forEach(s=>{const o=document.createElement('option');o.value=s.section;o.textContent=`${s.section} ${s.title}`;o.selected=s.section===activeSection;sel.appendChild(o);}));
  }

  function goSession(sec){
    activeSection=sec; location.hash='session='+encodeURIComponent(sec); render(); window.scrollTo({top:0,behavior:'smooth'});
  }
  function goHome(){activeSection=null; location.hash=''; render(); window.scrollTo({top:0,behavior:'smooth'});}

  function renderHome(){
    const count=completedCount();
    let html=`<section class="hero"><div class="eyebrow">Stage 1 · Practice & self-check</div><h1>MATH 3260 Interactive Homework</h1><p>Work two focused problems after each course session. Check your work instantly, retry without penalty, and build a visible record of your progress on this device.</p><div class="status-row"><span class="chip">${data.sessionCount} sessions</span><span class="chip">${data.problemCount} problems</span><span class="chip">Unlimited retries</span><span class="chip">Progress saved locally</span></div></section>
    <section class="session-card"><h2>How this works</h2><div class="welcome-grid"><div class="welcome-box"><strong>1. Choose a session</strong><span class="small">Each session contains exactly two questions aligned with the lecture.</span></div><div class="welcome-box"><strong>2. Enter your answers</strong><span class="small">Use ordinary numbers, fractions such as <code>1/3</code>, vectors, matrices, or choices.</span></div><div class="welcome-box"><strong>3. Check and retry</strong><span class="small">A session is complete after both problems are correct. No retry penalty.</span></div></div>
    <div class="session-actions"><button class="btn primary" id="startBtn">${count? 'Continue with first incomplete session':'Start Session 1.1'}</button><button class="btn" id="helpHome">Answer-entry help</button></div><div id="homeHelp" class="help-panel"><strong>Answer entry</strong><p>Decimals and fractions are both accepted. You may also enter expressions such as <code>pi/4</code> and <code>sqrt(2)</code>. For complex numbers use forms like <code>3-2i</code>. Matrix entries are entered one box at a time.</p></div><h2>Course progress</h2><div class="chapter-cards">`;
    data.chapters.forEach(ch=>{const done=ch.sessions.filter(s=>isDone(s.section)).length,pct=100*done/ch.sessions.length;html+=`<div class="chapter-card"><h3>Chapter ${ch.number}</h3><div>${escapeHtml(ch.title)}</div><p>${done}/${ch.sessions.length} sessions complete</p><div class="mini-progress"><div style="width:${pct}%"></div></div></div>`;});
    html+='</div><p class="privacy-note">Stage 1 stores answers and progress only in this browser using local storage. Nothing is submitted to an instructor or server.</p></section>';
    document.getElementById('content').innerHTML=html;
    document.getElementById('startBtn').onclick=()=>{const s=allSessions().find(x=>!isDone(x.section))||allSessions()[0];goSession(s.section);};
    document.getElementById('helpHome').onclick=()=>document.getElementById('homeHelp').classList.toggle('show');
  }

  function labelHtml(text){return `<span class="math-authored">${authoredHtml(text)}</span>`;}

  function responseHtml(p){
    const saved=state.answers[p.id];
    if(p.type==='number'||p.type==='complex'){
      const text=p.label|| (p.type==='complex'?'Your complex answer':'Your answer');
      return `<label class="field-label" for="${escapeHtml(p.id)}">${labelHtml(text)}</label><input class="text-input" id="${escapeHtml(p.id)}" data-pid="${escapeHtml(p.id)}" value="${escapeHtml(saved??'')}" autocomplete="off" inputmode="text">`;
    }
    if(p.type==='vector'){
      return `<div class="vector-grid">${p.answer.map((_,i)=>`<div class="vector-field"><label class="field-label" for="${escapeHtml(p.id)}_${i}">${labelHtml(p.labels?.[i]||('Entry '+(i+1)))}</label><input class="text-input" id="${escapeHtml(p.id)}_${i}" data-pid="${escapeHtml(p.id)}" data-index="${i}" value="${escapeHtml(Array.isArray(saved)?(saved[i]??''):'')}" autocomplete="off"></div>`).join('')}</div>`;
    }
    if(p.type==='matrix'){
      const cols=p.answer[0].length;
      return `<div class="matrix-wrap" role="group" aria-label="Matrix answer"><div class="matrix-grid" style="grid-template-columns:repeat(${cols},92px)">${p.answer.flatMap((row,r)=>row.map((_,c)=>`<input aria-label="row ${r+1}, column ${c+1}" class="text-input" id="${escapeHtml(p.id)}_${r}_${c}" data-pid="${escapeHtml(p.id)}" data-row="${r}" data-col="${c}" value="${escapeHtml(Array.isArray(saved)&&Array.isArray(saved[r])?(saved[r][c]??''):'')}" autocomplete="off">`)).join('')}</div></div>`;
    }
    if(p.type==='choice'){
      return `<div class="choice-list">${p.options.map(o=>`<label class="choice"><input type="radio" name="${escapeHtml(p.id)}" data-pid="${escapeHtml(p.id)}" value="${escapeHtml(o.value)}" ${String(saved??'')===String(o.value)?'checked':''}><span class="math-authored">${authoredHtml(o.label)}</span></label>`).join('')}</div>`;
    }
    return '';
  }

  function readResponse(p){
    if(p.type==='number'||p.type==='complex') return document.getElementById(p.id).value;
    if(p.type==='choice'){const el=document.querySelector(`input[name="${CSS.escape(p.id)}"]:checked`);return el?el.value:'';}
    if(p.type==='vector') return p.answer.map((_,i)=>document.getElementById(`${p.id}_${i}`).value);
    if(p.type==='matrix') return p.answer.map((row,r)=>row.map((_,c)=>document.getElementById(`${p.id}_${r}_${c}`).value));
  }

  function renderSession(s){
    const sessState=state.sessions[s.section]||{};
    let html=`<section class="session-card"><div class="session-head"><div><div class="eyebrow">Chapter ${s.chapter} · Session ${escapeHtml(s.section)}</div><h2>${escapeHtml(s.title)}</h2><p>${escapeHtml(s.focus)}</p></div><div class="score-badge"><span class="small">Best</span><strong>${sessState.bestScore||0}/2</strong></div></div>`;
    s.problems.forEach((p,i)=>{html+=`<article class="problem" id="card_${escapeHtml(p.id)}"><div class="problem-title">Problem ${i+1}</div><div class="prompt math-authored">${authoredHtml(p.prompt)}</div><div class="answer-area">${responseHtml(p)}</div>${p.hint?`<div class="hint math-authored">Hint: ${authoredHtml(p.hint)}</div>`:''}<div class="feedback" id="feedback_${escapeHtml(p.id)}"></div><div class="problem-actions"><button class="btn ghost" id="solutionBtn_${escapeHtml(p.id)}" style="display:none">Show answer explanation</button></div><div class="solution math-authored" id="solution_${escapeHtml(p.id)}">${authoredHtml(p.solution||'')}</div></article>`;});
    const idx=sessionIndex(s.section), prev=allSessions()[idx-1], next=allSessions()[idx+1];
    html+=`<div class="session-actions"><div>${prev?`<button class="btn" id="prevBtn">← ${escapeHtml(prev.section)}</button>`:'<button class="btn" id="homeBtn">Course home</button>'}</div><div class="right"><button class="btn" id="clearSession">Clear answers</button><button class="btn primary" id="checkBtn">Check answers</button>${next?`<button class="btn" id="nextBtn">${escapeHtml(next.section)} →</button>`:''}</div></div><p class="privacy-note">Practice mode: retries do not reduce your score. Progress is saved only on this device.</p></section>`;
    const content=document.getElementById('content');
    content.innerHTML=html;
    queueTypeset(content);
    document.querySelectorAll('[data-pid]').forEach(el=>el.addEventListener('input',()=>saveCurrentInputs(s)));
    s.problems.filter(p=>p.type==='choice').forEach(p=>document.querySelectorAll(`input[name="${CSS.escape(p.id)}"]`).forEach(el=>el.addEventListener('change',()=>saveCurrentInputs(s))));
    document.getElementById('checkBtn').onclick=()=>checkSession(s);
    document.getElementById('clearSession').onclick=()=>clearSession(s);
    if(prev) document.getElementById('prevBtn').onclick=()=>goSession(prev.section); else document.getElementById('homeBtn').onclick=goHome;
    if(next) document.getElementById('nextBtn').onclick=()=>goSession(next.section);
    s.problems.forEach(p=>{
      const btn=document.getElementById(`solutionBtn_${p.id}`), sol=document.getElementById(`solution_${p.id}`);
      btn.onclick=()=>{sol.classList.toggle('show'); if(sol.classList.contains('show')) queueTypeset(sol);};
    });
  }

  function saveCurrentInputs(s){s.problems.forEach(p=>state.answers[p.id]=readResponse(p));saveState();}
  function checkSession(s){
    saveCurrentInputs(s); let score=0;
    s.problems.forEach(p=>{
      const ok=grader.grade(p,state.answers[p.id]); if(ok) score++;
      const card=document.getElementById('card_'+p.id), fb=document.getElementById('feedback_'+p.id), solBtn=document.getElementById('solutionBtn_'+p.id);
      card.classList.remove('correct','incorrect'); card.classList.add(ok?'correct':'incorrect');
      fb.className='feedback show '+(ok?'ok':'no'); fb.textContent=ok?'Correct — nice work.':'Not correct yet. Review your calculation and try again.';
      solBtn.style.display='inline-block';
    });
    const old=state.sessions[s.section]||{bestScore:0,attempts:0};
    state.sessions[s.section]={bestScore:Math.max(old.bestScore||0,score),attempts:(old.attempts||0)+1,lastScore:score}; saveState();
    renderSidebar(); renderMobileSelect();
    const badge=document.querySelector('.score-badge strong'); if(badge) badge.textContent=`${state.sessions[s.section].bestScore}/2`;
    if(score===2){document.getElementById('checkBtn').textContent='✓ Session complete';}
  }
  function clearSession(s){
    s.problems.forEach(p=>delete state.answers[p.id]); saveState(); renderSession(s);
  }

  function render(){renderSidebar();renderMobileSelect(); if(activeSection){const s=sessionBySection(activeSection);if(s)renderSession(s);else goHome();}else renderHome();}

  document.getElementById('homeLogo').onclick=goHome;
  document.getElementById('helpBtn').onclick=()=>{const p=document.getElementById('globalHelp');p.classList.toggle('show');};
  document.getElementById('resetBtn').onclick=()=>{if(confirm('Reset all saved Stage 1 answers and progress on this device?')){state={answers:{},sessions:{}};saveState();render();}};
  document.getElementById('mobileSelect').onchange=e=>{if(e.target.value)goSession(e.target.value);};
  window.addEventListener('hashchange',()=>{const m=location.hash.match(/session=([^&]+)/);activeSection=m?decodeURIComponent(m[1]):null;render();});
  const m=location.hash.match(/session=([^&]+)/); activeSection=m?decodeURIComponent(m[1]):null; render();
})();
