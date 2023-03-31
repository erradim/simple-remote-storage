
// <div class="icon">
// <a class="file-icon" href="pisa.jpg">pisa.jpg</a>
// </div>

// curl -X DELETE 'http://localhost:8080/remotestorage/deleteFile?fileName=pisa.jpg'

// curl -X DELETE 'http://localhost:8080/remotestorage/deleteFile?fileName=[FILE_PATH]]'

const deleteButton = document.querySelector('#deleteButton');

deleteButton.addEventListener('click', () => {
  const selectedElement = document.querySelector('.selected');
  if (selectedElement) {
    if (selectedElement.classList.contains('file-icon')) {
      const filePath = selectedElement.getAttribute('href'); // NOTICE
      //console.log(`Deleting file: ${filePath}`);
      const deleteUrl = `http://localhost:8080/remotestorage/deleteFile?fileName=${encodeURIComponent(filePath)}`;
      //console.log(`Delete URL: ${deleteUrl}`);
      fetch(deleteUrl, { method: 'DELETE' })
        .then(response => {
          if (response.ok) {
            // File deleted scuccessfully
            // console.log('File deleted successfully.');
            selectedElement.parentNode.removeChild(selectedElement);
          } else {
            // Delete request failed
            // Note: This will be called if the file does not exist,
            // but this is a scenario that not longer possible due to the way the UI is implemented now.
            console.error('Delete request failed.');
          }
        })
        .catch(error => console.error('Error:', error));
    } else if (selectedElement.classList.contains('folder-icon')) {
      // Display message for trying to delete folders.
        //console.error('Cannot delete folders.');
    }
  }
});


