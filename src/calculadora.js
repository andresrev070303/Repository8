function sumarValoresCadena(cadena) {
  if (Array.isArray(cadena)) {
      return [];
  }
  if (esNumero(cadena)) {
      return parseInt(cadena);
  }
  const separador = obtenerSeparador(cadena);
  const valores = dividirCadena(cadena, separador).map(Number);
  const numerosPorDebajoDeLimite = filtrarNumerosPorDebajoDelLimite(valores);
  return sumarNumeros(numerosPorDebajoDeLimite);
}

function esNumero(cadena) {
  return !cadena.includes(" ") && !cadena.includes(",") && !cadena.includes("-") && !cadena.includes(";");
}

function obtenerSeparador(cadena) {
  let separador = ",";
  if (cadena.startsWith("//[")) {
      const finSeparador = cadena.indexOf("]");
      separador = cadena.substring(3, finSeparador);
  }
  return separador;
}

function dividirCadena(cadena, separador) {
  if (cadena.startsWith("//[")) {
      const finDelimitador = cadena.indexOf("]");
      cadena = cadena.substring(finDelimitador + 2);
  }
  return cadena.split(new RegExp(`[ ,\\-${separador}]+`));
}

function filtrarNumerosPorDebajoDelLimite(valores) {
  return valores.filter(numero => numero <= 1000);
}

function sumarNumeros(valores) {
  return valores.reduce((total, valor) => total + valor, 0);
}

export default sumarValoresCadena;

  