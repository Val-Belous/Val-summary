import { useEffect } from 'react';

export const FrontAboutMe = () => {
  useEffect(() => {
    const backdrop = document.querySelector('.backdropAboutMe');
    const currentSide = document.querySelector('.containerFront');
    currentSide.addEventListener('click', openFrontSide);

    const leftSide = document.querySelector('.containerLeft');
    const frontSide = document.querySelector('.containerFront');
    const rightSide = document.querySelector('.containerPortfolio');
    const topSide = document.querySelector('.box__face--top');
    const bottomSide = document.querySelector('.box__face--bottom');
    const backSide = document.querySelector('.containerContactMe');
    const boxAboutMeFirst = document.querySelector('.boxAboutMeFirst');
    const boxAboutMeSecond = document.querySelector('.boxAboutMeSecond');
    const boxAboutMeThird = document.querySelector('.boxAboutMeThird');
    const boxAboutMeFour = document.querySelector('.boxAboutMeFour');

    function openFrontSide(evt) {
      if (evt.target !== evt.currentTarget) {
        boxAboutMeFirst.classList.add('first');
        boxAboutMeSecond.classList.add('second');
        boxAboutMeThird.classList.add('third');
        boxAboutMeFour.classList.add('four');
        // ======
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
        leftSide.classList.add('leftSideOpen');
        topSide.classList.add('box__face--topOpen');
        bottomSide.classList.add('box__face--bottomOpen');
        frontSide.classList.add('frontSideOpen');
        rightSide.classList.add('rightSideOpen');
        rightSide.classList.remove('rightSideClosePortfolio');
        backdrop.classList.remove('ishiddenAboutMe');
      }
    }
  }, []);

  return (
    <div className="containerFront">
      <h2 className="mainTitle">Hello!</h2>
      <h3>My name is Val</h3>
      <p>Press "Enter" to read information about me</p>
    </div>
  );
};
