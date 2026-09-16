(function(root){'use strict';
function num(x){
  let s=String(x??'').trim().toLowerCase()
    .replace(/−/g,'-').replace(/π/g,'pi').replace(/\^/g,'**');
  if(!s)return NaN;
  try{
    return Function('"use strict";return ('+
      s.replace(/\bsqrt\b/g,'Math.sqrt')
       .replace(/\bpi\b/g,'Math.PI')
      +')')();
  }catch{return NaN;}
}
function close(a,b){
  return Number.isFinite(a)&&Number.isFinite(b)&&
    Math.abs(a-b)<=1e-6*Math.max(1,Math.abs(b));
}
function complexValue(x){
  let s=String(x??'').trim().toLowerCase().replace(/\s+/g,'').replace(/j/g,'i').replace(/−/g,'-');
  if(!s)return [NaN,NaN];
  if(!s.includes('i')) return [num(s),0];
  if(!s.endsWith('i') || (s.match(/i/g)||[]).length!==1) return [NaN,NaN];
  let core=s.slice(0,-1);
  if(core==='') core='1';
  if(core==='+') core='1';
  if(core==='-') core='-1';
  let depth=0, split=-1;
  for(let k=0;k<core.length;k++){
    const ch=core[k];
    if(ch==='(')depth++;
    else if(ch===')')depth--;
    else if(k>0 && depth===0 && (ch==='+'||ch==='-')) split=k;
  }
  if(split<0) return [0,num(core)];
  let re=core.slice(0,split), im=core.slice(split);
  if(im==='+') im='1';
  if(im==='-') im='-1';
  return [num(re),num(im)];
}
function grade(p,r){
  if(p.type==='choice') return String(r)===String(p.answer);
  if(p.type==='number') return close(num(r),Number(p.answer));
  if(p.type==='complex'){
    const z=complexValue(r);
    return close(z[0],Number(p.answer[0]))&&close(z[1],Number(p.answer[1]));
  }
  if(p.type==='vector'){
    return Array.isArray(r)&&r.length===p.answer.length&&
      r.every((v,i)=>close(num(v),Number(p.answer[i])));
  }
  if(p.type==='matrix'){
    return Array.isArray(r)&&r.length===p.answer.length&&
      r.every((row,i)=>Array.isArray(row)&&row.length===p.answer[i].length&&
        row.every((v,j)=>close(num(v),Number(p.answer[i][j]))));
  }
  return false;
}
const api={num,close,complexValue,grade};
root.Stage2Grader=api;
if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
