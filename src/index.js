document.addEventListener(
  "click",
  function (event) {
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
    if (event.target.matches("#challenge01")) {
      for (let i = 0; i <= 100; i++) {
        const divthree = i % 3 === 0;
        const divfive = i % 5 === 0;

        console.log(
          divthree && divfive
            ? "fizzbuzz"
            : divthree
            ? "fizz"
            : divfive
            ? "buzz"
            : i
        );
      }
    }

    /*
     * Reto #2
     * LA SUCESIÓN DE FIBONACCI
     * Fecha publicación enunciado: 10/01/22
     * Fecha publicación resolución: 17/01/22
     * Dificultad: DIFÍCIL
     *
     * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
     * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
     * 0, 1, 1, 2, 3, 5, 8, 13...
     *
     */

    if (event.target.matches("#challenge02")) {
      let first = 0;
      let second = 1;

      for (let i = 0; i < 50; i++) {
        console.log(first);
        const sum = first + second;
        first = second;
        second = sum;
      }
    }

    // Don't follow the link
    event.preventDefault();
  },
  false
);
