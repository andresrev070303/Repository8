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
  it("debería sumar los valores de la cadena separada por coma", () => {
    expect(calcularCadena("1,2,4,8")).toEqual(15);
  });
  it("debería sumar los valores de la cadena separada por guion y coma", () => {
    expect(calcularCadena("1-2,3")).toEqual(6);
  });
  it("debería sumar los valores de la cadena con delimitador especificado, comas y guiones", () => {
    expect(calcularCadena("//[;] 6,3-2;1")).toEqual(12);
  });
  it("debería ignorar los números mayores a 1000", () => {
    expect(calcularCadena("2, 1001")).toEqual(2);
  });
});

