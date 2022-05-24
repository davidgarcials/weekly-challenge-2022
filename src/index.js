import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Weekly Challenge 2022 JS!</h1>
<a href="https://github.com/mouredev/Weekly-Challenge-2022-Swift">Link to challenge</a>
`;

/*
 * Reto #0
 * EL FAMOSO "FIZZ BUZZ"
 * Fecha publicación enunciado: 27/12/21
 * Fecha publicación resolución: 03/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

for (let i = 0; i <= 100; i++) {
  const divthree = i % 3 === 0;
  const divfive = i % 5 === 0;

  console.log(
    divthree && divfive ? "fizzbuzz" : divthree ? "fizz" : divfive ? "buzz" : i
  );
}
