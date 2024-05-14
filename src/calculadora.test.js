import calcularCadena from "./calculadora.js";
import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
  it("debería devolver una cadena vacia", () => {
    expect(calcularCadena([])).toEqual([]);
  });
});

