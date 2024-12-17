navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    const video = document.querySelector('video');
    video.srcObject = stream;
  })
  .catch(error => {
    console.error('Erro ao acessar a câmera e o microfone:', error);
  });
