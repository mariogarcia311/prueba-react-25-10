import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Th = styled.th`
  background-color: var(--background-card);
  border: 0px solid #d9d9d6;
  padding: 8px;
  text-align: left;
`;

export const Td = styled.td`
  background-color: var(--background-card);
  border-bottom: 1px solid #d9d9d6;
  height: 45px;
  padding: 8px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: red;
  }
  &:first-child {
    background-color: red;
  }
`;
