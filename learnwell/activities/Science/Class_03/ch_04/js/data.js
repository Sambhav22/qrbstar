export const chapter = "Chapter - 4: Birds : Beaks and Claws";
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
        question: "Which bird uses its beak to stitch leaves together to make its nest?",
        optionA: "Weaver bird",
        optionB: "Tailorbird",
        optionC: "Sunbird",
        correctAnswer: "Tailorbird",
      }),
      shuffleOptions({
        question: "Which bird makes holes in tree trunks using its chisel-shaped beak?",
        optionA: "Duck",
        optionB: "Woodpecker",
        optionC: "Sparrow",
        correctAnswer: "Woodpecker",
      }),
      shuffleOptions({
        question: "Which birds have strong, sharp, and curved beaks to tear flesh?",
        optionA: "Parrot and Crow",
        optionB: "Eagle and Vulture",
        optionC: "Swan and Crane",
        correctAnswer: "Eagle and Vulture",
      }),
      shuffleOptions({
        question: "What helps waterbirds like ducks and geese to swim easily?",
        optionA: "Talons",
        optionB: "Webbed feet",
        optionC: "Sharp claws",
        correctAnswer: "Webbed feet",
      }),
      shuffleOptions({
        question: "Which bird pulls out insects from holes in the ground?",
        optionA: "Hoopoe",
        optionB: "Crow",
        optionC: "Hen",
        correctAnswer: "Hoopoe",
      }),
      shuffleOptions({
        question: "Which bird uses its curved beak to climb trees and crack seeds?",
        optionA: "Parrot",
        optionB: "Woodpecker",
        optionC: "Pigeon",
        correctAnswer: "Parrot",
      }),
      shuffleOptions({
        question: "Which birds can sleep safely while sitting on tree branches?",
        optionA: "Perching birds",
        optionB: "Scratching birds",
        optionC: "Climbing birds",
        correctAnswer: "Perching birds",
      }),
      shuffleOptions({
        question: "Which birds have two toes pointing forward and two backward?",
        optionA: "Climbing birds",
        optionB: "Wading birds",
        optionC: "Preying birds",
        correctAnswer: "Climbing birds",
      }),
      shuffleOptions({
        question: "Which birds dig the ground to find food?",
        optionA: "Scratching birds",
        optionB: "Waterbirds",
        optionC: "Perching birds",
        correctAnswer: "Scratching birds",
      }),
      shuffleOptions({
        question: "Which bird catches insects during flight using its sticky beak?",
        optionA: "Swallow",
        optionB: "Hoopoe",
        optionC: "Eagle",
        correctAnswer: "Swallow",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Birds have ______ bodies to help them fly easily.",
        optionA: "flat",
        optionB: "streamlined",
        optionC: "round",
        correctAnswer: "streamlined",
      }),
      shuffleOptions({
        question: "Parrots use their ______ beaks to crack nuts and seeds.",
        optionA: "flat",
        optionB: "hooked",
        optionC: "short",
        correctAnswer: "hooked",
      }),
      shuffleOptions({
        question: "The claws of preying birds like eagles and hawks are called ______.",
        optionA: "toes",
        optionB: "talons",
        optionC: "webs",
        correctAnswer: "talons",
      }),
      shuffleOptions({
        question: "Woodpeckers have ______ beaks for making holes in tree trunks.",
        optionA: "chisel-shaped",
        optionB: "slender",
        optionC: "curved",
        correctAnswer: "chisel-shaped",
      }),
      shuffleOptions({
        question: "Ducks and swans have ______ feet for swimming.",
        optionA: "webbed",
        optionB: "sharp",
        optionC: "thin",
        correctAnswer: "webbed",
      }),
      shuffleOptions({
        question: "Hoopoe and sunbird have ______ beaks to pull out insects.",
        optionA: "long and slender",
        optionB: "short and hard",
        optionC: "flat",
        correctAnswer: "long and slender",
      }),
      shuffleOptions({
        question: "Birds like crows and sparrows are called ______ birds.",
        optionA: "climbing",
        optionB: "perching",
        optionC: "preying",
        correctAnswer: "perching",
      }),
      shuffleOptions({
        question: "Hens have sharp claws to ______ the ground for food.",
        optionA: "scratch",
        optionB: "wash",
        optionC: "hold",
        correctAnswer: "scratch",
      }),
      shuffleOptions({
        question: "Waterbirds like ducks take in muddy water and strain out ______.",
        optionA: "insects",
        optionB: "sand",
        optionC: "stones",
        correctAnswer: "insects",
      }),
      shuffleOptions({
        question: "Wading birds like cranes have long legs for walking in ______.",
        optionA: "trees",
        optionB: "water",
        optionC: "grass",
        correctAnswer: "water",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Parrots have long and slender beaks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Hoopoe uses its beak to pull insects from holes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Eagles have webbed feet for swimming.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Waterbirds like ducks have broad and flat beaks with holes at the sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Swallows have sticky beaks to catch flying insects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Woodpecker’s beak helps it to make holes in tree trunks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Scratching birds have toes suited for digging the ground.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Perching birds have three toes pointing forward and one backward.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Climbing birds like parrots use their beaks to help them climb.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Preying birds have blunt claws for holding food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
