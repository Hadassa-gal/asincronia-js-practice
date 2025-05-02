# 📊 Calculadora de IMC

Una aplicación web interactiva que calcula el **Índice de Masa Corporal (IMC)** en función del peso y la estatura, mostrando un resultado visual junto con el nombre y edad del usuario.

![Preview](./src/storage/pesonormal.jpg)

---

## 🧮 ¿Qué es el IMC?

El IMC es una fórmula que evalúa si una persona tiene un peso saludable:

IMC = peso (kg) / estatura² (m)

---

## 🚀 Funcionalidades

✅ Ingreso de nombre, edad, peso y estatura  
✅ Validación de que todos los campos estén completos  
✅ Solo se permiten letras (incluyendo tildes y ñ) en el nombre  
✅ Se deshabilitan los campos al calcular  
✅ Botón "Nuevo" para limpiar el resultado y habilitar los campos nuevamente  
✅ Visualización personalizada según el resultado (bajo peso, peso normal, sobrepeso, obesidad)

---

## 📦 Estructura del proyecto

📁 src/
├── main.js # Código JavaScript
├── style.css # Estilos personalizados
└── storage/ # Imágenes para cada resultado
index.html # Estructura HTML principal

---

## 🖼️ Resultado esperado

Al presionar **Calcular**, se mostrará:

- Tu IMC numérico
- El diagnóstico (por ejemplo: "peso normal")
- Una imagen relacionada
- Tu nombre y edad

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (DOM, eventos, validaciones regulares)

---

## 🧪 Cómo usarlo localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repo.git

