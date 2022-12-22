let API;

  function init(_API){
    API = _API;
    API.createRunButton(start, "Welcome", "assets/infopc.svg");
  }

function start(){
  let app = `
   <h2>Welcome to nasOS!</h1>
   Thank you for choosing us! Good jobs
  `;



  let myWindow = API.createWindow("Welcome!", app);
}



module.exports = {
  init
};
