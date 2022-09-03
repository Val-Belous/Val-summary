import styles from './FrontAboutMe.module.css';
import photo from '../../images/myPhoto.JPG';
import { useEffect } from 'react';

export const FrontAboutMe = () => {
  useEffect(() => {
    const backdrop = document.querySelector('.ModalAboutMe_backdrop__v1zHC');
    const frontSide = document.querySelector(
      '.FrontAboutMe_containerFront__-xEOJ'
    );
    frontSide.addEventListener('click', openFrontSide);

    function openFrontSide(evt) {
      if (evt.target !== evt.currentTarget) {
        console.log(evt);
        backdrop.classList.remove('ModalAboutMe_ishidden__5OpwD');
      }
    }
  }, []);

  return (
    <div className={styles.containerFront}>
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
