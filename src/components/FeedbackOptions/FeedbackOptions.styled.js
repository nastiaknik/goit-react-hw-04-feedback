import styled from 'styled-components';
import { AiOutlineMeh, AiOutlineFrown, AiOutlineSmile } from 'react-icons/ai';

export const GoodFeedbackIcon = styled(AiOutlineSmile)`
  width: 80px;
  height: 80px;
  color: green;
  opacity: 0.7;
  transition: 300ms;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  &:checked {
    opacity: 1;
  }
`;

export const NeutralFeedbackIcon = styled(AiOutlineMeh)`
  width: 80px;
  height: 80px;
  color: #ffbf00;
  opacity: 0.7;
  transition: 300ms;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  &:checked {
    opacity: 1;
  }
`;

export const BadFeedbackIcon = styled(AiOutlineFrown)`
  width: 80px;
  height: 80px;
  color: orangered;
  opacity: 0.7;
  transition: 300ms;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  &:checked {
    opacity: 1;
  }
`;

export const Radio = styled.input`
  display: inline-block;
  position: absolute;
  appearance: none;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  overflow: hidden;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  padding: 10px 20px;
`;
