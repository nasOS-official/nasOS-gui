let apps = document.getElementById("apps");
let frame = document.getElementById("windowapps");
let app = `<div id="welcomeapp">
  <style>
  #welcomeapp {
      padding: 10px;
      position: absolute;
      z-index: 9;
      background-color: #f1f1f1;
      text-align: center;
      /*border: 1px solid #d3d3d3;*/
    }
    
    #welcomeappheader {
      transform: translate(-10px, -10px);
      width: calc(100% + 20px);
      padding: 10px;
      cursor: move;
      z-index: 10;
      background-color: #2196F3;
      color: #fff;
    }
  </style>
  <div id="welcomeappheader">Welcome!</div>
  <h2>Welcome to nasOS!</h1>
  Thank you for choosing us! Good jobs
  <button onclick="closewelcomeapptrue()">Close</button>
</div>`
function welcomeapploader(){
  frame.innerHTML = `${frame.innerHTML} ${app} `;
  require("./funcs.js");
}
function closewelcomeapp(){
  document.getElementById("welcomeapp").remove();
  delete require.cache[require.resolve('./funcs.js')];
}
globalThis.closewelcomeapptrue = closewelcomeapp;
globalThis.welcomeapploadertrue = welcomeapploader;
apps.innerHTML = `${apps.innerHTML} <br/><br/><button id="app" class="applink" onclick="welcomeapploadertrue()"><img src="assets/infopc.svg"><br/>Welcome</button>`
