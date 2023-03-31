
// Here it shall be determined whether the use has clicked on a file or a folder.
// If it is a file, then the file shall be downloaded by calling the downloadFile function.
// If it is a folder, then the folder shall be browsed by calling the browseFolder function.

/*
const clickButton = document.querySelector('#clickButton');
clickButton.addEventListener('click', () => {
  const selectedElement = document.querySelector('.selected');
  if (selectedElement) {
    const linkElement = selectedElement.querySelector('a');
    window.location.href = linkElement.href;
  }
});
*/

const clickButton = document.querySelector('#clickButton');

clickButton.addEventListener('click', () => {
  const selectedElement = document.querySelector('.selected');
  if (selectedElement) {
    if (selectedElement.classList.contains('file-icon')) {
      //console.log("I AM A FILE!!!");
      const filePath = selectedElement.getAttribute('href');
      downloadFile(filePath);
    } else if (selectedElement.classList.contains('folder-icon')) {
      //console.log("I AM A FOLDER!!!");
      const folderPath = selectedElement.getAttribute('href');
      browseFolder(folderPath);
    } else {
      //console.log("I AM the unspeakable horror that lays in the depths of the abyss.");
      const folderPath = selectedElement.getAttribute('href');
      browseFolder(folderPath);
    }
  }
});

