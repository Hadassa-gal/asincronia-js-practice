
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
    divInferior.innerHTML = `
    <div class="nose">
      <div class="text">
        <p class="peso">${imcr}</p>
        <p class="imc">${imc}</p>
      </div>
      <img src="./src/storage/baix-pes2.jpg" class="imgs"></img>
    </div>
    
    `
  } else if (imc >= 19.9 && imc <= 26) {
    imcr = 'peso normal';
    divInferior.innerHTML = `
    <div class="nose">
      <div class="text">
        <p class="peso">${imcr}</p>
        <p class="imc">${imc}</p>
      </div>
      <img src="./src/storage/pesonormal.jpg" class="imgs"></img>
    </div>
    
    `
  } else if (imc >= 26.1 && imc <= 29) {
    imcr = 'sobrepeso';
    divInferior.innerHTML = `
    <div class="nose">
      <div class="text">
        <p class="peso">${imcr}</p>
        <p class="imc">${imc}</p>
      </div>
      <img src="./src/storage/images.jpg" class="imgs"></img>
    </div>
    `
  } else if (imc >= 29.1) {
    imcr = 'obesidad';
    divInferior.innerHTML = `
    <div class="nose">
      <div class="text">
        <p class="peso">${imcr}</p>
        <p class="imc">${imc}</p>
      </div>
      <img src="./src/storage/images (1).jpg" class="imgs"></img>
    </div>
    `
  }
   console.log(imcr);
  e.preventDefault();
})

const persona = [];


const saludo = (e) =>{
  alert("hola");
  e.preventDefault();
}