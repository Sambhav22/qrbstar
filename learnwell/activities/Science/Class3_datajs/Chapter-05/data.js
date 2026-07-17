export const chapter = "Chapter - 5: Man : The Living Machine";
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
        question: "Which part of our body helps us in breathing?",
        optionA: "Heart",
        optionB: "Lungs",
        optionC: "Brain",
        correctAnswer: "Lungs",
      }),
      shuffleOptions({
        question: "What is the backbone also called?",
        optionA: "Rib cage",
        optionB: "Skull",
        optionC: "Spine",
        correctAnswer: "Spine",
      }),
      shuffleOptions({
        question: "Which organ protects the brain?",
        optionA: "Ribs",
        optionB: "Skull",
        optionC: "Heart",
        correctAnswer: "Skull",
      }),
      shuffleOptions({
        question: "Which part of the body pumps blood to all parts?",
        optionA: "Brain",
        optionB: "Heart",
        optionC: "Lungs",
        correctAnswer: "Heart",
      }),
      shuffleOptions({
        question: "Which system helps to break down food into simpler form?",
        optionA: "Respiratory system",
        optionB: "Digestive system",
        optionC: "Muscular system",
        correctAnswer: "Digestive system",
      }),
      shuffleOptions({
        question: "Which organs protect the heart and lungs?",
        optionA: "Skull",
        optionB: "Ribs",
        optionC: "Spine",
        correctAnswer: "Ribs",
      }),
      shuffleOptions({
        question: "Which organ system controls all other systems of the body?",
        optionA: "Circulatory system",
        optionB: "Muscular system",
        optionC: "Nervous system",
        correctAnswer: "Nervous system",
      }),
      shuffleOptions({
        question: "Which organ removes urine from the body?",
        optionA: "Kidneys",
        optionB: "Lungs",
        optionC: "Heart",
        correctAnswer: "Kidneys",
      }),
      shuffleOptions({
        question: "Which organ system helps in movement of body parts?",
        optionA: "Muscular system",
        optionB: "Digestive system",
        optionC: "Excretory system",
        correctAnswer: "Muscular system",
      }),
      shuffleOptions({
        question: "Which system includes the brain, spinal cord and nerves?",
        optionA: "Circulatory system",
        optionB: "Skeletal system",
        optionC: "Nervous system",
        correctAnswer: "Nervous system",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The skull protects the ______.",
        optionA: "Heart",
        optionB: "Brain",
        optionC: "Lungs",
        correctAnswer: "Brain",
      }),
      shuffleOptions({
        question: "The backbone supports the neck and the ______.",
        optionA: "Stomach",
        optionB: "Head",
        optionC: "Arms",
        correctAnswer: "Head",
      }),
      shuffleOptions({
        question: "The lungs give out ______.",
        optionA: "Oxygen",
        optionB: "Carbon dioxide",
        optionC: "Sweat",
        correctAnswer: "Carbon dioxide",
      }),
      shuffleOptions({
        question: "The fleshy part under our skin is made up of ______.",
        optionA: "Bones",
        optionB: "Muscles",
        optionC: "Fat",
        correctAnswer: "Muscles",
      }),
      shuffleOptions({
        question: "The ______ connects the mouth to the stomach.",
        optionA: "Windpipe",
        optionB: "Food pipe",
        optionC: "Backbone",
        correctAnswer: "Food pipe",
      }),
      shuffleOptions({
        question: "The ______ system carries blood to all parts of the body.",
        optionA: "Muscular",
        optionB: "Circulatory",
        optionC: "Digestive",
        correctAnswer: "Circulatory",
      }),
      shuffleOptions({
        question: "The ______ system helps us to think and respond.",
        optionA: "Excretory",
        optionB: "Respiratory",
        optionC: "Nervous",
        correctAnswer: "Nervous",
      }),
      shuffleOptions({
        question: "The ______ remove urine from the body.",
        optionA: "Kidneys",
        optionB: "Lungs",
        optionC: "Intestines",
        correctAnswer: "Kidneys",
      }),
      shuffleOptions({
        question: "The air enters the body through the ______.",
        optionA: "Mouth",
        optionB: "Nose",
        optionC: "Ears",
        correctAnswer: "Nose",
      }),
      shuffleOptions({
        question: "The ______ protect the heart and lungs.",
        optionA: "Skull",
        optionB: "Pelvis",
        optionC: "Ribs",
        correctAnswer: "Ribs",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The skeleton gives shape and support to the body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A baby has more than 300 bones at birth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The ribs protect the stomach.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Muscles help in moving different parts of the body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The brain is part of the circulatory system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The skin helps in removing sweat from the body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The digestive system helps to break food into simpler form.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The heart beats about 72 times in a minute.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The lungs take in carbon dioxide and give out oxygen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The nervous system controls all other systems of the body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
