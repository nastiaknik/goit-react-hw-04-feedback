import { Component } from 'react';
import { Layout } from 'components/Layout/Layout';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  countFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total ? Math.round((good * 100) / total) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onFeedback={this.countFeedback}
          />
        </Section>
        <Section title="Statistics">
          {!this.countTotalFeedback() ? (
            <Notification message="No feedback given!" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Layout>
    );
  }
}
