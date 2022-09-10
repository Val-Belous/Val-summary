export const keysFunc = (element, code) => {
  switch (code) {
    case 37:
      if (element.classList.contains('default')) {
        element.classList.remove('default');
        element.classList.add('toleftone');
      } else if (element.classList.contains('torighttwo')) {
        element.classList.remove('torighttwo');
        element.classList.add('toleftthree');
      } else if (element.classList.contains('torightthree')) {
        element.classList.remove('torightthree');
        element.classList.add('tolefttwo');
      } else if (element.classList.contains('torightone')) {
        element.classList.remove('torightone');
        element.classList.remove('default');
        element.classList.add('toleftfour');
      } else if (element.classList.contains('torightfour')) {
        element.classList.remove('torightfour');
        element.classList.add('toleftone');
      } else if (element.classList.contains('toleftone')) {
        element.classList.remove('default');
        element.classList.remove('torightone');
        element.classList.remove('torighttwo');
        element.classList.remove('torightthree');
        element.classList.remove('torightfour');
        element.classList.remove('toleftone');
        element.classList.add('tolefttwo');
      } else if (element.classList.contains('tolefttwo')) {
        element.classList.remove('torightone');
        element.classList.remove('torighttwo');
        element.classList.remove('torightthree');
        element.classList.remove('torightfour');
        element.classList.remove('tolefttwo');
        element.classList.add('toleftthree');
      } else if (element.classList.contains('toleftthree')) {
        element.classList.remove('torightone');
        element.classList.remove('torighttwo');
        element.classList.remove('torightthree');
        element.classList.remove('torightfour');
        element.classList.remove('toleftthree');
        element.classList.add('toleftfour');
      } else if (element.classList.contains('toleftfour')) {
        element.classList.remove('torightone');
        element.classList.remove('torighttwo');
        element.classList.remove('torightthree');
        element.classList.remove('torightfour');
        element.classList.remove('toleftfour');
        element.classList.add('toleftone');
      } else {
        element.classList.add('toleftone');
      }
      break;
    case 39:
      if (element.classList.contains('default')) {
        element.classList.remove('default');
        element.classList.add('torightone');
      } else if (element.classList.contains('toleftfour')) {
        element.classList.remove('toleftfour');
        element.classList.add('torightone');
      } else if (element.classList.contains('toleftthree')) {
        element.classList.remove('toleftthree');
        element.classList.add('torighttwo');
      } else if (element.classList.contains('tolefttwo')) {
        element.classList.remove('tolefttwo');
        element.classList.add('torightthree');
      } else if (element.classList.contains('toleftone')) {
        element.classList.remove('toleftone');
        element.classList.remove('default');
        element.classList.add('torightfour');
      } else if (element.classList.contains('torightone')) {
        element.classList.remove('toleftone');
        element.classList.remove('tolefttwo');
        element.classList.remove('toleftthree');
        element.classList.remove('toleftfour');
        element.classList.remove('torightone');
        element.classList.add('torighttwo');
      } else if (element.classList.contains('torighttwo')) {
        element.classList.remove('toleftone');
        element.classList.remove('tolefttwo');
        element.classList.remove('toleftthree');
        element.classList.remove('toleftfour');
        element.classList.remove('torighttwo');
        element.classList.add('torightthree');
      } else if (element.classList.contains('torightthree')) {
        element.classList.remove('toleftone');
        element.classList.remove('tolefttwo');
        element.classList.remove('toleftthree');
        element.classList.remove('toleftfour');
        element.classList.remove('torightthree');
        element.classList.add('torightfour');
      } else if (element.classList.contains('torightfour')) {
        element.classList.remove('toleftone');
        element.classList.remove('tolefttwo');
        element.classList.remove('toleftthree');
        element.classList.remove('toleftfour');
        element.classList.remove('torightfour');
        element.classList.add('torightone');
      } else {
        element.classList.add('torightone');
      }
      break;
    default:
      return;
  }
};
