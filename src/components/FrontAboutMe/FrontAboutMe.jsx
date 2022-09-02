import styles from './FrontAboutMe.module.css';
import photo from '../../images/myPhoto.JPG';

export const FrontAboutMe = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Hello, my name is Val Belous</h2>
      <div className={styles.box}>
        <img className={styles.image} src={photo} alt="" />
        <div className={styles.textContainer}>
          <h3 className={styles.title}>Front-end developer</h3>
          <p className={styles.text}>
            I am junior front-end developer looking for a full - time job.
            Seeking to use my good JavaScript and React.js skills. I want try to
            do my best on my future position in order to achieve the maximum
            good result in the shortest possible time.
          </p>
        </div>
      </div>
    </div>
  );
};
