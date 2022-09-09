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
    const AboutMe__box = document.querySelector('.AboutMe__box');

    function openFrontSide(evt) {
      if (
        evt.target === evt.currentTarget ||
        !evt.target.classList.contains('containerFront')
      ) {
        AboutMe__box.classList.add('third');
        rightSide.classList.remove('rightSideClosePortfolioContact');
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
      <h2 className="mainTitleAbout">
        Hello! <br />
        My name is Val
      </h2>
      <p>"Click" or press "Enter" to read information about me</p>
    </div>
  );
};
