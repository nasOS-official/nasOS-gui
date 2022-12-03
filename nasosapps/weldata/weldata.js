let apps = document.getElementById("apps");
let frame = document.getElementById("windowapps");
let app = `<div id="playerapp">
  <style>
  #playerapp {
      padding: 10px;
      position: absolute;
      z-index: 9;
      background-color: #f1f1f1;
      text-align: center;
      /*border: 1px solid #d3d3d3;*/
    }
    
    #playerappheader {
      transform: translate(-10px, -10px);
      width: calc(100% + 20px);
      padding: 10px;
      cursor: move;
      z-index: 10;
      background-color: #2196F3;
      color: #fff;
    }
  </style>
  <div id="playerappheader">Welcome!</div>
  <h2>Welcome to nasOS!</h1>
  Thank you for choosing us! Good jobs
  <button onclick="closeweldatatrue()">Close</button>
</div>`
function weldataloader(){
  frame.innerHTML = `${frame.innerHTML} ${app} `;
  require("./funcs.js");
}
function closeweldata(){
  document.getElementById("playerapp").remove();
  delete require.cache[require.resolve('./funcs.js')];
}
globalThis.closeweldatatrue = closeweldata;
globalThis.weldataloadertrue = weldataloader;
apps.innerHTML = `${apps.innerHTML} <br/><br/><button id="app" class="applink" onclick="weldataloadertrue()"><img src="assets/infopc.svg"><br/>Welcome</button>`
