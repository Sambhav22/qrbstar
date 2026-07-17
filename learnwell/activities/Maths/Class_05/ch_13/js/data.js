export const chapter = "Chapter - 13: Average";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object;
  const optionsArray = [optionA, optionB, optionC].filter(
    (option) => option !== undefined
  );

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length === 3) {
    object.optionC = optionsArray[2];
  } else {
    delete object.optionC;
  }

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "What do we call the value obtained by dividing the sum of quantities by their number?",
        optionA: "Total",
        optionB: "Average",
        optionC: "Difference",
        correctAnswer: "Average",
      }),
      shuffleOptions({
        question: "What should we do after adding all numbers to find the average?",
        optionA: "Subtract from 100",
        optionB: "Divide by the number of values",
        optionC: "Multiply all values",
        correctAnswer: "Divide by the number of values",
      }),
      shuffleOptions({
        question: "Which quantity is used in finding an average?",
        optionA: "Sum of all values",
        optionB: "Number of values",
        optionC: "Both a and b",
        correctAnswer: "Both a and b",
      }),
      shuffleOptions({
        question: "If three children have weights, what does their average tell us?",
        optionA: "Highest weight",
        optionB: "Middle child’s weight",
        optionC: "Equal share of total weight if distributed fairly",
        correctAnswer: "Equal share of total weight if distributed fairly",
      }),
      shuffleOptions({
        question: "What helps us compare daily attendance in school?",
        optionA: "Calendar",
        optionB: "Average attendance value",
        optionC: "Temperature chart",
        correctAnswer: "Average attendance value",
      }),
      shuffleOptions({
        question: "What does the average temperature of a week show?",
        optionA: "The hottest day",
        optionB: "The coldest day",
        optionC: "The typical temperature for the week",
        correctAnswer: "The typical temperature for the week",
      }),
      shuffleOptions({
        question: "What does a bar graph in this chapter help us compare?",
        optionA: "Sizes of objects",
        optionB: "Number of students present each day",
        optionC: "Names of students",
        correctAnswer: "Number of students present each day",
      }),
      shuffleOptions({
        question: "When the earnings of a shopkeeper vary each day, what does average earning show?",
        optionA: "Lowest earning",
        optionB: "Highest earning",
        optionC: "His daily earning if it were the same each day",
        correctAnswer: "His daily earning if it were the same each day",
      }),
      shuffleOptions({
        question: "What can we find using the heights of all children in a group?",
        optionA: "Their growth rate",
        optionB: "Their average height",
        optionC: "Their weight",
        correctAnswer: "Their average height",
      }),
      shuffleOptions({
        question: "While comparing distances travelled each hour, why do we calculate an average?",
        optionA: "To know the longest distance",
        optionB: "To know the shortest distance",
        optionC: "To know the distance usually travelled each hour",
        correctAnswer: "To know the distance usually travelled each hour",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The average is found by dividing the total ______ by the number of quantities.",
        optionA: "time",
        optionB: "sum",
        optionC: "distance",
        correctAnswer: "sum",
      }),
      shuffleOptions({
        question: "To find the average weight of children, we add all their ______.",
        optionA: "ages",
        optionB: "heights",
        optionC: "weights",
        correctAnswer: "weights",
      }),
      shuffleOptions({
        question: "The average number of students present shows the ______ attendance.",
        optionA: "usual",
        optionB: "lowest",
        optionC: "highest",
        correctAnswer: "usual",
      }),
      shuffleOptions({
        question: "A bar graph helps us compare the ______ for different days.",
        optionA: "colours",
        optionB: "students present",
        optionC: "subjects",
        correctAnswer: "students present",
      }),
      shuffleOptions({
        question: "The average marks help us know the student’s ______ performance.",
        optionA: "single-day",
        optionB: "overall",
        optionC: "worst",
        correctAnswer: "overall",
      }),
      shuffleOptions({
        question: "We find the average when numbers are ______.",
        optionA: "similar",
        optionB: "changing or different",
        optionC: "unknown",
        correctAnswer: "changing or different",
      }),
      shuffleOptions({
        question: "Dividing the total distance by hours gives the ______ distance per hour.",
        optionA: "least",
        optionB: "greatest",
        optionC: "average",
        correctAnswer: "average",
      }),
      shuffleOptions({
        question: "The average height tells us the ______ height of the group.",
        optionA: "usual or typical",
        optionB: "tallest",
        optionC: "shortest",
        correctAnswer: "usual or typical",
      }),
      shuffleOptions({
        question: "The average temperature gives an idea of the ______ weather.",
        optionA: "weekly",
        optionB: "daily",
        optionC: "general or overall",
        correctAnswer: "general or overall",
      }),
      shuffleOptions({
        question: "The average of numbers becomes smaller if the new number added is very ______.",
        optionA: "small",
        optionB: "large",
        optionC: "equal",
        correctAnswer: "small",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The average is always one of the given numbers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "To find the average, we must always add all the numbers first.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The average of many numbers helps us compare data easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In a bar graph, the tallest bar shows the smallest value.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The average gives a fair idea of all values combined.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "If one number becomes much larger, the average increases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Average distance can be found by dividing total distance by time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Average earnings tell us the total earnings of all days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The average height helps compare students’ heights in a group.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "If all numbers are equal, the average will also be the same number.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
