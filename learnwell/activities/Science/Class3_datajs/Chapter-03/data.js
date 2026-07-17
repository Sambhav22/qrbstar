export const chapter = "Chapter - 3: Feeding Habits of Animals";
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
        question: "Which animal uses its sticky tongue to catch insects?",
        optionA: "Rabbit",
        optionB: "Frog",
        optionC: "Snake",
        correctAnswer: "Frog",
      }),
      shuffleOptions({
        question: "Which animal gnaws its food using sharp front teeth?",
        optionA: "Rabbit",
        optionB: "Crow",
        optionC: "Frog",
        correctAnswer: "Rabbit",
      }),
      shuffleOptions({
        question: "Which animal feeds on the flesh of dead animals?",
        optionA: "Cow",
        optionB: "Vulture",
        optionC: "Sheep",
        correctAnswer: "Vulture",
      }),
      shuffleOptions({
        question: "Which animal has a tube-like mouthpart to suck nectar?",
        optionA: "Butterfly",
        optionB: "Tiger",
        optionC: "Dog",
        correctAnswer: "Butterfly",
      }),
      shuffleOptions({
        question: "Which animal swallows its food whole without chewing?",
        optionA: "Snake",
        optionB: "Horse",
        optionC: "Cat",
        correctAnswer: "Snake",
      }),
      shuffleOptions({
        question: "Which animal sucks blood from the bodies of other animals?",
        optionA: "Leech",
        optionB: "Bee",
        optionC: "Lion",
        correctAnswer: "Leech",
      }),
      shuffleOptions({
        question: "Which animal spins a web to catch insects?",
        optionA: "Spider",
        optionB: "Frog",
        optionC: "Cow",
        correctAnswer: "Spider",
      }),
      shuffleOptions({
        question: "Which of the following is a carnivore?",
        optionA: "Lion",
        optionB: "Horse",
        optionC: "Bear",
        correctAnswer: "Lion",
      }),
      shuffleOptions({
        question: "Which animal swallows soil containing dead plants and animals?",
        optionA: "Earthworm",
        optionB: "Rabbit",
        optionC: "Tiger",
        correctAnswer: "Earthworm",
      }),
      shuffleOptions({
        question: "Which of the following forms the beginning of a food chain?",
        optionA: "Plants",
        optionB: "Animals",
        optionC: "Air",
        correctAnswer: "Plants",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Animals that eat only plants are called ______.",
        optionA: "carnivores",
        optionB: "herbivores",
        optionC: "omnivores",
        correctAnswer: "herbivores",
      }),
      shuffleOptions({
        question: "Animals that eat both plants and animals are called ______.",
        optionA: "scavengers",
        optionB: "omnivores",
        optionC: "carnivores",
        correctAnswer: "omnivores",
      }),
      shuffleOptions({
        question: "Animals that eat the flesh of other animals are called ______.",
        optionA: "carnivores",
        optionB: "herbivores",
        optionC: "omnivores",
        correctAnswer: "carnivores",
      }),
      shuffleOptions({
        question: "Animals that feed on the flesh of dead animals are called ______.",
        optionA: "scavengers",
        optionB: "omnivores",
        optionC: "herbivores",
        correctAnswer: "scavengers",
      }),
      shuffleOptions({
        question: "Bees and butterflies have ______ mouthparts to suck nectar.",
        optionA: "flat",
        optionB: "tube-like",
        optionC: "pointed",
        correctAnswer: "tube-like",
      }),
      shuffleOptions({
        question: "Frogs catch their prey with their ______ tongues.",
        optionA: "dry",
        optionB: "sticky",
        optionC: "strong",
        correctAnswer: "sticky",
      }),
      shuffleOptions({
        question: "Snakes do not have chewing teeth; they ______ their food whole.",
        optionA: "bite",
        optionB: "swallow",
        optionC: "chew",
        correctAnswer: "swallow",
      }),
      shuffleOptions({
        question: "Cows and buffaloes chew the ______.",
        optionA: "cud",
        optionB: "leaf",
        optionC: "seed",
        correctAnswer: "cud",
      }),
      shuffleOptions({
        question: "Leeches suck ______ from other animals.",
        optionA: "blood",
        optionB: "juice",
        optionC: "water",
        correctAnswer: "blood",
      }),
      shuffleOptions({
        question: "Earthworms swallow ______ that contains dead plants and animals.",
        optionA: "soil",
        optionB: "grass",
        optionC: "seeds",
        correctAnswer: "soil",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Frogs have sticky tongues to catch insects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rabbits chew the cud like cows.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bears eat both plants and flesh of animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Spiders spin webs to trap insects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Snakes chew their food before eating.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Vultures and hyenas are scavengers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Butterflies use their wings to suck nectar.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Earthworms swallow soil containing dead matter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lions eat plants and fruits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A food chain always begins with a plant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
