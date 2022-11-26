import styled from 'styled-components';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const StatsContainer = styled.section`
  border: 1px solid lightgrey;
  border-radius: 4px;
  margin: 0 auto;
  width: 320px;
  height: auto;
`;

export const Title = styled.h2`
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  text-transform: uppercase;
  font-size: 20px;
  color: grey;
`;
export const StatList = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  background-color: #f5f4fa;
  justify-content: space-between;
  margin: 0px;
  padding-left: 0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  padding-right: 14px;
  padding-left: 14px;
  padding-top: 20px;
  padding-bottom: 20px;
  &: nth-child(1) {
    background-color: ${getRandomColor()};
  }
  &: nth-child(2n) {
    background-color: ${getRandomColor()};
  }
  &: nth-child(3n) {
    background-color: ${getRandomColor()};
  }
  &: nth-child(4n) {
    background-color: ${getRandomColor()};
  }
  &: nth-child(5n) {
    background-color: ${getRandomColor()};
  }
`;
export const StatLabel = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: white;
`;
export const StatQuantity = styled.p`
  font-size: 18px;
  color: white;
`;
