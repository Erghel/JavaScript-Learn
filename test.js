const finalGrade = (exam, projects) => {
   
    if (exam > 90 || projects > 10) {
        return 100; // вы сдали экзамен ана 100 баллов (оценка 5) 
    } else if (exam > 75 && projects >= 5) {
        return 75; // вы сдали экзамен на 75 баллов (оценка 4) 
    } else if (exam > 50 && projects >= 2) {
        return 50; // вы сдали экзамен на 50 баллов (оценка 3)
    } else {
        return 0; // вы не сдали экзамен (оценка 2) - пересдача 
    }
   
};
console.log(finalGrade(x, y)); // вместо X мы ставим количество баллов за экзамен, а вместо Y мы ставим количество проектов 
