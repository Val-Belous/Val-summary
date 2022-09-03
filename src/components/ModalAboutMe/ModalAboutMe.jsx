import styles from './ModalAboutMe.module.css';
import { useRef, useEffect } from 'react';

export const ModalAboutMe = () => {
  const ref = useRef(null);

  useEffect(() => {
    const backdrop = document.querySelector('.ModalAboutMe_backdrop__v1zHC');
    backdrop.addEventListener('click', onHandlerClick);

    function onHandlerClick(evt) {
      if (evt.target === evt.currentTarget) {
        closeBackdrop();
      }
    }

    const box = document.querySelector('.box');

    const closeBackdrop = () => {
      backdrop.classList.add('ModalAboutMe_ishidden__5OpwD');
    };

    const onKeyPress = evt => {
      switch (evt.keyCode) {
        case 13:
          if (
            box.classList.contains('torightfour') ||
            box.classList.contains('default') ||
            box.classList.contains('toleftfour')
          ) {
            element.classList.remove('ModalAboutMe_ishidden__5OpwD');
          }
          break;
        case 27:
          element.classList.add('ModalAboutMe_ishidden__5OpwD');
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
      <div className={`${styles.backdrop} ${styles.ishidden}`} ref={ref}>
        <div className={styles.modal}>
          <h1>HELLO</h1>
        </div>
      </div>
    </>
  );
};
