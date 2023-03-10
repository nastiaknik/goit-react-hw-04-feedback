import PropTypes from 'prop-types';
import {
  List,
  StatItem,
  StatText,
  Stars,
  Stats,
} from 'components/Statistics/Statistics.styled';
import { IconContext } from 'react-icons';
import { AiFillStar } from 'react-icons/ai';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <StatItem>
        <StatText>Good: {good}</StatText>
        <StatText>Neutral: {neutral}</StatText>
        <StatText>Bad: {bad}</StatText>
      </StatItem>
      <StatItem>
        <StatText>Total: {total}</StatText>
        <StatText>Positive feedback: {positivePercentage}%</StatText>
      </StatItem>
      <StatItem>
        <Stars>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, index) => (
            <IconContext.Provider
              key={index}
              value={{
                size: 40,
                color: `${
                  index >= Math.floor(positivePercentage / 10)
                    ? '#ccc'
                    : 'orange'
                }`,
              }}
            >
              <AiFillStar />
            </IconContext.Provider>
          ))}
          <Stats>{Math.floor(positivePercentage / 10)} / 10 </Stats>
        </Stars>
      </StatItem>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
