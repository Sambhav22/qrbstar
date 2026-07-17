export const chapter = "Chapter - 23: State Government";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const optionKeys = ["optionA", "optionB", "optionC", "optionD"];
  const optionsArray = optionKeys
    .map((key) => object[key])
    .filter((option) => option !== undefined);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  optionKeys.forEach((key, index) => {
    if (index < optionsArray.length) {
      object[key] = optionsArray[index];
    } else {
      delete object[key];
    }
  });

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Which organ of the state is responsible for interpreting the laws made by the legislature?",
        optionA: "State Executive",
        optionB: "State Judiciary",
        optionC: "Council of Ministers",
        correctAnswer: "State Judiciary",
      }),
      shuffleOptions({
        question: "Who appoints the Chief Minister after a state election?",
        optionA: "High Court Judge",
        optionB: "Governor",
        optionC: "President",
        correctAnswer: "Governor",
      }),
      shuffleOptions({
        question: "Which house of the state legislature is a permanent body?",
        optionA: "Vidhan Sabha",
        optionB: "Gram Sabha",
        optionC: "Vidhan Parishad (Legislative Council)",
        correctAnswer: "Vidhan Parishad (Legislative Council)",
      }),
      shuffleOptions({
        question: "Who presides over the meetings of the Vidhan Sabha?",
        optionA: "Chief Minister",
        optionB: "Speaker",
        optionC: "Chairman",
        correctAnswer: "Speaker",
      }),
      shuffleOptions({
        question: "Which list includes subjects like police, agriculture and fisheries?",
        optionA: "Union List",
        optionB: "State List",
        optionC: "Concurrent List",
        correctAnswer: "State List",
      }),
      shuffleOptions({
        question: "Who assigns different portfolios to the ministers in the state?",
        optionA: "Chief Minister",
        optionB: "Speaker",
        optionC: "Governor",
        correctAnswer: "Chief Minister",
      }),
      shuffleOptions({
        question: "Who administers the oath of office to the Chief Minister?",
        optionA: "President",
        optionB: "Governor",
        optionC: "Chief Justice",
        correctAnswer: "Governor",
      }),
      shuffleOptions({
        question: "Which group of people elects the MLAs?",
        optionA: "Local bodies",
        optionB: "Registered voters of the state",
        optionC: "Teachers and graduates",
        correctAnswer: "Registered voters of the state",
      }),
      shuffleOptions({
        question: "Who can dissolve the Vidhan Sabha before its term is over (on advice)?",
        optionA: "Governor",
        optionB: "Speaker",
        optionC: "Prime Minister",
        correctAnswer: "Governor",
      }),
      shuffleOptions({
        question: "Who heads the Council of Ministers in the state?",
        optionA: "Governor",
        optionB: "Chief Minister",
        optionC: "President",
        correctAnswer: "Chief Minister",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Governor of a state holds office for ________.",
        optionA: "four years",
        optionB: "five years",
        optionC: "six years",
        correctAnswer: "five years",
      }),
      shuffleOptions({
        question: "A High Court judge serves up to the age of ________.",
        optionA: "58 years",
        optionB: "60 years",
        optionC: "62 years",
        correctAnswer: "62 years",
      }),
      shuffleOptions({
        question: "The Vidhan Sabha is the ________ house of the state legislature.",
        optionA: "lower",
        optionB: "upper",
        optionC: "nominated",
        correctAnswer: "lower",
      }),
      shuffleOptions({
        question: "The Governor appoints the Council of Ministers on the advice of the ________.",
        optionA: "Chief Minister",
        optionB: "President",
        optionC: "Speaker",
        correctAnswer: "Chief Minister",
      }),
      shuffleOptions({
        question: "Money bills must first be introduced in the ________.",
        optionA: "Vidhan Parishad",
        optionB: "Vidhan Sabha",
        optionC: "High Court",
        correctAnswer: "Vidhan Sabha",
      }),
      shuffleOptions({
        question: "The State List contains subjects like ________.",
        optionA: "defence",
        optionB: "foreign affairs",
        optionC: "land revenue",
        correctAnswer: "land revenue",
      }),
      shuffleOptions({
        question: "The Vidhan Parishad members retire after every ________ years in rotation.",
        optionA: "2 years",
        optionB: "3 years",
        optionC: "6 years",
        correctAnswer: "2 years",
      }),
      shuffleOptions({
        question: "The Governor is the ________ head of the state.",
        optionA: "real",
        optionB: "nominal",
        optionC: "political",
        correctAnswer: "nominal",
      }),
      shuffleOptions({
        question: "The High Court has the power to issue ________ for the protection of Fundamental Rights.",
        optionA: "ordinances",
        optionB: "writs",
        optionC: "budgets",
        correctAnswer: "writs",
      }),
      shuffleOptions({
        question: "The legislative council cannot exceed ________ of the Vidhan Sabha’s strength.",
        optionA: "one-third",
        optionB: "half",
        optionC: "one-fourth",
        correctAnswer: "one-third",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Vidhan Parishad is not directly elected by the people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Governor can withhold assent to a bill passed by the state legislature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Chief Minister is not the real executive head of the state.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Legislative Council members are appointed only by the Governor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The High Court supervises the lower courts of the state.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Governor can recommend President’s Rule if the state is not functioning as per the Constitution.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Every Indian state has both a Vidhan Sabha and a Vidhan Parishad.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Council of Ministers remains in office only if it enjoys the confidence of the Vidhan Sabha.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Governor is appointed by the Chief Minister.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A money bill can be delayed by the Vidhan Parishad for three months in the first instance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
