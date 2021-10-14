//Задача с курса на закрепление темы рекурсия
const sequenceSum = (begin, end) => {
    if (begin == 0 && end == 0) {
        return 0;
    } else if (begin == end){
        return begin;
    } else if (begin > end){
        return NaN;
    }    
    return begin + sequenceSum(begin + 1, end);  
};
