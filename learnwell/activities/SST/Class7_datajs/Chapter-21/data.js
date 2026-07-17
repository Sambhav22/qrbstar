export const chapter = "Chapter - 21: Democracy";
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
        question: "Who described democracy as “a government of the people, for the people and by the people”?",
        optionA: "George Washington",
        optionB: "Abraham Lincoln",
        optionC: "James II",
        correctAnswer: "Abraham Lincoln",
      }),
      shuffleOptions({
        question: "Which ancient city-state created the first democratic government?",
        optionA: "Sparta",
        optionB: "Athens",
        optionC: "Rome",
        correctAnswer: "Athens",
      }),
      shuffleOptions({
        question: "Who led the American War of Independence?",
        optionA: "George Washington",
        optionB: "Abraham Lincoln",
        optionC: "Louis XVI",
        correctAnswer: "George Washington",
      }),
      shuffleOptions({
        question: "Which event began with the Boston Tea Party in 1773?",
        optionA: "French Revolution",
        optionB: "American War of Independence",
        optionC: "Glorious Revolution",
        correctAnswer: "American War of Independence",
      }),
      shuffleOptions({
        question: "Which king was dethroned during the Glorious Revolution?",
        optionA: "Louis XVI",
        optionB: "James II",
        optionC: "Henry VIII",
        correctAnswer: "James II",
      }),
      shuffleOptions({
        question: "Who was the dictator who ruled Germany?",
        optionA: "Castro",
        optionB: "Hitler",
        optionC: "Napoleon",
        correctAnswer: "Hitler",
      }),
      shuffleOptions({
        question: "Which movement in the USA fought against racial discrimination?",
        optionA: "Quit India Movement",
        optionB: "Civil Rights Movement",
        optionC: "Swadeshi Movement",
        correctAnswer: "Civil Rights Movement",
      }),
      shuffleOptions({
        question: "Who refused to give up her bus seat and sparked a major equality movement in the USA?",
        optionA: "Michelle Obama",
        optionB: "Anne Frank",
        optionC: "Rosa Parks",
        correctAnswer: "Rosa Parks",
      }),
      shuffleOptions({
        question: "The French Revolution emphasised which three principles?",
        optionA: "Power, Order, Discipline",
        optionB: "Liberty, Equality, Fraternity",
        optionC: "Religion, Wealth, Authority",
        correctAnswer: "Liberty, Equality, Fraternity",
      }),
      shuffleOptions({
        question: "Which country today uses direct democracy at the state level?",
        optionA: "India",
        optionB: "Switzerland",
        optionC: "Japan",
        correctAnswer: "Switzerland",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Democracy depends on the consent of the ________.",
        optionA: "king",
        optionB: "people",
        optionC: "army",
        correctAnswer: "people",
      }),
      shuffleOptions({
        question: "The modern concept of democracy emerged after the ________ Revolution in England.",
        optionA: "French",
        optionB: "Glorious",
        optionC: "Industrial",
        correctAnswer: "Glorious",
      }),
      shuffleOptions({
        question: "The American colonies rebelled after the ________.",
        optionA: "Russian Revolution",
        optionB: "Boston Tea Party",
        optionC: "Civil Rights protest",
        correctAnswer: "Boston Tea Party",
      }),
      shuffleOptions({
        question: "In direct democracy, all decisions are taken by the ________.",
        optionA: "assembly of citizens",
        optionB: "parliament",
        optionC: "king",
        correctAnswer: "assembly of citizens",
      }),
      shuffleOptions({
        question: "A monarchy where powers are limited by a constitution is called a ________ monarchy.",
        optionA: "absolute",
        optionB: "constitutional",
        optionC: "hereditary",
        correctAnswer: "constitutional",
      }),
      shuffleOptions({
        question: "Democracy ensures ________ before the law for all citizens.",
        optionA: "inequality",
        optionB: "equality",
        optionC: "punishment",
        correctAnswer: "equality",
      }),
      shuffleOptions({
        question: "The goal of democracy is to bring about equality and ________.",
        optionA: "secularism",
        optionB: "dictatorship",
        optionC: "monarchy",
        correctAnswer: "secularism",
      }),
      shuffleOptions({
        question: "In indirect democracy, leaders are elected through a ________ ballot.",
        optionA: "open",
        optionB: "secret",
        optionC: "postal",
        correctAnswer: "secret",
      }),
      shuffleOptions({
        question: "A government headed by religious leaders is called a ________.",
        optionA: "theocracy",
        optionB: "oligarchy",
        optionC: "republic",
        correctAnswer: "theocracy",
      }),
      shuffleOptions({
        question: "Power shared between centre and states exists in a ________ government.",
        optionA: "federal",
        optionB: "totalitarian",
        optionC: "hereditary",
        correctAnswer: "federal",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "In democracy, citizens are free to express their views.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Absolute monarchy is a hereditary system of rule.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In dictatorship, ordinary people have full decision-making power.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Switzerland follows forms of direct democracy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Civil Rights Movement in the USA fought for equality of Afro-Americans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Democracy ignores the welfare of minority groups.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In unitary government, power is divided between central and state governments.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In a parliamentary system, the executive is responsible to the legislature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Equality is one of the main foundations of democracy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A dictator must rule according to the constitution.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
