import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';



function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
      <div className={styles.feedbackButtons}>
        {options.map(option => (
          <button key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  }

  FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.string.isRequired
      ).isRequired
  };

  
function SectionTitle({ title, children }) {
    return (
      <>
        <h2>{title}</h2>
        {children}
      </>
    );
  }
  
  SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  const Notification = ({ message }) => {
    return (
      <div>
        <h3>{message}</h3>
      </div>
    );
  };
  
  Notification.propTypes = {
      message: PropTypes.string.isRequired,
    };

    function Statistics({ good, neutral, bad, total, positivePercentage }) {
        return (
          <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive Feedback: {positivePercentage}%</p>
          </div>
        );
      }
      
      Statistics.propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
      };