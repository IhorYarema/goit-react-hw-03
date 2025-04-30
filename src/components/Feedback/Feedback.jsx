import styles from './Feedback.module.css';

const Feedback = ({ feedback: { good, neutral, bad }, total, positive }) => {
  return (
    <div className={styles.feedback}>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      {total > 0 && <p>Total: {total}</p>}
      {positive > 0 && <p>Positive: {positive}%</p>}
    </div>
  );
};

export default Feedback;
