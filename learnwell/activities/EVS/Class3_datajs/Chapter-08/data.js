export const chapter = "Chapter - 8: Work We Do";
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
        question: "Who brings milk daily?",
        optionA: "Mr. Kapil",
        optionB: "Mr. Ramu",
        optionC: "Mr. Kumar",
        correctAnswer: "Mr. Ramu",
      }),
      shuffleOptions({
        question: "Who sells things of daily use?",
        optionA: "Grocer",
        optionB: "Mason",
        optionC: "Cobbler",
        correctAnswer: "Grocer",
      }),
      shuffleOptions({
        question: "Who teaches children in a nearby school?",
        optionA: "Mrs. Swati",
        optionB: "Mrs. Siya",
        optionC: "Gauri",
        correctAnswer: "Mrs. Swati",
      }),
      shuffleOptions({
        question: "Who repairs and polishes shoes?",
        optionA: "Cobbler",
        optionB: "Barber",
        optionC: "Tailor",
        correctAnswer: "Cobbler",
      }),
      shuffleOptions({
        question: "Who constructs buildings?",
        optionA: "Mason",
        optionB: "Doctor",
        optionC: "Vendor",
        correctAnswer: "Mason",
      }),
      shuffleOptions({
        question: "Who works at a bank and gets a salary?",
        optionA: "Serviceman",
        optionB: "Teacher",
        optionC: "Barber",
        correctAnswer: "Serviceman",
      }),
      shuffleOptions({
        question: "Who is a homemaker in Gauri’s family?",
        optionA: "Mrs. Siya",
        optionB: "Mrs. Swati",
        optionC: "Avya",
        correctAnswer: "Mrs. Siya",
      }),
      shuffleOptions({
        question: "Who takes Gauri back home from school?",
        optionA: "Avya",
        optionB: "Vibhu",
        optionC: "Ramu",
        correctAnswer: "Avya",
      }),
      shuffleOptions({
        question: "Who brings newspapers daily?",
        optionA: "Mr. Ravi",
        optionB: "Mr. Brijesh",
        optionC: "Mr. Atil",
        correctAnswer: "Mr. Ravi",
      }),
      shuffleOptions({
        question: "Who stitches our clothes?",
        optionA: "Mr. Kapil",
        optionB: "Mr. Ravi",
        optionC: "Mr. Jaggu",
        correctAnswer: "Mr. Kapil",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A ________ treats patients.",
        optionA: "Teacher",
        optionB: "Doctor",
        optionC: "Tailor",
        correctAnswer: "Doctor",
      }),
      shuffleOptions({
        question: "A ________ sells things of daily use.",
        optionA: "Grocer",
        optionB: "Barber",
        optionC: "Mason",
        correctAnswer: "Grocer",
      }),
      shuffleOptions({
        question: "A ________ cuts hair.",
        optionA: "Barber",
        optionB: "Tailor",
        optionC: "Vendor",
        correctAnswer: "Barber",
      }),
      shuffleOptions({
        question: "A ________ works in a bank.",
        optionA: "Serviceman",
        optionB: "Cobbler",
        optionC: "Doctor",
        correctAnswer: "Serviceman",
      }),
      shuffleOptions({
        question: "A ________ cooks food for the family.",
        optionA: "Homemaker",
        optionB: "Teacher",
        optionC: "Mason",
        correctAnswer: "Homemaker",
      }),
      shuffleOptions({
        question: "Work done with ________ is valuable.",
        optionA: "Honesty",
        optionB: "Laziness",
        optionC: "Anger",
        correctAnswer: "Honesty",
      }),
      shuffleOptions({
        question: "A ________ brings milk every morning.",
        optionA: "Milk vendor",
        optionB: "Tailor",
        optionC: "Grocer",
        correctAnswer: "Milk vendor",
      }),
      shuffleOptions({
        question: "A ________ repairs and polishes shoes.",
        optionA: "Cobbler",
        optionB: "Barber",
        optionC: "Vendor",
        correctAnswer: "Cobbler",
      }),
      shuffleOptions({
        question: "We go to ________ in our leisure time.",
        optionA: "Malls",
        optionB: "Banks",
        optionC: "Schools",
        correctAnswer: "Malls",
      }),
      shuffleOptions({
        question: "Children should go to ________ instead of working.",
        optionA: "School",
        optionB: "Factory",
        optionC: "Shop",
        correctAnswer: "School",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mr. Ramu is a milk vendor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mrs. Swati is a doctor.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Gauri’s father works in a bank.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mrs. Siya is a homemaker.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gauri’s sister helps her mother at home.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Leisure activities refresh our mind.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All kinds of work are important if done honestly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A tailor cuts hair.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A cobbler stitches clothes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Children below 14 years should not be made to work.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
