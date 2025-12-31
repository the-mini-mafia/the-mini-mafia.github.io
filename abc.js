window.onload = () => {
  let cloak_btn = document.querySelector("button");
  
  let content = `<!DOCTYPE html>
  <!-- Please speed I need this my mom is kinda homeless -->
  <html>
  <body>
  <style>
  iframe {
    height: 100dvh;
    width: 100%;
    border: none;
  }
  
  body {
    margin: 0;
  }
  </style>
  </body>
  </html>`;

  cloak_btn.onclick = () => {
    const newTab = window.open("about:blank", "_blank");
  
    newTab.document.open();
    newTab.document.write(content);
    newTab.document.close();
    let iframe = newTab.document.createElement("iframe");
    
    setTimeout(() => {
      newTab.document.body.appendChild(iframe);
    }, 10);

    setTimeout(() => {
      iframe.src = "https://mini-mafia.github.io/";
    }, 20);
  };
};
