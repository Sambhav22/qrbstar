export const chapter = "Chapter - 15: Habitats of Animals";
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
        question: "Which animal can live comfortably in very cold regions?",
        optionA: "Camel",
        optionB: "Polar bear",
        optionC: "Elephant",
        correctAnswer: "Polar bear",
      }),
      shuffleOptions({
        question: "Which of the following animals lives underground?",
        optionA: "Rabbit",
        optionB: "Monkey",
        optionC: "Crow",
        correctAnswer: "Rabbit",
      }),
      shuffleOptions({
        question: "Which animal is known as a social insect?",
        optionA: "Spider",
        optionB: "Ant",
        optionC: "Worm",
        correctAnswer: "Ant",
      }),
      shuffleOptions({
        question: "Which animal lives in deserts?",
        optionA: "Deer",
        optionB: "Camel",
        optionC: "Seal",
        correctAnswer: "Camel",
      }),
      shuffleOptions({
        question: "Which bird builds its nest high on a tree?",
        optionA: "Hen",
        optionB: "Eagle",
        optionC: "Crow",
        correctAnswer: "Eagle",
      }),
      shuffleOptions({
        question: "Which animal comes out of water to give birth to its young ones?",
        optionA: "Walrus",
        optionB: "Whale",
        optionC: "Fish",
        correctAnswer: "Walrus",
      }),
      shuffleOptions({
        question: "Which of the following animals lives on trees?",
        optionA: "Tiger",
        optionB: "Monkey",
        optionC: "Snake",
        correctAnswer: "Monkey",
      }),
      shuffleOptions({
        question: "Which bird makes a beautiful nest using grass and twigs?",
        optionA: "Weaver bird",
        optionB: "Crow",
        optionC: "Duck",
        correctAnswer: "Weaver bird",
      }),
      shuffleOptions({
        question: "Which animal spins a web to catch flies and mosquitoes?",
        optionA: "Bee",
        optionB: "Spider",
        optionC: "Butterfly",
        correctAnswer: "Spider",
      }),
      shuffleOptions({
        question: "Which area provides shelter to crabs, turtles and sea worms?",
        optionA: "Desert",
        optionB: "Seashore",
        optionC: "Forest",
        correctAnswer: "Seashore",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The natural home of an animal is called its _______.",
        optionA: "nest",
        optionB: "habitat",
        optionC: "burrow",
        correctAnswer: "habitat",
      }),
      shuffleOptions({
        question: "Animals that live on land are called _______ animals.",
        optionA: "aquatic",
        optionB: "terrestrial",
        optionC: "polar",
        correctAnswer: "terrestrial",
      }),
      shuffleOptions({
        question: "Birds make nests to lay their _______.",
        optionA: "eggs",
        optionB: "feathers",
        optionC: "food",
        correctAnswer: "eggs",
      }),
      shuffleOptions({
        question: "Ants live together in groups called _______.",
        optionA: "colonies",
        optionB: "herds",
        optionC: "teams",
        correctAnswer: "colonies",
      }),
      shuffleOptions({
        question: "Spiders make their webs from _______ produced in their bodies.",
        optionA: "silk",
        optionB: "wool",
        optionC: "grass",
        correctAnswer: "silk",
      }),
      shuffleOptions({
        question: "Camels live in _______ regions.",
        optionA: "desert",
        optionB: "polar",
        optionC: "forest",
        correctAnswer: "desert",
      }),
      shuffleOptions({
        question: "Crabs and turtles live near the _______.",
        optionA: "seashore",
        optionB: "desert",
        optionC: "forest",
        correctAnswer: "seashore",
      }),
      shuffleOptions({
        question: "Polar regions are always covered with _______.",
        optionA: "sand",
        optionB: "snow",
        optionC: "leaves",
        correctAnswer: "snow",
      }),
      shuffleOptions({
        question: "Lions and tigers live in _______.",
        optionA: "caves",
        optionB: "nests",
        optionC: "water",
        correctAnswer: "caves",
      }),
      shuffleOptions({
        question: "Birds use twigs, dry grass and leaves to build their _______.",
        optionA: "nests",
        optionB: "caves",
        optionC: "holes",
        correctAnswer: "nests",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Monkeys and chimpanzees live on trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lions and tigers live in kennels.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Polar bears and arctic foxes live in cold regions covered with snow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ants live alone and do not share food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Walruses spend their whole life inside water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Spiders make webs to catch insects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Birds make nests only for fun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Crabs and turtles live under rocks or sand near the sea.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Wildlife sanctuaries protect animals in their natural habitats.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nocturnal animals sleep during the day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
