export const chapter = "Chapter - 5: Life in the Northern Plains";
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
        question: "Which river system contributes to forming the fertile Northern Plains?",
        optionA: "Ganga, Brahmaputra and Indus",
        optionB: "Narmada and Tapi",
        optionC: "Krishna and Godavari",
        correctAnswer: "Ganga, Brahmaputra and Indus",
      }),
      shuffleOptions({
        question: "Which dance form is popular among the people of Punjab?",
        optionA: "Bihu",
        optionB: "Ghoomar",
        optionC: "Bhangra",
        correctAnswer: "Bhangra",
      }),
      shuffleOptions({
        question: "Which city in Haryana is famous for handloom cloth?",
        optionA: "Varanasi",
        optionB: "Panipat",
        optionC: "Agartala",
        correctAnswer: "Panipat",
      }),
      shuffleOptions({
        question: "Which state is described as having rich deposits of iron ore and coal?",
        optionA: "Jharkhand",
        optionB: "Assam",
        optionC: "Punjab",
        correctAnswer: "Jharkhand",
      }),
      shuffleOptions({
        question: "Which festival is the most important one in West Bengal?",
        optionA: "Holi",
        optionB: "Durga Puja",
        optionC: "Baisakhi",
        correctAnswer: "Durga Puja",
      }),
      shuffleOptions({
        question: "Which city serves as the capital of Uttar Pradesh?",
        optionA: "Chandigarh",
        optionB: "Patna",
        optionC: "Lucknow",
        correctAnswer: "Lucknow",
      }),
      shuffleOptions({
        question: "Which state is known for its bamboo and cane products?",
        optionA: "Tripura",
        optionB: "Punjab",
        optionC: "Delhi",
        correctAnswer: "Tripura",
      }),
      shuffleOptions({
        question: "Which river drains the land of Assam?",
        optionA: "Krishna",
        optionB: "Brahmaputra",
        optionC: "Sutlej",
        correctAnswer: "Brahmaputra",
      }),
      shuffleOptions({
        question: "What is the staple food of Assam?",
        optionA: "Wheat",
        optionB: "Rice",
        optionC: "Bajra",
        correctAnswer: "Rice",
      }),
      shuffleOptions({
        question: "Which historical monument in Uttar Pradesh attracts many tourists?",
        optionA: "Jallianwala Bagh",
        optionB: "Taj Mahal",
        optionC: "Red Fort",
        correctAnswer: "Taj Mahal",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Punjab gets irrigation mainly from rivers and a large network of ______.",
        optionA: "wells",
        optionB: "canals",
        optionC: "waterfalls",
        correctAnswer: "canals",
      }),
      shuffleOptions({
        question: "Haryana’s ______ industry is very well developed.",
        optionA: "dairy",
        optionB: "fishing",
        optionC: "wool",
        correctAnswer: "dairy",
      }),
      shuffleOptions({
        question: "Delhi is also known as ______ because people from all over India live there.",
        optionA: "Royal India",
        optionB: "Mini India",
        optionC: "Great India",
        correctAnswer: "Mini India",
      }),
      shuffleOptions({
        question: "Bihar is famous for fruits like mangoes and ______.",
        optionA: "litchis",
        optionB: "strawberries",
        optionC: "apples",
        correctAnswer: "litchis",
      }),
      shuffleOptions({
        question: "Jharkhand’s capital city is ______.",
        optionA: "Ranchi",
        optionB: "Agartala",
        optionC: "Dispur",
        correctAnswer: "Ranchi",
      }),
      shuffleOptions({
        question: "Tripura is surrounded by ______ on three sides.",
        optionA: "Nepal",
        optionB: "Bhutan",
        optionC: "Bangladesh",
        correctAnswer: "Bangladesh",
      }),
      shuffleOptions({
        question: "People in West Bengal speak Bengali and ______.",
        optionA: "Marathi",
        optionB: "Hindi",
        optionC: "Telugu",
        correctAnswer: "Hindi",
      }),
      shuffleOptions({
        question: "Assam celebrates its main festival called ______.",
        optionA: "Baisakhi",
        optionB: "Bihu",
        optionC: "Chhatt",
        correctAnswer: "Bihu",
      }),
      shuffleOptions({
        question: "Uttar Pradesh is the most ______ state of India.",
        optionA: "populous",
        optionB: "coastal",
        optionC: "mountainous",
        correctAnswer: "populous",
      }),
      shuffleOptions({
        question: "The well-known city of Jamshedpur lies in the state of ______.",
        optionA: "West Bengal",
        optionB: "Tripura",
        optionC: "Jharkhand",
        correctAnswer: "Jharkhand",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Northern Plains are flat, fertile regions of alluvial soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gurugram in Haryana is famous for automobile manufacturing units.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Assam’s staple food is wheat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bihar often experiences floods that cause great damage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Damodar River flows through West Bengal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Punjab celebrates festivals like Lohri and Baisakhi.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Taj Mahal is located in Haryana.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Tripura has many thick forests.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kolkata is the capital of West Bengal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "West Bengal is known for sweet dishes like rasogullah and sandesh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
