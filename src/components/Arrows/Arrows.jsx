import svg from '../../images/symbol-defs.svg';
import { keysFunc } from 'helpers/keyPressFunc';

export const Arrows = ({ el }) => {
  function onClickLeftArrow() {
    keysFunc(el, 37);
  }
  function onClickRightArrow() {
    keysFunc(el, 39);
  }

  return (
    <>
      <div className="arrow-container">
        <h1 className="arrow__title">Use keyboard:</h1>
        <div className="arrow-box">
          <svg
            className="arrows arrow-left"
            height="50"
            width="50"
            onClick={onClickLeftArrow}
          >
            <use href={`${svg}#icon-arrow-left`}></use>
          </svg>
          <svg className="arrows enter" height="50" width="50">
            <use href={`${svg}#icon-enter`}></use>
          </svg>
          <svg
            className="arrows arrow-right"
            height="50"
            width="50"
            onClick={onClickRightArrow}
          >
            <use href={`${svg}#icon-arrow-right`}></use>
          </svg>
        </div>
      </div>
    </>
  );
};
