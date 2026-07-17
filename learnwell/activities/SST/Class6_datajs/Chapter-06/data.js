export const chapter = "Chapter - 6: India: Our Country";
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
        question: "Which place in India is known for the meeting of three different colours of water?",
        optionA: "Lakshadweep",
        optionB: "Kanyakumari",
        optionC: "Goa",
        correctAnswer: "Kanyakumari",
      }),
      shuffleOptions({
        question: "Which island contains India’s only active volcano?",
        optionA: "Minicoy",
        optionB: "Barren Island",
        optionC: "Neil Island",
        correctAnswer: "Barren Island",
      }),
      shuffleOptions({
        question: "Which physical division of India is made of hard igneous and metamorphic rocks?",
        optionA: "Northern Plains",
        optionB: "Southern Peninsula",
        optionC: "Northern Mountains",
        correctAnswer: "Southern Peninsula",
      }),
      shuffleOptions({
        question: "Which river is a seasonal river flowing through the Thar Desert?",
        optionA: "Mahanadi",
        optionB: "Sabarmati",
        optionC: "Luni",
        correctAnswer: "Luni",
      }),
      shuffleOptions({
        question: "Which coast lies between Goa and Maharashtra?",
        optionA: "Malabar Coast",
        optionB: "Konkan Coast",
        optionC: "Northern Circars",
        correctAnswer: "Konkan Coast",
      }),
      shuffleOptions({
        question: "Which plateau is famous for minerals like coal and iron?",
        optionA: "Malwa Plateau",
        optionB: "Chota Nagpur Plateau",
        optionC: "Deccan Plateau",
        correctAnswer: "Chota Nagpur Plateau",
      }),
      shuffleOptions({
        question: "Which group of hills lie in the north-eastern extension of the Himalayas?",
        optionA: "Vindhya Hills",
        optionB: "Khasi Hills",
        optionC: "Garo, Khasi, Jaintia and Lushai Hills",
        correctAnswer: "Garo, Khasi, Jaintia and Lushai Hills",
      }),
      shuffleOptions({
        question: "Which two rivers together create the world’s largest delta?",
        optionA: "Ganga and Yamuna",
        optionB: "Ganga and Brahmaputra",
        optionC: "Indus and Sutlej",
        correctAnswer: "Ganga and Brahmaputra",
      }),
      shuffleOptions({
        question: "Which water body lies to the south of India?",
        optionA: "Arabian Sea",
        optionB: "Indian Ocean",
        optionC: "Bay of Bengal",
        correctAnswer: "Indian Ocean",
      }),
      shuffleOptions({
        question: "Which city is the capital of the Andaman and Nicobar Islands?",
        optionA: "Kavaratti",
        optionB: "Port Blair",
        optionC: "Panaji",
        correctAnswer: "Port Blair",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "India experiences a time difference because its eastern and western tips are separated by ______.",
        optionA: "10°",
        optionB: "29°",
        optionC: "5°",
        correctAnswer: "29°",
      }),
      shuffleOptions({
        question: "The southernmost point of India’s mainland is ______.",
        optionA: "Indira Point",
        optionB: "Kavaratti",
        optionC: "Kanyakumari",
        correctAnswer: "Kanyakumari",
      }),
      shuffleOptions({
        question: "The part of India surrounded by water on three sides is called a ______.",
        optionA: "delta",
        optionB: "peninsula",
        optionC: "basin",
        correctAnswer: "peninsula",
      }),
      shuffleOptions({
        question: "The northern plains are formed by the deposition of ______ soil.",
        optionA: "alluvial soil",
        optionB: "black soil",
        optionC: "sandy soil",
        correctAnswer: "alluvial soil",
      }),
      shuffleOptions({
        question: "The Western Ghats include the ______ hills.",
        optionA: "Aravalli",
        optionB: "Sahyadri",
        optionC: "Garo",
        correctAnswer: "Sahyadri",
      }),
      shuffleOptions({
        question: "The islands in the Arabian Sea are known as ______.",
        optionA: "Andaman",
        optionB: "Lakshadweep",
        optionC: "Nicobar",
        correctAnswer: "Lakshadweep",
      }),
      shuffleOptions({
        question: "The Thar Desert is known for strong winds that create ______.",
        optionA: "dunes",
        optionB: "sand dunes",
        optionC: "clay mounds",
        correctAnswer: "sand dunes",
      }),
      shuffleOptions({
        question: "The plateau located to the south of the Satpura and Vindhya ranges is the ______ Plateau.",
        optionA: "Deccan Plateau",
        optionB: "Malwa",
        optionC: "Karakoram",
        correctAnswer: "Deccan Plateau",
      }),
      shuffleOptions({
        question: "The Tropic of Cancer passes almost through the ______ of India.",
        optionA: "northern tip",
        optionB: "centre/middle",
        optionC: "southern tip",
        correctAnswer: "centre/middle",
      }),
      shuffleOptions({
        question: "The narrow water passage separating India and Sri Lanka is the ______.",
        optionA: "Strait of Hormuz",
        optionB: "Palk Strait",
        optionC: "Gulf of Suez",
        correctAnswer: "Palk Strait",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Lakshadweep Islands are made of coral formations.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Poorvanchal hills are located in the north-eastern part of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Himalayas are old and eroded mountains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Northern Plains stretch from Punjab in the west to Assam in the east.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Deccan Plateau has rich black soil that is good for growing cotton.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Indira Point is the southernmost point of the Indian mainland.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Bay of Bengal lies to the west of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sandstorms are common in the Thar Desert because there is very little vegetation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Eastern Ghats and Western Ghats meet near Kanyakumari.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All Andaman and Nicobar Islands are uninhabited.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
