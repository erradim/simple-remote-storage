
// <div class="icon">
// <a class="file-icon" href="pisa.jpg">pisa.jpg</a>
// </div>

// curl -X GET 'http://localhost:8080/remotestorage/downloadFile?fileName=[FILE_PATH]' --output [FILE_NAME]

// curl -X GET 'http://localhost:8080/remotestorage/downloadFile?fileName=pisa.jpg' --output pisa.jpg


function downloadFile(filePath) {
  const downloadUrl = `http://localhost:8080/remotestorage/downloadFile?fileName=${encodeURIComponent(filePath)}`;
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = filePath;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

