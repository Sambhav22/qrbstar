export const chapter = "Chapter - 6: Political Features of India";
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
        question: "Which city is the capital of India?",
        optionA: "Mumbai",
        optionB: "New Delhi",
        optionC: "Chennai",
        correctAnswer: "New Delhi",
      }),
      shuffleOptions({
        question: "Who is the head of a state?",
        optionA: "Chief Minister",
        optionB: "Governor",
        optionC: "President",
        correctAnswer: "Governor",
      }),
      shuffleOptions({
        question: "Who appoints the administrators of union territories?",
        optionA: "Prime Minister",
        optionB: "President of India",
        optionC: "Governor",
        correctAnswer: "President of India",
      }),
      shuffleOptions({
        question: "Which state has Jaipur as its capital?",
        optionA: "Rajasthan",
        optionB: "Punjab",
        optionC: "Uttarakhand",
        correctAnswer: "Rajasthan",
      }),
      shuffleOptions({
        question: "Which country is an oceanic neighbour of India?",
        optionA: "Nepal",
        optionB: "Sri Lanka",
        optionC: "Bhutan",
        correctAnswer: "Sri Lanka",
      }),
      shuffleOptions({
        question: "Which city serves as the capital of Haryana?",
        optionA: "Patna",
        optionB: "Chandigarh",
        optionC: "Dehradun",
        correctAnswer: "Chandigarh",
      }),
      shuffleOptions({
        question: "Which union territory has Kavaratti as its capital?",
        optionA: "Lakshadweep",
        optionB: "Ladakh",
        optionC: "Chandigarh",
        correctAnswer: "Lakshadweep",
      }),
      shuffleOptions({
        question: "Which country lies to the north-east of India?",
        optionA: "Bangladesh",
        optionB: "Myanmar",
        optionC: "China",
        correctAnswer: "China",
      }),
      shuffleOptions({
        question: "Which state has Amravati as its capital?",
        optionA: "Andhra Pradesh",
        optionB: "Telangana",
        optionC: "Goa",
        correctAnswer: "Andhra Pradesh",
      }),
      shuffleOptions({
        question: "Which state is the smallest in India by area?",
        optionA: "Sikkim",
        optionB: "Goa",
        optionC: "Tripura",
        correctAnswer: "Goa",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The capital of Karnataka is ________.",
        optionA: "Bengaluru",
        optionB: "Ranchi",
        optionC: "Raipur",
        correctAnswer: "Bengaluru",
      }),
      shuffleOptions({
        question: "The union territories are under the control of the ________.",
        optionA: "central government",
        optionB: "state government",
        optionC: "panchayat",
        correctAnswer: "central government",
      }),
      shuffleOptions({
        question: "The capital of Mizoram is ________.",
        optionA: "Imphal",
        optionB: "Aizawl",
        optionC: "Agartala",
        correctAnswer: "Aizawl",
      }),
      shuffleOptions({
        question: "India shares its border with ________ countries.",
        optionA: "seven",
        optionB: "five",
        optionC: "six",
        correctAnswer: "seven",
      }),
      shuffleOptions({
        question: "The capital of Punjab is ________.",
        optionA: "Jaipur",
        optionB: "Chandigarh",
        optionC: "Gandhinagar",
        correctAnswer: "Chandigarh",
      }),
      shuffleOptions({
        question: "The capital of Arunachal Pradesh is ________.",
        optionA: "Itanagar",
        optionB: "Kohima",
        optionC: "Agartala",
        correctAnswer: "Itanagar",
      }),
      shuffleOptions({
        question: "________ is the capital of West Bengal.",
        optionA: "Patna",
        optionB: "Kolkata",
        optionC: "Mumbai",
        correctAnswer: "Kolkata",
      }),
      shuffleOptions({
        question: "The capital of Chhattisgarh is ________.",
        optionA: "Raipur",
        optionB: "Dispur",
        optionC: "Shimla",
        correctAnswer: "Raipur",
      }),
      shuffleOptions({
        question: "Sri Lanka and Maldives are ________ neighbours of India.",
        optionA: "river",
        optionB: "oceanic",
        optionC: "mountain",
        correctAnswer: "oceanic",
      }),
      shuffleOptions({
        question: "The people of a state are served by the ________ government.",
        optionA: "state government",
        optionB: "foreign government",
        optionC: "district court",
        correctAnswer: "state government",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Rajasthan is the largest state of India in terms of area.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Goa has only two districts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nepal is an oceanic neighbour of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "New Delhi is the capital of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ladakh has two districts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The state government is headed by the President.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bangladesh lies to the east of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "China lies to the north-east of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Chandigarh is the capital of both Punjab and Haryana.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sri Lanka is located in the Indian Ocean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
