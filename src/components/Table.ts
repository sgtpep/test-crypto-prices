import styled from "styled-components";

const Table = styled.table`
  border: solid thin;
  border-collapse: collapse;
  th,
  td {
    border: solid thin;
    padding: 0.5em;
    &.is-right {
      text-align: right;
    }
  }
  th {
    text-align: center;
  }
`;

export const TableHead = styled.thead`
  background: #e0e0e0;
`;

export const TableBody = styled.tbody`
  > :nth-child(even) {
    background: #f2f2f2;
  }
`;

export default Table;
