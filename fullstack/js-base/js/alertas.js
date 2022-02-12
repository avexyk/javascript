// Ventana de alertas

const video = document.querySelector('.bostonVideo');

video.addEventListener('ended', function () {
  alert("Video terminado");
});

// Ventana de confirmación
video.addEventListener('ended', function () {
  let resultado = confirm("¿Deseas ver el vídeo nuevamente?");
  console.log(resultado);

  if (resultado) {
    video.play();
  } else {
    window.location = "https://www.google.com";
  }

});

// Ingreso de datos
const video = document.querySelector('.bostonVideo');

video.addEventListener('ended', function () {
  let email = prompt('Escribe tu correo', 'data@info.com');
  if (email == null || email == "") {
    console.log('Sin datos');
  } else {
    console.log(email);
  }
});