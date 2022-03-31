var btn = document.querySelector(".sai");
var getText = document.querySelector(".getText");
var content = document.querySelector(".getcontent");
var editorContent = document.querySelector(".editor");


function link() {
  var url = prompt("Enter the URL");
  document.execCommand("createLink", false, url);
}

function copy() {
  document.execCommand("copy", false, "");
}

function changeColor() {
  var color = prompt("Enter your color in hex ex:#f1f233");
  document.execCommand("foreColor", false, color);
}


function getImage() {
  var file = document.querySelector("input[type=file]").files[0];

  var reader = new FileReader();

  let dataURI;

  reader.addEventListener(
    "load",
    function() {
      dataURI = reader.result;

      const img = document.createElement("img");
      img.src = dataURI;
      editorContent.appendChild(img);
    },
    false
  );

  if (file) {
    console.log("s");
    reader.readAsDataURL(file);
  }
}

function printArticle() {
  if (confirm("Confirm the items you want to print in the editor section. \nClick OK to print")) {
    const body = document.body;
    let s = body.textContent;
    body.textContent = editorContent.textContent;

    document.execCommandShowHelp;
    body.style.whiteSpace = "pre";
    window.print();
    location.reload();
  }
}