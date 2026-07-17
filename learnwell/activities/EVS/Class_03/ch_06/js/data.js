export const chapter = "Chapter - 6: Animals Around Us";
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
        question: "Which animal is known as man’s best friend?",
        optionA: "Cat",
        optionB: "Dog",
        optionC: "Cow",
        correctAnswer: "Dog",
      }),
      shuffleOptions({
        question: "Which bird has a crown on its head and cries loudly?",
        optionA: "Peacock",
        optionB: "Sparrow",
        optionC: "Koel",
        correctAnswer: "Peacock",
      }),
      shuffleOptions({
        question: "Which insect can both crawl and fly?",
        optionA: "Butterfly",
        optionB: "Cockroach",
        optionC: "Bee",
        correctAnswer: "Cockroach",
      }),
      shuffleOptions({
        question: "Which animal has a pouch to carry its baby?",
        optionA: "Kangaroo",
        optionB: "Rabbit",
        optionC: "Monkey",
        correctAnswer: "Kangaroo",
      }),
      shuffleOptions({
        question: "Which bird makes a melodious sound?",
        optionA: "Koel",
        optionB: "Crow",
        optionC: "Pigeon",
        correctAnswer: "Koel",
      }),
      shuffleOptions({
        question: "Which bird is black in colour and says caw-caw all the time?",
        optionA: "Crow",
        optionB: "Parrot",
        optionC: "Pigeon",
        correctAnswer: "Crow",
      }),
      shuffleOptions({
        question: "Which animal can pull its head and legs inside its shell?",
        optionA: "Tortoise",
        optionB: "Snake",
        optionC: "Lizard",
        correctAnswer: "Tortoise",
      }),
      shuffleOptions({
        question: "Which bird loves to copy human speech?",
        optionA: "Parrot",
        optionB: "Sparrow",
        optionC: "Crow",
        correctAnswer: "Parrot",
      }),
      shuffleOptions({
        question: "Which bird makes its nest in ventilators of buildings?",
        optionA: "Pigeon",
        optionB: "Crow",
        optionC: "Peacock",
        correctAnswer: "Pigeon",
      }),
      shuffleOptions({
        question: "Which animals move along with their body slowly and carefully?",
        optionA: "Crawling animals",
        optionB: "Flyers",
        optionC: "Extinct animals",
        correctAnswer: "Crawling animals",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Some birds like flamingo and Siberian crane ________ to warm places in winter.",
        optionA: "travel",
        optionB: "migrate",
        optionC: "sleep",
        correctAnswer: "migrate",
      }),
      shuffleOptions({
        question: "Insects use their ________ to fly.",
        optionA: "wings",
        optionB: "legs",
        optionC: "tails",
        correctAnswer: "wings",
      }),
      shuffleOptions({
        question: "Animals need food, air and ________ to live.",
        optionA: "clothes",
        optionB: "shelter",
        optionC: "toys",
        correctAnswer: "shelter",
      }),
      shuffleOptions({
        question: "________ is a farmer’s best friend.",
        optionA: "Earthworm",
        optionB: "Leech",
        optionC: "Mosquito",
        correctAnswer: "Earthworm",
      }),
      shuffleOptions({
        question: "The sound of ________ is sweet and melodious.",
        optionA: "Koel",
        optionB: "Crow",
        optionC: "Parrot",
        correctAnswer: "Koel",
      }),
      shuffleOptions({
        question: "________ is a blood-sucking worm.",
        optionA: "Butterfly",
        optionB: "Leech",
        optionC: "Bee",
        correctAnswer: "Leech",
      }),
      shuffleOptions({
        question: "________ and ________ are examples of big animals.",
        optionA: "Elephant and Giraffe",
        optionB: "Cat and Dog",
        optionC: "Squirrel and Mouse",
        correctAnswer: "Elephant and Giraffe",
      }),
      shuffleOptions({
        question: "________ are tiny creatures having six legs.",
        optionA: "Birds",
        optionB: "Insects",
        optionC: "Reptiles",
        correctAnswer: "Insects",
      }),
      shuffleOptions({
        question: "A ________ is an extinct animal.",
        optionA: "Dinosaur",
        optionB: "Snake",
        optionC: "Tiger",
        correctAnswer: "Dinosaur",
      }),
      shuffleOptions({
        question: "________ should be treated with kindness and care.",
        optionA: "Stray animals",
        optionB: "Wild trees",
        optionC: "Old toys",
        correctAnswer: "Stray animals",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Birds use their wings to fly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cockroach can both crawl and fly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Crow is white in colour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Parrot cannot speak like humans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Snake is a crawling animal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Earthworm helps to make the soil fertile.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Koel makes a very harsh sound.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Some birds move to warmer places in winter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should always tease stray animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "All animals are living beings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
