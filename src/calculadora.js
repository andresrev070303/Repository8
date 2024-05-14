function calcularCadena(cadena) {
    if (Array.isArray(cadena)) {
      return [];
    }
    if (!cadena.includes(" ") && !cadena.includes(",") && !cadena.includes("-") && !cadena.includes(";")) {
      return parseInt(cadena);
    }
    let delimitador = ",";
    if (cadena.startsWith("//[")) {
      const finDelimitador = cadena.indexOf("]");
      delimitador = cadena.substring(3, finDelimitador);
      cadena = cadena.substring(finDelimitador + 2);
    }
    const valores = cadena.split(new RegExp(`[ ,\\-${delimitador}]+`)).map(Number);
    const numerosValidos = valores.filter(numero => numero <= 1000);
    return numerosValidos.reduce((total, valor) => total + valor, 0);
  }
  export default calcularCadena;
  
  
  
  
  