let numero = parseInt (prompt('Bienvenida, por favor ingresa hora de cita: '))

let hour = 12
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert("Disponible, por favor llenar el formulario de contato."); // Es fin de semana
}
