
export const decrementTime = (time) => {
  let {
    day, h, min, sec
  } = time;

  //
  if (day === 0 && h === 0 && min === 0 && sec === 0) { // counter reach zero
    return time; // retun time with no changes
  } else { // decrementing tim
    //
    sec -= 1;
    if (sec < 0) {
      sec = 59;
      // 
      min -= 1;
      if (min < 0) {
        min = 59;
        //
        h -= 1;
        if (h < 0) {
          h = 59;
          //
          day -= 1;
          if (day < 0) {
            day = 0;
          }
        }
      }
    }
    return {
      day, h, min, sec
    };
  }

};


export const formatTimeDigits = (n) => {
  const formatted = ("00" + n).slice(-2);
  return formatted;
}