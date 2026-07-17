export const chapter = "Chapter - 7: The Southern Plateau";
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
        question: "Which side of the Southern Plateau is broader?",
        optionA: "South",
        optionB: "North",
        optionC: "West",
        correctAnswer: "North",
      }),
      shuffleOptions({
        question: "Which hills lie on the north-eastern side of the Southern Plateau?",
        optionA: "Aravalli Hills",
        optionB: "Rajmahal Hills",
        optionC: "Nilgiri Hills",
        correctAnswer: "Rajmahal Hills",
      }),
      shuffleOptions({
        question: "Which plateau contains large reserves of coal and iron ore?",
        optionA: "Malwa Plateau",
        optionB: "Chota Nagpur Plateau",
        optionC: "Shillong Plateau",
        correctAnswer: "Chota Nagpur Plateau",
      }),
      shuffleOptions({
        question: "Which Ghats form a continuous chain of hills?",
        optionA: "Western Ghats (Sahyadri)",
        optionB: "Eastern Ghats",
        optionC: "Vindhya Ghats",
        correctAnswer: "Western Ghats (Sahyadri)",
      }),
      shuffleOptions({
        question: "Which state is known for sandalwood and gold mines?",
        optionA: "Tamil Nadu",
        optionB: "Karnataka",
        optionC: "Telangana",
        correctAnswer: "Karnataka",
      }),
      shuffleOptions({
        question: "In which region is agriculture the main occupation due to fertile black soil?",
        optionA: "Northern Plains",
        optionB: "Deccan Plateau",
        optionC: "Coastal Plains",
        correctAnswer: "Deccan Plateau",
      }),
      shuffleOptions({
        question: "Which plateau includes parts of Rajasthan, Madhya Pradesh and Gujarat?",
        optionA: "Malwa Plateau",
        optionB: "Chota Nagpur Plateau",
        optionC: "Himalayan Plateau",
        correctAnswer: "Malwa Plateau",
      }),
      shuffleOptions({
        question: "Which state is famous for alphonso mangoes?",
        optionA: "Maharashtra",
        optionB: "Chhattisgarh",
        optionC: "Andhra Pradesh",
        correctAnswer: "Maharashtra",
      }),
      shuffleOptions({
        question: "At which point do the Western and Eastern Ghats meet?",
        optionA: "Mumbai",
        optionB: "Chennai",
        optionC: "Kanyakumari",
        correctAnswer: "Kanyakumari",
      }),
      shuffleOptions({
        question: "Which state’s capital is known as the IT capital of India?",
        optionA: "Hyderabad",
        optionB: "Bengaluru",
        optionC: "Bhopal",
        correctAnswer: "Bengaluru",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Southern Plateau looks like an ________ triangle.",
        optionA: "upright",
        optionB: "upside-down",
        optionC: "slanted",
        correctAnswer: "upside-down",
      }),
      shuffleOptions({
        question: "The plateau rivers are mainly ________-fed.",
        optionA: "snow",
        optionB: "spring",
        optionC: "rain",
        correctAnswer: "rain",
      }),
      shuffleOptions({
        question: "The Rajmahal Hills lie on the ________ of the plateau.",
        optionA: "north-east",
        optionB: "south-west",
        optionC: "east",
        correctAnswer: "north-east",
      }),
      shuffleOptions({
        question: "The Deccan Plateau has a ________ climate.",
        optionA: "very cold",
        optionB: "moderate",
        optionC: "humid",
        correctAnswer: "moderate",
      }),
      shuffleOptions({
        question: "Tamil Nadu’s famous harvest festival is ________.",
        optionA: "Pongal",
        optionB: "Baisakhi",
        optionC: "Lohri",
        correctAnswer: "Pongal",
      }),
      shuffleOptions({
        question: "The Western Ghats are also called the ________.",
        optionA: "Shivalik",
        optionB: "Sahyadri",
        optionC: "Aravalli",
        correctAnswer: "Sahyadri",
      }),
      shuffleOptions({
        question: "Telangana shares its capital with ________.",
        optionA: "Odisha",
        optionB: "Andhra Pradesh",
        optionC: "Kerala",
        correctAnswer: "Andhra Pradesh",
      }),
      shuffleOptions({
        question: "Karnataka is known for its unique form of ________ music.",
        optionA: "Carnatic",
        optionB: "Folk",
        optionC: "Hindustani",
        correctAnswer: "Carnatic",
      }),
      shuffleOptions({
        question: "The Malwa Plateau has ________ soil suitable for cotton.",
        optionA: "red",
        optionB: "black",
        optionC: "sandy",
        correctAnswer: "black",
      }),
      shuffleOptions({
        question: "Maharashtra lies along the ________ Sea.",
        optionA: "Red",
        optionB: "Arabian",
        optionC: "Baltic",
        correctAnswer: "Arabian",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Southern Plateau slopes from west to east.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Eastern Ghats are continuous and very high.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Plateau rivers may dry up in summer due to less rainfall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Malwa Plateau lies in parts of Kerala and Tamil Nadu.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Karnataka is famous for sandalwood and gold mines.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Deccan Plateau covers most of South India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Chhattisgarh is known for Kosa silk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tamil Nadu’s main language is Tamil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Maharashtra not produces alphonso mangoes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Western and Eastern Ghats meet at Kanyakumari.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
