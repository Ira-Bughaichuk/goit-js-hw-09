const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector(" [data-stop]"),bodyEl:document.querySelector("body")};let e=null;t.startBtn.addEventListener("click",(()=>{e=setInterval((()=>{t.bodyEl.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),500),t.startBtn.disabled=!0,t.stopBtn.disabled=!1})),t.stopBtn.addEventListener("click",(()=>{clearInterval(e),e=null,t.stopBtn.disabled=!0,t.startBtn.disabled=!1}));
//# sourceMappingURL=01-color-switcher.57b56ee9.js.map