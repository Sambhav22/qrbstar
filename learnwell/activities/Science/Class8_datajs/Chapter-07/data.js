export const chapter = "Chapter - 7: Conservation of Plants and Animals";
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
        question: "What do we call the large-scale cutting down of trees?",
        optionA: "Afforestation",
        optionB: "Deforestation",
        optionC: "Plantation",
        correctAnswer: "Deforestation",
      }),
      shuffleOptions({
        question: "Which natural cause can destroy forests and lead to loss of vegetation?",
        optionA: "Dew",
        optionB: "Forest fire",
        optionC: "Mist",
        correctAnswer: "Forest fire",
      }),
      shuffleOptions({
        question: "Which gases form acid rain when mixed with rainwater?",
        optionA: "Oxygen and hydrogen",
        optionB: "Sulphur dioxide and nitrogen oxides",
        optionC: "Carbon monoxide and helium",
        correctAnswer: "Sulphur dioxide and nitrogen oxides",
      }),
      shuffleOptions({
        question: "What is the variety of living organisms found in a region called?",
        optionA: "Habitat",
        optionB: "Biodiversity",
        optionC: "Atmosphere",
        correctAnswer: "Biodiversity",
      }),
      shuffleOptions({
        question: "What do we call the plants found in a particular area?",
        optionA: "Fauna",
        optionB: "Flora",
        optionC: "Species",
        correctAnswer: "Flora",
      }),
      shuffleOptions({
        question: "Species that are found only in a specific area are called—",
        optionA: "Endangered",
        optionB: "Endemic species",
        optionC: "Exotic",
        correctAnswer: "Endemic species",
      }),
      shuffleOptions({
        question: "Which group includes species whose numbers are rapidly decreasing?",
        optionA: "Extinct",
        optionB: "Endangered species",
        optionC: "Common species",
        correctAnswer: "Endangered species",
      }),
      shuffleOptions({
        question: "Which book contains a list of endangered plant and animal species?",
        optionA: "Blue Book",
        optionB: "Red Data Book (IUCN)",
        optionC: "Life Book",
        correctAnswer: "Red Data Book (IUCN)",
      }),
      shuffleOptions({
        question: "Which protected area allows wildlife to live freely with minimum human interference?",
        optionA: "Zoo",
        optionB: "National Park",
        optionC: "Backyard",
        correctAnswer: "National Park",
      }),
      shuffleOptions({
        question: "Which major conservation programme in India was launched to protect tigers?",
        optionA: "Project Rhino",
        optionB: "Project Tiger",
        optionC: "Project Elephant",
        correctAnswer: "Project Tiger",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The removal of trees on a large scale is called ______.",
        optionA: "afforestation",
        optionB: "deforestation",
        optionC: "irrigation",
        correctAnswer: "deforestation",
      }),
      shuffleOptions({
        question: "When fertile land becomes desert, the process is called ______.",
        optionA: "hydration",
        optionB: "desertification",
        optionC: "cultivation",
        correctAnswer: "desertification",
      }),
      shuffleOptions({
        question: "The animals of a particular region are known as its ______.",
        optionA: "flora",
        optionB: "fauna",
        optionC: "breed",
        correctAnswer: "fauna",
      }),
      shuffleOptions({
        question: "The natural home of an organism is called its ______.",
        optionA: "nest",
        optionB: "habitat",
        optionC: "shelter",
        correctAnswer: "habitat",
      }),
      shuffleOptions({
        question: "Species that no longer exist on Earth are called ______.",
        optionA: "rare",
        optionB: "extinct species",
        optionC: "vulnerable",
        correctAnswer: "extinct species",
      }),
      shuffleOptions({
        question: "The seasonal movement of animals from one place to another is called ______.",
        optionA: "rotation",
        optionB: "migration",
        optionC: "adaptation",
        correctAnswer: "migration",
      }),
      shuffleOptions({
        question: "An area where animals are protected from hunting and poaching is a ______.",
        optionA: "field",
        optionB: "wildlife sanctuary",
        optionC: "tribe",
        correctAnswer: "wildlife sanctuary",
      }),
      shuffleOptions({
        question: "A large protected area with forests, wildlife and even human settlements is called a ______.",
        optionA: "biosphere reserve",
        optionB: "district reserve",
        optionC: "soil reserve",
        correctAnswer: "biosphere reserve",
      }),
      shuffleOptions({
        question: "The practice of growing only one type of crop in an area is called ______.",
        optionA: "polyculture",
        optionB: "monoculture",
        optionC: "agro-culture",
        correctAnswer: "monoculture",
      }),
      shuffleOptions({
        question: "Growing new trees to replace those that were cut is known as ______.",
        optionA: "reforestation",
        optionB: "evaporation",
        optionC: "respiration",
        correctAnswer: "reforestation",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Forests help prevent soil erosion by holding the soil firmly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Acid rain increases the fertility of soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Biodiversity refers to the variety of living organisms in an area.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Endemic species are found only in a specific region.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Poaching means the illegal hunting of animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A biosphere reserve may include national parks and wildlife sanctuaries.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Birds migrate mainly due to harsh climatic conditions and breeding needs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dodo and cheetah are examples of extinct animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Reforestation helps restore damaged ecosystems.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Project Tiger was started to protect the population of elephants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
