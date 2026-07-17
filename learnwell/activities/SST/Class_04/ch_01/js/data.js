export const chapter = "Chapter - 1: India: Our Motherland";
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
        question: "Which water body lies to the south of India?",
        optionA: "Arabian Sea",
        optionB: "Indian Ocean",
        optionC: "Bay of Bengal",
        correctAnswer: "Indian Ocean",
      }),
      shuffleOptions({
        question: "Which country is connected to India through the Palk Strait?",
        optionA: "Maldives",
        optionB: "Sri Lanka",
        optionC: "Myanmar",
        correctAnswer: "Sri Lanka",
      }),
      shuffleOptions({
        question: "Which state stretches farthest towards the east of India?",
        optionA: "Gujarat",
        optionB: "Arunachal Pradesh",
        optionC: "Rajasthan",
        correctAnswer: "Arunachal Pradesh",
      }),
      shuffleOptions({
        question: "Which of the following is an oceanic neighbour of India?",
        optionA: "Bhutan",
        optionB: "Sri Lanka",
        optionC: "Maldives",
        correctAnswer: "Maldives",
      }),
      shuffleOptions({
        question: "Which sea lies along the western coast of India?",
        optionA: "Bay of Bengal",
        optionB: "Arabian Sea",
        optionC: "Red Sea",
        correctAnswer: "Arabian Sea",
      }),
      shuffleOptions({
        question: "Which of these capitals belongs to a Union Territory?",
        optionA: "Imphal",
        optionB: "Kavaratti",
        optionC: "Port Blair",
        correctAnswer: "Port Blair",
      }),
      shuffleOptions({
        question: "Which state is mentioned in the chapter as the largest areawise?",
        optionA: "Maharashtra",
        optionB: "Rajasthan",
        optionC: "Karnataka",
        correctAnswer: "Rajasthan",
      }),
      shuffleOptions({
        question: "Which line passes roughly through the middle of India?",
        optionA: "Equator",
        optionB: "Tropic of Cancer",
        optionC: "Prime Meridian",
        correctAnswer: "Tropic of Cancer",
      }),
      shuffleOptions({
        question: "Which country lies to the north-east of India?",
        optionA: "Pakistan",
        optionB: "China",
        optionC: "Bhutan",
        correctAnswer: "Bhutan",
      }),
      shuffleOptions({
        question: "The southern end of India is located at which place?",
        optionA: "Kanyakumari",
        optionB: "Goa",
        optionC: "Chennai",
        correctAnswer: "Kanyakumari",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "India covers an area of about ______ million square kilometres.",
        optionA: "2.15",
        optionB: "3.28",
        optionC: "4.01",
        correctAnswer: "3.28",
      }),
      shuffleOptions({
        question: "The Arabian Sea lies on the ______ side of India.",
        optionA: "north-west",
        optionB: "south-west",
        optionC: "south-east",
        correctAnswer: "south-west",
      }),
      shuffleOptions({
        question: "The Bay of Bengal lies to the ______ of India.",
        optionA: "east",
        optionB: "west",
        optionC: "north",
        correctAnswer: "east",
      }),
      shuffleOptions({
        question: "The southern part of India is a ______.",
        optionA: "plateau",
        optionB: "peninsula",
        optionC: "plain",
        correctAnswer: "peninsula",
      }),
      shuffleOptions({
        question: "Sri Lanka is separated from India by the ______.",
        optionA: "Palk Strait",
        optionB: "Gulf of Mannar",
        optionC: "Andaman Sea",
        correctAnswer: "Palk Strait",
      }),
      shuffleOptions({
        question: "The Tropic of Cancer passes through the ______ of India.",
        optionA: "northern part",
        optionB: "middle part",
        optionC: "southern part",
        correctAnswer: "middle part",
      }),
      shuffleOptions({
        question: "Bhutan lies to the ______ of India.",
        optionA: "south",
        optionB: "north-east",
        optionC: "north-east/north region",
        correctAnswer: "north-east",
      }),
      shuffleOptions({
        question: "The Indian Ocean lies to the ______ of India.",
        optionA: "south",
        optionB: "north",
        optionC: "west",
        correctAnswer: "south",
      }),
      shuffleOptions({
        question: "Maldives is located in the ______.",
        optionA: "Pacific Ocean",
        optionB: "Indian Ocean",
        optionC: "Arabian Sea",
        correctAnswer: "Indian Ocean",
      }),
      shuffleOptions({
        question: "Kavaratti is the capital of the ______.",
        optionA: "Andaman & Nicobar Islands",
        optionB: "Lakshadweep",
        optionC: "Puducherry",
        correctAnswer: "Lakshadweep",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "India is one of the largest countries in the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Arabian Sea lies to the east of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sri Lanka and Maldives are India’s oceanic neighbours.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rajasthan is the smallest state of India areawise.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "India is famous for its unity in diversity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kanyakumari is located at the northern end of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The southern part of India is surrounded by water on three sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nepal is one of the neighbouring countries of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Bay of Bengal lies on the western coast of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "India has more than 25 states.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
