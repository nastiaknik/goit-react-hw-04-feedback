import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StatItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
`;

export const StatText = styled.p`
  font-size: 24px;
  padding: 0;
  margin: 0;
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
`;
export const Stats = styled.div`
  margin-left: 10px;
  font-size: 22px;
`;
