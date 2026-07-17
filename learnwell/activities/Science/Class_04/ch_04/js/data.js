export const chapter = "Chapter - 4: Adaptations in Animals";
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
        question: "Which animal is called the “ship of the desert”?",
        optionA: "Horse",
        optionB: "Camel",
        optionC: "Elephant",
        correctAnswer: "Camel",
      }),
      shuffleOptions({
        question: "Which organ helps fish to breathe in water?",
        optionA: "Lungs",
        optionB: "Gills",
        optionC: "Spiracles",
        correctAnswer: "Gills",
      }),
      shuffleOptions({
        question: "Which animals can live both on land and in water?",
        optionA: "Aquatic animals",
        optionB: "Amphibians",
        optionC: "Aerial animals",
        correctAnswer: "Amphibians",
      }),
      shuffleOptions({
        question: "Which animal changes its body colour to match the surroundings?",
        optionA: "Chameleon",
        optionB: "Zebra",
        optionC: "Monkey",
        correctAnswer: "Chameleon",
      }),
      shuffleOptions({
        question: "Which animals live in water and have fins to move?",
        optionA: "Aquatic animals",
        optionB: "Arboreal animals",
        optionC: "Aerial animals",
        correctAnswer: "Aquatic animals",
      }),
      shuffleOptions({
        question: "Which bird cannot fly?",
        optionA: "Crow",
        optionB: "Penguin",
        optionC: "Sparrow",
        correctAnswer: "Penguin",
      }),
      shuffleOptions({
        question: "Which animal feeds on dead animals?",
        optionA: "Scavenger",
        optionB: "Parasite",
        optionC: "Herbivore",
        correctAnswer: "Scavenger",
      }),
      shuffleOptions({
        question: "Which mammal can fly in the air?",
        optionA: "Bat",
        optionB: "Frog",
        optionC: "Lizard",
        correctAnswer: "Bat",
      }),
      shuffleOptions({
        question: "Which animal has webbed feet to swim?",
        optionA: "Duck",
        optionB: "Pigeon",
        optionC: "Hen",
        correctAnswer: "Duck",
      }),
      shuffleOptions({
        question: "Which animal looks like a twig to hide from enemies?",
        optionA: "Stick insect",
        optionB: "Leaf insect",
        optionC: "Butterfly",
        correctAnswer: "Stick insect",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The natural surroundings where an animal lives is called its ______.",
        optionA: "Habitat",
        optionB: "Home",
        optionC: "Nest",
        correctAnswer: "Habitat",
      }),
      shuffleOptions({
        question: "Camels have ______ feet that help them walk on sand.",
        optionA: "Webbed",
        optionB: "Padded",
        optionC: "Flat",
        correctAnswer: "Padded",
      }),
      shuffleOptions({
        question: "Frogs breathe through their ______ when in water.",
        optionA: "Lungs",
        optionB: "Skin",
        optionC: "Gills",
        correctAnswer: "Skin",
      }),
      shuffleOptions({
        question: "Animals that eat both plants and animals are called ______.",
        optionA: "Omnivores",
        optionB: "Carnivores",
        optionC: "Herbivores",
        correctAnswer: "Omnivores",
      }),
      shuffleOptions({
        question: "Animals living on trees are called ______.",
        optionA: "Arboreal animals",
        optionB: "Terrestrial animals",
        optionC: "Aquatic animals",
        correctAnswer: "Arboreal animals",
      }),
      shuffleOptions({
        question: "Animals that can fly are called ______.",
        optionA: "Aerial animals",
        optionB: "Aquatic animals",
        optionC: "Arboreal animals",
        correctAnswer: "Aerial animals",
      }),
      shuffleOptions({
        question: "Animals that eat flesh of other animals are called ______.",
        optionA: "Carnivores",
        optionB: "Herbivores",
        optionC: "Parasites",
        correctAnswer: "Carnivores",
      }),
      shuffleOptions({
        question: "Leaf insects look like a ______.",
        optionA: "Twig",
        optionB: "Leaf",
        optionC: "Flower",
        correctAnswer: "Leaf",
      }),
      shuffleOptions({
        question: "Camouflage helps animals to ______.",
        optionA: "Find food",
        optionB: "Hide from enemies",
        optionC: "Build homes",
        correctAnswer: "Hide from enemies",
      }),
      shuffleOptions({
        question: "Animals in danger of disappearing are called ______.",
        optionA: "Endangered animals",
        optionB: "Extinct animals",
        optionC: "Protected animals",
        correctAnswer: "Endangered animals",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Camels can live without water for several weeks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Frogs breathe only through lungs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ducks have webbed feet that help them to swim.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Chameleons can change their colour for protection.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All birds can fly in the air.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Insects breathe through spiracles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tigers are herbivorous animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fish have streamlined bodies that help them to swim easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Vultures and hyenas are scavengers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Camouflage is a way animals protect themselves from enemies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
