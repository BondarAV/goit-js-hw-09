const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body"),r=new Date,n=Date.now();function a(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}function d(t,e){t.setAttribute("disabled",""),e.removeAttribute("disabled")}console.log(r),console.log(n),e.setAttribute("disabled",""),t.addEventListener("click",(()=>{d(t,e),o.style.backgroundColor=a(),timerId=setInterval((()=>{o.style.backgroundColor=a()}),1e3)})),e.addEventListener("click",(()=>{d(e,t),clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.c87831a0.js.map
