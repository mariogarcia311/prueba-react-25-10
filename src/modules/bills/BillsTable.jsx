import PropTypes from "prop-types";
import { Table, TableRow, Td, Th } from "../shared/Table";

export const BillsTable = ({ data, setData }) => {
  console.log(data);
  return (
    <Table>
      <thead>
        <tr>
          <Th>Código</Th>
          <Th>Nombres y Apellidos</Th>
          <Th>Dirección</Th>
          <Th>Valor a Pagar</Th>
          <Th>Fecha de Vencimiento</Th>
          <Th>Fecha de Pago</Th>
          <Th>Estado</Th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <Td>{item.codigo}</Td>
            <Td>{item.nombresApellidos}</Td>
            <Td>{item.direccion}</Td>
            <Td>{item.valorAPagar}</Td>
            <Td>{item.fechaVencimiento}</Td>
            <Td>{item.fechaPago}</Td>
            <Td>{item.estado}</Td>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

BillsTable.propTypes = {
  setData: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};
