export const chapter = "Chapter - 3: Life in the Northern Mountains";
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
        question: "What are shikaras used for on Dal Lake?",
        optionA: "Selling flowers and vegetables",
        optionB: "Carrying luggage",
        optionC: "Catching fish",
        correctAnswer: "Selling flowers and vegetables",
      }),
      shuffleOptions({
        question: "Which state is known for its colourful caps?",
        optionA: "Himachal Pradesh",
        optionB: "Nagaland",
        optionC: "Sikkim",
        correctAnswer: "Himachal Pradesh",
      }),
      shuffleOptions({
        question: "Which region of Jammu & Kashmir is a cold desert?",
        optionA: "Jammu",
        optionB: "Leh",
        optionC: "Srinagar",
        correctAnswer: "Leh",
      }),
      shuffleOptions({
        question: "In which state is Mussoorie located?",
        optionA: "Uttarakhand",
        optionB: "Sikkim",
        optionC: "Meghalaya",
        correctAnswer: "Uttarakhand",
      }),
      shuffleOptions({
        question: "Which tribal groups live in Meghalaya?",
        optionA: "Bhutia and Nepali",
        optionB: "Garo and Khasi and Jaintia",
        optionC: "Naga and Mizo",
        correctAnswer: "Garo and Khasi and Jaintia",
      }),
      shuffleOptions({
        question: "Which state grows many fruits like apple, pear, peach and plum in orchards?",
        optionA: "Himachal Pradesh",
        optionB: "Mizoram",
        optionC: "Assam",
        correctAnswer: "Himachal Pradesh",
      }),
      shuffleOptions({
        question: "Which hill station in northern West Bengal is famous for tea plantations?",
        optionA: "Darjeeling",
        optionB: "Almora",
        optionC: "Manali",
        correctAnswer: "Darjeeling",
      }),
      shuffleOptions({
        question: "Which dance is famous in Mizoram?",
        optionA: "Manipuri",
        optionB: "Bamboo dance",
        optionC: "Mask dance",
        correctAnswer: "Bamboo dance",
      }),
      shuffleOptions({
        question: "What do people in Kashmir use to keep warm in winter?",
        optionA: "Shikara",
        optionB: "Kangri",
        optionC: "Garland",
        correctAnswer: "Kangri",
      }),
      shuffleOptions({
        question: "Kullu–Manali is located in which state?",
        optionA: "Himachal Pradesh",
        optionB: "Nagaland",
        optionC: "Tripura",
        correctAnswer: "Himachal Pradesh",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Small boats used by people in Kashmir are called _______.",
        optionA: "sailboats",
        optionB: "shikaras",
        optionC: "dinghies",
        correctAnswer: "shikaras",
      }),
      shuffleOptions({
        question: "Jammu, Kashmir Valley and _______ are the three main regions of Jammu & Kashmir.",
        optionA: "Imphal",
        optionB: "Leh",
        optionC: "Sikkim",
        correctAnswer: "Leh",
      }),
      shuffleOptions({
        question: "Haridwar, Rishikesh and _______ are holy places in Uttarakhand.",
        optionA: "Kedarnath",
        optionB: "Darjeeling",
        optionC: "Kohima",
        correctAnswer: "Kedarnath",
      }),
      shuffleOptions({
        question: "India’s highest mountain peak in Sikkim is _______.",
        optionA: "Everest",
        optionB: "Kanchenjunga",
        optionC: "Tiger Hill",
        correctAnswer: "Kanchenjunga",
      }),
      shuffleOptions({
        question: "Nagaland people wear colourful clothes decorated with _______.",
        optionA: "beads",
        optionB: "pearls",
        optionC: "leaves",
        correctAnswer: "beads",
      }),
      shuffleOptions({
        question: "A famous lake city in Uttarakhand is _______.",
        optionA: "Nainital",
        optionB: "Shimla",
        optionC: "Srinagar",
        correctAnswer: "Nainital",
      }),
      shuffleOptions({
        question: "The Lepchas, Nepalis and Bhutias mostly live in _______.",
        optionA: "Sikkim",
        optionB: "Manipur",
        optionC: "Himachal",
        correctAnswer: "Sikkim",
      }),
      shuffleOptions({
        question: "The rainiest place in the world in Meghalaya is _______.",
        optionA: "Mawsynram",
        optionB: "Srinagar",
        optionC: "Gangtok",
        correctAnswer: "Mawsynram",
      }),
      shuffleOptions({
        question: "The famous holy cave of _______ lies in Jammu & Kashmir.",
        optionA: "Badrinath",
        optionB: "Amarnath",
        optionC: "Jwalaji",
        correctAnswer: "Amarnath",
      }),
      shuffleOptions({
        question: "In Jammu & Kashmir, farming is done on step-like fields called _______.",
        optionA: "terrace farming",
        optionB: "field lines",
        optionC: "sloped farming",
        correctAnswer: "terrace farming",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Gangtok is the capital of Uttar Pradesh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "People in Nagaland make crafts using bamboo, teak and cane.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dal Lake is located in Jammu & Kashmir.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kanchenjunga is not a India’s highest mountain peak.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The tribes of Meghalaya include Khasi, Garo and Jaintia.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Leh is known as a cold desert.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mawsynram receives very heavy rainfall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People in Kashmir drink kahwa to stay warm.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Darjeeling is known for sweets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Shikaras are used for moving from one place to another on Dal Lake.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
