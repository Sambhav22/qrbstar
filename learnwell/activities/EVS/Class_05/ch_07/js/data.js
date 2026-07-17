export const chapter = "Chapter - 7: Super Senses";
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
        question: "Which animal is trained by militants as a sniffing dog?",
        optionA: "Cat",
        optionB: "Horse",
        optionC: "Dog",
        correctAnswer: "Dog",
      }),
      shuffleOptions({
        question: "Which animal can sense the ultrasound range that humans cannot?",
        optionA: "Rat",
        optionB: "Cow",
        optionC: "Deer",
        correctAnswer: "Rat",
      }),
      shuffleOptions({
        question: "Which organ helps reptiles like snakes and lizards to detect taste and smell?",
        optionA: "Jacobson’s organ",
        optionB: "Eardrum",
        optionC: "Tongue pit",
        correctAnswer: "Jacobson’s organ",
      }),
      shuffleOptions({
        question: "Which animal can see six times better at night than most humans?",
        optionA: "Tiger",
        optionB: "Rabbit",
        optionC: "Elephant",
        correctAnswer: "Tiger",
      }),
      shuffleOptions({
        question: "What chemical do ants and termites release to communicate?",
        optionA: "Hormone",
        optionB: "Pheromone",
        optionC: "Enzyme",
        correctAnswer: "Pheromone",
      }),
      shuffleOptions({
        question: "Which animal uses light flashes to communicate with its mate?",
        optionA: "Glow-worm",
        optionB: "Bee",
        optionC: "Owl",
        correctAnswer: "Glow-worm",
      }),
      shuffleOptions({
        question: "Which creature performs a waggle dance to inform others about food?",
        optionA: "Honeybee",
        optionB: "Butterfly",
        optionC: "Sparrow",
        correctAnswer: "Honeybee",
      }),
      shuffleOptions({
        question: "Which sense helps cockroaches feel their surroundings?",
        optionA: "Sense of touch",
        optionB: "Sense of taste",
        optionC: "Sense of smell",
        correctAnswer: "Sense of touch",
      }),
      shuffleOptions({
        question: "Which animal hides its tail when it is scared?",
        optionA: "Dog",
        optionB: "Cat",
        optionC: "Goat",
        correctAnswer: "Dog",
      }),
      shuffleOptions({
        question: "Which animals have a strong sense of hearing and can focus their ears in the direction of sound?",
        optionA: "Elephants and horses",
        optionB: "Rabbits and frogs",
        optionC: "Lions and tigers",
        correctAnswer: "Elephants and horses",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Animals can sense changes in the ______.",
        optionA: "climate",
        optionB: "environment",
        optionC: "light",
        correctAnswer: "environment",
      }),
      shuffleOptions({
        question: "Sense organs help animals to avoid a ______ environment.",
        optionA: "noisy",
        optionB: "hostile",
        optionC: "cold",
        correctAnswer: "hostile",
      }),
      shuffleOptions({
        question: "Mammals have a much keener sense of ______ than humans.",
        optionA: "hearing",
        optionB: "smell",
        optionC: "sight",
        correctAnswer: "smell",
      }),
      shuffleOptions({
        question: "Cockroaches have tiny ______ along their bodies to feel their surroundings.",
        optionA: "hairs",
        optionB: "scales",
        optionC: "feathers",
        correctAnswer: "hairs",
      }),
      shuffleOptions({
        question: "In reptiles, birds and mammals, taste receptors are found on the ______.",
        optionA: "tail",
        optionB: "tongue",
        optionC: "ear",
        correctAnswer: "tongue",
      }),
      shuffleOptions({
        question: "Snakes use their ______ to collect smell molecules and transfer them to Jacobson’s organ.",
        optionA: "tongue",
        optionB: "nose",
        optionC: "eye",
        correctAnswer: "tongue",
      }),
      shuffleOptions({
        question: "Dogs and cats are very sensitive to ______ taste.",
        optionA: "bitter",
        optionB: "salty",
        optionC: "sweet",
        correctAnswer: "bitter",
      }),
      shuffleOptions({
        question: "Some animals can see ______ light, which humans cannot.",
        optionA: "ultraviolet",
        optionB: "red",
        optionC: "orange",
        correctAnswer: "ultraviolet",
      }),
      shuffleOptions({
        question: "Glow-worms communicate by producing a series of ______.",
        optionA: "flashes",
        optionB: "sounds",
        optionC: "vibrations",
        correctAnswer: "flashes",
      }),
      shuffleOptions({
        question: "Ants release ______ to convey messages such as danger or food.",
        optionA: "pheromones",
        optionB: "enzymes",
        optionC: "hormones",
        correctAnswer: "pheromones",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Dogs have a stronger sense of smell than humans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Snakes detect smell and taste using Jacobson’s organ.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rats can sense ultrasound range.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tigers can see six times better at night than most humans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ants communicate only through sound.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Glow-worms communicate through light signals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Elephants and horses have a poor sense of hearing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mammals usually have a keener sense of smell than humans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Honeybees communicate by performing a waggle dance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Animals use their senses to respond to stimuli in their surroundings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
