import { useRef, useEffect } from 'react';
export const ModalExperience = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector('.backdropExperience');
    backdrop && backdrop.addEventListener('click', onHandlerClick);

    function onHandlerClick(evt) {
      if (evt.target === evt.currentTarget) {
        closeBackdrop();
      }
    }

    const box = document.querySelector('.box');
    const leftSide = document.querySelector('.containerLeft');
    const frontSide = document.querySelector('.containerFront');
    const topSide = document.querySelector('.box__face--top');
    const bottomSide = document.querySelector('.box__face--bottom');
    const backSide = document.querySelector('.containerContactMe');
    const rightSide = document.querySelector('.containerPortfolio');

    const closeBackdrop = () => {
      if (
        box.classList.contains('toleftone') ||
        box.classList.contains('torightthree')
      ) {
        bottomSide && bottomSide.classList.add('box__face--bottomCloseExp');
        bottomSide && bottomSide.classList.remove('box__face--bottomOpenExp');
        topSide && topSide.classList.remove('box__face--topOpenExp');
        topSide && topSide.classList.add('box__face--topCloseExp');
        frontSide && frontSide.classList.remove('frontSideOpenPortfolioExp');
        frontSide && frontSide.classList.add('frontSideClosePortfolioExp');
        leftSide && leftSide.classList.remove('leftSideOpenEx');
        backSide && backSide.classList.remove('contactMeOpenExp');
        backSide && backSide.classList.add('contactMeCloseExp');
        element.classList.add('ishidden');
        leftSide && leftSide.classList.add('leftSideCloseExp');
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
            leftSide && leftSide.classList.remove('leftSideCloseContact');
            rightSide &&
              rightSide.classList.remove('rightSideClosePortfolioContact');
            backSide && backSide.classList.remove('contactMeCloseContact');
            element.classList.remove('ishidden');
            leftSide && leftSide.classList.add('leftSideOpenEx');
            leftSide && leftSide.classList.remove('leftSideCloseExp');
            backSide && backSide.classList.add('contactMeOpenExp');
            backSide && backSide.classList.remove('contactMeCloseExp');
            backSide && backSide.classList.remove('contactMeClose');
            frontSide && frontSide.classList.add('frontSideOpenPortfolioExp');
            frontSide &&
              frontSide.classList.remove('frontSideClosePortfolioExp');
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
              frontSide.classList.remove('frontSideOpenPortfolioExp');
            frontSide && frontSide.classList.add('frontSideClosePortfolioExp');
            leftSide && leftSide.classList.remove('leftSideOpenEx');
            backSide && backSide.classList.remove('contactMeOpenExp');
            backSide && backSide.classList.add('contactMeCloseExp');
            element.classList.add('ishidden');
            leftSide && leftSide.classList.add('leftSideCloseExp');
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
      <div className="backdropExperience ishidden" ref={ref}>
        <div className="modalExperience">
          <div className="box">
            <div className="textContainer">
              <h3 className="title">Contact me</h3>
              <p className="text">
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
