import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 90vw;
`;

export const Th = styled.th`
  background-color: var(--background-card);
  border-bottom: 1px solid #d9d9d6;
  padding: 8px;
  height: 60px;
  text-align: left;
  padding: 0 16px;
`;

export const Td = styled.td`
  background-color: var(--background-card);
  border-bottom: 1px solid #d9d9d6;
  height: 45px;
  padding: 8px;
  padding: 0 16px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: red;
  }
`;

export const FirstColumnTd = styled(Td)`
  border-right: 1px solid #d9d9d6; /* Agrega un borde a la izquierda en la primera columna */
`;

export const FirstColumnTh = styled(Th)`
  border-right: 1px solid #d9d9d6; /* Agrega un borde a la izquierda en la primera columna */
`;

export const PaginateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-direction: row;
`;

export const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-direction: row;
  color: #fff;
  width: 900px;
  flex-wrap: nowrap;
  font-size: larger;
  gap: 10px;
  list-style-type: none;
  .active a {
    border-radius: 8px;
    background: #00b5e2;
  }
  a {
    cursor: pointer;
    display: flex;
    width: 40px;
    height: 45.751px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    border-radius: 8px;
    background: #bbd2df;
    &:hover {
      background-color: #00b5e2;
      color: #fff;
    }
  }
`;
