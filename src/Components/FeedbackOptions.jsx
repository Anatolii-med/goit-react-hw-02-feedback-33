import { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "./FeedbackOptions.styled";

class FeedbackOptions extends Component {
  render() {
    return this.props.options.map((option) => {
      return (
        <Button
          key={option}
          type="button"
          name={option}
          onClick={this.props.onLeaveFeedback}
        >
          {option}
        </Button>
      );
    });
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
