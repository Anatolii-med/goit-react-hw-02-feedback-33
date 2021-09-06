import React, { Component } from "react";
import Statistics from "./Components/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions";
import Section from "./Components/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackBtnClick = (e) => {
    const { name } = e.target;
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  totalFeedbacks = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercentage = () => {
    const { good, neutral, bad } = this.state;
    const positiveFeedback = Number.parseInt(
      (good / (good + neutral + bad)) * 100
    );
    return Number.isNaN(positiveFeedback) ? "0" : `${positiveFeedback} %`;
  };

  render() {
    const buttonsList = Object.keys(this.state);
    return (
      <div className="feedbackCounter">
        <Section title="Please leave feedback">
          {" "}
          <FeedbackOptions
            options={buttonsList}
            onLeaveFeedback={this.feedbackBtnClick}
          />
        </Section>
        <Section title="Statistics">
          {this.totalFeedbacks() === 0 ? (
            <span> No feedback given</span>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedbacks()}
              positivePercentage={this.positivePercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
