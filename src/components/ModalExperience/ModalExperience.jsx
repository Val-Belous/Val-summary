import styles from './ModalExperience.module.css';
import { useRef, useEffect } from 'react';
export const ModalExperience = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector(
      '.ModalExperience_backdropExperience__q53Ru'
    );
    backdrop.addEventListener('click', onHandlerClick);

    function onHandlerClick(evt) {
      if (evt.target === evt.currentTarget) {
        closeBackdrop();
      }
    }

    const box = document.querySelector('.box');
    const leftSide = document.querySelector('.Experience_containerLeft__MNcmh');
    const frontSide = document.querySelector(
      '.FrontAboutMe_containerFront__-xEOJ'
    );
    const rightSide = document.querySelector('.Portfolio_container__hiJ0s');
    const topSide = document.querySelector('.box__face--top');
    const bottomSide = document.querySelector('.box__face--bottom');
    const backSide = document.querySelector(
      '.ContactMe_containerContactMe__kjOIz'
    );

    const closeBackdrop = () => {
      if (
        box.classList.contains('toleftone') ||
        box.classList.contains('torightthree')
      ) {
        // backdrop.classList.add('ModalAboutMe_ishidden__5OpwD');
        // rightSide.classList.remove('Portfolio_rightSideOpen__-Niiy');
        // leftSide.classList.remove('Experience_experienceOpen__BM6ps');
        // topSide.classList.remove('box__face--topOpen');
        // bottomSide.classList.remove('box__face--bottomOpen');
        // frontSide.classList.remove('FrontAboutMe_frontSideOpen__zZ41Z');
        // element.classList.add('ModalExperience_ishidden__I1iD2');
      }
    };

    const onKeyPress = evt => {
      switch (evt.keyCode) {
        case 13:
          if (
            box.classList.contains('toleftone') ||
            box.classList.contains('torightthree')
          ) {
            element.classList.remove('ModalExperience_ishidden__I1iD2');
            leftSide.classList.add('Experience_leftSideOpenExp__qOlkK');
            leftSide.classList.remove('Experience_leftSideCloseExp__Lg-qj');
            backSide.classList.add('ContactMe_contactMeOpenExp__hXIey');
            backSide.classList.remove('ContactMe_contactMeCloseExp__wYUv1');
            backSide.classList.remove('ContactMe_contactMeClose__mMKHM');
            // topSide.classList.remove('box__face--topCLosePortfolio');
            // frontSide.classList.remove(
            //   'FrontAboutMe_frontSideClosePortfolio__KIc2U'
            // );
            // bottomSide.classList.remove('box__face--bottomClosePortfolio');
            // topSide.classList.add('box__face--topOpen');
            // bottomSide.classList.add('box__face--bottomOpen');
            // frontSide.classList.add('FrontAboutMe_frontSideOpen__zZ41Z');
            // rightSide.classList.remove('ContactMe_contactMeCloseExp__wYUv1');
          }
          break;
        case 27:
          if (
            box.classList.contains('toleftone') ||
            box.classList.contains('torightthree')
          ) {
            leftSide.classList.remove('Experience_leftSideOpenExp__qOlkK');
            backSide.classList.remove('ContactMe_contactMeOpenExp__hXIey');
            backSide.classList.add('ContactMe_contactMeCloseExp__wYUv1');
            element.classList.add('ModalExperience_ishidden__I1iD2');
            leftSide.classList.add('Experience_leftSideCloseExp__Lg-qj');

            // rightSide.classList.remove('Portfolio_rightSideOpen__-Niiy');
            // leftSide.classList.remove('Experience_experienceOpen__BM6ps');
            // topSide.classList.remove('box__face--topOpen');
            // bottomSide.classList.remove('box__face--bottomOpen');
            // frontSide.classList.remove('FrontAboutMe_frontSideOpen__zZ41Z');
          }
          break;
        default:
          return;
      }
    };

    const element = ref.current;
    window.addEventListener('keydown', onKeyPress);
    return () => {
      window.removeEventListener('keydown', onKeyPress);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.backdropExperience} ${styles.ishidden}`}
        ref={ref}
      >
        <div className={styles.modalExperience}>
          <div className={styles.box}>
            <div className={styles.textContainer}>
              <h3 className={styles.title}>Contact me</h3>
              <p className={styles.text}>
                exp exp exp exp exp exp exp exp exp exp exp exp exp exp exp exp
                exp exp exp exp exp exp exp exp exp exp exp exp exp exp exp exp
                exp exp exp exp exp exp exp exp exp exp exp exp exp exp exp exp
                exp exp exp exp exp exp exp exp exp exp exp exp exp exp exp exp
                exp exp exp exp exp exp exp exp exp exp exp exp exp exp exp exp
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
