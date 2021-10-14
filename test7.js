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

// Задача для меня была немного сложна, так как входных значения было два, а тема урока (курса, etc) была про вход с оодним значением.
//const sequenceSum = (begin, end) => {
//    if (begin == begin && end == end) {
//       return begin;
//    } else if (begin > end){
//        return NaN;
//    }    
//    return begin + sequenceSum(begin + 1, end);  
//};
//Тут можно увидеть мои ошибки в начале, мне помог учебник по JS и SO, где нашел отдаленно похожие задачи 
