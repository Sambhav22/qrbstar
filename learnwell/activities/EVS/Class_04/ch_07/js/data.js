export const chapter = "Chapter - 7: Animals Around Us";
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
        question: "Which animals live together in herds for safety?",
        optionA: "Tigers",
        optionB: "Grazing animals",
        optionC: "Foxes",
        correctAnswer: "Grazing animals",
      }),
      shuffleOptions({
        question: "Which animal is known to roam around with its family?",
        optionA: "Elephant",
        optionB: "Fox",
        optionC: "Deer",
        correctAnswer: "Elephant",
      }),
      shuffleOptions({
        question: "Which animal behaves friendly and helps others in its group?",
        optionA: "Chimpanzee",
        optionB: "Lion",
        optionC: "Crocodile",
        correctAnswer: "Chimpanzee",
      }),
      shuffleOptions({
        question: "Which animals prefer to live alone?",
        optionA: "Solitary animals",
        optionB: "Group animals",
        optionC: "Friendly animals",
        correctAnswer: "Solitary animals",
      }),
      shuffleOptions({
        question: "What is a group of lions called?",
        optionA: "Colony",
        optionB: "Pride",
        optionC: "Flight",
        correctAnswer: "Pride",
      }),
      shuffleOptions({
        question: "Which animals show love and regard to their masters?",
        optionA: "Friendly animals",
        optionB: "Shy animals",
        optionC: "Wild animals",
        correctAnswer: "Friendly animals",
      }),
      shuffleOptions({
        question: "Which animals avoid the company of humans?",
        optionA: "Shy animals",
        optionB: "Friendly animals",
        optionC: "Group animals",
        correctAnswer: "Shy animals",
      }),
      shuffleOptions({
        question: "Dolphins attack their group members for",
        optionA: "Food",
        optionB: "Play",
        optionC: "Love",
        correctAnswer: "Food",
      }),
      shuffleOptions({
        question: "Which animals have internal ears?",
        optionA: "Birds",
        optionB: "Monkeys",
        optionC: "Cows",
        correctAnswer: "Birds",
      }),
      shuffleOptions({
        question: "Who earns their living through animals like snakes or elephants?",
        optionA: "Snake charmers",
        optionB: "Gardeners",
        optionC: "Shopkeepers",
        correctAnswer: "Snake charmers",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Living in groups helps animals in ______.",
        optionA: "Safety",
        optionB: "Resting",
        optionC: "Sleeping",
        correctAnswer: "Safety",
      }),
      shuffleOptions({
        question: "Animals like dogs and cows are called ______ animals.",
        optionA: "Friendly",
        optionB: "Shy",
        optionC: "Solitary",
        correctAnswer: "Friendly",
      }),
      shuffleOptions({
        question: "Animals like deer and squirrels are ______ in nature.",
        optionA: "Shy",
        optionB: "Friendly",
        optionC: "Angry",
        correctAnswer: "Shy",
      }),
      shuffleOptions({
        question: "Animals that live alone are called ______ animals.",
        optionA: "Solitary",
        optionB: "Group",
        optionC: "Wild",
        correctAnswer: "Solitary",
      }),
      shuffleOptions({
        question: "Living in groups makes it easy to find their ______.",
        optionA: "Mates",
        optionB: "Enemies",
        optionC: "Predators",
        correctAnswer: "Mates",
      }),
      shuffleOptions({
        question: "A group of tigers is called a ______.",
        optionA: "Streak",
        optionB: "Pride",
        optionC: "Colony",
        correctAnswer: "Streak",
      }),
      shuffleOptions({
        question: "A group of apes is called a ______.",
        optionA: "Troop",
        optionB: "Flight",
        optionC: "Bank",
        correctAnswer: "Troop",
      }),
      shuffleOptions({
        question: "Mammals have ______ on their bodies.",
        optionA: "Hair",
        optionB: "Scales",
        optionC: "Feathers",
        correctAnswer: "Hair",
      }),
      shuffleOptions({
        question: "People like mahouts work with ______.",
        optionA: "Elephants",
        optionB: "Cows",
        optionC: "Birds",
        correctAnswer: "Elephants",
      }),
      shuffleOptions({
        question: "Crocodiles and lizards have ______ ears.",
        optionA: "Internal",
        optionB: "External",
        optionC: "No",
        correctAnswer: "Internal",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "All grazing animals live in herds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Elephants show close bonding with their families.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Snow leopard is a group-living animal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Friendly animals avoid humans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Birds have external ears.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Living in groups provides safety to animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Crocodiles have internal ears.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dolphins are gentle with their group members.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Chimpanzees co-operate with each other.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Living alone is safer than living in groups.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
