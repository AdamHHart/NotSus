import './index.css';




// browser buttons

const backButton = document.getElementById("back-button");
const forwardButton = document.getElementById("forward-button");
const reloadButton = document.getElementById("reload-button");
const searchButton = document.getElementById("search-button");
const newWindowButton = document.getElementById("new-window-button");
const goButton = document.getElementById("go");

// link buttons

const khanButton = document.getElementById("khanButton");
const wikiButton = document.getElementById("wikiButton");
const perpButton = document.getElementById("perpButton");
const tinkButton = document.getElementById("tinkButton");
const scraButton = document.getElementById("scraButton");
const replButton = document.getElementById("replButton");


// url field

const urlInputField = document.getElementById("url-input");

// webview

const webview = document.getElementById("webview");
let url = ""

urlInputField.addEventListener("keydown", (event) => {
  if(event.key==="Enter"){
    event.preventDefault();
    handleUrl();
  }
})

goButton.addEventListener("click", (event) =>{
  event.preventDefault();
  handleUrl();
})

newWindowButton.addEventListener("click", (event) =>{
  api.newWindow();
})

searchButton.addEventListener("click", (event) => {
  url="https://www.google.com/";
  urlInputField.value = url;
  webview.src = url;
})

backButton.addEventListener("click", ()=>{
  webview.goBack();
})
forwardButton.addEventListener("click", ()=>{
  webview.goForward();
})
reloadButton.addEventListener("click", ()=>{
  webview.reload();
})

webview.addEventListener("did-navigate", (event) => {
  url = event.url;
  urlInputField.value = url;
})

document.addEventListener('DOMContentLoaded', function() {
    // link buttons
    khanButton.addEventListener("click", (event) => {
      url="https://www.khanacademy.org/";
      urlInputField.value = url;
      webview.src = url;
    })
    wikiButton.addEventListener("click", (event) => {
      url="https://en.wikipedia.org/wiki/Main_Page";
      urlInputField.value = url;
      webview.src = url;
    })
    perpButton.addEventListener("click", (event) => {
      url="https://www.perplexity.ai/";
      urlInputField.value = url;
      webview.src = url;
    })
    tinkButton.addEventListener("click", (event) => {
      url="https://www.tinkercad.com/dashboard";
      urlInputField.value = url;
      webview.src = url;
    })
    scraButton.addEventListener("click", (event) => {
      url="https://scratch.mit.edu/";
      urlInputField.value = url;
      webview.src = url;
    })
    replButton.addEventListener("click", (event) => {
      url="https://replit.com/";
      urlInputField.value = url;
      webview.src = url;
    })

  
});


function handleUrl() {
  let url = "";
  const inputUrl = urlInputField.value;

  if(inputUrl.startsWith("http://") || inputUrl.startsWith("https://")){
    url = inputUrl;
  } else {
    url = "http://" + inputUrl
  }
  webview.src = url;

}