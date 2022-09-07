import styles from './Experience.module.css';
// import { useEffect } from 'react';
export const Experience = () => {
  // useEffect(() => {
  //   const backdrop = document.querySelector('.ModalAboutMe_backdrop__v1zHC');
  //   const frontSide  = document.querySelector(
  //     '.FrontAboutMe_containerFront__-xEOJ'
  //   );
  //   frontSide && frontSide && frontSide && frontSide.addEventListener('click', openFrontSide);

  //   function openFrontSide(evt) {
  //     if (evt.target !== evt.currentTarget) {
  //       backdrop.classList.remove('ModalAboutMe_ishidden__5OpwD');
  //     }
  //   }
  // }, []);
  return (
    <div className={styles.containerLeft}>
      <span className={styles.leftSideOpenContact}></span>
      <span className={styles.leftSideCloseContact}></span>
      <h2>Experience</h2>
    </div>
  );
};
