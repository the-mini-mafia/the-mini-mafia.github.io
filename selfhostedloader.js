function load(url) {
  let style = document.createElement("link");
  let iframe = document.createElement("iframe");
  
  style.rel = "stylesheet";
  style.href = "/iframe.css";

  iframe.src = url;
  
  document.body.appendChild(style);
  document.body.appendChild(iframe);
}
