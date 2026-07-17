export const chapter = "Chapter - 3: Reproduction in Animals";
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
        question: "Which process helps animals to produce young ones of their own kind?",
        optionA: "Growth",
        optionB: "Reproduction",
        optionC: "Digestion",
        correctAnswer: "Reproduction",
      }),
      shuffleOptions({
        question: "Which animals give birth to babies and feed them with milk?",
        optionA: "Birds",
        optionB: "Mammals",
        optionC: "Reptiles",
        correctAnswer: "Mammals",
      }),
      shuffleOptions({
        question: "Which mammal can also fly like a bird?",
        optionA: "Whale",
        optionB: "Bat",
        optionC: "Elephant",
        correctAnswer: "Bat",
      }),
      shuffleOptions({
        question: "Which part of the egg protects the yolk?",
        optionA: "Shell",
        optionB: "Albumen",
        optionC: "Air sac",
        correctAnswer: "Albumen",
      }),
      shuffleOptions({
        question: "Which part of an egg is rich in fats?",
        optionA: "White part",
        optionB: "Yellow part",
        optionC: "Shell",
        correctAnswer: "Yellow part",
      }),
      shuffleOptions({
        question: "What are the clusters of eggs laid by a frog called?",
        optionA: "Nests",
        optionB: "Spawns",
        optionC: "Larvae",
        correctAnswer: "Spawns",
      }),
      shuffleOptions({
        question: "What is the young one of a frog called?",
        optionA: "Pupa",
        optionB: "Tadpole",
        optionC: "Larva",
        correctAnswer: "Tadpole",
      }),
      shuffleOptions({
        question: "Which stage of a butterfly remains inside a cocoon?",
        optionA: "Egg",
        optionB: "Pupa",
        optionC: "Larva",
        correctAnswer: "Pupa",
      }),
      shuffleOptions({
        question: "What is the process of change from larva to adult butterfly called?",
        optionA: "Transformation",
        optionB: "Metamorphosis",
        optionC: "Incubation",
        correctAnswer: "Metamorphosis",
      }),
      shuffleOptions({
        question: "Which process occurs when a bird keeps its eggs warm till they hatch?",
        optionA: "Incubation",
        optionB: "Hibernation",
        optionC: "Migration",
        correctAnswer: "Incubation",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Animals which give birth to babies are called ________.",
        optionA: "Reptiles",
        optionB: "Mammals",
        optionC: "Amphibians",
        correctAnswer: "Mammals",
      }),
      shuffleOptions({
        question: "A frog lays eggs in clusters called ________.",
        optionA: "Spawns",
        optionB: "Larvae",
        optionC: "Cocoons",
        correctAnswer: "Spawns",
      }),
      shuffleOptions({
        question: "The thin, hard outer covering of an egg is known as ________.",
        optionA: "Yolk",
        optionB: "Eggshell",
        optionC: "Albumen",
        correctAnswer: "Eggshell",
      }),
      shuffleOptions({
        question: "The white jelly-like part of an egg is called ________.",
        optionA: "Yolk",
        optionB: "Albumen",
        optionC: "Embryo",
        correctAnswer: "Albumen",
      }),
      shuffleOptions({
        question: "The ________ inside the yolk develops into a young one.",
        optionA: "Embryo",
        optionB: "Shell",
        optionC: "Fluid",
        correctAnswer: "Embryo",
      }),
      shuffleOptions({
        question: "The young one of a butterfly is called ________.",
        optionA: "Larva",
        optionB: "Pupa",
        optionC: "Tadpole",
        correctAnswer: "Larva",
      }),
      shuffleOptions({
        question: "The ________ forms a covering called cocoon around itself.",
        optionA: "Caterpillar",
        optionB: "Egg",
        optionC: "Butterfly",
        correctAnswer: "Caterpillar",
      }),
      shuffleOptions({
        question: "Birds sit on their eggs to give them warmth for ________.",
        optionA: "Hibernation",
        optionB: "Incubation",
        optionC: "Migration",
        correctAnswer: "Incubation",
      }),
      shuffleOptions({
        question: "The process of an embryo coming out of an egg is called ________.",
        optionA: "Hatching",
        optionB: "Molting",
        optionC: "Breathing",
        correctAnswer: "Hatching",
      }),
      shuffleOptions({
        question: "Whales and ________ are mammals that live in water.",
        optionA: "Dolphins",
        optionB: "Sharks",
        optionC: "Octopuses",
        correctAnswer: "Dolphins",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Reproduction helps animals to continue their kind.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All mammals lay eggs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Whales and dolphins look like fish but are mammals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Frogs lay eggs in nests like birds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A tadpole looks exactly like an adult frog.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The caterpillar stage of a butterfly is also called a larva.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Birds keep their eggs warm by sitting on them; this is called incubation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The yellow part of an egg is called albumen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The embryo inside the egg grows into a young one.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mammals feed their young ones with milk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
