function calcularCadena(cadena) {
    if (Array.isArray(cadena)) {
      return [];
    }
    if (!cadena.includes(" ") && !cadena.includes(",") && !cadena.includes("-")) {
      return parseInt(cadena);
    }
    const valores = cadena.split(/[ ,\-]/).map(Number);
    return valores.reduce((total, valor) => total + valor, 0);
  }
  export default calcularCadena;
  
  
  