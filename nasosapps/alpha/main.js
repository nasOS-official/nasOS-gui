function init(_API) {
    API = _API;
    //API.createShutdownButton(start);
    start();
}

function start() {
    let app = `<p>Внимание! Это альфа версия, допустима нестабильная работа и баги. Просим оставить нам отзыв с сообщением о багах или с предложениями функций.</br>Attention! This is an alpha version, unstable operation and bugs are possible. Please leave us feedback with a bug report or feature suggestions.<br/>https://t.me/linux_tester<br/>Build 1</p>`;

    let textWindow = API.createWindow("Warning!", app);
    textWindow.style.height = "220px";
    textWindow.style.width = "820px";
    // let btnClose = myWindow.querySelector("button[id=close]");
    // btnClose.onclick = ()=>{myWindow.remove();};
}

module.exports = {
    init
};
