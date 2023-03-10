import PropTypes from 'prop-types';
import {
  List,
  Item,
  Radio,
  GoodFeedbackIcon,
  NeutralFeedbackIcon,
  BadFeedbackIcon,
} from './FeedbackOptions.styled';

const icons = [
  <GoodFeedbackIcon />,
  <NeutralFeedbackIcon />,
  <BadFeedbackIcon />,
];

export const FeedbackOptions = ({ options, onFeedback }) => {
  return (
    <List>
      {options.map((option, index) => (
        <Item key={option}>
          <label htmlFor={option}>
            <Radio
              type="radio"
              name="feedback"
              id={option}
              value={option}
              onClick={() => onFeedback(option)}
            />
            {icons[index]}
          </label>
        </Item>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.node,
  onFeedback: PropTypes.func.isRequired,
};
