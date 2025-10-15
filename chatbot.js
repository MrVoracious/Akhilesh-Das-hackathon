const uploadBtn = document.getElementById('upload');
const filesDiv = document.getElementById('files');

const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = '.pdf';
fileInput.style.display = 'none';
document.body.appendChild(fileInput);

uploadBtn.onclick = () => fileInput.click();

fileInput.onchange = () => {
  const file = fileInput.files[0];
  if (!file) return;

  const fileURL = URL.createObjectURL(file);

  if (file.type === 'application/pdf') {
    const iframe = document.createElement('iframe');
    iframe.src = fileURL;
    filesDiv.appendChild(iframe);
  } else {
    alert('Only PDF files are allowed.');
  }

  fileInput.value = ''; // reset input so same file can be uploaded again if needed
};

function active(e){
  const quote = document.getElementById("quote")
  const main = document.getElementById("main")
  quote.style.opacity = "0"
  quote.style.pointerEvents = "none"

  main.style.display = "flex";

  e.style.transform = "translateX(-50%)"
  e.style.bottom = "3vh"
  e.style.top = "auto"
}

function showCitation(){
  const citation = document.getElementById("citation")
  citation.style.bottom = "120%";
  citation.style.opacity = "1";

}