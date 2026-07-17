export const chapter = "Chapter - 4: The Shrewd Deena";
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
        question: "Who was Deena?",
        optionA: "Farmer",
        optionB: "Woodcutter",
        optionC: "Soldier",
        correctAnswer: "Woodcutter",
      }),
      shuffleOptions({
        question: "What was strange about the devil?",
        optionA: "His eyes were red",
        optionB: "His feet were opposite",
        optionC: "He had two heads",
        correctAnswer: "His feet were opposite",
      }),
      shuffleOptions({
        question: "What did Deena demand from the devil?",
        optionA: "A new axe",
        optionB: "A sack of gold",
        optionC: "A palace",
        correctAnswer: "A sack of gold",
      }),
      shuffleOptions({
        question: "Who scolded the devil for being fooled?",
        optionA: "His friend",
        optionB: "His chief",
        optionC: "His brother",
        correctAnswer: "His chief",
      }),
      shuffleOptions({
        question: "What lived in the cave?",
        optionA: "Tiger",
        optionB: "Lion",
        optionC: "Bear",
        correctAnswer: "Lion",
      }),
      shuffleOptions({
        question: "What animal did Deena call his “child”?",
        optionA: "Hare",
        optionB: "Horse",
        optionC: "Goat",
        correctAnswer: "Hare",
      }),
      shuffleOptions({
        question: "Where did the hare run and hide?",
        optionA: "Behind foliage",
        optionB: "Inside a house",
        optionC: "Into a hole",
        correctAnswer: "Behind foliage",
      }),
      shuffleOptions({
        question: "What did the devil try to carry around the hill?",
        optionA: "Sack of gold",
        optionB: "Horse",
        optionC: "Tree branch",
        correctAnswer: "Horse",
      }),
      shuffleOptions({
        question: "How many times did Deena ride the horse around the hill?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        correctAnswer: "Three",
      }),
      shuffleOptions({
        question: "What did Deena hit the devil with after blindfolding him?",
        optionA: "A rope",
        optionB: "A branch",
        optionC: "A stone",
        correctAnswer: "A branch",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Deena chose a tall, straight ______ to cut.",
        optionA: "tree",
        optionB: "pole",
        optionC: "log",
        correctAnswer: "tree",
      }),
      shuffleOptions({
        question: "The devil appeared when Deena was tying a ______.",
        optionA: "noose",
        optionB: "knot",
        optionC: "rope ladder",
        correctAnswer: "noose",
      }),
      shuffleOptions({
        question: "The devil plucked a sack of gold from the ______.",
        optionA: "ground",
        optionB: "air",
        optionC: "tree",
        correctAnswer: "air",
      }),
      shuffleOptions({
        question: "The devil fought with a ______ in the cave.",
        optionA: "hare",
        optionB: "lion",
        optionC: "horse",
        correctAnswer: "lion",
      }),
      shuffleOptions({
        question: "The hare ran across the ______ while being chased.",
        optionA: "hill",
        optionB: "brook",
        optionC: "den",
        correctAnswer: "brook",
      }),
      shuffleOptions({
        question: "The devil could not finish carrying the ______ around the hill.",
        optionA: "sack",
        optionB: "horse",
        optionC: "hare",
        correctAnswer: "horse",
      }),
      shuffleOptions({
        question: "Deena went around the hill on the horse ______ times.",
        optionA: "once",
        optionB: "twice",
        optionC: "thrice",
        correctAnswer: "thrice",
      }),
      shuffleOptions({
        question: "The devil’s loud whistle caused a small ______.",
        optionA: "storm",
        optionB: "fire",
        optionC: "earthquake",
        correctAnswer: "storm",
      }),
      shuffleOptions({
        question: "Deena tied a cloth to ______ the devil’s eyes.",
        optionA: "cover",
        optionB: "clean",
        optionC: "wash",
        correctAnswer: "cover",
      }),
      shuffleOptions({
        question: "At last, the devil ______ forever.",
        optionA: "vanished",
        optionB: "returned",
        optionC: "stayed",
        correctAnswer: "vanished",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Deena was a woodcutter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The devil’s feet were in the normal direction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Deena asked for silver coins from the devil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The lion knocked down the devil inside the cave.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Deena’s “child” was actually a hare.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The devil carried the horse around the hill successfully.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Deena rode the horse around the hill three times.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The devil’s whistle filled the air with dust and mud.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Deena himself blew louder than the devil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Deena lived happily with his family after getting gold. S",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
