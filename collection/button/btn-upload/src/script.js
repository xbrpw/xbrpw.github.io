const inputNode = document.querySelector('.file');
const labelNode = document.querySelector('.field');
const messageNode = labelNode.querySelector('.message');
const infoNode = labelNode.querySelector('.info');
const errorNode = labelNode.querySelector('.error');
const consoleNode = document.querySelector('blockquote');

const FILE_TYPES = inputNode.accept.split(',').map(item => item.trim());

function printFileName(file) {
  messageNode.hidden = true;
  infoNode.textContent = file.name;
  errorNode.hidden = true;
}

function clearFieldInfo() {
  messageNode.hidden = false;
  infoNode.textContent = '';
  errorNode.hidden = true;
}

function printError() {
  messageNode.hidden = false;
  infoNode.textContent = '';
  infoNode.files = null;
  errorNode.hidden = false;
}

function preventDefaults(evt) {
  evt.preventDefault();
  evt.stopPropagation();
}

function checkFile(file) {
  const ext = '.' + file.name.split('.').pop();
  return FILE_TYPES.includes(file.type) || FILE_TYPES.includes(ext);
}

function handleFiles(files) {
  const dt = new DataTransfer();

  for (const file of files) {
    if (checkFile(file)) {
      dt.items.add(file);
      printFileName(file);
      break;
    }
    printError();
  }

  inputNode.files = dt.files;
}

function fileChangeHandler(evt) {
  const files = evt.target.files;

  if (!files.length) {
    clearFieldInfo();
    return;
  }

  handleFiles(files);
}

function fileDragenterHandler(evt) {
  labelNode.classList.add('highlight');
}

function fileDragoverHandler(evt) {
  labelNode.classList.add('highlight');
}

function fileDragleaveHandler(evt) {
  labelNode.classList.remove('highlight');
}

function fileDropHandler(evt) {
  handleFiles(evt.dataTransfer.files);
  labelNode.classList.remove('highlight');
}

['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => 
  labelNode.addEventListener(eventName, preventDefaults));

labelNode.addEventListener('dragenter', fileDragenterHandler);
labelNode.addEventListener('dragover', fileDragoverHandler);
labelNode.addEventListener('dragleave', fileDragleaveHandler);
labelNode.addEventListener('drop', fileDropHandler);
inputNode.addEventListener('change', fileChangeHandler);

consoleNode.textContent = 'Console available';
