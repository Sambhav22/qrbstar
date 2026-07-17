export const chapter = "Chapter - 4: A Special Friend";
export const noOfActivities = 3;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object;
  const optionsArray = [optionA, optionB, optionC].filter(Boolean);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length > 2) {
    object.optionC = optionsArray[2];
  } else {
    delete object.optionC;
  }

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Who was Mr. Kapoor?",
        optionA: "Doctor",
        optionB: "A retired airman",
        optionC: "Teacher",
        correctAnswer: "A retired airman",
      }),
      shuffleOptions({
        question: "What did Mr. Kapoor buy for Atul?",
        optionA: "Chocolate",
        optionB: "Pen",
        optionC: "A bat and a ball",
        correctAnswer: "A bat and a ball",
      }),
      shuffleOptions({
        question: "When did Mr. Kapoor get injured?",
        optionA: "Kargil War",
        optionB: "World War I",
        optionC: "Independence War",
        correctAnswer: "Kargil War",
      }),
      shuffleOptions({
        question: "What did Mr. Kapoor say when everything was fine?",
        optionA: "Noo for No Problem",
        optionB: "Phee for Fit",
        optionC: "Hello Atul",
        correctAnswer: "Phee for Fit",
      }),
      shuffleOptions({
        question: "Who opened the door when Atul came with his result?",
        optionA: "Atul’s father",
        optionB: "Mr. Kapoor",
        optionC: "Mrs. Kapoor",
        correctAnswer: "Mrs. Kapoor",
      }),
      shuffleOptions({
        question: "What did Mr. Kapoor give Atul after he scored well?",
        optionA: "Bat",
        optionB: "Ball",
        optionC: "A chocolate",
        correctAnswer: "A chocolate",
      }),
      shuffleOptions({
        question: "What was Atul’s habit every morning?",
        optionA: "Playing cricket",
        optionB: "Wishing elders Good morning",
        optionC: "Singing songs",
        correctAnswer: "Wishing elders Good morning",
      }),
      shuffleOptions({
        question: "What did Atul notice in the courtyard after Mr. Kapoor’s death?",
        optionA: "Ball",
        optionB: "Cane",
        optionC: "Platform",
        correctAnswer: "Cane",
      }),
      shuffleOptions({
        question: "Who was standing at the door when Atul’s exams were over?",
        optionA: "Mr. Kapoor",
        optionB: "Mrs. Kapoor",
        optionC: "Atul’s father",
        correctAnswer: "Mr. Kapoor",
      }),
      shuffleOptions({
        question: "What did Mrs. Kapoor ask Atul to do sometimes?",
        optionA: "Visit the zoo",
        optionB: "Play cricket",
        optionC: "Walk the cane",
        correctAnswer: "Walk the cane",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Atul lived near the ______.",
        optionA: "Park",
        optionB: "Bus stop",
        optionC: "Market",
        correctAnswer: "Bus stop",
      }),
      shuffleOptions({
        question: "Mr. Kapoor got injured in the ______ war.",
        optionA: "World War II",
        optionB: "Kargil",
        optionC: "Independence",
        correctAnswer: "Kargil",
      }),
      shuffleOptions({
        question: "The cane had a ______ base.",
        optionA: "Four-footed",
        optionB: "Two-footed",
        optionC: "Three-footed",
        correctAnswer: "Four-footed",
      }),
      shuffleOptions({
        question: "Mr. Kapoor said “Noo for No Problem” when there was a ______.",
        optionA: "Problem",
        optionB: "Success",
        optionC: "Holiday",
        correctAnswer: "Problem",
      }),
      shuffleOptions({
        question: "Atul went inside Mr. Kapoor’s ______.",
        optionA: "Courtyard",
        optionB: "Balcony",
        optionC: "Room",
        correctAnswer: "Courtyard",
      }),
      shuffleOptions({
        question: "Atul shared his ______ results with Mr. Kapoor.",
        optionA: "Games",
        optionB: "Unit test",
        optionC: "Homework",
        correctAnswer: "Unit test",
      }),
      shuffleOptions({
        question: "Mr. Kapoor gave Atul tips on how to ______.",
        optionA: "Study",
        optionB: "Bat and bowl",
        optionC: "Swim",
        correctAnswer: "Bat and bowl",
      }),
      shuffleOptions({
        question: "Atul knocked at Mr. Kapoor’s ______.",
        optionA: "Window",
        optionB: "Door",
        optionC: "School",
        correctAnswer: "Door",
      }),
      shuffleOptions({
        question: "Atul’s father was riding a ______.",
        optionA: "Car",
        optionB: "Scooter",
        optionC: "Cycle",
        correctAnswer: "Scooter",
      }),
      shuffleOptions({
        question: "Atul kissed the ______ before keeping it back.",
        optionA: "Bat",
        optionB: "Cane",
        optionC: "Photo",
        correctAnswer: "Cane",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mr. Kapoor was injured in 1999 during the Kargil War.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Atul never visited Mr. Kapoor’s house.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Atul enjoyed walking with the cane.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Atul’s father was happy about his strange behaviour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mr. Kapoor was always waiting for Atul at the door.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Atul lost all his exams.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mrs. Kapoor gave Atul a bat and a ball directly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Atul kissed the cane before placing it down.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Atul promised never to return again.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Atul said “Noo for No Problem” to Mrs. Kapoor before leaving.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
