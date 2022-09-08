import { useRef, useEffect } from 'react';
export const ModalContactMe = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector('.backdropContactMe');
    backdrop.addEventListener('click', onHandlerClick);

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
        bottomSide.classList.add('box__face--bottomCloseContact');
        bottomSide.classList.remove('box__face--bottomOpenContact');
        topSide.classList.add('box__face--topCloseContact');
        topSide.classList.remove('box__face--topOpenContact');
        leftSide.classList.add('leftSideCloseContact');
        leftSide.classList.remove('leftSideOpenContact');
        rightSide.classList.remove('rightSideOpenPortfolioContact');
        rightSide.classList.add('rightSideClosePortfolioContact');
        element.classList.add('ishiddenContactMe');
        backSide.classList.remove('contactMeOpenContact');
        backSide.classList.add('contactMeCloseContact');
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
            backSide.classList.add('contactMeOpenContact');
            backSide.classList.remove('contactMeCloseContact');
            backSide.classList.remove('contactMeClose');
            rightSide.classList.add('rightSideOpenPortfolioContact');
            rightSide.classList.remove('rightSideClosePortfolioContact');
            leftSide.classList.add('leftSideOpenContact');
            leftSide.classList.remove('leftSideCloseContact');
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
            leftSide.classList.add('leftSideCloseContact');
            leftSide.classList.remove('leftSideOpenContact');
            rightSide.classList.remove('rightSideOpenPortfolioContact');
            rightSide.classList.add('rightSideClosePortfolioContact');
            element.classList.add('ishiddenContactMe');
            backSide.classList.remove('contactMeOpenContact');
            backSide.classList.add('contactMeCloseContact');
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
