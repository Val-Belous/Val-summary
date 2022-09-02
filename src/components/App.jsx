import { useRef, useEffect } from 'react';
import { FrontAboutMe } from './FrontAboutMe/FrontAboutMe';

export const App = () => {
  const ref = useRef(null);
  useEffect(() => {
    const onKeyPress = evt => {
      switch (evt.keyCode) {
        case 37:
          console.log('lol');
          if (element.classList.contains('toleftone')) {
            element.classList.remove('toleftone');
            element.classList.add('tolefttwo');
          } else if (element.classList.contains('tolefttwo')) {
            element.classList.remove('tolefttwo');
            element.classList.add('toleftthree');
          } else if (element.classList.contains('toleftthree')) {
            element.classList.remove('toleftthree');
            element.classList.add('toleftfour');
          } else if (element.classList.contains('toleftfour')) {
            element.classList.remove('toleftfour');
            element.classList.add('toleftone');
          } else {
            element.classList.add('toleftone');
          }
          break;
        case 38:
          break;
        case 39:
          break;

        default:
          break;
      }
    };
    const element = ref.current;
    window.addEventListener('keydown', onKeyPress);
    return () => {
      window.removeEventListener('keydown', onKeyPress);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="maintext">Welcome!</h1>
      <div className="scene">
        <div className="box" id="box" ref={ref}>
          {/* <FrontAboutMe /> */}
          <div className="box__face box__face--back">Back</div>
          <div className="box__face box__face--front">Front</div>
          <div className="box__face box__face--left">Left</div>
          <div className="box__face box__face--right">Right</div>
          <div className="box__face box__face--top">Top</div>
          <div className="box__face box__face--bottom"></div>
        </div>
      </div>
    </div>
  );
};
