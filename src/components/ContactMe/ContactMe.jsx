import styles from './ContactMe.module.css';
// import { useEffect } from 'react';
export const ContactMe = () => {
  // useEffect(() => {
  //   const backdrop = document.querySelector('.ModalAboutMe_backdrop__v1zHC');
  //   const frontSide = document.querySelector(
  //     '.FrontAboutMe_containerFront__-xEOJ'
  //   );
  //   frontSide.addEventListener('click', openFrontSide);

  //   function openFrontSide(evt) {
  //     if (evt.target !== evt.currentTarget) {
  //       backdrop.classList.remove('ModalAboutMe_ishidden__5OpwD');
  //     }
  //   }
  // }, []);
  return (
    <div className={styles.containerContactMe}>
      <span className={styles.contactMeCloseExp}></span>
      <h2>Contact Me</h2>
    </div>
  );
};
// ContactMe_contactMeCloseExp__wYUv1
