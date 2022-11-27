import styled from 'styled-components';

export const FriendItem = styled.div`
  padding: 8px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  display: flex;
  align-items: center;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  border: 1px solid grey;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

export const Name = styled.p`
  font-size: 18px;
  margin-left: 10px;
  font-weight: 700;
`;
