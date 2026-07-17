export const chapter = "Chapter - 2: The Great Northern Mountains";
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
        question: "Which mountain range lies to the north-eastern part of India?",
        optionA: "Western Ghats",
        optionB: "Northern Mountains",
        optionC: "Aravalli Range",
        correctAnswer: "Northern Mountains",
      }),
      shuffleOptions({
        question: "Which range contains the second highest peak Mount K2?",
        optionA: "Himachal",
        optionB: "Karakoram",
        optionC: "Shivalik",
        correctAnswer: "Karakoram",
      }),
      shuffleOptions({
        question: "Which Himalayan range remains snow-covered throughout the year?",
        optionA: "Himadri (Greater Himalayas)",
        optionB: "Himachal",
        optionC: "Shivalik",
        correctAnswer: "Himadri (Greater Himalayas)",
      }),
      shuffleOptions({
        question: "Which river originates from the Gangotri glacier?",
        optionA: "Yamuna",
        optionB: "Bhagirathi",
        optionC: "Chambal",
        correctAnswer: "Bhagirathi",
      }),
      shuffleOptions({
        question: "Which trees are commonly found in the Middle Himalayas?",
        optionA: "Cactus and date palm",
        optionB: "Teak and sal",
        optionC: "Oak, pine and deodar",
        correctAnswer: "Oak, pine and deodar",
      }),
      shuffleOptions({
        question: "Which valley in the Himachal range is known for scenic beauty?",
        optionA: "Thar Valley",
        optionB: "Kullu Valley",
        optionC: "Narmada Valley",
        correctAnswer: "Kullu Valley",
      }),
      shuffleOptions({
        question: "Which region at the foothills of Shivalik is fertile?",
        optionA: "Plateau",
        optionB: "Terai region",
        optionC: "Desert region",
        correctAnswer: "Terai region",
      }),
      shuffleOptions({
        question: "Which fruit is commonly grown in the Himachal range?",
        optionA: "Apple",
        optionB: "Mango",
        optionC: "Coconut",
        correctAnswer: "Apple",
      }),
      shuffleOptions({
        question: "Which activity is popular in the Himalayan region?",
        optionA: "Deep-sea diving",
        optionB: "Mountaineering",
        optionC: "Desert trekking",
        correctAnswer: "Mountaineering",
      }),
      shuffleOptions({
        question: "Which animals are commonly found in the Shivalik forests?",
        optionA: "Penguins",
        optionB: "Leopards and tigers",
        optionC: "Crocodiles",
        correctAnswer: "Leopards and tigers",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Himalayas form a natural ______ on the northern side of India.",
        optionA: "opening",
        optionB: "wall",
        optionC: "island",
        correctAnswer: "wall",
      }),
      shuffleOptions({
        question: "The Himalayan range runs in the shape of an ______.",
        optionA: "arc",
        optionB: "angle",
        optionC: "oval",
        correctAnswer: "arc",
      }),
      shuffleOptions({
        question: "The Lesser Himalayas are also known as the ______ range.",
        optionA: "Shivalik",
        optionB: "Himachal",
        optionC: "Karakoram",
        correctAnswer: "Himachal",
      }),
      shuffleOptions({
        question: "Kanchenjunga lies on the border of ______ and Sikkim.",
        optionA: "Nepal",
        optionB: "Bhutan",
        optionC: "China",
        correctAnswer: "Nepal",
      }),
      shuffleOptions({
        question: "Many Himalayan rivers bring water and ______ to the plains.",
        optionA: "clay",
        optionB: "sand",
        optionC: "silt",
        correctAnswer: "silt",
      }),
      shuffleOptions({
        question: "The Shivalik hills are covered with thick green ______.",
        optionA: "grasslands",
        optionB: "forests",
        optionC: "sand dunes",
        correctAnswer: "forests",
      }),
      shuffleOptions({
        question: "Mount Everest lies in the ______ range of mountains.",
        optionA: "Himalayan",
        optionB: "Vindhya",
        optionC: "Satpura",
        correctAnswer: "Himalayan",
      }),
      shuffleOptions({
        question: "The Terai region is suitable for growing maize, pulses and ______.",
        optionA: "tea",
        optionB: "millets",
        optionC: "cotton",
        correctAnswer: "millets",
      }),
      shuffleOptions({
        question: "Glaciers are large masses of slowly moving ______.",
        optionA: "water",
        optionB: "ice",
        optionC: "sand",
        correctAnswer: "ice",
      }),
      shuffleOptions({
        question: "Beautiful hill stations like Shimla and Manali are found in the ______ region.",
        optionA: "Shivalik",
        optionB: "Himachal",
        optionC: "Himadri",
        correctAnswer: "Himachal",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Himalayas are the highest mountain range in the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Himadri is the lowest range of the Himalayas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Shivalik region is home to wild animals like elephants and leopards.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Middle Himalayas contain many famous hill stations.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kanchenjunga is located on the Nepal-Sikkim border.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mount Everest is the second highest peak in the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Terai region lies at the foothills of the Shivalik range.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Himalayan rivers do not bring silt to the plains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Karakoram range contains Mount K2.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Himalayas act as a barrier against cold winds from the north.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
