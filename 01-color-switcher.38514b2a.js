const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");function d(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.setAttribute("disabled",""),t.addEventListener("click",(()=>{t.setAttribute("disabled",""),e.removeAttribute("disabled"),r.style.backgroundColor=d(),timerId=setInterval((()=>{r.style.backgroundColor=d()}),1e3)})),e.addEventListener("click",(()=>{t.removeAttribute("disabled"),e.setAttribute("disabled",""),clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.38514b2a.js.map
