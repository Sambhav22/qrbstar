export const chapter = "Chapter - 7: Food and Shelter of Animals";
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
        question: "Which animal uses its trunk to take in food?",
        optionA: "Horse",
        optionB: "Dog",
        optionC: "Elephant",
        correctAnswer: "Elephant",
      }),
      shuffleOptions({
        question: "Which animal uses its long neck to reach food on tall trees?",
        optionA: "Lion",
        optionB: "Giraffe",
        optionC: "Cat",
        correctAnswer: "Giraffe",
      }),
      shuffleOptions({
        question: "Which animal uses its sticky tongue to catch insects?",
        optionA: "Frog",
        optionB: "Cow",
        optionC: "Tiger",
        correctAnswer: "Frog",
      }),
      shuffleOptions({
        question: "Which insect sucks nectar from flowers using long tubes?",
        optionA: "Bee",
        optionB: "Mosquito",
        optionC: "Spider",
        correctAnswer: "Bee",
      }),
      shuffleOptions({
        question: "Which insect stabs and sucks blood from our body?",
        optionA: "Butterfly",
        optionB: "Mosquito",
        optionC: "Ant",
        correctAnswer: "Mosquito",
      }),
      shuffleOptions({
        question: "Which animal creates a web to trap insects?",
        optionA: "Spider",
        optionB: "Lizard",
        optionC: "Hen",
        correctAnswer: "Spider",
      }),
      shuffleOptions({
        question: "Which animals use their hands to take food into their mouth?",
        optionA: "Cow and Buffalo",
        optionB: "Squirrel and Monkey",
        optionC: "Dog and Cat",
        correctAnswer: "Squirrel and Monkey",
      }),
      shuffleOptions({
        question: "Which animals lap up food using their tongue?",
        optionA: "Dog and Cat",
        optionB: "Cow and Buffalo",
        optionC: "Lion and Tiger",
        correctAnswer: "Dog and Cat",
      }),
      shuffleOptions({
        question: "Which animals live both on land and in water?",
        optionA: "Frog and Crocodile",
        optionB: "Whale and Fish",
        optionC: "Elephant and Deer",
        correctAnswer: "Frog and Crocodile",
      }),
      shuffleOptions({
        question: "Which animals live with us as pets?",
        optionA: "Dog and Cat",
        optionB: "Lion and Tiger",
        optionC: "Cow and Horse",
        correctAnswer: "Dog and Cat",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The giraffe uses its ________ to reach leaves on tall trees.",
        optionA: "Trunk",
        optionB: "Leg",
        optionC: "Neck",
        correctAnswer: "Neck",
      }),
      shuffleOptions({
        question: "An elephant uses its ________ to take in food.",
        optionA: "Trunk",
        optionB: "Beak",
        optionC: "Hands",
        correctAnswer: "Trunk",
      }),
      shuffleOptions({
        question: "Frogs catch insects with their ________ tongue.",
        optionA: "Sticky",
        optionB: "Dry",
        optionC: "Short",
        correctAnswer: "Sticky",
      }),
      shuffleOptions({
        question: "A spider makes a ________ to trap insects.",
        optionA: "Web",
        optionB: "Nest",
        optionC: "Hole",
        correctAnswer: "Web",
      }),
      shuffleOptions({
        question: "Bees and butterflies suck nectar using long ________.",
        optionA: "Tubes",
        optionB: "Beaks",
        optionC: "Tongues",
        correctAnswer: "Tubes",
      }),
      shuffleOptions({
        question: "Mosquitoes suck blood through a sharp ________.",
        optionA: "Tube",
        optionB: "Claw",
        optionC: "Teeth",
        correctAnswer: "Tube",
      }),
      shuffleOptions({
        question: "Animals that eat only plants are called ________.",
        optionA: "Herbivores",
        optionB: "Carnivores",
        optionC: "Omnivores",
        correctAnswer: "Herbivores",
      }),
      shuffleOptions({
        question: "Animals that eat both plants and animals are called ________.",
        optionA: "Omnivores",
        optionB: "Herbivores",
        optionC: "Scavengers",
        correctAnswer: "Omnivores",
      }),
      shuffleOptions({
        question: "Animals that live in water are called ________ animals.",
        optionA: "Aquatic",
        optionB: "Amphibian",
        optionC: "Domestic",
        correctAnswer: "Aquatic",
      }),
      shuffleOptions({
        question: "Animals that live both on land and in water are called ________.",
        optionA: "Amphibians",
        optionB: "Wild animals",
        optionC: "Pet animals",
        correctAnswer: "Amphibians",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A frog uses its sticky tongue to catch insects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bees and butterflies suck nectar from flowers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dogs and cats live in forests.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A spider creates a web to trap insects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Whales and fishes live in water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cow and buffalo eat the flesh of other animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Frogs and crocodiles live only on land.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Lions and tigers are carnivores.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pet animals live with us in our homes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Birds use their beaks to pick food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
