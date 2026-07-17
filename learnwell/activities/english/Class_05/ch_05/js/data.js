export const chapter = "Chapter - 5: Friends are Forever";
export const noOfActivities = 3;

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
        question: "Who said “A friend in need is a friend indeed”?",
        optionA: "Kalidas",
        optionB: "Shakespeare",
        optionC: "Tagore",
        correctAnswer: "Shakespeare",
      }),
      shuffleOptions({
        question: "Friends tell each other—",
        optionA: "Stories and jokes",
        optionB: "Homework answers",
        optionC: "School rules",
        correctAnswer: "Stories and jokes",
      }),
      shuffleOptions({
        question: "Talking with friends helps to improve—",
        optionA: "Singing",
        optionB: "Language",
        optionC: "Drawing",
        correctAnswer: "Language",
      }),
      shuffleOptions({
        question: "If you have a ball, you need—",
        optionA: "Company of friends",
        optionB: "Books",
        optionC: "Money",
        correctAnswer: "Company of friends",
      }),
      shuffleOptions({
        question: "Friendship is another name for—",
        optionA: "Quarrels",
        optionB: "Give-and-take",
        optionC: "Fighting",
        correctAnswer: "Give-and-take",
      }),
      shuffleOptions({
        question: "John was—",
        optionA: "Married with children",
        optionB: "An orphan",
        optionC: "A German officer",
        correctAnswer: "Married with children",
      }),
      shuffleOptions({
        question: "Peter was—",
        optionA: "Married",
        optionB: "An orphan",
        optionC: "A German",
        correctAnswer: "An orphan",
      }),
      shuffleOptions({
        question: "The German officer decided to shoot—",
        optionA: "Ten British soldiers",
        optionB: "Five German soldiers",
        optionC: "Twenty Indian soldiers",
        correctAnswer: "Ten British soldiers",
      }),
      shuffleOptions({
        question: "“Please leave John and shoot me instead.” Who said this?",
        optionA: "John",
        optionB: "Peter",
        optionC: "Officer",
        correctAnswer: "Peter",
      }),
      shuffleOptions({
        question: "Peter made the—",
        optionA: "Supreme sacrifice",
        optionB: "Small sacrifice",
        optionC: "No sacrifice",
        correctAnswer: "Supreme sacrifice",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Friends enjoy together; they ______.",
        optionA: "play",
        optionB: "quarrel",
        optionC: "fight",
        correctAnswer: "play",
      }),
      shuffleOptions({
        question: "Friends share their ______.",
        optionA: "Toys and food",
        optionB: "Exams",
        optionC: "Homework",
        correctAnswer: "Toys and food",
      }),
      shuffleOptions({
        question: "True friends can ______ themselves for others.",
        optionA: "Sacrifice",
        optionB: "Hide",
        optionC: "Quarrel",
        correctAnswer: "Sacrifice",
      }),
      shuffleOptions({
        question: "John was worried about his wife and ______.",
        optionA: "Children",
        optionB: "Parents",
        optionC: "Friends",
        correctAnswer: "Children",
      }),
      shuffleOptions({
        question: "Peter had no ______.",
        optionA: "Parents",
        optionB: "Friends",
        optionC: "Toys",
        correctAnswer: "Parents",
      }),
      shuffleOptions({
        question: "The prisoners were captured in the ______ World War.",
        optionA: "Second",
        optionB: "First",
        optionC: "Third",
        correctAnswer: "Second",
      }),
      shuffleOptions({
        question: "Friends also study ______.",
        optionA: "Together",
        optionB: "Secretly",
        optionC: "Alone",
        correctAnswer: "Together",
      }),
      shuffleOptions({
        question: "Being ______ is a great virtue.",
        optionA: "Friendly",
        optionB: "Angry",
        optionC: "Proud",
        correctAnswer: "Friendly",
      }),
      shuffleOptions({
        question: "The German officer was not ______.",
        optionA: "Moved",
        optionB: "Cruel",
        optionC: "Strict",
        correctAnswer: "Moved",
      }),
      shuffleOptions({
        question: "Peter and John were ______ soldiers.",
        optionA: "British",
        optionB: "German",
        optionC: "French",
        correctAnswer: "British",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Friends speak their hearts out.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Friends cannot enjoy without quarrelling.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Friends can understand things more quickly if they study together.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Peter had a wife and children.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "John was unmarried.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The German soldiers were kind to prisoners.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Peter told the officer to shoot him instead of John.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "John was happy that Peter sacrificed for him.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The German officer agreed to Peter’s request.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The story shows the value of true friendship.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
