export const chapter = "Chapter - 12: Teeth, Beaks and Claws";
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
        question: "Which part of a bird acts like teeth for it?",
        optionA: "Tongue",
        optionB: "Beak",
        optionC: "Claws",
        correctAnswer: "Beak",
      }),
      shuffleOptions({
        question: "Which type of teeth help herbivores to grind food?",
        optionA: "Canines",
        optionB: "Molars",
        optionC: "Incisors",
        correctAnswer: "Molars",
      }),
      shuffleOptions({
        question: "Carnivores use their long canines to do what?",
        optionA: "Chew grass",
        optionB: "Tear flesh",
        optionC: "Break nuts",
        correctAnswer: "Tear flesh",
      }),
      shuffleOptions({
        question: "What kind of teeth do omnivores have?",
        optionA: "Only molars",
        optionB: "Only canines",
        optionC: "Both sharp front teeth and molars",
        correctAnswer: "Both sharp front teeth and molars",
      }),
      shuffleOptions({
        question: "Which bird cracks nuts with its curved beak?",
        optionA: "Parrot",
        optionB: "Duck",
        optionC: "Woodpecker",
        correctAnswer: "Parrot",
      }),
      shuffleOptions({
        question: "Which bird uses its beak like a sieve to get food from water?",
        optionA: "Duck",
        optionB: "Eagle",
        optionC: "Crow",
        correctAnswer: "Duck",
      }),
      shuffleOptions({
        question: "Which bird has a chisel-shaped beak to drill tree trunks?",
        optionA: "Woodpecker",
        optionB: "Kingfisher",
        optionC: "Pigeon",
        correctAnswer: "Woodpecker",
      }),
      shuffleOptions({
        question: "What do humming birds use their long slender beaks for?",
        optionA: "Sucking nectar",
        optionB: "Catching insects",
        optionC: "Breaking nuts",
        correctAnswer: "Sucking nectar",
      }),
      shuffleOptions({
        question: "What do eagles use their strong claws for?",
        optionA: "Holding prey",
        optionB: "Climbing trees",
        optionC: "Scratching ground",
        correctAnswer: "Holding prey",
      }),
      shuffleOptions({
        question: "What is the act of birds cleaning their feathers with their beaks called?",
        optionA: "Preening",
        optionB: "Pecking",
        optionC: "Perching",
        correctAnswer: "Preening",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Humans use their teeth to ______ food.",
        optionA: "chew",
        optionB: "peel",
        optionC: "scratch",
        correctAnswer: "chew",
      }),
      shuffleOptions({
        question: "Herbivores use their front teeth for ______.",
        optionA: "grinding",
        optionB: "cutting",
        optionC: "tearing",
        correctAnswer: "grinding",
      }),
      shuffleOptions({
        question: "Carnivores have sharp teeth to ______ flesh.",
        optionA: "tear",
        optionB: "chew",
        optionC: "grind",
        correctAnswer: "tear",
      }),
      shuffleOptions({
        question: "Birds do not have ______ like humans.",
        optionA: "teeth",
        optionB: "beaks",
        optionC: "claws",
        correctAnswer: "teeth",
      }),
      shuffleOptions({
        question: "The beak of a duck is broad and ______.",
        optionA: "flat",
        optionB: "hooked",
        optionC: "curved",
        correctAnswer: "flat",
      }),
      shuffleOptions({
        question: "Parrots have ______ beaks to crack nuts.",
        optionA: "curved",
        optionB: "flat",
        optionC: "hooked",
        correctAnswer: "curved",
      }),
      shuffleOptions({
        question: "Woodpeckers use their beaks to ______ tree trunks.",
        optionA: "drill",
        optionB: "cut",
        optionC: "scratch",
        correctAnswer: "drill",
      }),
      shuffleOptions({
        question: "Hens have ______ claws to scratch the soil.",
        optionA: "scratching",
        optionB: "wading",
        optionC: "perching",
        correctAnswer: "scratching",
      }),
      shuffleOptions({
        question: "Cranes stand in water with ______ claws.",
        optionA: "wading",
        optionB: "swimming",
        optionC: "holding",
        correctAnswer: "wading",
      }),
      shuffleOptions({
        question: "Ducks have ______ feet to swim.",
        optionA: "webbed",
        optionB: "long",
        optionC: "thin",
        correctAnswer: "webbed",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Birds have teeth to chew food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Herbivores have more molars than humans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Carnivores chew grass using flat teeth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Parrots have curved beaks for cracking nuts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ducks use broad flat beaks to filter food from water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Woodpeckers suck nectar from flowers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Hawks and vultures use claws to grip their prey.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sparrows have perching claws for holding branches.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cranes have scratching claws for digging soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Preening keeps a bird’s feathers clean and smooth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
