 //Make the DIV element draggagle:
   document.getElementById("welcomeapp").style.top = "50%";
   document.getElementById("welcomeapp").style.left = "50%";
   document.getElementById("welcomeapp").style.transform = "translate(-50%, -50%)";
   let welcomeapplication = document.getElementById("welcomeapp")
 let pos1, pos2, pos3, pos4;

 welcomeappheader.onmousedown = function() {
   document.onmousemove = () => {
     pos1 = pos3 - window.event.clientX;
     pos2 = pos4 - window.event.clientY;
     pos3 = window.event.clientX;
     pos4 = window.event.clientY;
     welcomeapplication.style.top = (welcomeapplication.offsetTop - pos2) + "px";
     welcomeapplication.style.left = (welcomeapplication.offsetLeft - pos1) + "px";
    }
 }
 welcomeappheader.onmouseup = () => {
   document.onmousemove = null;
 }