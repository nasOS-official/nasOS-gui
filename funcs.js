settings_file = require("./config.json");
var rmsb = document.querySelector(':root');
timeclock = document.getElementById("time");
dateclock = document.getElementById("date");

//=========================================Init====================================================
var style = getComputedStyle(document.body);
rmsb.style.setProperty('--buttcolor', settings_file.color_btn);
function openPage(pageName,elmnt) {
  var i, tabcontent, tablinks;
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

function openApp(pageName,elmnt) {
  var i, tabcontent, tablinks;
  document.getElementById(pageName).style.display = "block";

}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
function memory_free(){
  memor_free = document.getElementById("memory_free");
  memory_used = document.getElementById("memory_used");
  
 
   mem_free = parseInt(os.freemem() / 1024 / 1024);
   memor_free.innerHTML = mem_free;
   memory_used.innerHTML = memory - mem_free;
   }
   window.addEventListener('keydown', function (e) {
      switch(e.key){
    case "Meta":
   document.getElementById("microsoft").hidden = false;
   break;}}, false);
   window.addEventListener('keyup', function (e) {
      switch(e.key){
    case "Meta":
   document.getElementById("microsoft").hidden = true;
   break;
 }}, false);
 

/*
{
  "color": "#1b91ff"
}
*/
function shutdown(){
  alert("Shutting down");
  // child_process.spawn("", [``])
}
function reboot(){
  alert("Rebooting");
  // child_process.spawn("", [``])
}
function hibernation(){
  alert("Hibernating");
  // child_process.spawn("", [``])
}
function time() {
  hour = new Date().getHours().toString().padStart(2, "0");
  minutes = new Date().getMinutes().toString().padStart(2, "0");
  seconds = new Date().getSeconds().toString().padStart(2, "0");
  year = new Date().getFullYear()
  month = new Date().getMonth().toString().padStart(2, "0")
  day = new Date().getDate().toString().padStart(2, "0")
  timeclock.innerHTML = `${hour}:${minutes}:${seconds}`;
  dateclock.innerHTML = `${year}.${month}.${day}`
}
setInterval(time, 1000);
time();


fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    return console.log(file);
  });
});