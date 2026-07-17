export const chapter = "Chapter - 10: Hearts and Hands";
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
        question: "Who sat elegantly dressed in the coach?",
        optionA: "Miss Fairchild",
        optionB: "Easton",
        optionC: "The marshal",
        correctAnswer: "Miss Fairchild",
      }),
      shuffleOptions({
        question: "Where did the B&M Express see an influx of passengers?",
        optionA: "Washington",
        optionB: "Denver",
        optionC: "Leavenworth",
        correctAnswer: "Denver",
      }),
      shuffleOptions({
        question: "What colour tinged Miss Fairchild’s cheeks when she greeted Easton?",
        optionA: "Pink",
        optionB: "Red",
        optionC: "Pale",
        correctAnswer: "Pink",
      }),
      shuffleOptions({
        question: "Easton greeted Miss Fairchild with his—",
        optionA: "Left hand",
        optionB: "Right hand",
        optionC: "Both hands",
        correctAnswer: "Left hand",
      }),
      shuffleOptions({
        question: "Who cleverly called Easton the marshal?",
        optionA: "Miss Fairchild",
        optionB: "The glum-faced man",
        optionC: "A passenger",
        correctAnswer: "The glum-faced man",
      }),
      shuffleOptions({
        question: "What punishment did the glum-faced man mention for himself?",
        optionA: "Five years",
        optionB: "Seven years",
        optionC: "Ten years",
        correctAnswer: "Seven years",
      }),
      shuffleOptions({
        question: "What did the glum-faced man ask Easton for during the journey?",
        optionA: "A drink",
        optionB: "Some food",
        optionC: "A blanket",
        correctAnswer: "A drink",
      }),
      shuffleOptions({
        question: "What phrase did Easton use for his past life?",
        optionA: "Golden days",
        optionB: "Butterfly days",
        optionC: "Soldier days",
        correctAnswer: "Butterfly days",
      }),
      shuffleOptions({
        question: "Which city had Miss Fairchild spent the summer in?",
        optionA: "Denver",
        optionB: "Boston",
        optionC: "Washington",
        correctAnswer: "Denver",
      }),
      shuffleOptions({
        question: "Who revealed at the end that Easton was actually the prisoner?",
        optionA: "Miss Fairchild",
        optionB: "The two nearby passengers",
        optionC: "The marshal",
        correctAnswer: "The two nearby passengers",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Easton looked ______ when Miss Fairchild first recognised him.",
        optionA: "embarrassed",
        optionB: "cheerful",
        optionC: "angry",
        correctAnswer: "embarrassed",
      }),
      shuffleOptions({
        question: "The handcuff was jokingly called a ______ by Easton.",
        optionA: "bracelet",
        optionB: "chain",
        optionC: "band",
        correctAnswer: "bracelet",
      }),
      shuffleOptions({
        question: "The marshal claimed he was being taken to prison for ______.",
        optionA: "counterfeiting",
        optionB: "theft",
        optionC: "murder",
        correctAnswer: "counterfeiting",
      }),
      shuffleOptions({
        question: "Easton said, “Money has a way of taking ______.”",
        optionA: "wings",
        optionB: "roots",
        optionC: "shape",
        correctAnswer: "wings",
      }),
      shuffleOptions({
        question: "Miss Fairchild said, “Money isn’t ______.”",
        optionA: "everything",
        optionB: "important",
        optionC: "useful",
        correctAnswer: "everything",
      }),
      shuffleOptions({
        question: "Miss Fairchild’s mother returned because her father was slightly ______.",
        optionA: "ill",
        optionB: "tired",
        optionC: "busy",
        correctAnswer: "ill",
      }),
      shuffleOptions({
        question: "Easton held Miss Fairchild’s hand with his ______ hand.",
        optionA: "left",
        optionB: "right",
        optionC: "both",
        correctAnswer: "left",
      }),
      shuffleOptions({
        question: "The glum-faced man was actually the real ______.",
        optionA: "marshal",
        optionB: "prisoner",
        optionC: "traveller",
        correctAnswer: "marshal",
      }),
      shuffleOptions({
        question: "The two men moved down the train’s ______.",
        optionA: "aisle",
        optionB: "hall",
        optionC: "corridor",
        correctAnswer: "aisle",
      }),
      shuffleOptions({
        question: "The nearby passengers found Easton too ______ to be a marshal.",
        optionA: "young",
        optionB: "old",
        optionC: "careless",
        correctAnswer: "young",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Easton was actually the marshal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Miss Fairchild at first looked disinterested in the two men.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The glum-faced man said Easton was taking him to Leavenworth prison.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Easton openly admitted he was a prisoner.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Miss Fairchild admired Western life over Washington life.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The glum-faced man’s lie saved Easton from embarrassment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Marshals usually handcuff prisoners to their right hand.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Miss Fairchild’s eyes shone softly when she talked about the West.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The two passengers at the end did not hear the conversation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The poem A Poison Tree shows how anger can grow if hidden.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
