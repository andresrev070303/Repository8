function calcularCadena(numeros) {
    if (numeros.length === 0) {
      return [];
    }
    if (!numeros.includes(" ")) {
      return parseInt(numeros);
    }
    const valores = numeros.split(" ").map(Number);
    return valores.reduce((total, valor) => total + valor, 0);
  }
  export default calcularCadena;
  