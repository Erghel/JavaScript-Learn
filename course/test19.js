let answer;

if (num === 1) {
  answer = "One";
} else if (num === 2) {
  answer = "Two";
} else {
  answer = "Nothing";
}


///////////////////////////////


switch(num) {
  case 1:  // if (num === 1)
    answer = "One";
    break;

  case 2:  // if (num === 2)
    answer = "Two";
    break;

  default:
    answer = "Nothing";
    break;
}




//////////////////////////////


switch(num) {
  case 1:  // if (num === 1)
    answer = "One";
    break;

  case 2:  // if (num === 2)
  case 3:  // if (num === 3)
  case 4:  // if (num === 4)
    answer = "Two to four";
    break;

  default:
    answer = "Nothing";
    break;
}
