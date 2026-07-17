export const chapter = "Chapter - 20: Our Government and National Symbols";
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
        question: "Who appoints the Governor of a state?",
        optionA: "Chief Minister",
        optionB: "President",
        optionC: "Home Minister",
        correctAnswer: "President",
      }),
      shuffleOptions({
        question: "Who heads the Council of Ministers at the centre?",
        optionA: "Prime Minister",
        optionB: "Speaker",
        optionC: "Vice-President",
        correctAnswer: "Prime Minister",
      }),
      shuffleOptions({
        question: "Which organ of the government is responsible for giving justice?",
        optionA: "Executive",
        optionB: "Legislature",
        optionC: "Judiciary",
        correctAnswer: "Judiciary",
      }),
      shuffleOptions({
        question: "Who becomes the Prime Minister of India?",
        optionA: "Leader of the majority party in Lok Sabha",
        optionB: "Leader of Rajya Sabha",
        optionC: "Leader of Vidhan Sabha",
        correctAnswer: "Leader of the majority party in Lok Sabha",
      }),
      shuffleOptions({
        question: "Which body works at the national level to settle disputes?",
        optionA: "High Court",
        optionB: "District Court",
        optionC: "Supreme Court",
        correctAnswer: "Supreme Court",
      }),
      shuffleOptions({
        question: "Who signs a bill to make it a law at the national level?",
        optionA: "Prime Minister",
        optionB: "President",
        optionC: "Speaker",
        correctAnswer: "President",
      }),
      shuffleOptions({
        question: "Who is the highest authority of a state?",
        optionA: "Chief Minister",
        optionB: "MLA",
        optionC: "Governor",
        correctAnswer: "Governor",
      }),
      shuffleOptions({
        question: "What does the green colour in the National Flag represent?",
        optionA: "Courage",
        optionB: "Fertility and prosperity",
        optionC: "Peace",
        correctAnswer: "Fertility and prosperity",
      }),
      shuffleOptions({
        question: "Who elects the members of Rajya Sabha?",
        optionA: "Lok Sabha",
        optionB: "State Vidhan Sabhas",
        optionC: "Citizens directly",
        correctAnswer: "State Vidhan Sabhas",
      }),
      shuffleOptions({
        question: "Which house of Parliament has greater power in making laws?",
        optionA: "Lok Sabha",
        optionB: "Rajya Sabha",
        optionC: "Vidhan Sabha",
        correctAnswer: "Lok Sabha",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The National Emblem has ________ lions in total.",
        optionA: "three",
        optionB: "four",
        optionC: "five",
        correctAnswer: "four",
      }),
      shuffleOptions({
        question: "Lok Sabha members are elected ________.",
        optionA: "directly by the people",
        optionB: "by the Governor",
        optionC: "by the judges",
        correctAnswer: "directly by the people",
      }),
      shuffleOptions({
        question: "The National Anthem is sung in ________.",
        optionA: "chorus",
        optionB: "whispers",
        optionC: "silence",
        correctAnswer: "chorus",
      }),
      shuffleOptions({
        question: "The President is elected for ________ years.",
        optionA: "two",
        optionB: "five",
        optionC: "ten",
        correctAnswer: "five",
      }),
      shuffleOptions({
        question: "The National Song of India is ________.",
        optionA: "Jana-Gana-Mana",
        optionB: "Vande Mataram",
        optionC: "Satyameva Jayate",
        correctAnswer: "Vande Mataram",
      }),
      shuffleOptions({
        question: "The highest court in a state is the ________.",
        optionA: "High Court",
        optionB: "Supreme Court",
        optionC: "District Court",
        correctAnswer: "High Court",
      }),
      shuffleOptions({
        question: "The blue chakra in the Flag has ________ spokes.",
        optionA: "16",
        optionB: "20",
        optionC: "24",
        correctAnswer: "24",
      }),
      shuffleOptions({
        question: "The state legislative assembly is called the ________.",
        optionA: "Rajya Sabha",
        optionB: "Vidhan Sabha",
        optionC: "Lok Sabha",
        correctAnswer: "Vidhan Sabha",
      }),
      shuffleOptions({
        question: "The white colour in the Flag stands for ________.",
        optionA: "honesty and peace",
        optionB: "courage",
        optionC: "progress",
        correctAnswer: "honesty and peace",
      }),
      shuffleOptions({
        question: "The Supreme Court is located in ________.",
        optionA: "Jaipur",
        optionB: "New Delhi",
        optionC: "Kolkata",
        correctAnswer: "New Delhi",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Judiciary is responsible for settling disputes and ensuring justice.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The National Flag can be hoisted only between sunrise and sunset.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Only two lions of the National Emblem are visible at once.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rajya Sabha is the Lower House of Parliament.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Governor acts as a link between the central and state governments.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The green colour of the Flag stands for peace.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The National Anthem must be heard or sung in attention position.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The District Court works at the national level.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Lok Sabha members must be at least 25 years old.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The chakra in the Flag stands for motion and progress.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
