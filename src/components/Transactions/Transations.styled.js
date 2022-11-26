import styled from 'styled-components';
export const TransactionCont = styled.table`
  border: 1px solid lightgrey;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  margin: 0 auto;
  width: 320px;
  height: auto;
`;

export const RowName = styled.th`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: lightblue;

  &:not(:last-child) {
    border-right: 1px solid lightgrey;
  }
`;

export const RowItem = styled.td`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;

  &:not(:last-child) {
    border-right: 1px solid lightgrey;
  }
`;

export const Row = styled.tr`
  &:nth-child(2n) {
    background-color: lightgrey;
  }
`;
