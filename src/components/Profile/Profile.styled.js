import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 320px;
  margin: 0 auto;
  border: 1px solid lightgrey;
  border-radius: 4px;
  height: auto;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
`;
export const Description = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const StatsList = styled.ul`
  list-style: none;
  border-top: 1px solid lightgrey;
  display: flex;
  align-items: center;
  background-color: #f5f4fa;
  justify-content: space-evenly;
  margin: 0px;
  padding-left: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  &: not(: last-child) {
    padding-right: 30px;
    border-right: 1px solid lightgrey;
  }

  padding-top: 20px;
  padding-bottom: 20px;
`;
export const AvatarBox = styled.div`
  width: 120px;
  height: 120px;
  border: 1px transparent;
  border-radius: 60px;
  display: block;
  background-color: #f5f4fa;
`;
export const Text = styled.p`
  margin-top: 8px;
  color: grey;
`;
export const TextName = styled.p`
  margin-top: 8px;
  font-size: 20px;
  font-weight: 700;
`;

export const StatsLabel = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
export const StatsQuantity = styled.p`
  color: grey;
`;
