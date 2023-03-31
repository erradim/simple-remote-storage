
// curl -X PUT 'http://localhost:8080/remotestorage/renameFile?oldFileName=pisa.jpg&newFileName=Italy.jpg'

// curl -X PUT 'http://localhost:8080/remotestorage/renameFile?oldFileName=[OLD_FILE_NAME]&newFileName=[NEW_FILE_NAME]'


const renameButton = document.querySelector('#renameButton');

renameButton.addEventListener('click', () => {
  const selectedElement = document.querySelector('.selected');
  if (selectedElement) {
    if (selectedElement.classList.contains('file-icon')) {
      const oldFilePath = selectedElement.getAttribute('href');
      const oldFileName = oldFilePath.split('/').pop(); // Get the file name from the href
      const newFileName = prompt('Enter new file name:', selectedElement.textContent);
      if (newFileName) {
        const newFilePath = oldFilePath.replace(oldFileName, newFileName); // Replace the old file name with the new file name in the href
        const renameUrl = `http://localhost:8080/remotestorage/renameFile?oldFileName=${encodeURIComponent(oldFilePath)}&newFileName=${encodeURIComponent(newFilePath)}`;
        fetch(renameUrl, { method: 'PUT' })
          .then(response => {
            if (response.ok) {
              // File renamed successfully
              selectedElement.setAttribute('href', newFilePath); // Update the href attribute with the new file path
              selectedElement.textContent = newFileName; // Update the text content with the new file name
            } else {
              // Rename request failed
              console.error('Rename request failed.');
            }
          })
          .catch(error => console.error('Error:', error));
      }
    } else if (selectedElement.classList.contains('folder-icon')) {
      const oldFolderName = selectedElement.textContent.split(' ')[1]; // Get the real folder name from the text content
      const newFolderName = prompt('Enter new folder name:', oldFolderName);
      if (newFolderName) {
        const newFolderPath = `folder ${newFolderName}`; // Use the new folder name to construct the new folder path
        const renameUrl = `http://localhost:8080/remotestorage/renameFile?oldFileName=${encodeURIComponent(selectedElement.getAttribute('href'))}&newFileName=${encodeURIComponent(newFolderPath)}`;
        fetch(renameUrl, { method: 'PUT' })
          .then(response => {
            if (response.ok) {
              // Folder renamed successfully
              selectedElement.textContent = `Folder ${newFolderName}`; // Update the text content with the new folder name
            } else {
              // Rename request failed
              console.error('Rename request failed.');
            }
          })
          .catch(error => console.error('Error:', error));
      }
    }
  }
});



