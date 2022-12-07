let calcapplication =  document.getElementById("calcapp");
calcapplication.style.top = "50%";
calcapplication.style.left = "50%";
calcapplication.style.transform = "translate(-50%, -50%)";

calcappheader.onmousedown = function() {
  document.onmousemove = (moveEvent) => {
    calcapplication.style.left = (calcapplication.offsetLeft + moveEvent.movementX) + "px";
    calcapplication.style.top = (calcapplication.offsetTop + moveEvent.movementY) + "px";
   }
}
calcappheader.onmouseup = () => {
  document.onmousemove = null;
}