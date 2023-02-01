import styles from './Preloader.module.css';

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <svg viewBox="25 25 50 50">
        <circle
          cx="50"
          cy="50"
          r="20"
        ></circle>
      </svg>
    </div>
  );
};

export default Preloader;
