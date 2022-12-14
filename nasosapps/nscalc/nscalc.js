// let apps = document.getElementById("apps");
// let frame = document.getElementById("windowapps");
// let app = `<div id="calcapp">
//   <style>
//   #calcapp {
//       padding: 10px;
//       position: absolute;
//       z-index: 9;
//       background-color: #f1f1f1;
//       text-align: center;
//       /*border: 1px solid #d3d3d3;*/
//     }

//     #calcappheader {
//       transform: translate(-10px, -10px);
//       width: calc(100% + 20px);
//       padding: 10px;
//       cursor: move;
//       z-index: 10;
//       background-color: #2196F3;
//       color: #fff;
//     }
//   </style>
//   <div id="calcappheader">Calculator</div>
//   <h2>Welcome to nasOS!</h1>
//   ....... что то ещё тут будет
//   <button onclick="closecalcapptrue()">Close</button>
// </div>`
// function calcapploader(){
//   frame.innerHTML = `${frame.innerHTML} ${app} `;
//   require("./funcs.js");
// }
// function closecalcapp(){
//   document.getElementById("calcapp").remove();
//   delete require.cache[require.resolve('./funcs.js')];
// }

// globalThis.closecalcapptrue = closecalcapp;
// globalThis.calcapploadertrue = calcapploader;
// apps.innerHTML = `${apps.innerHTML} <br/><br/><button id="app" class="applink" onclick="calcapploadertrue()"><img src="assets/infopc.svg"><br/>Calculator</button>`
"use strict"
let API;

function init(_API) {
  API = _API;
  API.createRunButton(start, "Calculator", "assets/infopc.svg");
}

function start() {
  let app = fs.readFileSync(path.resolve(__dirname, 'main.html'), { encoding: 'utf8' });

  let myWindow = API.createWindow("Calculator", app);
  myWindow.style.height = "280px";
  myWindow.style.width = "220px";
  // let btnClose = myWindow.querySelector("button[id=close]");
  // btnClose.onclick = ()=>{myWindow.remove();};
  let input = myWindow.querySelector("input");

  let btn = myWindow.querySelector(".calcapp").querySelectorAll("button");
  btn.forEach(element => {
    if (/[0-9\-\+\*\,\%\(\)\÷]/.test(element.innerText)) {
      element.onclick = () => { calcwrite(element.innerText); };
    }
    else if (/x²/.test(element.innerText)) {
      element.onclick = () => { calcwrite("²"); };
    }
    else if (/[\=]/.test(element.innerText)) {
      element.onclick = () => { calculatorcalc() };
    }
    else if (/⌫/.test(element.innerText)) {
      element.onclick = () => { deletesymb() };
    }

  });
  function removesymbols(str) {
    return str.replace(/[A-Za-z]/g, '').replace("²", "**2").replace("÷", "/");
  }
  function deletesymb() {
    input.value = input.value.slice(0, input.value.length - 1);
  }
  function calcwrite(symb) {
    input.value = input.value + symb.toString();
  }
  function calculatorcalc() {
   try {
      input.value = eval(removesymbols(input.value))
    }
     catch {
       input.value = "Incorrect formula"
    }
  }
}


module.exports = {
  init
};
