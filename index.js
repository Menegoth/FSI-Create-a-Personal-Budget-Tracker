var weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here

//prompt user with weekly expense questions
for (let i = 0; i < weeklyExpenseQuestions.length; i++){

    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]));
    weeklyExpenses += answer;

}

//prompt user with montly expense questions (backwards)
for (let i = monthlyExpenseQuestions.length - 1; i >= 0; i--){

    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]));
    monthlyExpenses += answer;

}

//prompt user with annual expense questions (while loop)
let count = 0;
while (count < annualExpenseQuestions.length) {

    let answer = parseFloat(window.prompt(annualExpenseQuestions[count]));
    annualExpenses += answer;

    count++

}

console.log(weeklyExpenses, monthlyExpenses, annualExpenses);