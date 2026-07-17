export const chapter = "Chapter - 6: Fun at Fair";
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
        question: "Who went to the Great Bombay Mela with his family?",
        optionA: "Mr Ashok Vasan",
        optionB: "Mr Ramesh Singh",
        optionC: "Mr Arun Mehta",
        correctAnswer: "Mr Ashok Vasan",
      }),
      shuffleOptions({
        question: "What began the circus show?",
        optionA: "Magic show",
        optionB: "Gymnasts’ performance",
        optionC: "Juggling act",
        correctAnswer: "Gymnasts’ performance",
      }),
      shuffleOptions({
        question: "Who performed magical tricks in the circus?",
        optionA: "Jugglers",
        optionB: "Clowns",
        optionC: "Gymnasts",
        correctAnswer: "Clowns",
      }),
      shuffleOptions({
        question: "What did the bear do during the animal show?",
        optionA: "Danced on a rope",
        optionB: "Drove a motorcycle",
        optionC: "Played with a ball",
        correctAnswer: "Drove a motorcycle",
      }),
      shuffleOptions({
        question: "Which animal rode a unicycle?",
        optionA: "Dog",
        optionB: "Monkey",
        optionC: "Bear",
        correctAnswer: "Monkey",
      }),
      shuffleOptions({
        question: "Which fair helps to promote trade of different regions?",
        optionA: "Auto Expo",
        optionB: "Trade Fair",
        optionC: "Book Fair",
        correctAnswer: "Trade Fair",
      }),
      shuffleOptions({
        question: "In which fair are new models of cars and bikes displayed?",
        optionA: "Book Fair",
        optionB: "Auto Expo",
        optionC: "Traditional Fair",
        correctAnswer: "Auto Expo",
      }),
      shuffleOptions({
        question: "What did Mr Vasan’s family purchase from the stalls?",
        optionA: "Fruits and vegetables",
        optionB: "Toys and wooden baskets",
        optionC: "Electronic gadgets",
        correctAnswer: "Toys and wooden baskets",
      }),
      shuffleOptions({
        question: "What did people enjoy after shopping at the mela?",
        optionA: "South Indian eatables",
        optionB: "North Indian dance",
        optionC: "Movie show",
        correctAnswer: "South Indian eatables",
      }),
      shuffleOptions({
        question: "How did the Vasan family feel after returning home?",
        optionA: "Tired",
        optionB: "Happy",
        optionC: "Angry",
        correctAnswer: "Happy",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Recreational activities are done for ______.",
        optionA: "money",
        optionB: "enjoyment",
        optionC: "competition",
        correctAnswer: "enjoyment",
      }),
      shuffleOptions({
        question: "In olden days, people went to fairs to buy ______.",
        optionA: "jewellery",
        optionB: "household items",
        optionC: "vehicles",
        correctAnswer: "household items",
      }),
      shuffleOptions({
        question: "Dussehra Mela and Diwali Mela are ______ fairs.",
        optionA: "sports",
        optionB: "festive",
        optionC: "modern",
        correctAnswer: "festive",
      }),
      shuffleOptions({
        question: "A book fair is organised to promote and sell different types of ______.",
        optionA: "books",
        optionB: "toys",
        optionC: "clothes",
        correctAnswer: "books",
      }),
      shuffleOptions({
        question: "The ringmaster controlled the ______.",
        optionA: "lion",
        optionB: "elephant",
        optionC: "clown",
        correctAnswer: "lion",
      }),
      shuffleOptions({
        question: "People enjoy high technology rides like ______ in amusement parks.",
        optionA: "roller coaster",
        optionB: "camel ride",
        optionC: "ferris wheel",
        correctAnswer: "roller coaster",
      }),
      shuffleOptions({
        question: "With time, the means of ______ are changing rapidly.",
        optionA: "communication",
        optionB: "recreation",
        optionC: "education",
        correctAnswer: "recreation",
      }),
      shuffleOptions({
        question: "Kites are flown on festivals like ______ and Basant Panchmi.",
        optionA: "Independence Day",
        optionB: "Holi",
        optionC: "Christmas",
        correctAnswer: "Independence Day",
      }),
      shuffleOptions({
        question: "Some poor children sell ______ at fairs to earn money.",
        optionA: "kites",
        optionB: "balloons",
        optionC: "books",
        correctAnswer: "kites",
      }),
      shuffleOptions({
        question: "The lion followed the instructions of his ______.",
        optionA: "trainer",
        optionB: "audience",
        optionC: "clown",
        correctAnswer: "trainer",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Great Bombay Mela was held for two weeks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Jugglers came before the magic show in the circus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Elephants saluted the crowd during the animal show.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Traditional fairs are mainly organised in rural areas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Trade fairs are held to promote books.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Flying kites is a modern invention.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Clowns performed magic tricks to amuse the audience.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The ringmaster controlled the lion successfully.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mr Vasan and his family watched a movie at the mela.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "People in olden days had very few means of recreation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
