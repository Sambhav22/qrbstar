export const chapter = "Chapter - 15: Human Rights";
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
  const optionsArray = [optionA, optionB, optionC].filter(Boolean);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length > 2) {
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
        question: "Who described human dignity as the quintessence of human rights?",
        optionA: "Mahatma Gandhi",
        optionB: "Justice J.S. Verma",
        optionC: "Abraham Lincoln",
        correctAnswer: "Justice J.S. Verma",
      }),
      shuffleOptions({
        question: "Which President spoke of the “International Bill of Rights”?",
        optionA: "Roosevelt",
        optionB: "Truman",
        optionC: "Kennedy",
        correctAnswer: "Truman",
      }),
      shuffleOptions({
        question: "In which year was the Constitution of India brought into effect?",
        optionA: "1947",
        optionB: "1950",
        optionC: "1952",
        correctAnswer: "1950",
      }),
      shuffleOptions({
        question: "What does the Preamble of India assure?",
        optionA: "Justice, Liberty, Equality, Fraternity",
        optionB: "Peace, Prosperity, Property, Power",
        optionC: "Freedom, Wealth, Land, Unity",
        correctAnswer: "Justice, Liberty, Equality, Fraternity",
      }),
      shuffleOptions({
        question: "Which rights include the right to privacy and right to own property?",
        optionA: "Political rights",
        optionB: "Civil rights",
        optionC: "Cultural rights",
        correctAnswer: "Civil rights",
      }),
      shuffleOptions({
        question: "Freedom from hunger is an example of which type of right?",
        optionA: "Civil right",
        optionB: "Economic/social right",
        optionC: "Political right",
        correctAnswer: "Economic/social right",
      }),
      shuffleOptions({
        question: "Which rights require positive government action?",
        optionA: "Legal rights",
        optionB: "Positive rights",
        optionC: "Negative rights",
        correctAnswer: "Positive rights",
      }),
      shuffleOptions({
        question: "Which organisation adopted the Universal Declaration of Human Rights?",
        optionA: "UNESCO",
        optionB: "United Nations",
        optionC: "WHO",
        correctAnswer: "United Nations",
      }),
      shuffleOptions({
        question: "The Fundamental Rights in India were influenced by which document?",
        optionA: "Universal Declaration of Human Rights",
        optionB: "French Constitution",
        optionC: "Magna Carta",
        correctAnswer: "Universal Declaration of Human Rights",
      }),
      shuffleOptions({
        question: "Equality before the law is part of which rights?",
        optionA: "Economic rights",
        optionB: "Fundamental Rights",
        optionC: "Cultural rights",
        correctAnswer: "Fundamental Rights",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Human rights are ______ with birth.",
        optionA: "Operative",
        optionB: "Temporary",
        optionC: "Limited",
        correctAnswer: "Operative",
      }),
      shuffleOptions({
        question: "Human rights are also known as ______ rights.",
        optionA: "Natural",
        optionB: "Cultural",
        optionC: "Civil",
        correctAnswer: "Natural",
      }),
      shuffleOptions({
        question: "The Universal Declaration of Human Rights was adopted in ______.",
        optionA: "1948",
        optionB: "1950",
        optionC: "1947",
        correctAnswer: "1948",
      }),
      shuffleOptions({
        question: "Civil rights ensure personal ______ and security.",
        optionA: "Liberty",
        optionB: "Property",
        optionC: "Wealth",
        correctAnswer: "Liberty",
      }),
      shuffleOptions({
        question: "The right to vote is also called ______.",
        optionA: "Conscience",
        optionB: "Franchise",
        optionC: "Covenant",
        correctAnswer: "Franchise",
      }),
      shuffleOptions({
        question: "Economic and social rights are based on the concept of ______ equality.",
        optionA: "Social",
        optionB: "Legal",
        optionC: "Economic",
        correctAnswer: "Social",
      }),
      shuffleOptions({
        question: "The Universal Declaration lists ______ civil and political rights.",
        optionA: "21",
        optionB: "15",
        optionC: "7",
        correctAnswer: "21",
      }),
      shuffleOptions({
        question: "The Universal Declaration includes ______ economic and social rights.",
        optionA: "7",
        optionB: "5",
        optionC: "10",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "Fundamental Rights were incorporated in the Indian Constitution on ______.",
        optionA: "26 January 1950",
        optionB: "15 August 1947",
        optionC: "2 October 1950",
        correctAnswer: "26 January 1950",
      }),
      shuffleOptions({
        question: "One’s right to freedom ceases where another’s ______ starts.",
        optionA: "Life",
        optionB: "Nose",
        optionC: "Liberty",
        correctAnswer: "Nose",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Human rights are granted only by governments.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Economic, social and cultural rights are also called positive rights.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Civil and political rights are treated as one group.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Universal Declaration of Human Rights was adopted in 1947.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Human dignity and human rights are closely linked.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Constitution of India was enforced on 26 January 1950.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Right to work and right to education are examples of civil rights.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Preamble assures equality of status and opportunity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Positive rights require no government action.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Universal Declaration of Human Rights was one of the UN’s major achievements.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
