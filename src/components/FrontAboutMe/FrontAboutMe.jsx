import styles from './FrontAboutMe.module.css';
import photo from '../../images/myPhoto.JPG';

export const FrontAboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img className={styles.image} src={photo} alt="" />
        <div className={styles.textContainer}>
          {/* <h1 className={styles.text}>Junior Front-end developer</h1> */}
          <p className={styles.text}>
            I am a front -end developer looking for a full - time job. Seeking
            to use my good JavaScript and React.js skills. I want try to do my
            best on my future position in order to achieve the maximum good
            result in the shortest possible time.
          </p>
        </div>
      </div>
    </div>
  );
};
