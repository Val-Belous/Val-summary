import { useRef, useEffect } from 'react';

export const ModalAboutMe = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector('.backdropAboutMe');
    backdrop && backdrop.addEventListener('click', onHandlerClick);

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
        (box && box.classList.contains('torightfour')) ||
        (box && box.classList.contains('default')) ||
        (box && box.classList.contains('toleftfour'))
      ) {
        rightSide &&
          rightSide.classList.remove('rightSideClosePortfolioContact');
        rightSide && rightSide.classList.remove('rightSideOpen');
        leftSide && leftSide.classList.remove('leftSideOpen');
        topSide && topSide.classList.remove('box__face--topOpen');
        bottomSide && bottomSide.classList.remove('box__face--bottomOpen');
        frontSide && frontSide.classList.remove('frontSideOpen');
        element.classList.add('ishiddenAboutMe');
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
            leftSide && leftSide.classList.remove('leftSideCloseContact');
            backSide && backSide.classList.remove('contactMeCloseContact');
            frontSide &&
              frontSide.classList.remove('frontSideClosePortfolioExp');
            bottomSide &&
              bottomSide.classList.remove('box__face--bottomCloseExp');
            topSide && topSide.classList.remove('box__face--topCloseExp');
            leftSide && leftSide.classList.remove('leftSideCloseExp');
            topSide && topSide.classList.remove('box__face--topCLosePortfolio');
            frontSide && frontSide.classList.remove('frontSideClosePortfolio');
            bottomSide &&
              bottomSide.classList.remove('box__face--bottomClosePortfolio');
            element.classList.remove('ishiddenAboutMe');
            leftSide && leftSide.classList.add('leftSideOpen');
            topSide && topSide.classList.add('box__face--topOpen');
            bottomSide && bottomSide.classList.add('box__face--bottomOpen');
            frontSide && frontSide.classList.add('frontSideOpen');
            rightSide && rightSide.classList.add('rightSideOpen');
          }
          break;
        case 27:
          if (
            (box && box.classList.contains('torightfour')) ||
            (box && box.classList.contains('default')) ||
            (box && box.classList.contains('toleftfour'))
          ) {
            rightSide &&
              rightSide.classList.remove('rightSideClosePortfolioContact');
            rightSide && rightSide.classList.remove('rightSideOpen');
            leftSide && leftSide.classList.remove('leftSideOpen');
            topSide && topSide.classList.remove('box__face--topOpen');
            bottomSide && bottomSide.classList.remove('box__face--bottomOpen');
            frontSide && frontSide.classList.remove('frontSideOpen');
            element.classList.add('ishiddenAboutMe');
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
        className="backdropAboutMe ishiddenAboutMe"
        ref={ref}
      >
        <div className="modalAboutMe">
          <div>
            <div>
              <h3>Front-end developer</h3>
              <p>
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
