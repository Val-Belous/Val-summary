import styles from './Portfolio.module.css';
import kapustaImage from '../../images/kapusta-preview.PNG';
import filmotekaImage from '../../images/filmoteka-preview.PNG';
import hellenImage from '../../images/hellen-preview.PNG';

export const Portfolio = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Portfolio</h2>
        <ul className={styles.containerList}>
          <li className={styles.containerItem}>
            <img className={styles.itemImage} src={kapustaImage} alt="" />
          </li>
          <li className={styles.containerItem}>
            <img className={styles.itemImage} src={filmotekaImage} alt="" />
          </li>
          <li className={styles.containerItem}>
            <img className={styles.itemImage} src={hellenImage} alt="" />
          </li>
        </ul>
      </div>
    </>
  );
};
