import styles from './ModalAboutMe.module.css';
import { useRef, useEffect } from 'react';

export const ModalAboutMe = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector('.ModalAboutMe_backdrop__v1zHC');
    backdrop.addEventListener('click', onHandlerClick);

    function onHandlerClick(evt) {
      if (evt.target === evt.currentTarget) {
        closeBackdrop();
      }
    }

    const box = document.querySelector('.box');
    const leftSide = document.querySelector('.box__face--left');
    const frontSide = document.querySelector(
      '.FrontAboutMe_containerFront__-xEOJ'
    );
    const rightSide = document.querySelector(
      '.RightMyProjects_container__jGLxi'
    );
    const topSide = document.querySelector('.box__face--top');
    const bottomSide = document.querySelector('.box__face--bottom');
    console.log(bottomSide);

    const closeBackdrop = () => {
      backdrop.classList.add('ModalAboutMe_ishidden__5OpwD');
    };

    const onKeyPress = evt => {
      switch (evt.keyCode) {
        case 13:
          if (
            box.classList.contains('torightfour') ||
            box.classList.contains('default') ||
            box.classList.contains('toleftfour')
          ) {
            element.classList.remove('ModalAboutMe_ishidden__5OpwD');
            leftSide.classList.add('box__face--leftOpen');
            topSide.classList.add('box__face--topOpen');
            bottomSide.classList.add('box__face--bottomOpen');
            frontSide.classList.add('FrontAboutMe_frontSideOpen__zZ41Z');
            rightSide.classList.add('RightMyProjects_rightSideOpen__HJWqm');
          }
          break;
        case 27:
          rightSide.classList.remove('RightMyProjects_rightSideOpen__HJWqm');
          leftSide.classList.remove('box__face--leftOpen');
          topSide.classList.remove('box__face--topOpen');
          bottomSide.classList.remove('box__face--bottomOpen');
          frontSide.classList.remove('FrontAboutMe_frontSideOpen__zZ41Z');
          element.classList.add('ModalAboutMe_ishidden__5OpwD');
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
      <div className={`${styles.backdrop} ${styles.ishidden}`} ref={ref}>
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
