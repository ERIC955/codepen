const htmlCodeInput = document.getElementById('html-code');
const cssCodeInput = document.getElementById('css-code');
const outputDiv = document.getElementById('output');

htmlCodeInput.addEventListener('input', updateOutput);
cssCodeInput.addEventListener('input', updateOutput);

function updateOutput() {
  const htmlCode = htmlCodeInput.value;
  const cssCode = `<style>${cssCodeInput.value}</style>`;
  outputDiv.innerHTML = htmlCode + cssCode;
}