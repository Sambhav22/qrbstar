export const chapter = "Chapter - 1: The Golden Windows";
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
        question: "What did the boy carry in his pocket when he left home?",
        optionA: "Apple",
        optionB: "Bread",
        optionC: "Nuts",
        correctAnswer: "Bread",
      }),
      shuffleOptions({
        question: "How did the boy’s footprints appear in the white dust?",
        optionA: "They were disappearing",
        optionB: "They were following him",
        optionC: "They were standing still",
        correctAnswer: "They were following him",
      }),
      shuffleOptions({
        question: "What did the boy drink along the roadside?",
        optionA: "Juice",
        optionB: "Clear water",
        optionC: "Milk",
        correctAnswer: "Clear water",
      }),
      shuffleOptions({
        question: "Who taught the boy to scatter crumbs for birds?",
        optionA: "His teacher",
        optionB: "His mother",
        optionC: "His sister",
        correctAnswer: "His mother",
      }),
      shuffleOptions({
        question: "What did the lady of the house give the boy?",
        optionA: "Toys",
        optionB: "Milk and cake",
        optionC: "Rice and curry",
        correctAnswer: "Milk and cake",
      }),
      shuffleOptions({
        question: "What colour gown did the little girl wear?",
        optionA: "Red",
        optionB: "Brown",
        optionC: "Green",
        correctAnswer: "Brown",
      }),
      shuffleOptions({
        question: "What animal did the little girl show the boy?",
        optionA: "A black calf",
        optionB: "A white horse",
        optionC: "A red goat",
        correctAnswer: "A black calf",
      }),
      shuffleOptions({
        question: "What fruit did the boy and the girl eat together?",
        optionA: "Mango",
        optionB: "Apple",
        optionC: "Guava",
        correctAnswer: "Apple",
      }),
      shuffleOptions({
        question: "What special gift did the boy give to the girl?",
        optionA: "A coin",
        optionB: "A white pebble with a red band",
        optionC: "A toy",
        correctAnswer: "A white pebble with a red band",
      }),
      shuffleOptions({
        question: "Who smiled at the boy when he returned home?",
        optionA: "His neighbour",
        optionB: "His father",
        optionC: "His uncle",
        correctAnswer: "His father",
      }),
    ]),
  };
}
export var activityData;

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The boy walked cheerfully because his ______ danced with him.",
        optionA: "Sister",
        optionB: "Shadow",
        optionC: "Dog",
        correctAnswer: "Shadow",
      }),
      shuffleOptions({
        question: "His bare feet left marks in the ______ dust.",
        optionA: "White",
        optionB: "Red",
        optionC: "Brown",
        correctAnswer: "White",
      }),
      shuffleOptions({
        question: "The brook ran through the ______ hedge.",
        optionA: "Bamboo",
        optionB: "Alder",
        optionC: "Mango",
        correctAnswer: "Alder",
      }),
      shuffleOptions({
        question: "The little girl’s eyes were blue like the ______.",
        optionA: "Ocean",
        optionB: "Sky",
        optionC: "River",
        correctAnswer: "Sky",
      }),
      shuffleOptions({
        question: "The boy’s calf at home was red like a ______.",
        optionA: "Chestnut",
        optionB: "Rose",
        optionC: "Apple",
        correctAnswer: "Chestnut",
      }),
      shuffleOptions({
        question: "The calf at the girl’s home had a white ______ on its forehead.",
        optionA: "Dot",
        optionB: "Star",
        optionC: "Line",
        correctAnswer: "Star",
      }),
      shuffleOptions({
        question: "The girl gave the boy three ______.",
        optionA: "Horse-chestnuts",
        optionB: "Apples",
        optionC: "Coins",
        correctAnswer: "Horse-chestnuts",
      }),
      shuffleOptions({
        question: "At sunset, the boy saw golden windows in his own ______.",
        optionA: "School",
        optionB: "Home",
        optionC: "Neighbour’s house",
        correctAnswer: "Home",
      }),
      shuffleOptions({
        question: "The lamplight and ______ made the windows shine at night.",
        optionA: "Firelight",
        optionB: "Moonlight",
        optionC: "Candlelight",
        correctAnswer: "Firelight",
      }),
      shuffleOptions({
        question: "When the boy came home, his mother welcomed him with a ______.",
        optionA: "Kiss",
        optionB: "Toy",
        optionC: "Story",
        correctAnswer: "Kiss",
      }),
    ]),
  };
}
export var activityData;

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The boy was barefoot during his walk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The boy ate an apple alone during his journey.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The shutters of the house were closed when the boy first reached it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The woman at the house was unkind to the boy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The little girl was of the same age as the boy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The boy gave the girl a coin as a gift.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The golden windows could only be seen at noon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The boy promised the girl he would come again.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The boy told the girl that his own house had golden windows.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "His little sister hugged him when he returned.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
export var activityData;
