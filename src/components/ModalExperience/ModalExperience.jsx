import styles from './ModalExperience.module.css';
import { useRef, useEffect } from 'react';
export const ModalExperience = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector(
      '.ModalExperience_backdropExperience__q53Ru'
    );
    backdrop && backdrop.addEventListener('click', onHandlerClick);

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
    const topSide = document.querySelector('.box__face--top');
    const bottomSide = document.querySelector('.box__face--bottom');
    const backSide = document.querySelector(
      '.ContactMe_containerContactMe__kjOIz'
    );
    const rightSide = document.querySelector('.Portfolio_container__hiJ0s');

    const closeBackdrop = () => {
      if (
        box.classList.contains('toleftone') ||
        box.classList.contains('torightthree')
      ) {
        bottomSide && bottomSide.classList.add('box__face--bottomCloseExp');
        bottomSide && bottomSide.classList.remove('box__face--bottomOpenExp');
        topSide && topSide.classList.remove('box__face--topOpenExp');
        topSide && topSide.classList.add('box__face--topCloseExp');
        frontSide &&
          frontSide.classList.remove(
            'FrontAboutMe_frontSideOpenPortfolioExp__OwmDW'
          );
        frontSide &&
          frontSide.classList.add(
            'FrontAboutMe_frontSideClosePortfolioExp__dkVzp'
          );
        leftSide &&
          leftSide.classList.remove('Experience_leftSideOpenExp__qOlkK');
        backSide &&
          backSide.classList.remove('ContactMe_contactMeOpenExp__hXIey');
        backSide &&
          backSide.classList.add('ContactMe_contactMeCloseExp__wYUv1');
        element.classList.add('ModalExperience_ishidden__I1iD2');
        leftSide &&
          leftSide.classList.add('Experience_leftSideCloseExp__Lg-qj');
      }
    };

    const onKeyPress = evt => {
      switch (evt.keyCode) {
        case 13:
          if (
            box.classList.contains('toleftone') ||
            box.classList.contains('torightthree')
          ) {
            bottomSide &&
              bottomSide.classList.remove('box__face--bottomCloseContact');
            topSide && topSide.classList.remove('box__face--topCloseContact');
            leftSide &&
              leftSide.classList.remove(
                'Experience_leftSideCloseContact__fHPr+'
              );
            rightSide &&
              rightSide.classList.remove(
                'Portfolio_rightSideClosePortfolioContact__AvV+Z'
              );
            backSide &&
              backSide.classList.remove(
                'ContactMe_contactMeCloseContact__UVuMg'
              );
            element.classList.remove('ModalExperience_ishidden__I1iD2');
            leftSide &&
              leftSide.classList.add('Experience_leftSideOpenExp__qOlkK');
            leftSide &&
              leftSide.classList.remove('Experience_leftSideCloseExp__Lg-qj');
            backSide &&
              backSide.classList.add('ContactMe_contactMeOpenExp__hXIey');
            backSide &&
              backSide.classList.remove('ContactMe_contactMeCloseExp__wYUv1');
            backSide &&
              backSide.classList.remove('ContactMe_contactMeClose__mMKHM');
            frontSide &&
              frontSide.classList.add(
                'FrontAboutMe_frontSideOpenPortfolioExp__OwmDW'
              );
            frontSide &&
              frontSide.classList.remove(
                'FrontAboutMe_frontSideClosePortfolioExp__dkVzp'
              );
            topSide && topSide.classList.add('box__face--topOpenExp');
            topSide && topSide.classList.remove('box__face--topCloseExp');
            bottomSide && bottomSide.classList.add('box__face--bottomOpenExp');
            bottomSide &&
              bottomSide.classList.remove('box__face--bottomCloseExp');
          }
          break;
        case 27:
          if (
            box.classList.contains('toleftone') ||
            box.classList.contains('torightthree')
          ) {
            bottomSide && bottomSide.classList.add('box__face--bottomCloseExp');
            bottomSide &&
              bottomSide.classList.remove('box__face--bottomOpenExp');
            topSide && topSide.classList.remove('box__face--topOpenExp');
            topSide && topSide.classList.add('box__face--topCloseExp');
            frontSide &&
              frontSide.classList.remove(
                'FrontAboutMe_frontSideOpenPortfolioExp__OwmDW'
              );
            frontSide &&
              frontSide.classList.add(
                'FrontAboutMe_frontSideClosePortfolioExp__dkVzp'
              );
            leftSide &&
              leftSide.classList.remove('Experience_leftSideOpenExp__qOlkK');
            backSide &&
              backSide.classList.remove('ContactMe_contactMeOpenExp__hXIey');
            backSide &&
              backSide.classList.add('ContactMe_contactMeCloseExp__wYUv1');
            element.classList.add('ModalExperience_ishidden__I1iD2');
            leftSide &&
              leftSide.classList.add('Experience_leftSideCloseExp__Lg-qj');
          }
          break;
        default:
          return;
      }
    };

    const element = ref.current;
    window && window.addEventListener('keydown', onKeyPress);
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
