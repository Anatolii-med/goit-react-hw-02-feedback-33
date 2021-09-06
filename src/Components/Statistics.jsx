import { Component } from "react";
import PropTypes from "prop-types";
import { Item } from "./Statistics.styled";

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <ul className="statisticSection">
        <Item className="goodStat">Good: {good}</Item>
        <Item className="goodStat">Neutral: {neutral}</Item>
        <Item className="goodStat">Bad: {bad}</Item>

        <Item className="totalStat">Total: {total}</Item>
        <Item className="badStat">Positive feedback: {positivePercentage}</Item>
      </ul>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

export default Statistics;
