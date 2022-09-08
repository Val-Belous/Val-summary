import { useRef, useEffect } from 'react';

export const ModalAboutMe = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector('.backdropAboutMe');
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
        box.classList.contains('torightfour') ||
        box.classList.contains('default') ||
        box.classList.contains('toleftfour')
      ) {
        rightSide.classList.remove('rightSideClosePortfolioContact');
        rightSide.classList.remove('rightSideOpen');
        leftSide.classList.remove('leftSideOpen');
        topSide.classList.remove('box__face--topOpen');
        bottomSide.classList.remove('box__face--bottomOpen');
        frontSide.classList.remove('frontSideOpen');
        element.classList.add('ishiddenAboutMe');
      }
    };

    const onKeyPress = evt => {
      switch (evt.keyCode) {
        case 13:
          if (
            box.classList.contains('torightfour') ||
            box.classList.contains('default') ||
            box.classList.contains('toleftfour')
          ) {
            bottomSide.classList.remove('box__face--bottomCloseContact');
            topSide.classList.remove('box__face--topCloseContact');
            leftSide.classList.remove('leftSideCloseContact');
            backSide.classList.remove('contactMeCloseContact');

            frontSide.classList.remove('frontSideClosePortfolioExp');

            bottomSide.classList.remove('box__face--bottomCloseExp');
            topSide.classList.remove('box__face--topCloseExp');
            leftSide.classList.remove('leftSideCloseExp');
            topSide.classList.remove('box__face--topCLosePortfolio');
            frontSide.classList.remove('frontSideClosePortfolio');

            bottomSide.classList.remove('box__face--bottomClosePortfolio');
            element.classList.remove('ishiddenAboutMe');
            leftSide.classList.add('leftSideOpen');
            topSide.classList.add('box__face--topOpen');
            bottomSide.classList.add('box__face--bottomOpen');
            frontSide.classList.add('frontSideOpen');
            rightSide.classList.add('rightSideOpen');
          }
          break;
        case 27:
          if (
            box.classList.contains('torightfour') ||
            box.classList.contains('default') ||
            box.classList.contains('toleftfour')
          ) {
            rightSide.classList.remove('rightSideClosePortfolioContact');
            rightSide.classList.remove('rightSideOpen');
            leftSide.classList.remove('leftSideOpen');
            topSide.classList.remove('box__face--topOpen');
            bottomSide.classList.remove('box__face--bottomOpen');
            frontSide.classList.remove('frontSideOpen');
            element.classList.add('ishiddenAboutMe');
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
