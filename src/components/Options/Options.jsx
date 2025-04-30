import styles from './Options.module.css';

const Options = ({ options, onSendFeedback, total, onDrop }) => {
  return (
    <div className={styles.options}>
      {options.map(option => (
        <button
          className={styles.option}
          key={option}
          onClick={() => onSendFeedback(option)}
        >
          {option}
        </button>
      ))}
      {total > 0 && <button onClick={() => onDrop()}>Reset</button>}
    </div>
  );
};

export default Options;
