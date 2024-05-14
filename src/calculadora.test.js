import calcularCadena from "./calculadora.js";

describe("calcular", () => {
  it("debería devolver una cadena vacia", () => {
    expect(calcularCadena([])).toEqual([]);
  });
  it("debería devolver el valor del elemento de la cadena ", () => {
    expect(calcularCadena("5")).toEqual(5);
  });
  it("debería sumar los valores de la cadena", () => {
    expect(calcularCadena("5 7")).toEqual(12);
  });
});
