fs = require("fs");
const { marked } = require('marked');
var ip = require("ip");
const { app, BrowserWindow, dialog, remote, Menu } = require('electron')
const child_process = require('child_process');
let os = require('os')
const path = require('path');
const { executionAsyncResource } = require('async_hooks');
const { syncBuiltinESMExports } = require("module");
const { stringify } = require("querystring");
user = os.userInfo().username;
host = os.hostname();
ipad = ip.address();
memory = parseInt(os.totalmem() / 1024 / 1024);
const createWindow = () => {
  const win = new BrowserWindow({
    kiosk: true,
    webPreferences: {

      nodeIntegration: true,
      enableremotemodule: true,
      contextIsolation: false
    }
  })
  win.loadFile('main.html');
  win.setTitle("IoT GUI");

}

app.whenReady().then(() => {
  createWindow()


  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()

  })
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


function start_web() {
  child_process.spawn("xdg-open", [`https://google.com`])

}
//inode/directory
function start_filemanager() {
  if (user != "root") {
    child_process.spawn("xdg-open", [`/home/${user}`])
  }
  else {
    child_process.spawn("xdg-open", [`${user}`])
  }

}
function init_host() {
  hostname = document.getElementById("host_name");
  hostname.innerHTML = host;
  usernames = document.getElementById("user_name");
  usernames.innerHTML = user;
  ip_ad = document.getElementById("ip_ad");
  ip_ad.innerHTML = ipad;
  mem = document.getElementById("memory");
  mem.innerHTML = memory;
}
//=========================================Settings=code===========================================
function settings_init() {
  let helpfile = fs.readFileSync("help.md", "utf8");
  document.getElementById('contenthelp').innerHTML = marked.parse(helpfile);
  color = document.getElementById("setting_Color");
  buttons = document.getElementById("app");
  console.log(color);
  color_real = style.getPropertyValue('--buttcolor')
  color.value = color_real;
  console.log(style.getPropertyValue('--buttcolor'));

  // document.styleSheets[1].insertRule('#app:active{ background-color: #fff;}', 0);
}/*style.getPropertyValue('--buttcolor')*/

function save_setting() {
  color = document.getElementById("setting_Color");
  console.log(color.value);
  settings_file.color_btn = color.value;
  rmsb.style.setProperty('--buttcolor', settings_file.color_btn);
  fs.writeFile("config.json", JSON.stringify(settings_file), function (err) { if (err) { console.log(err); } });
  // color.value
}
/*"color_btn": "#1b91ff",*/

