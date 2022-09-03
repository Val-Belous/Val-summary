import styles from './Arrows.module.css';
import svg from '../../images/symbol-defs.svg';

export const Arrows = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Use keyboard:</h1>
        <div className={styles.box}>
          <svg className={styles.arrows} height="50" width="50">
            <use href={`${svg}#icon-arrow-left`}></use>
          </svg>
          <svg className={styles.arrows} height="50" width="50">
            <use href={`${svg}#icon-enter`}></use>
          </svg>
          <svg className={styles.arrows} height="50" width="50">
            <use href={`${svg}#icon-arrow-right`}></use>
          </svg>
        </div>
      </div>
    </>
  );
};
