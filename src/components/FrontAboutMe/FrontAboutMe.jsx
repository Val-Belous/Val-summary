import styles from './FrontAboutMe.module.css';
import photo from '../../images/myPhoto.JPG';
import { useEffect } from 'react';

export const FrontAboutMe = () => {
  useEffect(() => {
    const backdrop = document.querySelector('.ModalAboutMe_backdrop__v1zHC');
    const frontSide = document.querySelector(
      '.FrontAboutMe_containerFront__-xEOJ'
    );
    frontSide && frontSide.addEventListener('click', openFrontSide);

    function openFrontSide(evt) {
      if (evt.target !== evt.currentTarget) {
        backdrop && backdrop.classList.remove('ModalAboutMe_ishidden__5OpwD');
      }
    }
  }, []);

  return (
    <div className={styles.containerFront}>
      <h2 className={styles.mainTitle}>
        Hello <br /> I'm Val
      </h2>
      <img className={styles.image} src={photo} alt="" />
    </div>
  );
};

// FrontAboutMe_frontSideClosePortfolioExp__dkVzp
// FrontAboutMe_frontSideOpenPortfolioExp__OwmDW
