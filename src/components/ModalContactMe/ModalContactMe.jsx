import { useRef, useEffect } from 'react';
export const ModalContactMe = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector('.backdropContactMe');
    backdrop && backdrop.addEventListener('click', onHandlerClick);

    function onHandlerClick(evt) {
      if (evt.target === evt.currentTarget) {
        closeBackdrop();
      }
    }

    const box = document.querySelector('.box');
    const leftSide = document.querySelector('.containerLeft');
    const rightSide = document.querySelector('.containerPortfolio');
    const topSide = document.querySelector('.box__face--top');
    const bottomSide = document.querySelector('.box__face--bottom');
    const backSide = document.querySelector('.containerContactMe');

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
        leftSide && leftSide.classList.add('leftSideCloseContact');
        leftSide && leftSide.classList.remove('leftSideOpenContact');
        rightSide &&
          rightSide.classList.remove('rightSideOpenPortfolioContact');
        rightSide && rightSide.classList.add('rightSideClosePortfolioContact');
        element.classList.add('ishiddenContactMe');
        backSide && backSide.classList.remove('contactMeOpenContact');
        backSide && backSide.classList.add('contactMeCloseContact');
      }
    };

    const onKeyPress = evt => {
      switch (evt.keyCode) {
        case 13:
          if (
            box.classList.contains('torighttwo') ||
            box.classList.contains('tolefttwo')
          ) {
            element.classList.remove('ishiddenContactMe');
            backSide && backSide.classList.add('contactMeOpenContact');
            backSide && backSide.classList.remove('contactMeCloseContact');
            backSide && backSide.classList.remove('contactMeClose');
            rightSide &&
              rightSide.classList.add('rightSideOpenPortfolioContact');
            rightSide &&
              rightSide.classList.remove('rightSideClosePortfolioContact');
            leftSide && leftSide.classList.add('leftSideOpenContact');
            leftSide && leftSide.classList.remove('leftSideCloseContact');
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
            leftSide && leftSide.classList.add('leftSideCloseContact');
            leftSide && leftSide.classList.remove('leftSideOpenContact');
            rightSide &&
              rightSide.classList.remove('rightSideOpenPortfolioContact');
            rightSide &&
              rightSide.classList.add('rightSideClosePortfolioContact');
            element.classList.add('ishiddenContactMe');
            backSide && backSide.classList.remove('contactMeOpenContact');
            backSide && backSide.classList.add('contactMeCloseContact');
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
      <div className="backdropContactMe ishiddenContactMe" ref={ref}>
        <div className="modalContactMe">
          <div>
            <div>
              <h3>Contact me</h3>
              <p>
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
