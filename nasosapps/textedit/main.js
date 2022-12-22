function init(_API) {
    API = _API;
    API.createRunButton(start, "Text Editor", "assets/infopc.svg");
  }
  
  function start() {
    let app = fs.readFileSync(path.resolve(__dirname, 'main.html'), { encoding: 'utf8' });
  
    let textWindow = API.createWindow("Text Editor", app);
    textWindow.style.height = "280px";
    textWindow.style.width = "220px";
    // let btnClose = myWindow.querySelector("button[id=close]");
    // btnClose.onclick = ()=>{myWindow.remove();};
  }

  module.exports = {
    init
  };
  