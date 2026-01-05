function cloak() {
  var w = window.open();
  w.document.body.style.margin = "0";
  
  let iframe = w.document.createElement('iframe');
  iframe.style.height = "100dvh";
  iframe.style.width = "100vw";
  iframe.style.border = "none";
  iframe.referrerpolicy = "no-referrer";
  iframe.src = "https://mini-mafia.github.io";

  w.document.body.appendChild(iframe);
}

window.onload = () => {
  let cloak_btn = document.querySelector("button");
  cloak_btn.onclick = () => cloak();
}
