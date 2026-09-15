(function(root){
  "use strict";

  function safeNumber(raw){
    if (typeof raw === "number") return Number.isFinite(raw) ? raw : NaN;
    let s = String(raw ?? "").trim().toLowerCase().replace(/−/g,"-").replace(/π/g,"pi");
    if (!s) return NaN;
    s = s.replace(/\^/g,"**");
    const residue = s.replace(/sqrt/g,"").replace(/pi/g,"").replace(/[0-9eE+\-*/().\s*]/g,"");
    if (residue.length) return NaN;
    const expr = s.replace(/sqrt/g,"Math.sqrt").replace(/pi/g,"Math.PI");
    try {
      const v = Function('"use strict"; return ('+expr+');')();
      return (typeof v === "number" && Number.isFinite(v)) ? v : NaN;
    } catch { return NaN; }
  }

  function parseComplex(raw){
    if (Array.isArray(raw) && raw.length===2) return {re:Number(raw[0]),im:Number(raw[1])};
    let s=String(raw ?? "").trim().toLowerCase().replace(/−/g,"-").replace(/j/g,"i").replace(/\s+/g,"");
    if(!s) return {re:NaN,im:NaN};
    if(!s.includes("i")) return {re:safeNumber(s),im:0};
    if(!s.endsWith("i")) return {re:NaN,im:NaN};
    let body=s.slice(0,-1);
    if(body===""||body==="+") return {re:0,im:1};
    if(body==="-") return {re:0,im:-1};
    let split=-1;
    for(let i=1;i<body.length;i++){
      const c=body[i];
      if((c==='+'||c==='-') && body[i-1].toLowerCase()!=='e') split=i;
    }
    if(split<0) return {re:0,im:safeNumber(body)};
    let rp=body.slice(0,split), ip=body.slice(split);
    if(ip==='+') ip='1';
    if(ip==='-') ip='-1';
    return {re:safeNumber(rp),im:safeNumber(ip)};
  }

  function close(a,b,tol){
    if(!Number.isFinite(a)||!Number.isFinite(b)) return false;
    const scale=Math.max(1,Math.abs(b));
    return Math.abs(a-b) <= (tol ?? 1e-6)*scale;
  }
  function closeComplex(a,b,tol){return close(a.re,b.re,tol)&&close(a.im,b.im,tol);}

  function grade(problem,response){
    const tol=problem.tolerance ?? 1e-6;
    if(problem.type==='number') return close(safeNumber(response),Number(problem.answer),tol);
    if(problem.type==='complex') return closeComplex(parseComplex(response),{re:Number(problem.answer[0]),im:Number(problem.answer[1])},tol);
    if(problem.type==='choice') return String(response ?? '')===String(problem.answer);
    if(problem.type==='vector'){
      if(!Array.isArray(response)||response.length!==problem.answer.length) return false;
      return response.every((v,i)=>close(safeNumber(v),Number(problem.answer[i]),tol));
    }
    if(problem.type==='matrix'){
      if(!Array.isArray(response)||response.length!==problem.answer.length) return false;
      for(let r=0;r<problem.answer.length;r++){
        if(!Array.isArray(response[r])||response[r].length!==problem.answer[r].length) return false;
        for(let c=0;c<problem.answer[r].length;c++){
          if(problem.scalarType==='complex'){
            const expected=parseComplex(problem.answer[r][c]);
            if(!closeComplex(parseComplex(response[r][c]),expected,tol)) return false;
          } else if(!close(safeNumber(response[r][c]),Number(problem.answer[r][c]),tol)) return false;
        }
      }
      return true;
    }
    return false;
  }

  function canonicalResponse(problem){
    if(problem.type==='number') return String(problem.answer);
    if(problem.type==='choice') return String(problem.answer);
    if(problem.type==='vector') return problem.answer.map(String);
    if(problem.type==='matrix') return problem.answer.map(row=>row.map(String));
    if(problem.type==='complex'){
      const [r,i]=problem.answer;
      if(i===0) return String(r);
      if(r===0) return i===1?'i':(i===-1?'-i':String(i)+'i');
      return String(r)+(i>=0?'+':'')+String(i)+'i';
    }
  }

  root.HWGrader={safeNumber,parseComplex,grade,canonicalResponse};
  if(typeof module!=="undefined"&&module.exports) module.exports=root.HWGrader;
})(typeof window!=="undefined"?window:globalThis);
