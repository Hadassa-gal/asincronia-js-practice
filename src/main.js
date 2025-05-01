const boton= document.getElementById('calcular');
const form = document.querySelector("#form");
const divInferior = document.querySelector("#hidden");

document.querySelector('#calcular').addEventListener('click',(e) =>
{
  const datos = Object.fromEntries(new FormData(form).entries())
  let imcr = '';
  let imc = datos.peso / (datos.estatura ** 2);
  let nombre = datos.nombre;
  let edad = datos.edad;
  console.log(datos);
  if (imc < 19.8) {
    imcr = 'bajo peso';
    divInferior.innerHTML = `
    <div class="nose">
      <div class="text">
        <p class="peso1">${imcr}</p>
        <p class="imc">${imc}</p>
        <p class="imc">${nombre} ${edad}</p>
      </div>
      <img src="./src/storage/baix-pes2.jpg" class="imgs"></img>
      <button type="submit" id="nuevo" class="btn">Nuevo</button>
    </div>`;
  } else if (imc >= 19.9 && imc <= 26) {
    imcr = 'peso normal';
    divInferior.innerHTML = `
    <div class="nose">
      <div class="text">
        <p class="peso1">${imcr}</p>
        <p class="imc">${imc}</p>
        <p class="imc">${nombre} ${edad}</p>
      </div>
      <img src="./src/storage/pesonormal.jpg" class="imgs"></img>
      <button type="submit" id="nuevo" class="btn">Nuevo</button>
    </div>`;
  } else if (imc >= 26.1 && imc <= 29) {
    imcr = 'sobrepeso';
    divInferior.innerHTML = `
    <div class="nose">
      <div class="text">
        <p class="peso1">${imcr}</p>
        <p class="imc">${imc}</p>
        <p class="imc">${nombre} ${edad}</p>
      </div>
      <img src="./src/storage/images.jpeg" class="imgs"></img>
      <button type="submit" id="nuevo" class="btn">Nuevo</button>
    </div>`;
  } else if (imc >= 29.1) {
    imcr = 'obesidad';
    divInferior.innerHTML = `
    <div class="nose">
      <div class="text">
        <p class="peso1">${imcr}</p>
        <p class="imc">${imc}</p>
        <p class="imc">${nombre} ${edad}</p>
      </div>
      <img src="./src/storage/obesidad.jpeg" class="imgs"></img>
      <button type="submit" id="nuevo" class="btn">Nuevo</button>
    </div>`;
  }
  console.log(imcr);
  if ([...form.elements]){
    [...form.elements].forEach(el =>{
      if(el.tagName === "INPUT"){
        el.disabled = true;
      }
    })
  }
    
  e.preventDefault();
})

divInferior.addEventListener('click',(e)=>{
  if(e.target && e.target.id === 'nuevo'){
    divInferior.innerHTML = ``;
    [...form.elements].forEach(el =>{
      if(el.tagName === "INPUT"){
        el.disabled = false;
        el.value = '';
      }
    })
  }
  e.preventDefault();
})