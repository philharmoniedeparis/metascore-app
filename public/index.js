document.addEventListener("DOMContentLoaded", () => {
  const browse = document.getElementById('browse');
  browse.addEventListener('click', (e) => {
    e.preventDefault();
  });

  const dropzone = document.getElementById('dropzone');
  dropzone.addEventListener('click', (e) => {
    window.electronAPI.browseFile();
  });
  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
  dropzone.addEventListener('drop', async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;

    for (const file of files) {
      console.log(file);
      if (window.electronAPI.dropFile(file.path)) break;
    }
  });
});