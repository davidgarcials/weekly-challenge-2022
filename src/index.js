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

    /*
     * Reto #3
     * ¿ES UN NÚMERO PRIMO?
     * Fecha publicación enunciado: 17/01/22
     * Fecha publicación resolución: 24/01/22
     * Dificultad: MEDIA
     *
     * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
     * Hecho esto, imprime los números primos entre 1 y 100.
     */

    if (event.target.matches("#challenge03")) {
      const primeNumber = (number) => {
        if (number < 2) {
          return false;
        }

        for (let i = 2; i < number; i++) {
          if (number % i === 0) return false;
        }

        return true;
      };

      for (let i = 1; i <= 100; i++) {
        primeNumber(i) && console.log(i);
      }
    }

    /*
     * Reto #4
     * ÁREA DE UN POLÍGONO
     * Fecha publicación enunciado: 24/01/22
     * Fecha publicación resolución: 31/01/22
     * Dificultad: FÁCIL
     *
     * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
     * - La función recibirá por parámetro sólo UN polígono a la vez.
     * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
     * - Imprime el cálculo del área de un polígono de cada tipo.
     */

    function calculateArea(polygon, x, y) {
      if (polygon === "Triángulo") {
        return (x * y) / 2;
      }

      return x * y;
    }

    if (event.target.matches("#challenge04")) {
      console.log(`Triangulo = ${calculateArea("Triángulo", 10, 10)}`);
      console.log(`Cuadrado o rectangulo = ${calculateArea("", 10, 10)}`);
    }

    // Don't follow the link
    event.preventDefault();
  },
  false
);
