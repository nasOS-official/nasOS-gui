function init(_API) {
    API = _API;
    API.createShutdownButton(start);
}

function start() {
    let app = fs.readFileSync(path.resolve(__dirname, 'main.html'), { encoding: 'utf8' });

    let textWindow = API.createWindow("Shutdown", app);
    textWindow.style.height = "220px";
    textWindow.style.width = "320px";
    // let btnClose = myWindow.querySelector("button[id=close]");
    // btnClose.onclick = ()=>{myWindow.remove();};
}

module.exports = {
    init
};
