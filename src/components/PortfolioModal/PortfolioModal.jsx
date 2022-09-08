import { useRef, useEffect } from 'react';
import kapustaImage from '../../images/kapusta-preview.PNG';
import filmotekaImage from '../../images/filmoteka-preview.PNG';
import hellenImage from '../../images/hellen-preview.PNG';

export const PortfolioModal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector('.backdropPortfolio');
    backdrop.addEventListener('click', onHandlerClick);

    function onHandlerClick(evt) {
      if (evt.target === evt.currentTarget) {
        closeBackdrop();
      }
    }

    const box = document.querySelector('.box');
    const leftSide = document.querySelector('.containerLeft');
    const frontSide = document.querySelector('.containerFront');
    const rightSide = document.querySelector('.containerPortfolio');
    const topSide = document.querySelector('.box__face--top');
    const bottomSide = document.querySelector('.box__face--bottom');
    const backSide = document.querySelector('.containerContactMe');

    const closeBackdrop = () => {
      if (
        box.classList.contains('torightone') ||
        box.classList.contains('toleftthree')
      ) {
        topSide.classList.remove('box__face--topOpenPortfolio');
        backSide.classList.remove('contactMeOpen');
        rightSide.classList.remove('rightSideOpenPortfolio');

        bottomSide.classList.remove('box__face--bottomOpenPortfolio');
        rightSide.classList.remove('rightSideOpen');
        leftSide.classList.remove('experienceOpen');
        topSide.classList.remove('box__face--topOpen');
        bottomSide.classList.remove('box__face--bottomOpen');
        frontSide.classList.remove('frontSideOpenPortfolio');
        frontSide.classList.add('frontSideClosePortfolio');
        topSide.classList.add('box__face--topCLosePortfolio');
        backSide.classList.add('contactMeClose');

        bottomSide.classList.add('box__face--bottomClosePortfolio');
        element.classList.add('ishiddenPortfolio');
        rightSide.classList.add('rightSideClosePortfolio');
      }
    };
    const onKeyPress = evt => {
      switch (evt.keyCode) {
        case 13:
          if (
            box.classList.contains('torightone') ||
            box.classList.contains('toleftthree')
          ) {
            bottomSide.classList.remove('box__face--bottomCloseContact');
            topSide.classList.remove('box__face--topCloseContact');
            leftSide.classList.remove('leftSideCloseContact');
            rightSide.classList.remove('rightSideClosePortfolioContact');
            backSide.classList.remove('contactMeCloseContact');
            frontSide.classList.remove('frontSideClosePortfolioExp');
            bottomSide.classList.remove('box__face--bottomCloseExp');
            topSide.classList.remove('box__face--topCloseExp');
            backSide.classList.remove('contactMeCloseExp');
            leftSide.classList.remove('leftSideCloseExp');
            topSide.classList.remove('box__face--topCLosePortfolio');
            topSide.classList.add('box__face--topOpenPortfolio');
            backSide.classList.remove('contactMeClose');
            backSide.classList.add('contactMeOpen');
            element.classList.remove('ishiddenPortfolio');
            bottomSide.classList.add('box__face--bottomOpenPortfolio');
            bottomSide.classList.remove('box__face--bottomClosePortfolio');
            frontSide.classList.add('frontSideOpenPortfolio');
            frontSide.classList.remove('frontSideClosePortfolio');
            rightSide.classList.add('rightSideOpenPortfolio');
          }
          rightSide.classList.remove('rightSideClosePortfolio');
          break;
        case 27:
          if (
            box.classList.contains('torightone') ||
            box.classList.contains('toleftthree')
          ) {
            topSide.classList.remove('box__face--topOpenPortfolio');
            backSide.classList.remove('contactMeOpen');
            rightSide.classList.remove('rightSideOpenPortfolio');
            bottomSide.classList.remove('box__face--bottomOpenPortfolio');
            rightSide.classList.remove('rightSideOpen');
            leftSide.classList.remove('experienceOpen');
            topSide.classList.remove('box__face--topOpen');
            bottomSide.classList.remove('box__face--bottomOpen');
            frontSide.classList.remove('frontSideOpenPortfolio');
            frontSide.classList.add('frontSideClosePortfolio');
            topSide.classList.add('box__face--topCLosePortfolio');
            backSide.classList.add('contactMeClose');
            bottomSide.classList.add('box__face--bottomClosePortfolio');
            element.classList.add('ishiddenPortfolio');
            rightSide.classList.add('rightSideClosePortfolio');
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
      <div className="backdropPortfolio ishiddenPortfolio" ref={ref}>
        <div className="modalPortfolio">
          <div>
            <div>
              <ul className="list">
                <li className="listItem">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://kapusta-project-app.netlify.app/"
                  >
                    <img className="itemImage" src={kapustaImage} alt="" />
                    <div className="listItemBox">
                      <p>[HTML, CSS, React, Redux, Formik, Chart.js]</p>
                      <p>
                        A app with a responsive layout. For finance management.
                        Worked with Chart.js logic and styles.
                      </p>
                      <p>Position: Developer</p>
                    </div>
                  </a>
                </li>
                <li className="listItem">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://jasper935.github.io/filmoteka-project/"
                  >
                    <img className="itemImage" src={filmotekaImage} alt="" />
                    <div className="listItemBox">
                      <p>[HTML, CSS, React, Redux, Formik, Chart.js]</p>
                      <p>
                        A app with a responsive layout. For finance management.
                        Worked with Chart.js logic and styles.
                      </p>
                      <p>Position: Developer</p>
                    </div>
                  </a>
                </li>
                <li className="listItem">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://mr-nihility.github.io/pixel_hunters_project/"
                  >
                    <img className="itemImage" src={hellenImage} alt="" />
                    <div className="listItemBox">
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
