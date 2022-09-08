import photo from '../../images/myPhoto.JPG';
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
      <h2 className="mainTitle">
        Hello <br /> I'm Val
      </h2>
      <img className="image" src={`.${photo}`} alt="" />
    </div>
  );
};
