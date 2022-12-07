let apps = document.getElementById("apps");
let frame = document.getElementById("windowapps");
let app = `<div id="calcapp">
  <style>
  #calcapp {
      padding: 10px;
      position: absolute;
      z-index: 9;
      background-color: #f1f1f1;
      text-align: center;
      /*border: 1px solid #d3d3d3;*/
    }
    
    #calcappheader {
      transform: translate(-10px, -10px);
      width: calc(100% + 20px);
      padding: 10px;
      cursor: move;
      z-index: 10;
      background-color: #2196F3;
      color: #fff;
    }
  </style>
  <div id="calcappheader">Calculator</div>
  <h2>Welcome to nasOS!</h1>
  ....... что то ещё тут будет
  <button onclick="closecalcapptrue()">Close</button>
</div>`
function calcapploader(){
  frame.innerHTML = `${frame.innerHTML} ${app} `;
  require("./funcs.js");
}
function closecalcapp(){
  document.getElementById("calcapp").remove();
  delete require.cache[require.resolve('./funcs.js')];
}

globalThis.closecalcapptrue = closecalcapp;
globalThis.calcapploadertrue = calcapploader;
apps.innerHTML = `${apps.innerHTML} <br/><br/><button id="app" class="applink" onclick="calcapploadertrue()"><img src="assets/infopc.svg"><br/>Calculator</button>`
