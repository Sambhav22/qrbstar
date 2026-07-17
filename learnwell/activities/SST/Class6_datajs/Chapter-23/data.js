export const chapter = "Chapter - 23: The Government";
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
        question: "Who ensures that laws made by the legislature are carried out in the country?",
        optionA: "Judiciary",
        optionB: "Executive",
        optionC: "Parliament",
        correctAnswer: "Executive",
      }),
      shuffleOptions({
        question: "Who heads the Ministry of Defence in India?",
        optionA: "Chief Justice",
        optionB: "Defence Minister",
        optionC: "Governor",
        correctAnswer: "Defence Minister",
      }),
      shuffleOptions({
        question: "Who leads the national government at the central level?",
        optionA: "Chief Minister",
        optionB: "District Magistrate",
        optionC: "Prime Minister",
        correctAnswer: "Prime Minister",
      }),
      shuffleOptions({
        question: "Who protects the borders of the nation?",
        optionA: "Air Force, Army and Navy",
        optionB: "Teachers",
        optionC: "Bank officials",
        correctAnswer: "Air Force, Army and Navy",
      }),
      shuffleOptions({
        question: "Who takes collective decisions in a democratic system?",
        optionA: "Unelected groups",
        optionB: "Majority of elected representatives",
        optionC: "Foreign advisors",
        correctAnswer: "Majority of elected representatives",
      }),
      shuffleOptions({
        question: "Who struggled in South Africa for the right to vote for black people?",
        optionA: "Mussolini",
        optionB: "Nelson Mandela",
        optionC: "Kamal Pasha",
        correctAnswer: "Nelson Mandela",
      }),
      shuffleOptions({
        question: "Who is responsible for maintaining dispensaries and health centres at the local level?",
        optionA: "National government",
        optionB: "Local government officials",
        optionC: "Supreme Court",
        correctAnswer: "Local government officials",
      }),
      shuffleOptions({
        question: "Which system allows people to elect their government?",
        optionA: "Dictatorship",
        optionB: "Monarchy",
        optionC: "Democracy",
        correctAnswer: "Democracy",
      }),
      shuffleOptions({
        question: "Who interprets the laws and settles legal disputes?",
        optionA: "Executive",
        optionB: "Legislature",
        optionC: "Judiciary",
        correctAnswer: "Judiciary",
      }),
      shuffleOptions({
        question: "Who inherited the throne in hereditary rule?",
        optionA: "Citizens",
        optionB: "Elected representatives",
        optionC: "King or Queen",
        correctAnswer: "King or Queen",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The ______ is the supreme judicial body in India.",
        optionA: "High Court",
        optionB: "Parliament",
        optionC: "Supreme Court",
        correctAnswer: "Supreme Court",
      }),
      shuffleOptions({
        question: "The government provides essential services like electricity and ______.",
        optionA: "water",
        optionB: "gold",
        optionC: "textiles",
        correctAnswer: "water",
      }),
      shuffleOptions({
        question: "In a dictatorship, people have no ______.",
        optionA: "freedom of choice",
        optionB: "voting rights",
        optionC: "both a and b",
        correctAnswer: "both a and b",
      }),
      shuffleOptions({
        question: "A ______ government works for the welfare of its people.",
        optionA: "democratic",
        optionB: "royal",
        optionC: "forced",
        correctAnswer: "democratic",
      }),
      shuffleOptions({
        question: "Universal adult franchise means the right to ______.",
        optionA: "drive",
        optionB: "vote",
        optionC: "teach",
        correctAnswer: "vote",
      }),
      shuffleOptions({
        question: "Local government bodies look after ______ roads.",
        optionA: "constructing and maintaining",
        optionB: "closing",
        optionC: "selling",
        correctAnswer: "constructing and maintaining",
      }),
      shuffleOptions({
        question: "A monarchy is usually ______.",
        optionA: "hereditary",
        optionB: "elected",
        optionC: "temporary",
        correctAnswer: "hereditary",
      }),
      shuffleOptions({
        question: "The legislature helps in making ______.",
        optionA: "laws",
        optionB: "toys",
        optionC: "gardens",
        correctAnswer: "laws",
      }),
      shuffleOptions({
        question: "The executive consists of ministers and ______.",
        optionA: "police dogs",
        optionB: "officers and staff members",
        optionC: "foreign visitors",
        correctAnswer: "officers and staff members",
      }),
      shuffleOptions({
        question: "Democracy gives citizens the right to ______.",
        optionA: "punish others",
        optionB: "criticise the government",
        optionC: "express their views freely",
        correctAnswer: "express their views freely",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The government provides facilities like medical care, security and transport.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A dictator is chosen freely by all people in regular elections.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Local government maintains streets, dispensaries and water supply.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In India, people cast their votes as members of caste and religion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Citizens have no right to question the government in a democracy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Judiciary ensures that laws are obeyed by citizens.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Monarchy always allows people full freedom to elect leaders.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Executive departments run the day-to-day administration of the country.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Universal adult franchise applies only to men.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Women in Britain got the right to vote after a long struggle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
