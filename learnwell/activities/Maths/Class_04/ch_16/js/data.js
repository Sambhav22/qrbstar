export const chapter = "Chapter - 16: Little Red Riding Hood";
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
        question: "Who made the red hood for the girl?",
        optionA: "Granny",
        optionB: "Mother",
        optionC: "Aunt",
        correctAnswer: "Mother",
      }),
      shuffleOptions({
        question: "Where did Little Red Riding Hood live?",
        optionA: "Town",
        optionB: "Cottage at the edge of the forest",
        optionC: "Castle",
        correctAnswer: "Cottage at the edge of the forest",
      }),
      shuffleOptions({
        question: "Who wanted to eat Little Red Riding Hood?",
        optionA: "Hunter",
        optionB: "Wolf",
        optionC: "Granny",
        correctAnswer: "Wolf",
      }),
      shuffleOptions({
        question: "What did her mother give her to take to Granny?",
        optionA: "Goodies",
        optionB: "Flowers",
        optionC: "Toys",
        correctAnswer: "Goodies",
      }),
      shuffleOptions({
        question: "Who met Little Red Riding Hood on the way?",
        optionA: "Hunter",
        optionB: "Wolf",
        optionC: "Granny",
        correctAnswer: "Wolf",
      }),
      shuffleOptions({
        question: "Where did Granny run when she saw the wolf?",
        optionA: "To another room and bolted the door",
        optionB: "To the forest",
        optionC: "To the kitchen",
        correctAnswer: "To another room and bolted the door",
      }),
      shuffleOptions({
        question: "What did the wolf wear to look like Granny?",
        optionA: "Night dress",
        optionB: "Red hood",
        optionC: "Shawl only",
        correctAnswer: "Night dress",
      }),
      shuffleOptions({
        question: "Who greeted the girl by saying, “Good morning, my child”?",
        optionA: "Wolf disguised as Granny",
        optionB: "Hunter",
        optionC: "Mother",
        correctAnswer: "Wolf disguised as Granny",
      }),
      shuffleOptions({
        question: "Who heard voices of distress from the cottage?",
        optionA: "Mother",
        optionB: "Hunter",
        optionC: "Animals",
        correctAnswer: "Hunter",
      }),
      shuffleOptions({
        question: "How was the menace of the wolf ended?",
        optionA: "Granny frightened him",
        optionB: "Hunter killed him with a knife",
        optionC: "The girl escaped",
        correctAnswer: "Hunter killed him with a knife",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The girl always wore a ______ hood.",
        optionA: "Blue",
        optionB: "Red",
        optionC: "Green",
        correctAnswer: "Red",
      }),
      shuffleOptions({
        question: "Her cottage was just at the ______ of the forest.",
        optionA: "Middle",
        optionB: "Edge",
        optionC: "Start",
        correctAnswer: "Edge",
      }),
      shuffleOptions({
        question: "The wolf thought the girl would make a tasty ______.",
        optionA: "Toy",
        optionB: "Morsel",
        optionC: "Pet",
        correctAnswer: "Morsel",
      }),
      shuffleOptions({
        question: "The wolf pulled the ______ to make the room dark.",
        optionA: "Curtains",
        optionB: "Window",
        optionC: "Door",
        correctAnswer: "Curtains",
      }),
      shuffleOptions({
        question: "Granny asked the wolf to lift the ______.",
        optionA: "Latch",
        optionB: "Basket",
        optionC: "Bedcover",
        correctAnswer: "Latch",
      }),
      shuffleOptions({
        question: "The girl greeted Granny by saying ______.",
        optionA: "Good morning",
        optionB: "Good night",
        optionC: "Hello",
        correctAnswer: "Good morning",
      }),
      shuffleOptions({
        question: "The wolf said, “All the better to ______ you with.”",
        optionA: "Hear",
        optionB: "Hug",
        optionC: "Love",
        correctAnswer: "Hear",
      }),
      shuffleOptions({
        question: "Little Red Riding Hood was already ______ when the wolf leapt.",
        optionA: "Cautious",
        optionB: "Careless",
        optionC: "Sleeping",
        correctAnswer: "Cautious",
      }),
      shuffleOptions({
        question: "The hunter carried a big forest ______.",
        optionA: "Knife",
        optionB: "Stick",
        optionC: "Axe",
        correctAnswer: "Knife",
      }),
      shuffleOptions({
        question: "After the wolf’s death, Little Red Riding Hood could walk in the forest without any ______.",
        optionA: "Joy",
        optionB: "Fear",
        optionC: "Basket",
        correctAnswer: "Fear",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Little Red Riding Hood often strayed into the forest to play.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The animals in the forest hated her.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The wolf was cunning and wicked.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Granny was petrified when she saw the wolf.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The wolf first ate Granny before waiting for the girl.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The wolf disguised himself in Granny’s clothes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The girl thought Granny had big teeth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The hunter heard voices of distress from the cottage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The wolf escaped through the window.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The menace of the wolf was over forever.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
