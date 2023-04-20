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
mostrarConsejos(inversion);
});
function mostrarConsejos(inversion) {
  let consejos =
  inversion < 1000
      ? 'Esperar al vencimiento del plazo fijo y comprar dolares'
      : inversion >= 1001 && inversion < 20000
      ? 'Reinvertir durante 30 días más el capital final obtenido'
      : inversion >= 20001 && inversion < 100000
      ? 'Esperar al vencimiento del plazo fijo e invertir en Plazo Fijo UVA'
      : inversion >= 100001
      ? 'Esperar al vencimiento del plazo fijo y diversificar el capital final'
      : 'Ha ocurrido un error al mostrar los consejos.';

  document.querySelector('#consejos').textContent = consejos;
}