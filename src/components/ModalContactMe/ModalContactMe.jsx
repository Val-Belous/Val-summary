import styles from './ModalContactMe.module.css';
import { useRef, useEffect } from 'react';
export const ModalContactMe = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector(
      '.ModalContactMe_backdropContactMe__MDbbj'
    );
    backdrop && backdrop.addEventListener('click', onHandlerClick);

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
        bottomSide && bottomSide.classList.add('box__face--bottomCloseContact');
        bottomSide &&
          bottomSide.classList.remove('box__face--bottomOpenContact');
        topSide && topSide.classList.add('box__face--topCloseContact');
        topSide && topSide.classList.remove('box__face--topOpenContact');
        leftSide &&
          leftSide.classList.add('Experience_leftSideCloseContact__fHPr+');
        leftSide &&
          leftSide.classList.remove('Experience_leftSideOpenContact__8qQe1');
        rightSide &&
          rightSide.classList.remove(
            'Portfolio_rightSideOpenPortfolioContact__k4rNa'
          );
        rightSide &&
          rightSide.classList.add(
            'Portfolio_rightSideClosePortfolioContact__AvV+Z'
          );
        element.classList.add('ModalContactMe_ishidden__SfNTL');
        backSide &&
          backSide.classList.remove('ContactMe_contactMeOpenContact__mrvlU');
        backSide &&
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
            backSide &&
              backSide.classList.add('ContactMe_contactMeOpenContact__mrvlU');
            backSide &&
              backSide.classList.remove(
                'ContactMe_contactMeCloseContact__UVuMg'
              );
            backSide &&
              backSide.classList.remove('ContactMe_contactMeClose__mMKHM');
            rightSide &&
              rightSide.classList.add(
                'Portfolio_rightSideOpenPortfolioContact__k4rNa'
              );
            rightSide &&
              rightSide.classList.remove(
                'Portfolio_rightSideClosePortfolioContact__AvV+Z'
              );
            leftSide &&
              leftSide.classList.add('Experience_leftSideOpenContact__8qQe1');
            leftSide &&
              leftSide.classList.remove(
                'Experience_leftSideCloseContact__fHPr+'
              );
            topSide && topSide.classList.add('box__face--topOpenContact');
            topSide && topSide.classList.remove('box__face--topCloseContact');
            bottomSide &&
              bottomSide.classList.add('box__face--bottomOpenContact');
            bottomSide &&
              bottomSide.classList.remove('box__face--bottomCloseContact');
          }
          break;
        case 27:
          if (
            box.classList.contains('torighttwo') ||
            box.classList.contains('tolefttwo')
          ) {
            bottomSide &&
              bottomSide.classList.add('box__face--bottomCloseContact');
            bottomSide &&
              bottomSide.classList.remove('box__face--bottomOpenContact');
            topSide && topSide.classList.add('box__face--topCloseContact');
            topSide && topSide.classList.remove('box__face--topOpenContact');
            leftSide &&
              leftSide.classList.add('Experience_leftSideCloseContact__fHPr+');
            leftSide &&
              leftSide.classList.remove(
                'Experience_leftSideOpenContact__8qQe1'
              );
            rightSide &&
              rightSide.classList.remove(
                'Portfolio_rightSideOpenPortfolioContact__k4rNa'
              );
            rightSide &&
              rightSide.classList.add(
                'Portfolio_rightSideClosePortfolioContact__AvV+Z'
              );
            element.classList.add('ModalContactMe_ishidden__SfNTL');
            backSide &&
              backSide.classList.remove(
                'ContactMe_contactMeOpenContact__mrvlU'
              );
            backSide &&
              backSide.classList.add('ContactMe_contactMeCloseContact__UVuMg');
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
