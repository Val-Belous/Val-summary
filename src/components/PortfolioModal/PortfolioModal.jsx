import styles from './PortfolioModal.module.css';
import { useRef, useEffect } from 'react';
import kapustaImage from '../../images/kapusta-preview.PNG';
import filmotekaImage from '../../images/filmoteka-preview.PNG';
import hellenImage from '../../images/hellen-preview.PNG';

export const PortfolioModal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector('.PortfolioModal_backdrop__XXUZr');
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
        box.classList.contains('torightone') ||
        box.classList.contains('toleftthree')
      ) {
        topSide && topSide.classList.remove('box__face--topOpenPortfolio');
        backSide && backSide.classList.remove('ContactMe_contactMeOpen__aZkxe');
        rightSide &&
          rightSide.classList.remove('Portfolio_rightSideOpenPortfolio__07BAa');
        bottomSide &&
          bottomSide.classList.remove('box__face--bottomOpenPortfolio');
        rightSide &&
          rightSide.classList.remove('Portfolio_rightSideOpen__-Niiy');
        leftSide &&
          leftSide.classList.remove('Experience_experienceOpen__BM6ps');
        topSide && topSide.classList.remove('box__face--topOpen');
        bottomSide && bottomSide.classList.remove('box__face--bottomOpen');
        frontSide &&
          frontSide.classList.remove(
            'FrontAboutMe_frontSideOpenPortfolio__Nptph'
          );
        frontSide &&
          frontSide.classList.add(
            'FrontAboutMe_frontSideClosePortfolio__KIc2U'
          );
        topSide && topSide.classList.add('box__face--topCLosePortfolio');
        backSide && backSide.classList.add('ContactMe_contactMeClose__mMKHM');
        bottomSide &&
          bottomSide.classList.add('box__face--bottomClosePortfolio');
        element.classList.add('PortfolioModal_ishidden__WK0Ud');
        rightSide &&
          rightSide.classList.add('Portfolio_rightSideClosePortfolio__zI+2E');
      }
    };
    const onKeyPress = evt => {
      switch (evt.keyCode) {
        case 13:
          if (
            box.classList.contains('torightone') ||
            box.classList.contains('toleftthree')
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
            frontSide &&
              frontSide.classList.remove(
                'FrontAboutMe_frontSideClosePortfolioExp__dkVzp'
              );
            bottomSide &&
              bottomSide.classList.remove('box__face--bottomCloseExp');
            topSide && topSide.classList.remove('box__face--topCloseExp');
            backSide &&
              backSide.classList.remove('ContactMe_contactMeCloseExp__wYUv1');
            leftSide &&
              leftSide.classList.remove('Experience_leftSideCloseExp__Lg-qj');
            topSide && topSide.classList.remove('box__face--topCLosePortfolio');
            topSide && topSide.classList.add('box__face--topOpenPortfolio');
            backSide &&
              backSide.classList.remove('ContactMe_contactMeClose__mMKHM');
            backSide &&
              backSide.classList.add('ContactMe_contactMeOpen__aZkxe');
            element.classList.remove('PortfolioModal_ishidden__WK0Ud');
            bottomSide &&
              bottomSide.classList.add('box__face--bottomOpenPortfolio');
            bottomSide &&
              bottomSide.classList.remove('box__face--bottomClosePortfolio');
            frontSide &&
              frontSide.classList.add(
                'FrontAboutMe_frontSideOpenPortfolio__Nptph'
              );
            frontSide &&
              frontSide.classList.remove(
                'FrontAboutMe_frontSideClosePortfolio__KIc2U'
              );
            rightSide &&
              rightSide.classList.add(
                'Portfolio_rightSideOpenPortfolio__07BAa'
              );
          }
          rightSide &&
            rightSide.classList.remove(
              'Portfolio_rightSideClosePortfolio__zI+2E'
            );
          break;
        case 27:
          if (
            box.classList.contains('torightone') ||
            box.classList.contains('toleftthree')
          ) {
            topSide && topSide.classList.remove('box__face--topOpenPortfolio');
            backSide &&
              backSide.classList.remove('ContactMe_contactMeOpen__aZkxe');
            rightSide &&
              rightSide.classList.remove(
                'Portfolio_rightSideOpenPortfolio__07BAa'
              );
            bottomSide &&
              bottomSide.classList.remove('box__face--bottomOpenPortfolio');
            rightSide &&
              rightSide.classList.remove('Portfolio_rightSideOpen__-Niiy');
            leftSide &&
              leftSide.classList.remove('Experience_experienceOpen__BM6ps');
            topSide && topSide.classList.remove('box__face--topOpen');
            bottomSide && bottomSide.classList.remove('box__face--bottomOpen');
            frontSide &&
              frontSide.classList.remove(
                'FrontAboutMe_frontSideOpenPortfolio__Nptph'
              );
            frontSide &&
              frontSide.classList.add(
                'FrontAboutMe_frontSideClosePortfolio__KIc2U'
              );
            topSide && topSide.classList.add('box__face--topCLosePortfolio');
            backSide &&
              backSide.classList.add('ContactMe_contactMeClose__mMKHM');
            bottomSide &&
              bottomSide.classList.add('box__face--bottomClosePortfolio');
            element.classList.add('PortfolioModal_ishidden__WK0Ud');
            rightSide &&
              rightSide.classList.add(
                'Portfolio_rightSideClosePortfolio__zI+2E'
              );
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
      <div className={`${styles.backdrop} ${styles.ishidden}`} ref={ref}>
        <div className={styles.modal}>
          <div className={styles.box}>
            <div className={styles.textContainer}>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    className={styles.listItemLink}
                    href="https://kapusta-project-app.netlify.app/"
                  >
                    <img
                      className={styles.itemImage}
                      src={kapustaImage}
                      alt=""
                    />
                    <div className={styles.listItemBox}>
                      <p>[HTML, CSS, React, Redux, Formik, Chart.js]</p>
                      <p>
                        A app with a responsive layout. For finance management.
                        Worked with Chart.js logic and styles.
                      </p>
                      <p>Position: Developer</p>
                    </div>
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    className={styles.listItemLink}
                    href="https://jasper935.github.io/filmoteka-project/"
                  >
                    <img
                      className={styles.itemImage}
                      src={filmotekaImage}
                      alt=""
                    />
                    <div className={styles.listItemBox}>
                      <p>[HTML, CSS, React, Redux, Formik, Chart.js]</p>
                      <p>
                        A app with a responsive layout. For finance management.
                        Worked with Chart.js logic and styles.
                      </p>
                      <p>Position: Developer</p>
                    </div>
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    className={styles.listItemLink}
                    href="https://mr-nihility.github.io/pixel_hunters_project/"
                  >
                    <img
                      className={styles.itemImage}
                      src={hellenImage}
                      alt=""
                    />
                    <div className={styles.listItemBox}>
                      <p>[HTML, CSS, React, Redux, Formik, Chart.js]</p>
                      <p>
                        A app with a responsive layout. For finance management.
                        Worked with Chart.js logic and styles.
                      </p>
                      <p>Position: Developer</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
