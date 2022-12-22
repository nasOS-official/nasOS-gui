let settings_file = require("./config.json");
let rmsb = document.querySelector(':root');
let timeclock = document.getElementById("time");
let dateclock = document.getElementById("date");
let mem_free;
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
    tablinks[i].classList.remove('applistactive');
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.classList.add('applistactive');
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
  createRunButton: (startapp, text, img) => {
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
    let hidebtn = document.createElement("button");
    let taskbar = document.getElementById("taskbar");
    let windowbutton = document.createElement("button");
    windowbutton.id = "taskbutton";
    windowbutton.innerText = text;
    closebtn.id = "super_puper_loler_cool_do_not_use_this_closebtn";
    closebtn.innerText = "X";
    hidebtn.id = "super_puper_loler_cool_do_not_use_this_hidebtn";
    hidebtn.innerText = "-";

    function taskhide() {
      if (windows.style.display == 'none') {
        windows.style.display = "";
        windowchoiser();
        windowbutton.innerText = text;
      }
      else if ((windows.style.display == "") && (windowheader.style.backgroundColor == "var(--buttcolor)")) {
        windows.style.display = 'none';
        windowbutton.innerText = `[${text}]`;
      }
      else if ((windows.style.display == "") && (windowheader.style.backgroundColor == "var(--inactivewin)")) {
        windowchoiser();
      }
    };
    hidebtn.onclick = () => { taskhide(); };
    windowbutton.onclick = () => { taskhide(); };
    closebtn.onclick = () => { windows.remove(); windowbutton.remove(); };
    contents.innerHTML = content;
    windows.id = "windowapp";
    windowheader.id = "windowappheader";
    windowheader.innerText = text;
    taskbar.appendChild(windowbutton);
    windowheader.appendChild(closebtn);
    windowheader.appendChild(hidebtn);
    windows.appendChild(windowheader);
    windows.appendChild(contents);
    frame.appendChild(windows);
    windows.style.border = "1px solid var(--buttcolor)";
    windows.style.top = "50%";
    windows.style.left = "50%";
    windows.style.transform = "translate(-50%, -50%)";
    let windowchoiser = () => {
      frame.childNodes.forEach((element) => {
        element.style.zIndex = 6;
        element.querySelector("#windowappheader").style.backgroundColor = "#3d3d3d";
      });
      windowheader.style.backgroundColor = "var(--buttcolor)";
      windows.style.zIndex = 400;
    }
    let windowresizer = (sizeEvent) => {
      let target = sizeEvent.target;

      // Get the bounding rectangle of target
      let rect = target.getBoundingClientRect();

      // Mouse position
      let x = sizeEvent.clientX - rect.left;
      let y = sizeEvent.clientY - rect.top;

      if (x < 10) {
        windows.style.width = (windows.offsetWidth + sizeEvent.movementX) + "px";
        windows.style.left = (windows.offsetLeft + sizeEvent.movementX) + "px";


      }
    }



      windowheader.onmousedown = () => {
        document.onmousemove = (moveEvent) => {
        windows.style.left = (windows.offsetLeft + moveEvent.movementX) + "px";
        windows.style.top = (windows.offsetTop + moveEvent.movementY) + "px";
        }
      }
      
      windows.onmousedown = () => {
         windowchoiser();
      }
    

    document.onmouseup = () => {
      document.onmousemove = null;
    }
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
    if (appcode.init) {
      appcode.init(windAPI);
    }
    whap++;
  }
}
addapp()
