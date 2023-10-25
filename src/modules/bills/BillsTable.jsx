import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  FirstColumnTd,
  FirstColumnTh,
  PaginateContainer,
  StyledReactPaginate,
  Table,
  TableRow,
  Td,
  Th,
} from "../shared/Table";
import { Text } from "../shared/Text";
import { Checkbox, InputText } from "../shared/Input";
import { FlexContainer } from "../shared/FlexContainer";
import { CustomStatus } from "./CustomStatus";
import Button from "../shared/Button";

export const BillsTable = ({ data, setData }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredData, setFilteredData] = useState(data);
  const [filter, setFilter] = useState("");
  const itemsPerPage = 10;
  const offset = currentPage * itemsPerPage;
  const currentData = filteredData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    handleChangeInput(filter);
  }, [data]);

  const handleChangeInput = (_value) => {
    setFilter(_value);
    _value
      ? setFilteredData(
          data.filter(
            (item) =>
              item.codigo.toLowerCase().includes(_value.toLowerCase()) ||
              item.nombresApellidos.toLowerCase().includes(_value.toLowerCase())
          )
        )
      : setFilteredData(data);
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleCheckboxChange = (_data, id) => {
    const newData = data.map((item) =>
      item.codigo === id ? { ...item, checked: !item.checked } : item
    );
    setData(newData);
  };

  const handleDecline = () => {
    const newData = data.map((item) => ({
      ...item,
      estado: item.checked ? "Rechazada" : item.estado,
      checked: false,
    }));
    setData(newData);
  };

  return (
    <div>
      <Text $size="24px" $fontWeight="700" $type="secondary">
        Carga la informacion de las facturas de tu empresa
      </Text>
      <Text $marginBottom="24px">
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum es simplemente el texto de relleno de las
        imprentas y archivos .
      </Text>
      <FlexContainer $direction="row" $justifyContent="space-between">
        <InputText
          $marginBottom="20px"
          type="text"
          placeholder="Filtrar por Código o Nombre"
          value={filter}
          onChange={(e) => handleChangeInput(e.target.value)}
        />
        <Button onClick={handleDecline}>Rechazar</Button>
      </FlexContainer>
      <FlexContainer $overflow="scroll">
        <Table>
          <thead>
            <tr>
              <FirstColumnTh>Código</FirstColumnTh>
              <Th>Nombres y Apellidos</Th>
              <Th>Dirección</Th>
              <Th>Valor a Pagar</Th>
              <Th>Fecha de Vencimiento</Th>
              <Th>Fecha de Pago</Th>
              <Th>Estado</Th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <TableRow key={index}>
                <FirstColumnTd>
                  <FlexContainer
                    $direction="row"
                    $alignItems="center"
                    $gap="5px"
                  >
                    <Checkbox
                      checked={item.checked}
                      onChange={(e) =>
                        handleCheckboxChange(e.target.checked, item.codigo)
                      }
                    />
                    {item.codigo}
                  </FlexContainer>
                </FirstColumnTd>
                <Td $fontWeight="800">{item.nombresApellidos}</Td>
                <Td>{item.direccion}</Td>
                <Td>{item.valorAPagar}</Td>
                <Td>{item.fechaVencimiento}</Td>
                <Td>{item.fechaPago}</Td>
                <Td>
                  <CustomStatus text={item.estado} />
                </Td>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </FlexContainer>
      <PaginateContainer>
        <StyledReactPaginate
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          pageClassName="page-item"
          previousClassName="page-item"
          nextClassName="page-item"
          pageLinkClassName="page-link"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          previousLabel={"<"}
          nextLabel={">"}
        />
      </PaginateContainer>
    </div>
  );
};

BillsTable.propTypes = {
  setData: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};
