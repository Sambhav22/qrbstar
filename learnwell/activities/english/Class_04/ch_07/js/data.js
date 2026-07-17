export const chapter = "Chapter - 7: Girls and Boys";
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
        question: "Who are invited to play?",
        optionA: "Girls and boys",
        optionB: "Men and women",
        optionC: "Teachers and parents",
        correctAnswer: "Girls and boys",
      }),
      shuffleOptions({
        question: "What is shining bright as day?",
        optionA: "The moon",
        optionB: "The sun",
        optionC: "The stars",
        correctAnswer: "The moon",
      }),
      shuffleOptions({
        question: "What are the children asked to leave?",
        optionA: "Their toys",
        optionB: "Their supper and sleep",
        optionC: "Their books",
        correctAnswer: "Their supper and sleep",
      }),
      shuffleOptions({
        question: "Where are the children asked to dance?",
        optionA: "On the open green",
        optionB: "In the classroom",
        optionC: "In the kitchen",
        correctAnswer: "On the open green",
      }),
      shuffleOptions({
        question: "Who shall be called queen?",
        optionA: "The youngest child",
        optionB: "The one who holds longest",
        optionC: "The teacher",
        correctAnswer: "The one who holds longest",
      }),
      shuffleOptions({
        question: "Children should come with a ______.",
        optionA: "Whoop and call",
        optionB: "Bag and book",
        optionC: "Song and story",
        correctAnswer: "Whoop and call",
      }),
      shuffleOptions({
        question: "The poem begins with the words—",
        optionA: "Come and dance",
        optionB: "Girls and boys, come out to play",
        optionC: "Leave your supper",
        correctAnswer: "Girls and boys, come out to play",
      }),
      shuffleOptions({
        question: "A playfellow is—",
        optionA: "A companion at play",
        optionB: "A person who eats with us",
        optionC: "A teacher",
        correctAnswer: "A companion at play",
      }),
      shuffleOptions({
        question: "Supper means—",
        optionA: "Sleep",
        optionB: "Food",
        optionC: "Lunch",
        correctAnswer: "Food",
      }),
      shuffleOptions({
        question: "Whoop means—",
        optionA: "A shout of joy",
        optionB: "A song",
        optionC: "A whisper",
        correctAnswer: "A shout of joy",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The ______ is shining bright as day.",
        optionA: "Sun",
        optionB: "Moon",
        optionC: "Star",
        correctAnswer: "Moon",
      }),
      shuffleOptions({
        question: "Leave your ______ and leave your sleep.",
        optionA: "Supper",
        optionB: "Toys",
        optionC: "Books",
        correctAnswer: "Supper",
      }),
      shuffleOptions({
        question: "Come with a ______ of joy.",
        optionA: "Whoop",
        optionB: "Cry",
        optionC: "Tear",
        correctAnswer: "Whoop",
      }),
      shuffleOptions({
        question: "Come with a ______.",
        optionA: "Call",
        optionB: "Stick",
        optionC: "Bag",
        correctAnswer: "Call",
      }),
      shuffleOptions({
        question: "Come with a good ______.",
        optionA: "Will",
        optionB: "Friend",
        optionC: "Book",
        correctAnswer: "Will",
      }),
      shuffleOptions({
        question: "Dance on the open ______.",
        optionA: "Road",
        optionB: "Green",
        optionC: "Street",
        correctAnswer: "Green",
      }),
      shuffleOptions({
        question: "Who holds longest shall be our ______.",
        optionA: "King",
        optionB: "Queen",
        optionC: "Captain",
        correctAnswer: "Queen",
      }),
      shuffleOptions({
        question: "Playing is natural to ______.",
        optionA: "Children",
        optionB: "Parents",
        optionC: "Teachers",
        correctAnswer: "Children",
      }),
      shuffleOptions({
        question: "A ______ is a companion at play.",
        optionA: "Playfellow",
        optionB: "Stranger",
        optionC: "Teacher",
        correctAnswer: "Playfellow",
      }),
      shuffleOptions({
        question: "Supper means our ______.",
        optionA: "Lunch",
        optionB: "Food",
        optionC: "Breakfast",
        correctAnswer: "Food",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The poem invites only boys to play.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The moon is shining bright as day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Children are asked to bring their books.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The children are asked to leave supper and sleep.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "They are invited to play on the open green.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The one who runs fastest shall be queen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A playfellow means a companion at play.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Whoop means a whisper.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Playing is natural to children.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The poem talks about classroom study.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;
