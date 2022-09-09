import { useEffect } from 'react';
export const ContactMe = () => {
  useEffect(() => {
    const backdrop = document.querySelector('.backdropContactMe');
    const currentSide = document.querySelector('.containerContactMe');
    currentSide.addEventListener('click', openCurrentSide);

    const leftSide = document.querySelector('.containerLeft');
    const rightSide = document.querySelector('.containerPortfolio');
    const topSide = document.querySelector('.box__face--top');
    const bottomSide = document.querySelector('.box__face--bottom');
    const backSide = document.querySelector('.containerContactMe');

    function openCurrentSide(evt) {
      if (
        evt.target === evt.currentTarget ||
        !evt.target.classList.contains('containerContactMe')
      ) {
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
        backdrop.classList.remove('ishiddenContactMe');
      }
    }
  }, []);
  return (
    <div className="containerContactMe">
      <h2>Contact Me</h2>
    </div>
  );
};
// contactMeCloseExp
