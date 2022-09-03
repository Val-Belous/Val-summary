import { useRef, useEffect } from 'react';
import { FrontAboutMe } from './FrontAboutMe/FrontAboutMe';
import { keysFunc } from 'helpers/keyPressFunc';
import { RightMyProjects } from './RightMyProjects/RightMyProjects';
import { Arrows } from './Arrows/Arrows';
import { ModalAboutMe } from './ModalAboutMe/ModalAboutMe';

export const App = () => {
  const ref = useRef(null);
  useEffect(() => {
    const onKeyPress = evt => {
      keysFunc(element, evt.keyCode);
    };
    let element = ref.current;
    window.addEventListener('keydown', onKeyPress);
    return () => {
      window.removeEventListener('keydown', onKeyPress);
    };
  }, []);

  return (
    <>
      <div className="container">
        {/* <h1 className="maintext">Welcome!</h1> */}
        <div className="scene">
          <div className="box default" id="box" ref={ref}>
            <div className="box__face box__face--back">Back</div>
            <FrontAboutMe />
            <RightMyProjects />
            {/* <div className="box__face box__face--front">Front</div> */}
            <div className="box__face box__face--left">Left</div>
            {/* <div className="box__face box__face--right">Right</div> */}
            <div className="box__face box__face--top"></div>
            <div className="box__face box__face--bottom"></div>
          </div>
        </div>
      </div>
      <Arrows />
      <ModalAboutMe />
    </>
  );
};
