export const chapter = "Chapter - 22: Parliamentary Form of Government";
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
        question: "Which house of Parliament is known as the permanent house?",
        optionA: "Lok Sabha",
        optionB: "Rajya Sabha",
        optionC: "Vidhan Sabha",
        correctAnswer: "Rajya Sabha",
      }),
      shuffleOptions({
        question: "Who presides over the joint session of Parliament?",
        optionA: "Vice-President",
        optionB: "Speaker of Lok Sabha",
        optionC: "President",
        correctAnswer: "Speaker of Lok Sabha",
      }),
      shuffleOptions({
        question: "How long can the Rajya Sabha delay a money bill?",
        optionA: "10 days",
        optionB: "14 days",
        optionC: "30 days",
        correctAnswer: "14 days",
      }),
      shuffleOptions({
        question: "Who is the ex officio Chairman of the Rajya Sabha?",
        optionA: "Prime Minister",
        optionB: "Speaker",
        optionC: "Vice-President of India",
        correctAnswer: "Vice-President of India",
      }),
      shuffleOptions({
        question: "What is the minimum quorum required in the Lok Sabha?",
        optionA: "One-fourth of members",
        optionB: "One-tenth of members",
        optionC: "Half of the members",
        correctAnswer: "One-tenth of members",
      }),
      shuffleOptions({
        question: "Who certifies a bill as a money bill?",
        optionA: "Speaker of Lok Sabha",
        optionB: "President",
        optionC: "Home Minister",
        correctAnswer: "Speaker of Lok Sabha",
      }),
      shuffleOptions({
        question: "Who can dissolve the Lok Sabha?",
        optionA: "Prime Minister alone",
        optionB: "President on advice of Prime Minister",
        optionC: "Chief Justice",
        correctAnswer: "President on advice of Prime Minister",
      }),
      shuffleOptions({
        question: "Who maintains discipline during the sessions of Lok Sabha?",
        optionA: "Prime Minister",
        optionB: "Speaker of Lok Sabha",
        optionC: "Opposition Leader",
        correctAnswer: "Speaker of Lok Sabha",
      }),
      shuffleOptions({
        question: "Which list contains subjects on which only Parliament can make laws?",
        optionA: "State List",
        optionB: "Union List",
        optionC: "Concurrent List",
        correctAnswer: "Union List",
      }),
      shuffleOptions({
        question: "Who signs a bill before it becomes a law?",
        optionA: "President of India",
        optionB: "Vice-President",
        optionC: "Speaker",
        correctAnswer: "President of India",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A bill becomes a law only after the ______ signs it.",
        optionA: "Speaker",
        optionB: "President",
        optionC: "Prime Minister",
        correctAnswer: "President",
      }),
      shuffleOptions({
        question: "The money bill can be introduced only in the ______.",
        optionA: "Rajya Sabha",
        optionB: "Lok Sabha",
        optionC: "Joint Session",
        correctAnswer: "Lok Sabha",
      }),
      shuffleOptions({
        question: "Parliament can make laws on the subjects of the ______ List.",
        optionA: "State",
        optionB: "Local",
        optionC: "Union",
        correctAnswer: "Union",
      }),
      shuffleOptions({
        question: "One-third of the members of the Rajya Sabha retire every ______ years.",
        optionA: "four",
        optionB: "two",
        optionC: "six",
        correctAnswer: "two",
      }),
      shuffleOptions({
        question: "The Speaker may cast a vote in case of a ______.",
        optionA: "tie",
        optionB: "protest",
        optionC: "special session",
        correctAnswer: "tie",
      }),
      shuffleOptions({
        question: "The Lok Sabha is also called the House of ______.",
        optionA: "States",
        optionB: "People",
        optionC: "Representatives",
        correctAnswer: "People",
      }),
      shuffleOptions({
        question: "The draft of a proposed law is called a ______.",
        optionA: "petition",
        optionB: "bill",
        optionC: "motion",
        correctAnswer: "bill",
      }),
      shuffleOptions({
        question: "Parliament controls government income and spending through the ______.",
        optionA: "budget",
        optionB: "manifesto",
        optionC: "election",
        correctAnswer: "budget",
      }),
      shuffleOptions({
        question: "Members of the Rajya Sabha are elected by the ______.",
        optionA: "citizens",
        optionB: "state legislative assemblies",
        optionC: "governors",
        correctAnswer: "state legislative assemblies",
      }),
      shuffleOptions({
        question: "The Parliamentary system ensures that the executive is ______ to the legislature.",
        optionA: "superior",
        optionB: "accountable",
        optionC: "unrelated",
        correctAnswer: "accountable",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Rajya Sabha is a permanent house and is never dissolved.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Only the Lok Sabha can pass a no-confidence motion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Speaker decides whether a bill is a money bill.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Parliament cannot remove the President through impeachment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ministers are answerable to Parliament for their actions and policies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The President can return a non-money bill to Parliament for reconsideration.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rajya Sabha members are directly elected by citizens of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Lok Sabha has a tenure of five years under normal circumstances.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Both houses of Parliament have equal rights to question ministers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A bill becomes an Act immediately after the Lok Sabha passes it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
