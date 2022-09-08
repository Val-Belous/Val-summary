import { useRef, useEffect } from 'react';
export const ModalExperience = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector('.backdropExperience');
    backdrop.addEventListener('click', onHandlerClick);

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
        bottomSide.classList.add('box__face--bottomCloseExp');
        bottomSide.classList.remove('box__face--bottomOpenExp');
        topSide.classList.remove('box__face--topOpenExp');
        topSide.classList.add('box__face--topCloseExp');
        frontSide.classList.remove('frontSideOpenPortfolioExp');
        frontSide.classList.add('frontSideClosePortfolioExp');
        leftSide.classList.remove('leftSideOpenExp');
        backSide.classList.remove('contactMeOpenExp');
        backSide.classList.add('contactMeCloseExp');
        element.classList.add('ishidden');
        leftSide.classList.add('leftSideCloseExp');
      }
    };

    const onKeyPress = evt => {
      switch (evt.keyCode) {
        case 13:
          if (
            box.classList.contains('toleftone') ||
            box.classList.contains('torightthree')
          ) {
            leftSide.classList.add('leftSideOpenExp');
            bottomSide.classList.remove('box__face--bottomCloseContact');
            topSide.classList.remove('box__face--topCloseContact');
            leftSide.classList.remove('leftSideCloseContact');
            rightSide.classList.remove('rightSideClosePortfolioContact');
            backSide.classList.remove('contactMeCloseContact');
            element.classList.remove('ishidden');
            leftSide.classList.remove('leftSideCloseExp');
            backSide.classList.add('contactMeOpenExp');
            backSide.classList.remove('contactMeCloseExp');
            backSide.classList.remove('contactMeClose');
            frontSide.classList.add('frontSideOpenPortfolioExp');
            frontSide.classList.remove('frontSideClosePortfolioExp');
            topSide.classList.add('box__face--topOpenExp');
            topSide.classList.remove('box__face--topCloseExp');
            bottomSide.classList.add('box__face--bottomOpenExp');
            bottomSide.classList.remove('box__face--bottomCloseExp');
          }
          break;
        case 27:
          if (
            box.classList.contains('toleftone') ||
            box.classList.contains('torightthree')
          ) {
            bottomSide.classList.add('box__face--bottomCloseExp');
            bottomSide.classList.remove('box__face--bottomOpenExp');
            topSide.classList.remove('box__face--topOpenExp');
            topSide.classList.add('box__face--topCloseExp');
            frontSide.classList.remove('frontSideOpenPortfolioExp');
            frontSide.classList.add('frontSideClosePortfolioExp');
            leftSide.classList.remove('leftSideOpenExp');
            backSide.classList.remove('contactMeOpenExp');
            backSide.classList.add('contactMeCloseExp');
            element.classList.add('ishidden');
            leftSide.classList.add('leftSideCloseExp');
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
