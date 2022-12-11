let settings_file = require("./config.json");
let rmsb = document.querySelector(':root');
let timeclock = document.getElementById("time");
let dateclock = document.getElementById("date");
let mem_free;
let winlist = [];
let randomIndex;
const egg = ["microsoft", "microsoft1", "microsoft2"];
//=========================================Init====================================================
let style = getComputedStyle(document.body);
rmsb.style.setProperty('--buttcolor', settings_file.color_btn);
function openPage(pageName, elmnt) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = style.getPropertyValue('--buttcolor');
}


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
function memory_free() {
  let memor_free = document.getElementById("memory_free");
  let memory_used = document.getElementById("memory_used");

  mem_free = parseInt(os.freemem() / 1024 / 1024);
  memor_free.innerHTML = mem_free;
  memory_used.innerHTML = memory - mem_free;
}
window.addEventListener('keydown', function (e) {
  switch (e.key) {
    case "Meta":
      globalThis.randomIndextrue = Math.floor(Math.random() * (egg.length));
      document.getElementById(egg[randomIndextrue]).hidden = false;
      break;
  }
}, false);
window.addEventListener('keyup', function (e) {
  switch (e.key) {
    case "Meta":
      document.getElementById(egg[randomIndextrue]).hidden = true;
      break;
  }
}, false);


/*
{
  "color": "#1b91ff"
}
*/
function shutdown() {
  alert("Shutting down");
  // child_process.spawn("", [``])
}
function reboot() {
  alert("Rebooting");
  // child_process.spawn("", [``])
}
function hibernation() {
  alert("Hibernating");
  // child_process.spawn("", [``])
}
function time() {
  let hour = new Date().getHours().toString().padStart(2, "0");
  let minutes = new Date().getMinutes().toString().padStart(2, "0");
  let seconds = new Date().getSeconds().toString().padStart(2, "0");
  let year = new Date().getFullYear()
  let month = new Date().getMonth().toString().padStart(2, "0")
  let day = new Date().getDate().toString().padStart(2, "0")
  timeclock.innerHTML = `${hour}:${minutes}:${seconds}`;
  dateclock.innerHTML = `${year}.${month}.${day}`
}
setInterval(time, 1000);
time();

const windAPI = {
  createRunButton: (startapp, text, img)  => {
  let applink = document.createElement("button");
  applink.id = "app";
  applink.className = "applink"
  applink.innerHTML = `<img src="${img}"><br/>${text}`;
  let apps = document.getElementById("apps");
  apps.appendChild(document.createElement("br"));
  apps.appendChild(document.createElement("br"));
  apps.appendChild(applink);
  applink.onclick = startapp;
  },
  createWindow: (text, content) => {
    let contents = document.createElement("div");
    let windows = document.createElement("div");
    let windowheader = document.createElement("div");
    let frame = document.getElementById("windowapps");
    let closebtn = document.createElement("button");
    closebtn.id = "super_puper_loler_cool_do_not_use_this_closebtn";
    closebtn.innerText = "X";
    closebtn.onclick = () => {windows.remove();
    let _frame = document.getElementById("windowapps");
    console.log(_frame.childNodes);};
    contents.innerHTML = content;
    windows.id = "windowapp";
    windowheader.id = "windowappheader";
    windowheader.innerText = text;
    windowheader.appendChild(closebtn);
    windows.appendChild(windowheader);
    windows.appendChild(contents);
    frame.appendChild(windows);
    windows.style.top = "50%";
    windows.style.left = "50%";
    windows.style.transform = "translate(-50%, -50%)";
    let windowchoiser = () =>{
      frame.childNodes.forEach((element) => {
        element.style.zIndex = 6;
        element.querySelector("#windowappheader").style.backgroundColor = "#3d3d3d";
      });
      windowheader.style.backgroundColor = "var(--buttcolor)";
      windows.style.zIndex = 400;
    }


    windows.onmousedown = () => {
      windowchoiser();
    }
    windowheader.onmousedown = function() {
      document.onmousemove = (moveEvent) => {
        windows.style.left = (windows.offsetLeft + moveEvent.movementX) + "px";
        windows.style.top = (windows.offsetTop + moveEvent.movementY) + "px";
       }
    }
    windowheader.onmouseup = () => {
      document.onmousemove = null;
    }
    winlist.push(windows);
    console.log(winlist);
    console.log(frame.childNodes)
    windowchoiser();
    return windows;
  }
}; 
function addapp() {

  let testdirlol = fs.readdirSync("nasosapps");
  const EXTENSION = '.json';

  let targetFiles = testdirlol.filter(file => {
    return path.extname(file).toLowerCase() === EXTENSION;
  });
  let whap = 0
  while (whap <= targetFiles.length - 1) {
    let app = require(`./nasosapps/${targetFiles[whap]}`)
    console.log(targetFiles[whap]);
    console.log(app);
    let appcode = require(app.code);
    if (appcode.init){
      appcode.init(windAPI);
    }
    whap++;
  }
}
addapp()
