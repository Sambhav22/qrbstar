export const chapter = "Chapter - 23: The Executive";
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
        question: "Who said that the President acts as a “ceremonial device on a seal by which decisions are made known”?",
        optionA: "B. R. Ambedkar",
        optionB: "Rajendra Prasad",
        optionC: "Jawaharlal Nehru",
        correctAnswer: "B. R. Ambedkar",
      }),
      shuffleOptions({
        question: "Who stated that the President “represents the nation but does not rule the nation”?",
        optionA: "Motilal Setalvad",
        optionB: "B. R. Ambedkar",
        optionC: "Rajendra Prasad",
        correctAnswer: "Rajendra Prasad",
      }),
      shuffleOptions({
        question: "Who insisted that ministerial advice should be binding on the President?",
        optionA: "Mahatma Gandhi",
        optionB: "Rajendra Prasad",
        optionC: "Jawaharlal Nehru",
        correctAnswer: "Jawaharlal Nehru",
      }),
      shuffleOptions({
        question: "Who settled the 1954 dispute between Nehru and Rajendra Prasad regarding the President’s powers?",
        optionA: "Dr. B. R. Ambedkar",
        optionB: "CJI",
        optionC: "Attorney General Motilal Setalvad",
        correctAnswer: "Attorney General Motilal Setalvad",
      }),
      shuffleOptions({
        question: "Who can dissolve the Lok Sabha on the advice of the Council of Ministers?",
        optionA: "Speaker",
        optionB: "President",
        optionC: "Prime Minister",
        correctAnswer: "President",
      }),
      shuffleOptions({
        question: "Who represents India at high-level international meetings according to the chapter?",
        optionA: "Home Minister",
        optionB: "Vice-President",
        optionC: "Prime Minister",
        correctAnswer: "Prime Minister",
      }),
      shuffleOptions({
        question: "Who appoints the judges of the Supreme Court and High Courts?",
        optionA: "Chief Justice",
        optionB: "Parliament",
        optionC: "President",
        correctAnswer: "President",
      }),
      shuffleOptions({
        question: "Who allocates portfolios among ministers?",
        optionA: "Prime Minister",
        optionB: "Governor",
        optionC: "President",
        correctAnswer: "Prime Minister",
      }),
      shuffleOptions({
        question: "Who can pardon a death sentence?",
        optionA: "Supreme Court",
        optionB: "President",
        optionC: "Home Minister",
        correctAnswer: "President",
      }),
      shuffleOptions({
        question: "Who acts as President in the absence of the President?",
        optionA: "CJI",
        optionB: "Speaker",
        optionC: "Vice-President",
        correctAnswer: "Vice-President",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The President can issue an ______ when Parliament is not in session.",
        optionA: "bill",
        optionB: "ordinance",
        optionC: "order",
        correctAnswer: "ordinance",
      }),
      shuffleOptions({
        question: "The President is elected by an ______ college.",
        optionA: "electoral",
        optionB: "special",
        optionC: "open",
        correctAnswer: "electoral",
      }),
      shuffleOptions({
        question: "The Prime Minister presides over meetings of the ______.",
        optionA: "Lok Sabha",
        optionB: "Judiciary",
        optionC: "Council of Ministers",
        correctAnswer: "Council of Ministers",
      }),
      shuffleOptions({
        question: "The President’s most important financial power is presenting the annual ______.",
        optionA: "report",
        optionB: "plan",
        optionC: "budget",
        correctAnswer: "budget",
      }),
      shuffleOptions({
        question: "The President can declare a state of emergency during ______ aggression.",
        optionA: "social",
        optionB: "foreign",
        optionC: "cultural",
        correctAnswer: "foreign",
      }),
      shuffleOptions({
        question: "The Vice-President is elected for a period of ______ years.",
        optionA: "four",
        optionB: "five",
        optionC: "three",
        correctAnswer: "five",
      }),
      shuffleOptions({
        question: "All ministers work under the ______ of the Prime Minister.",
        optionA: "leadership",
        optionB: "shadow",
        optionC: "observation",
        correctAnswer: "leadership",
      }),
      shuffleOptions({
        question: "Cabinet Ministers take charge of the most ______ departments.",
        optionA: "limited",
        optionB: "temporary",
        optionC: "important",
        correctAnswer: "important",
      }),
      shuffleOptions({
        question: "The President of India administers all the ______ territories.",
        optionA: "union",
        optionB: "special",
        optionC: "coastal",
        correctAnswer: "union",
      }),
      shuffleOptions({
        question: "The President can ______ a sentence through his judicial powers.",
        optionA: "cancel",
        optionB: "hide",
        optionC: "remit / commute / suspend",
        correctAnswer: "remit / commute / suspend",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The President can act completely independently of the Council of Ministers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A non-member minister must get elected to Parliament within six months.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The President is the supreme commander of India’s defence forces.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Deputy Ministers regularly attend Cabinet meetings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Vice-President becomes acting President if the President resigns.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The President can declare a financial emergency if needed.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cabinet Ministers, Ministers of State and Deputy Ministers together form the Council of Ministers.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Prime Minister advises the President on summoning the Parliament.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The President signs all treaties on behalf of India.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The 42nd Amendment made ministerial advice optional for the President.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
