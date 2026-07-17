export const chapter = "Chapter - 17: Great People";
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
        question: "Who taught people love, kindness, and non-violence?",
        optionA: "Rani Lakshmi Bai",
        optionB: "Gautam Buddha",
        optionC: "Mother Teresa",
        correctAnswer: "Gautam Buddha",
      }),
      shuffleOptions({
        question: "Who belonged to a well-off family in her childhood?",
        optionA: "Mother Teresa",
        optionB: "Rani Lakshmi Bai",
        optionC: "Manu",
        correctAnswer: "Mother Teresa",
      }),
      shuffleOptions({
        question: "Who became famous as the Enlightened One?",
        optionA: "Gandhiji",
        optionB: "Siddhartha (Buddha)",
        optionC: "King Shuddhodana",
        correctAnswer: "Siddhartha (Buddha)",
      }),
      shuffleOptions({
        question: "Who went to London for higher studies?",
        optionA: "Mother Teresa",
        optionB: "Mahatma Gandhi",
        optionC: "Gautam Buddha",
        correctAnswer: "Mahatma Gandhi",
      }),
      shuffleOptions({
        question: "Who learnt horse-riding during childhood?",
        optionA: "Mother Teresa",
        optionB: "Rani Lakshmi Bai",
        optionC: "Gandhiji",
        correctAnswer: "Rani Lakshmi Bai",
      }),
      shuffleOptions({
        question: "Who devoted her childhood to worship of God?",
        optionA: "Rani Lakshmi Bai",
        optionB: "Gautam Buddha",
        optionC: "Mother Teresa",
        correctAnswer: "Mother Teresa",
      }),
      shuffleOptions({
        question: "Who inspired civil rights and freedom movements across the world?",
        optionA: "Mahatma Gandhi",
        optionB: "Siddhartha",
        optionC: "Raja Gangadhar Rao",
        correctAnswer: "Mahatma Gandhi",
      }),
      shuffleOptions({
        question: "Who founded the religion of Buddhism?",
        optionA: "Buddha (Siddhartha)",
        optionB: "Gandhiji",
        optionC: "Teresa",
        correctAnswer: "Buddha (Siddhartha)",
      }),
      shuffleOptions({
        question: "Who faced financial problems after her father died?",
        optionA: "Gautam Buddha",
        optionB: "Mother Teresa",
        optionC: "Rani Lakshmi Bai",
        correctAnswer: "Mother Teresa",
      }),
      shuffleOptions({
        question: "Who showed more interest in games during childhood?",
        optionA: "Rani Lakshmi Bai",
        optionB: "Mahatma Gandhi",
        optionC: "Buddha",
        correctAnswer: "Rani Lakshmi Bai",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Prince Siddhartha was very kind to ________.",
        optionA: "people and animals",
        optionB: "only teachers",
        optionC: "only family",
        correctAnswer: "people and animals",
      }),
      shuffleOptions({
        question: "Agnes decided to do ________ work.",
        optionA: "medical",
        optionB: "missionary",
        optionC: "library",
        correctAnswer: "missionary",
      }),
      shuffleOptions({
        question: "Mother Teresa was born in ________.",
        optionA: "London",
        optionB: "Skopje, Macedonia",
        optionC: "Africa",
        correctAnswer: "Skopje, Macedonia",
      }),
      shuffleOptions({
        question: "Siddhartha later became the ________.",
        optionA: "warrior",
        optionB: "Buddha",
        optionC: "king",
        correctAnswer: "Buddha",
      }),
      shuffleOptions({
        question: "Gandhiji belonged to a ________ family.",
        optionA: "Gujarati",
        optionB: "Rajasthani",
        optionC: "Kashmiri",
        correctAnswer: "Gujarati",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai took great interest in ________.",
        optionA: "games",
        optionB: "cooking",
        optionC: "dancing",
        correctAnswer: "games",
      }),
      shuffleOptions({
        question: "Gandhi devoted his life for the sake of the ________.",
        optionA: "family",
        optionB: "country",
        optionC: "king",
        correctAnswer: "country",
      }),
      shuffleOptions({
        question: "Mother Teresa wanted to develop ________ in the world.",
        optionA: "fear",
        optionB: "harmony and love",
        optionC: "anger",
        correctAnswer: "harmony and love",
      }),
      shuffleOptions({
        question: "Gautam Buddha taught people to follow ________.",
        optionA: "violence",
        optionB: "non-violence and love",
        optionC: "fighting",
        correctAnswer: "non-violence and love",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai learnt ________ in her childhood.",
        optionA: "swimming",
        optionB: "sewing",
        optionC: "sword-fighting and horse-riding",
        correctAnswer: "sword-fighting and horse-riding",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Siddhartha was the son of King Shuddhodana.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mother Teresa received the Nobel Peace Prize in 1979.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai’s childhood name was Agnes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Gandhiji led India to independence.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mother Teresa faced no financial problems in childhood.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Buddha taught people to use peaceful means.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gandhi did not travel abroad for studies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai showed interest in games as a child.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Siddhartha was unkind to living beings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Gautam Buddha is also called the Enlightened One.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
