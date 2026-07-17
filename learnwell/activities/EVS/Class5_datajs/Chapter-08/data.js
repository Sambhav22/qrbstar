export const chapter = "Chapter - 8: Importance of Animals";
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
        question: "Which national park was the first to be established in India?",
        optionA: "Kaziranga",
        optionB: "Corbett",
        optionC: "Gir",
        correctAnswer: "Corbett",
      }),
      shuffleOptions({
        question: "Who was Jim Corbett?",
        optionA: "A hunter turned conservationist",
        optionB: "A freedom fighter",
        optionC: "A forest officer",
        correctAnswer: "A hunter turned conservationist",
      }),
      shuffleOptions({
        question: "Which animal provides silk used for making clothes and bags?",
        optionA: "Silkworm",
        optionB: "Sheep",
        optionC: "Cow",
        correctAnswer: "Silkworm",
      }),
      shuffleOptions({
        question: "What is the act of killing animals illegally called?",
        optionA: "Conservation",
        optionB: "Poaching",
        optionC: "Rearing",
        correctAnswer: "Poaching",
      }),
      shuffleOptions({
        question: "Which project was launched by the Government of India in 1973 to protect tigers?",
        optionA: "Project Lion",
        optionB: "Project Tiger",
        optionC: "Project Wildlife",
        correctAnswer: "Project Tiger",
      }),
      shuffleOptions({
        question: "What are tusks of elephants used for?",
        optionA: "Making ornaments",
        optionB: "Making furniture",
        optionC: "Making ropes",
        correctAnswer: "Making ornaments",
      }),
      shuffleOptions({
        question: "Which people depend fully on animals for their livelihood?",
        optionA: "Farmers",
        optionB: "Gujjars and Yadavas",
        optionC: "Traders",
        correctAnswer: "Gujjars and Yadavas",
      }),
      shuffleOptions({
        question: "Feathers of birds are used for making which of the following?",
        optionA: "Shoes",
        optionB: "Shuttlecocks",
        optionC: "Curtains",
        correctAnswer: "Shuttlecocks",
      }),
      shuffleOptions({
        question: "Why are animals kept in wildlife sanctuaries and national parks?",
        optionA: "For hunting",
        optionB: "For protection and proper habitat",
        optionC: "For entertainment",
        correctAnswer: "For protection and proper habitat",
      }),
      shuffleOptions({
        question: "What does conservation of wildlife mean?",
        optionA: "Protection and preservation of wild animals",
        optionB: "Catching wild animals",
        optionC: "Selling wild animals",
        correctAnswer: "Protection and preservation of wild animals",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Animals are important to maintain the environmental ______.",
        optionA: "balance",
        optionB: "climate",
        optionC: "equilibrium",
        correctAnswer: "equilibrium",
      }),
      shuffleOptions({
        question: "Feathers of birds are used for making ______.",
        optionA: "clothes",
        optionB: "shuttlecocks",
        optionC: "boxes",
        correctAnswer: "shuttlecocks",
      }),
      shuffleOptions({
        question: "Elephants are hunted for their ______.",
        optionA: "horns",
        optionB: "tusks",
        optionC: "fur",
        correctAnswer: "tusks",
      }),
      shuffleOptions({
        question: "The illegal killing of animals is called ______.",
        optionA: "grazing",
        optionB: "poaching",
        optionC: "farming",
        correctAnswer: "poaching",
      }),
      shuffleOptions({
        question: "The Corbett National Park is located in ______.",
        optionA: "Uttarakhand",
        optionB: "Rajasthan",
        optionC: "Gujarat",
        correctAnswer: "Uttarakhand",
      }),
      shuffleOptions({
        question: "Project ____ was started to protect tigers in India.",
        optionA: "Lion",
        optionB: "Tiger",
        optionC: "Rhino",
        correctAnswer: "Tiger",
      }),
      shuffleOptions({
        question: "Sea urchins provide beautiful ____ shells.",
        optionA: "ornamental",
        optionB: "heavy",
        optionC: "brown",
        correctAnswer: "ornamental",
      }),
      shuffleOptions({
        question: "Musk deer are hunted for their ____ gland used in perfumes.",
        optionA: "musk",
        optionB: "oil",
        optionC: "silk",
        correctAnswer: "musk",
      }),
      shuffleOptions({
        question: "The hair of Chiru is used to make a special shawl called ______.",
        optionA: "Pashmina",
        optionB: "Shahtoosh",
        optionC: "Cashmere",
        correctAnswer: "Shahtoosh",
      }),
      shuffleOptions({
        question: "The government has made zoos, sanctuaries and other ____ to save animals.",
        optionA: "markets",
        optionB: "reserves",
        optionC: "forests",
        correctAnswer: "reserves",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Animals help to maintain the ecological balance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Corbett National Park was named after a scientist.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Poaching means protecting wildlife.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Gujjars and Yadavas depend on animals for their living.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Feathers of birds are used to make pillows and shuttlecocks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Project Tiger was started to save elephants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Illegal hunting of animals is a punishable act.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Silkworms provide silk for making clothes and bags.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Wildlife conservation means destroying animal habitats.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should avoid using products made from animal body parts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
