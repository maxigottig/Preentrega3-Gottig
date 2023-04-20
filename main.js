// Obtener los elementos del formulario
const form = document.querySelector('form');
const montoInput = document.querySelector('#monto');
const plazoInput = document.querySelector('#plazo');
const tasaInput = document.querySelector('#tasa');
const resultadoDiv = document.querySelector('#resultado');


// Agregar un evento de envío al formulario
form.addEventListener('submit', function(e) {
  // Evitar que el formulario se envíe y se recargue la página
e.preventDefault();

  // Obtener los valores ingresados por el usuario
const monto = parseFloat(montoInput.value);
const plazo = parseInt(plazoInput.value);
const tasa = parseFloat(tasaInput.value);

  // Calcular el interés ganado
  const interes = (monto * tasa * plazo) / (365 * 100) + (monto);

  // Mostrar el resultado en la página
resultadoDiv.textContent = `Tu capital final es: $${interes.toFixed(2)}`;
mostrarConsejos(interes);
});
function mostrarConsejos(interes) {
  let consejos =
  interes < 1000
      ? 'Consejo: Esperar al vencimiento del plazo fijo y comprar dolares'
      : interes >= 1001 && interes < 20000
      ? 'Consejo: Reinvertir durante 30 días más el capital final obtenido'
      : interes >= 20001 && interes < 100000
      ? 'Consejo: Esperar al vencimiento del plazo fijo e invertir en Plazo Fijo UVA'
      : interes >= 100001
      ? 'Consejo: Esperar al vencimiento del plazo fijo y diversificar el capital final'
      : 'Ha ocurrido un error al mostrar los consejos.';

  document.querySelector('#consejos').textContent = consejos;
}