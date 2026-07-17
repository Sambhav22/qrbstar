export const chapter = "Chapter - 5: Different Skills";
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
        question: "Who makes decorative pots using clay and a potter’s wheel?",
        optionA: "Carpenter",
        optionB: "Potter",
        optionC: "Cobbler",
        correctAnswer: "Potter",
      }),
      shuffleOptions({
        question: "Who repairs cars in a garage?",
        optionA: "Mechanic",
        optionB: "Driver",
        optionC: "Mason",
        correctAnswer: "Mechanic",
      }),
      shuffleOptions({
        question: "Who flies an aircraft?",
        optionA: "Pilot",
        optionB: "Astronaut",
        optionC: "Driver",
        correctAnswer: "Pilot",
      }),
      shuffleOptions({
        question: "Who plans and designs buildings?",
        optionA: "Architect",
        optionB: "Chef",
        optionC: "Teacher",
        correctAnswer: "Architect",
      }),
      shuffleOptions({
        question: "Who is the senior-most cook in a hotel or restaurant?",
        optionA: "Chef",
        optionB: "Cobbler",
        optionC: "Tailor",
        correctAnswer: "Chef",
      }),
      shuffleOptions({
        question: "Who makes wooden furniture using hammer and nails?",
        optionA: "Carpenter",
        optionB: "Potter",
        optionC: "Mechanic",
        correctAnswer: "Carpenter",
      }),
      shuffleOptions({
        question: "Who applies design and beauty to clothing and accessories?",
        optionA: "Fashion Designer",
        optionB: "Engineer",
        optionC: "Doctor",
        correctAnswer: "Fashion Designer",
      }),
      shuffleOptions({
        question: "Who protects the country through the Air Force, Navy and Army?",
        optionA: "Defence Officer",
        optionB: "Architect",
        optionC: "Mechanic",
        correctAnswer: "Defence Officer",
      }),
      shuffleOptions({
        question: "Who suggested basket-making in Maharpura village?",
        optionA: "Raghav",
        optionB: "Ravi",
        optionC: "Mohan",
        correctAnswer: "Raghav",
      }),
      shuffleOptions({
        question: "Who mends and polishes shoes using nails and glue?",
        optionA: "Cobbler",
        optionB: "Potter",
        optionC: "Carpenter",
        correctAnswer: "Cobbler",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A ______ makes new designs for clothes and accessories.",
        optionA: "Chef",
        optionB: "Fashion Designer",
        optionC: "Engineer",
        correctAnswer: "Fashion Designer",
      }),
      shuffleOptions({
        question: "A ______ works hard to repair vehicles in a garage.",
        optionA: "Mechanic",
        optionB: "Carpenter",
        optionC: "Tailor",
        correctAnswer: "Mechanic",
      }),
      shuffleOptions({
        question: "A ______ uses hammer, nails and saw to make furniture.",
        optionA: "Carpenter",
        optionB: "Cobbler",
        optionC: "Potter",
        correctAnswer: "Carpenter",
      }),
      shuffleOptions({
        question: "A ______ travels into space to conduct experiments.",
        optionA: "Astronaut",
        optionB: "Pilot",
        optionC: "Teacher",
        correctAnswer: "Astronaut",
      }),
      shuffleOptions({
        question: "A ______ prepares and presents delicious food.",
        optionA: "Chef",
        optionB: "Engineer",
        optionC: "Tailor",
        correctAnswer: "Chef",
      }),
      shuffleOptions({
        question: "A ______ leads the army, navy and air force of a country.",
        optionA: "Defence Officer",
        optionB: "Doctor",
        optionC: "Pilot",
        correctAnswer: "Defence Officer",
      }),
      shuffleOptions({
        question: "A ______ operates the controls of an aeroplane.",
        optionA: "Pilot",
        optionB: "Driver",
        optionC: "Mason",
        correctAnswer: "Pilot",
      }),
      shuffleOptions({
        question: "A ______ shapes clay into beautiful pots.",
        optionA: "Potter",
        optionB: "Carpenter",
        optionC: "Tailor",
        correctAnswer: "Potter",
      }),
      shuffleOptions({
        question: "A ______ suggested skill development in Maharpura village.",
        optionA: "Raghav",
        optionB: "Mohan",
        optionC: "Deepak",
        correctAnswer: "Raghav",
      }),
      shuffleOptions({
        question: "A ______ provides skills for occupations like carpentry and tailoring.",
        optionA: "Vocational Training School",
        optionB: "Hospital",
        optionC: "Market",
        correctAnswer: "Vocational Training School",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "An astronaut conducts experiments and launches satellites.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A potter uses clay and water to make pots.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A carpenter repairs cars and bikes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A chef cooks food and presents it attractively.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A fashion designer designs machines and engines.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A defence officer protects the country from attacks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Women today choose various professions freely.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Local craftwork helps villagers earn extra income.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "India is famous for its skilled artisans and handicrafts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Every kind of work is respectable and important.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
