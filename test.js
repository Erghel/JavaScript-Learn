const finalGrade = (exam, projects) => {
   
    if (exam > 90 || projects > 10) {
        return 100;
    } else if (exam > 75 && projects >= 5) {
        return 90;
    } else if (exam > 50 && projects >= 2) {
        return 75;
    } else {
        return 0;
    }
   
};
console.log(finalGrade(x, y)); // вместо X мы ставим количество баллов за экзамен, а вместо Y мы ставим количество проектов 
