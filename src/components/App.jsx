import { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Feedback } from 'components/App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setbad] = useState(0);

  const fedback = { good, neutral, bad };

  const handleIncrement = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setbad(prevBad => prevBad + 1);
        break;

      default:
        alert('error');
    }
  };

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  return (
    <Feedback>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(fedback)}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title="Statistic">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </Feedback>
  );
};
