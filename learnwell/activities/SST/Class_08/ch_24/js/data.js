export const chapter = "Chapter - 24: The Judiciary";
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
        question: "Who appoints the Chief Justice of India?",
        optionA: "Prime Minister",
        optionB: "President",
        optionC: "Speaker of Lok Sabha",
        correctAnswer: "President",
      }),
      shuffleOptions({
        question: "Which court is the highest criminal court at the district level?",
        optionA: "Sessions Court",
        optionB: "Civil Court",
        optionC: "Revenue Court",
        correctAnswer: "Sessions Court",
      }),
      shuffleOptions({
        question: "Which body can strike down laws that violate the Constitution?",
        optionA: "Election Commission",
        optionB: "Supreme Court",
        optionC: "State Legislature",
        correctAnswer: "Supreme Court",
      }),
      shuffleOptions({
        question: "Which court deals with cases like property disputes and rent matters?",
        optionA: "Civil Court",
        optionB: "High Court",
        optionC: "Lok Adalat",
        correctAnswer: "Civil Court",
      }),
      shuffleOptions({
        question: "Who presides over the Lok Adalats?",
        optionA: "Governor",
        optionB: "Retired judicial officer",
        optionC: "Police Superintendent",
        correctAnswer: "Retired judicial officer",
      }),
      shuffleOptions({
        question: "Which court has the power to issue writs for Fundamental Rights?",
        optionA: "Supreme Court",
        optionB: "District Court",
        optionC: "Revenue Court",
        correctAnswer: "Supreme Court",
      }),
      shuffleOptions({
        question: "Which High Court is common for Punjab and Haryana?",
        optionA: "Delhi High Court",
        optionB: "Chandigarh High Court",
        optionC: "Allahabad High Court",
        correctAnswer: "Chandigarh High Court",
      }),
      shuffleOptions({
        question: "Which court handles cases of theft and murder?",
        optionA: "Criminal Court",
        optionB: "Civil Court",
        optionC: "Revenue Court",
        correctAnswer: "Criminal Court",
      }),
      shuffleOptions({
        question: "What is the topmost revenue court in a district?",
        optionA: "Court of the Collector",
        optionB: "Sessions Court",
        optionC: "Panchayat Court",
        correctAnswer: "Court of the Collector",
      }),
      shuffleOptions({
        question: "Who can appeal to a higher court if they feel justice was not done?",
        optionA: "Only the government",
        optionB: "Any party involved in the case",
        optionC: "Only police",
        correctAnswer: "Any party involved in the case",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The judiciary protects the _________ Rights of citizens.",
        optionA: "Directive",
        optionB: "Fundamental",
        optionC: "Economic",
        correctAnswer: "Fundamental",
      }),
      shuffleOptions({
        question: "Appeals from the High Court go to the ________ Court.",
        optionA: "Supreme",
        optionB: "Revenue",
        optionC: "Sessions",
        correctAnswer: "Supreme",
      }),
      shuffleOptions({
        question: "Criminal cases usually begin with filing an ________.",
        optionA: "MLA report",
        optionB: "FIR",
        optionC: "Appeal",
        correctAnswer: "FIR",
      }),
      shuffleOptions({
        question: "Judges of the Supreme Court retire at the age of ________.",
        optionA: "60",
        optionB: "65",
        optionC: "70",
        correctAnswer: "65",
      }),
      shuffleOptions({
        question: "Lok Adalats help in providing quick and ________ justice.",
        optionA: "Expensive",
        optionB: "Cheap",
        optionC: "Delayed",
        correctAnswer: "Cheap",
      }),
      shuffleOptions({
        question: "The court system in India works at ________ levels.",
        optionA: "Three",
        optionB: "Four",
        optionC: "Five",
        correctAnswer: "Three",
      }),
      shuffleOptions({
        question: "The High Courts supervise ________ Courts.",
        optionA: "Municipal",
        optionB: "Subordinate",
        optionC: "Central",
        correctAnswer: "Subordinate",
      }),
      shuffleOptions({
        question: "Judges’ salaries come from the ________ Fund of India.",
        optionA: "Savings",
        optionB: "Consolidated",
        optionC: "Emergency",
        correctAnswer: "Consolidated",
      }),
      shuffleOptions({
        question: "A judge may resign from office by writing to the ________.",
        optionA: "Chief Minister",
        optionB: "President",
        optionC: "Speaker",
        correctAnswer: "President",
      }),
      shuffleOptions({
        question: "The Supreme Court has ________ jurisdiction in centre-state disputes.",
        optionA: "Supervisory",
        optionB: "Civil",
        optionC: "Original",
        correctAnswer: "Original",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The judiciary in India is completely independent of the executive.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lok Adalats can settle a large number of cases in a single day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The High Court is the highest court of justice in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Supreme Court can act as the guardian of Fundamental Rights.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Civil cases always lead to imprisonment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Subordinate Courts work under the control of the High Courts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Criminal courts deal with cases like divorce and property disputes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Judges’ salaries cannot be reduced during their term.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A person cannot appeal to a higher court if they feel justice was denied.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The President appoints the Chief Justice of the High Court.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
