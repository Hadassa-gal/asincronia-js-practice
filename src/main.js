const edad = document.getElementById('edad').value;
const nombre = document.getElementById('nombre');
const peso = document.getElementById('peso');
const alt = document.getElementById('altura');
const boton= document.getElementById('calcular');
const form = document.querySelector("#form");
const divInferior = document.querySelector("#hidden")

document.querySelector('#calcular').addEventListener('click',(e) =>
{
  const datos = Object.fromEntries(new FormData(form).entries())
  let imcr = '';
  let imc = datos.peso / (datos.estatura ** 2);
  console.log(datos) 
  if (imc < 19.8) {
    imcr = 'bajo peso';
  } else if (imc >= 19.9 && imc <= 26) {
    imcr = 'peso normal';
  } else if (imc >= 26.1 && imc <= 29) {
    imcr = 'sobrepeso';
  } else if (imc >= 29.1) {
    imcr = 'obesidad';
  }
  divInferior.innerHTML = `
  <div>
     ${imc}
  </div>
  <img ></img>
  `
   alert(imc) 
   console.log(imcr);
  e.preventDefault();
})

const persona = [];


const saludo = (e) =>{
  alert("hola");
  e.preventDefault();
}