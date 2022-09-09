import { useEffect } from 'react';

export const FrontAboutMe = () => {
  useEffect(() => {
    const backdrop = document.querySelector('.backdropAboutMe');
    const frontSide = document.querySelector('.containerFront');
    frontSide.addEventListener('click', openFrontSide);

    function openFrontSide(evt) {
      if (evt.target !== evt.currentTarget) {
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
