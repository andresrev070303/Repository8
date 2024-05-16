function sumarValoresCadena(cadena) {
    if (Array.isArray(cadena)) {
      return [];
    }
    if (!cadena.includes(" ") && !cadena.includes(",") && !cadena.includes("-") && !cadena.includes(";")) {
      return parseInt(cadena);
    }
    let separador = ",";
    if (cadena.startsWith("//[")) {
      const finSeparador = cadena.indexOf("]");
      separador = cadena.substring(3, finSeparador);
      cadena = cadena.substring(finSeparador + 2);
    }
    const valores = dividirCadena(cadena, separador).map(Number);
    const numerosPorDebajoDeLimite = valores.filter(numero => numero <= 1000);
    return numerosPorDebajoDeLimite.reduce((total, valor) => total + valor, 0);
}

function dividirCadena(cadena, separador) {
    return cadena.split(new RegExp(`[ ,\\-${separador}]+`));
}

export default sumarValoresCadena;

  