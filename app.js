if("serviceWorker" in navigator){addEventListener("load",function(){navigator.serviceWorker.register("sw.js").catch(function(){})})}
var dp=null,btn=document.getElementById("installBtn");
addEventListener("beforeinstallprompt",function(e){e.preventDefault();dp=e;if(btn)btn.hidden=false});
if(btn)btn.addEventListener("click",function(){if(!dp)return;dp.prompt();dp.userChoice.then(function(){dp=null;btn.hidden=true})});
addEventListener("appinstalled",function(){if(btn)btn.hidden=true;var t=document.getElementById("installTip");if(t)t.textContent="Installed. Open Leave a Light On from your home screen."});
