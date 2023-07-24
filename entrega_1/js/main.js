function preguntarEmocion() {
  let emocion = prompt(
    "¿Cómo te sientes hoy? (feliz, triste, de mal humor, cansado)"
  );
  // Devolvemos la emoción en minúsculas para facilitar la comparación
  return emocion.toLowerCase();
}
// Definimos una función para mostrar un mensaje asociado a la emoción
function mostrarMensaje(emocion) {
  // Usamos un switch para seleccionar el mensaje adecuado
  switch (emocion) {
    case "triste":
      alert(
        "Tu grandeza se refleja por la luz que sale de tu interior. No dejes de brillar aunque estés triste."
      );
      break;
    case "de mal humor":
      alert(
        "Es normal sentirse enfadado a veces. Trata de hacer una actividad que te permita pensar en otra cosa hasta que te calmes y puedas encontrar alternativas de solución al problema."
      );
      break;
    case "feliz":
      alert("¡Me alegro de que te sientas bien! Sigue disfrutando de tu día.");
      break;
    case "cansado":
      alert(
        "Es normal sentirse cansado. Trata de dormir un poco y tendrás más energía."
      );
      break;
    default:
      alert(
        "Creo que no reconozco la emoción que ingresaste ¿Puedes volver a decirme cómo te sientes?"
      );
  }
}

let emocion = preguntarEmocion();

mostrarMensaje(emocion);

let respuesta = prompt("¿Quieres volver a utilizar el simulador? (sí/no)");

while (respuesta.toLowerCase() === "sí") {
  emocion = preguntarEmocion();

  mostrarMensaje(emocion);

  respuesta = prompt("¿Quieres volver a utilizar el simulador? (sí/no)");
}

alert("Gracias usar el tracker de emociones. ¡Hasta pronto!");
