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
    const rightSide = document.querySelector('.Portfolio_container__hiJ0s');
    const topSide = document.querySelector('.box__face--top');
    const bottomSide = document.querySelector('.box__face--bottom');
    const backSide = document.querySelector(
      '.ContactMe_containerContactMe__kjOIz'
    );

    const closeBackdrop = () => {
      if (
        box.classList.contains('torighttwo') ||
        box.classList.contains('tolefttwo')
      ) {
        bottomSide.classList.add('box__face--bottomCloseContact');
        bottomSide.classList.remove('box__face--bottomOpenContact');
        topSide.classList.add('box__face--topCloseContact');
        topSide.classList.remove('box__face--topOpenContact');
        leftSide.classList.add('Experience_leftSideCloseContact__fHPr+');
        leftSide.classList.remove('Experience_leftSideOpenContact__8qQe1');
        rightSide.classList.remove(
          'Portfolio_rightSideOpenPortfolioContact__k4rNa'
        );
        rightSide.classList.add(
          'Portfolio_rightSideClosePortfolioContact__AvV+Z'
        );
        element.classList.add('ModalContactMe_ishidden__SfNTL');
        backSide.classList.remove('ContactMe_contactMeOpenContact__mrvlU');
        backSide.classList.add('ContactMe_contactMeCloseContact__UVuMg');
      }
    };

    const onKeyPress = evt => {
      switch (evt.keyCode) {
        case 13:
          if (
            box.classList.contains('torighttwo') ||
            box.classList.contains('tolefttwo')
          ) {
            element.classList.remove('ModalContactMe_ishidden__SfNTL');
            backSide.classList.add('ContactMe_contactMeOpenContact__mrvlU');
            backSide.classList.remove('ContactMe_contactMeCloseContact__UVuMg');
            backSide.classList.remove('ContactMe_contactMeClose__mMKHM');
            rightSide.classList.add(
              'Portfolio_rightSideOpenPortfolioContact__k4rNa'
            );
            rightSide.classList.remove(
              'Portfolio_rightSideClosePortfolioContact__AvV+Z'
            );
            leftSide.classList.add('Experience_leftSideOpenContact__8qQe1');
            leftSide.classList.remove('Experience_leftSideCloseContact__fHPr+');
            topSide.classList.add('box__face--topOpenContact');
            topSide.classList.remove('box__face--topCloseContact');
            bottomSide.classList.add('box__face--bottomOpenContact');
            bottomSide.classList.remove('box__face--bottomCloseContact');
          }
          break;
        case 27:
          if (
            box.classList.contains('torighttwo') ||
            box.classList.contains('tolefttwo')
          ) {
            bottomSide.classList.add('box__face--bottomCloseContact');
            bottomSide.classList.remove('box__face--bottomOpenContact');
            topSide.classList.add('box__face--topCloseContact');
            topSide.classList.remove('box__face--topOpenContact');
            leftSide.classList.add('Experience_leftSideCloseContact__fHPr+');
            leftSide.classList.remove('Experience_leftSideOpenContact__8qQe1');
            rightSide.classList.remove(
              'Portfolio_rightSideOpenPortfolioContact__k4rNa'
            );
            rightSide.classList.add(
              'Portfolio_rightSideClosePortfolioContact__AvV+Z'
            );
            element.classList.add('ModalContactMe_ishidden__SfNTL');
            backSide.classList.remove('ContactMe_contactMeOpenContact__mrvlU');
            backSide.classList.add('ContactMe_contactMeCloseContact__UVuMg');
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
