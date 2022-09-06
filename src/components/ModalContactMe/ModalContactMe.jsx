import styles from './ModalContactMe.module.css';
import { useRef, useEffect } from 'react';
export const ModalContactMe = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector(
      '.ModalContactMe_backdropContactMe__MDbbj'
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

    const closeBackdrop = () => {
      if (
        box.classList.contains('torighttwo') ||
        box.classList.contains('tolefttwo')
      ) {
        backdrop.classList.add('ModalAboutMe_ishidden__5OpwD');
        rightSide.classList.remove('Portfolio_rightSideOpen__-Niiy');
        leftSide.classList.remove('Experience_experienceOpen__BM6ps');
        topSide.classList.remove('box__face--topOpen');
        bottomSide.classList.remove('box__face--bottomOpen');
        frontSide.classList.remove('FrontAboutMe_frontSideOpen__zZ41Z');
        element.classList.add('ModalAboutMe_ishidden__5OpwD');
      }
    };

    const onKeyPress = evt => {
      switch (evt.keyCode) {
        case 13:
          if (
            box.classList.contains('torighttwo') ||
            box.classList.contains('tolefttwo')
          ) {
            topSide.classList.remove('box__face--topCLosePortfolio');
            frontSide.classList.remove(
              'FrontAboutMe_frontSideClosePortfolio__KIc2U'
            );
            bottomSide.classList.remove('box__face--bottomClosePortfolio');
            element.classList.remove('ModalContactMe_ishidden__SfNTL');
            leftSide.classList.add('Experience_experienceOpen__BM6ps');
            topSide.classList.add('box__face--topOpen');
            bottomSide.classList.add('box__face--bottomOpen');
            frontSide.classList.add('FrontAboutMe_frontSideOpen__zZ41Z');
            rightSide.classList.add('Portfolio_rightSideOpen__-Niiy');
          }
          break;
        case 27:
          if (
            box.classList.contains('torighttwo') ||
            box.classList.contains('tolefttwo')
          ) {
            rightSide.classList.remove('Portfolio_rightSideOpen__-Niiy');
            leftSide.classList.remove('Experience_experienceOpen__BM6ps');
            topSide.classList.remove('box__face--topOpen');
            bottomSide.classList.remove('box__face--bottomOpen');
            frontSide.classList.remove('FrontAboutMe_frontSideOpen__zZ41Z');
            element.classList.add('ModalContactMe_ishidden__SfNTL');
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
        className={`${styles.backdropContactMe} ${styles.ishidden}`}
        ref={ref}
      >
        <div className={styles.modalContactMe}>
          <div className={styles.box}>
            <div className={styles.textContainer}>
              <h3 className={styles.title}>Contact me</h3>
              <p className={styles.text}>
                plspls pls pls pls pls pls pls pls pls pls pls pls pls pl spls
                pls pls pls pls pls pls pls pls pls pls pls pls plspls pls pls
                pls pls pls pls pls pls pls pls pls pls plspls pls pls pls pls
                pls pls pls pls pls pls pls pls plspls pls pls pls pls pls pls
                pls pls pls pls pls pls plspls pls pls pls pls pls pls pls pls
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
