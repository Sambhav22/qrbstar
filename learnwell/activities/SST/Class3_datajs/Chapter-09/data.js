export const chapter = "Chapter - 9: Our National Symbols";
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
        question: "Who took the Indian National Flag to space in 1984?",
        optionA: "Kalpana Chawla",
        optionB: "Rakesh Sharma",
        optionC: "Sunita Williams",
        correctAnswer: "Rakesh Sharma",
      }),
      shuffleOptions({
        question: "Which place saw the first hoisting of the tricolour on 15 August 1947?",
        optionA: "India Gate",
        optionB: "Red Fort",
        optionC: "Gateway of India",
        correctAnswer: "Red Fort",
      }),
      shuffleOptions({
        question: "Which colour of the National Flag stands for courage and sacrifice?",
        optionA: "Green",
        optionB: "White",
        optionC: "Saffron",
        correctAnswer: "Saffron",
      }),
      shuffleOptions({
        question: "Who composed the National Anthem of India?",
        optionA: "Bankim Chandra Chattopadhyaya",
        optionB: "Mahatma Gandhi",
        optionC: "Rabindranath Tagore",
        correctAnswer: "Rabindranath Tagore",
      }),
      shuffleOptions({
        question: "From which pillar was the National Emblem taken?",
        optionA: "Ashokan Pillar at Sarnath",
        optionB: "Qutub Minar",
        optionC: "Charminar",
        correctAnswer: "Ashokan Pillar at Sarnath",
      }),
      shuffleOptions({
        question: "Which animal in the National Emblem stands for hard work?",
        optionA: "Horse",
        optionB: "Lion",
        optionC: "Bull",
        correctAnswer: "Bull",
      }),
      shuffleOptions({
        question: "Which animal in the National Emblem stands for speed and energy?",
        optionA: "Bull",
        optionB: "Tiger",
        optionC: "Horse",
        correctAnswer: "Horse",
      }),
      shuffleOptions({
        question: "Which flower is our National Flower?",
        optionA: "Rose",
        optionB: "Lotus",
        optionC: "Lily",
        correctAnswer: "Lotus",
      }),
      shuffleOptions({
        question: "Which bird is our National Bird?",
        optionA: "Sparrow",
        optionB: "Crow",
        optionC: "Peacock",
        correctAnswer: "Peacock",
      }),
      shuffleOptions({
        question: "Which government programme was started to protect tigers?",
        optionA: "Save Forest Programme",
        optionB: "Project Tiger",
        optionC: "Animal Care Programme",
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
        question: "The Indian National Flag consists of ________ colours.",
        optionA: "two",
        optionB: "three",
        optionC: "four",
        correctAnswer: "three",
      }),
      shuffleOptions({
        question: "The Dharma Chakra has ________ spokes.",
        optionA: "24",
        optionB: "18",
        optionC: "12",
        correctAnswer: "24",
      }),
      shuffleOptions({
        question: "The National Emblem has ________ lions, but only three can be seen at a time.",
        optionA: "two",
        optionB: "four",
        optionC: "six",
        correctAnswer: "four",
      }),
      shuffleOptions({
        question: "The word ________ is written below the National Emblem.",
        optionA: "Jai Hind",
        optionB: "Vande Mataram",
        optionC: "Satyameva Jayate",
        correctAnswer: "Satyameva Jayate",
      }),
      shuffleOptions({
        question: "The white band of the National Flag stands for ________.",
        optionA: "bravery",
        optionB: "truth and peace",
        optionC: "beauty",
        correctAnswer: "truth and peace",
      }),
      shuffleOptions({
        question: "Lotus is an ________ plant.",
        optionA: "air",
        optionB: "aquatic",
        optionC: "desert",
        correctAnswer: "aquatic",
      }),
      shuffleOptions({
        question: "The National Anthem was adopted in ________.",
        optionA: "1950",
        optionB: "1940",
        optionC: "1962",
        correctAnswer: "1950",
      }),
      shuffleOptions({
        question: "Peacock is a symbol of ________.",
        optionA: "fear",
        optionB: "beauty and grace",
        optionC: "hardship",
        correctAnswer: "beauty and grace",
      }),
      shuffleOptions({
        question: "Tigers live in protected areas called ________.",
        optionA: "bird parks",
        optionB: "tiger reserves",
        optionC: "hill stations",
        correctAnswer: "tiger reserves",
      }),
      shuffleOptions({
        question: "The green colour in the National Flag stands for ________.",
        optionA: "prosperity",
        optionB: "sorrow",
        optionC: "courage",
        correctAnswer: "prosperity",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Our National Emblem is taken from the Ashokan Pillar found at Sarnath.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The National Bird of India is the peahen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The word “Satyameva Jayate” means “truth alone triumphs”.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The National Song of India is Vande Mataram.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The tiger is the National Animal of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The tricolour was first hoisted in 1947 at the Red Fort.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Only two lions can be seen on the National Emblem at one time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Project Tiger was started by the government to protect tigers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The lotus is the National Flower of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The green band of the National Flag stands for courage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
