import PropTypes from 'prop-types';
import {
  Button,
  List,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(name => {
        return (
          <li key={name}>
            <Button type="button" name={name} onClick={onLeaveFeedback}>
              {name}
            </Button>
          </li>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
