import styles from './ModalAboutMe.module.css';
import { useRef, useEffect } from 'react';

export const ModalAboutMe = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector('.ModalAboutMe_backdrop__v1zHC');
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
    const rightSide = document.querySelector('.Portfolio_container__hiJ0s');
    const topSide = document.querySelector('.box__face--top');
    const bottomSide = document.querySelector('.box__face--bottom');
    const backSide = document.querySelector(
      '.ContactMe_containerContactMe__kjOIz'
    );

    const closeBackdrop = () => {
      if (
        (box && box.classList.contains('torightfour')) ||
        (box && box.classList.contains('default')) ||
        (box && box.classList.contains('toleftfour'))
      ) {
        rightSide &&
          rightSide.classList.remove(
            'Portfolio_rightSideClosePortfolioContact__AvV+Z'
          );
        rightSide &&
          rightSide.classList.remove('Portfolio_rightSideOpen__-Niiy');
        leftSide && leftSide.classList.remove('Experience_leftSideOpen__ONILW');
        topSide && topSide.classList.remove('box__face--topOpen');
        bottomSide && bottomSide.classList.remove('box__face--bottomOpen');
        frontSide &&
          frontSide.classList.remove('FrontAboutMe_frontSideOpen__zZ41Z');
        element.classList.add('ModalAboutMe_ishidden__5OpwD');
      }
    };

    const onKeyPress = evt => {
      switch (evt.keyCode) {
        case 13:
          if (
            (box && box.classList.contains('torightfour')) ||
            (box && box.classList.contains('default')) ||
            (box && box.classList.contains('toleftfour'))
          ) {
            bottomSide &&
              bottomSide.classList.remove('box__face--bottomCloseContact');
            topSide && topSide.classList.remove('box__face--topCloseContact');
            leftSide &&
              leftSide.classList.remove(
                'Experience_leftSideCloseContact__fHPr+'
              );
            backSide &&
              backSide.classList.remove(
                'ContactMe_contactMeCloseContact__UVuMg'
              );
            frontSide &&
              frontSide.classList.remove(
                'FrontAboutMe_frontSideClosePortfolioExp__dkVzp'
              );
            bottomSide &&
              bottomSide.classList.remove('box__face--bottomCloseExp');
            topSide && topSide.classList.remove('box__face--topCloseExp');
            leftSide &&
              leftSide.classList.remove('Experience_leftSideCloseExp__Lg-qj');
            topSide && topSide.classList.remove('box__face--topCLosePortfolio');
            frontSide &&
              frontSide.classList.remove(
                'FrontAboutMe_frontSideClosePortfolio__KIc2U'
              );
            bottomSide &&
              bottomSide.classList.remove('box__face--bottomClosePortfolio');
            element.classList.remove('ModalAboutMe_ishidden__5OpwD');
            leftSide &&
              leftSide.classList.add('Experience_leftSideOpen__ONILW');
            topSide && topSide.classList.add('box__face--topOpen');
            bottomSide && bottomSide.classList.add('box__face--bottomOpen');
            frontSide &&
              frontSide.classList.add('FrontAboutMe_frontSideOpen__zZ41Z');
            rightSide &&
              rightSide.classList.add('Portfolio_rightSideOpen__-Niiy');
          }
          break;
        case 27:
          if (
            (box && box.classList.contains('torightfour')) ||
            (box && box.classList.contains('default')) ||
            (box && box.classList.contains('toleftfour'))
          ) {
            rightSide &&
              rightSide.classList.remove(
                'Portfolio_rightSideClosePortfolioContact__AvV+Z'
              );
            rightSide &&
              rightSide.classList.remove('Portfolio_rightSideOpen__-Niiy');
            leftSide &&
              leftSide.classList.remove('Experience_leftSideOpen__ONILW');
            topSide && topSide.classList.remove('box__face--topOpen');
            bottomSide && bottomSide.classList.remove('box__face--bottomOpen');
            frontSide &&
              frontSide.classList.remove('FrontAboutMe_frontSideOpen__zZ41Z');
            element.classList.add('ModalAboutMe_ishidden__5OpwD');
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
        id="modalAboutMe"
        className={`${styles.backdrop} ${styles.ishidden}`}
        ref={ref}
      >
        <div className={styles.modal}>
          <div className={styles.box}>
            <div className={styles.textContainer}>
              <h3 className={styles.title}>Front-end developer</h3>
              <p className={styles.text}>
                I am junior front-end developer looking for a full - time job.
                Seeking to use my good JavaScript and React.js skills. I want
                try to do my best on my future position in order to achieve the
                maximum good result in the shortest possible time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
