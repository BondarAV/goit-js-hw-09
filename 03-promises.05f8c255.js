const e=document.querySelector(".form");function o(e,o){return new Promise(((t,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}e.addEventListener("submit",(t=>{t.preventDefault();let n=Number(e.elements[0].value);const l=Number(e.elements[1].value);for(let t=0;t<Number(e.elements[2].value);t++)o(t+1,n).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o} ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o} ms`)})),n+=l}));
//# sourceMappingURL=03-promises.05f8c255.js.map