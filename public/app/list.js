var formulario = document.getElementById('contact');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('me diste un click');
  let datos = new FormData(formulario);


  let myHeaders = new Headers();

  const options = {
    method: 'GET',
    headers: myHeaders,
  }

  fetch('/basedatos/consultatotalpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log('hecho')
    });
});