export const billsAdapter = (data) => {
  return data.map((item) => {
    return {
      checked: false,
      codigo: item["Código"],
      nombresApellidos: item["Nombres y Apellidos"],
      direccion: item["Dirección"],
      valorAPagar: item["Valor a Pagar"],
      fechaVencimiento: item["Fecha de Vencimiento"],
      fechaPago: item["Fecha de Pago"],
      estado: item["Estado"],
    };
  });
};
