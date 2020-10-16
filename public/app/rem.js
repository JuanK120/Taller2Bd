var formulario = document.getElementById('contact');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('me diste un click');
  let datos = new FormData(formulario);
  let numidpaciente = datos.get('numid');

  let myHeaders = new Headers();

  const options = {
    method: 'DELETE',
    headers: myHeaders,
    body: new URLSearchParams({
      'numid': numidpaciente
    }),
  }

  fetch('/basedatos/borrarpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log('hecho')
    });
});