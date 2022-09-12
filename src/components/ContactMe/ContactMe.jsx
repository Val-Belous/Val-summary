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
    const ContactMe__box = document.querySelector('.modalContactMe__box');

    function openCurrentSide(evt) {
      if (
        evt.target === evt.currentTarget ||
        !evt.target.classList.contains('containerContactMe')
      ) {
        ContactMe__box.classList.add('third');
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
      <p className="About-text__desktop">
        "Click" or press "Enter" for details
      </p>
      <p className="About-text__mobile">"Tap" for details</p>
    </div>
  );
};
// contactMeCloseExp
