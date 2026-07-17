export const chapter = "Chapter - 10: Body Movement";
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
        question: "Which part of the human body protects the brain?",
        optionA: "Rib cage",
        optionB: "Cranium",
        optionC: "Backbone",
        correctAnswer: "Cranium",
      }),
      shuffleOptions({
        question: "What connects one bone to another in our body?",
        optionA: "Tendon",
        optionB: "Ligament",
        optionC: "Cartilage",
        correctAnswer: "Ligament",
      }),
      shuffleOptions({
        question: "Where are the smallest bones of the human body found?",
        optionA: "Ear",
        optionB: "Leg",
        optionC: "Hand",
        correctAnswer: "Ear",
      }),
      shuffleOptions({
        question: "Which joint allows movement in all directions?",
        optionA: "Hinge joint",
        optionB: "Pivot joint",
        optionC: "Ball and socket joint",
        correctAnswer: "Ball and socket joint",
      }),
      shuffleOptions({
        question: "Which bone in the human body is called the thigh bone?",
        optionA: "Tibia",
        optionB: "Femur",
        optionC: "Fibula",
        correctAnswer: "Femur",
      }),
      shuffleOptions({
        question: "What is the longest bone in the human body?",
        optionA: "Femur",
        optionB: "Radius",
        optionC: "Ulna",
        correctAnswer: "Femur",
      }),
      shuffleOptions({
        question: "Which joint helps us to move our head?",
        optionA: "Pivot joint",
        optionB: "Hinge joint",
        optionC: "Fixed joint",
        correctAnswer: "Pivot joint",
      }),
      shuffleOptions({
        question: "What do we call the place where two bones meet?",
        optionA: "Joint",
        optionB: "Cartilage",
        optionC: "Marrow",
        correctAnswer: "Joint",
      }),
      shuffleOptions({
        question: "Which part of the skeleton protects the lungs and heart?",
        optionA: "Skull",
        optionB: "Rib cage",
        optionC: "Pelvic girdle",
        correctAnswer: "Rib cage",
      }),
      shuffleOptions({
        question: "Which organs help in the movement of bones?",
        optionA: "Muscles",
        optionB: "Ligaments",
        optionC: "Marrow",
        correctAnswer: "Muscles",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The backbone is also known as the ______.",
        optionA: "vertebral column",
        optionB: "rib cage",
        optionC: "skull",
        correctAnswer: "vertebral column",
      }),
      shuffleOptions({
        question: "The lower jaw bone is called the ______.",
        optionA: "cranium",
        optionB: "mandible",
        optionC: "scapula",
        correctAnswer: "mandible",
      }),
      shuffleOptions({
        question: "The human skeleton consists of ______ bones.",
        optionA: "200",
        optionB: "206",
        optionC: "210",
        correctAnswer: "206",
      }),
      shuffleOptions({
        question: "Bones are held together at joints by ______.",
        optionA: "muscles",
        optionB: "ligaments",
        optionC: "cartilage",
        correctAnswer: "ligaments",
      }),
      shuffleOptions({
        question: "The shoulder and hip joints are examples of ______ joints.",
        optionA: "pivot",
        optionB: "hinge",
        optionC: "ball and socket",
        correctAnswer: "ball and socket",
      }),
      shuffleOptions({
        question: "The muscle in the upper arm that helps in bending the elbow is called ______.",
        optionA: "triceps",
        optionB: "biceps",
        optionC: "deltoid",
        correctAnswer: "biceps",
      }),
      shuffleOptions({
        question: "The bone in the upper arm is called ______.",
        optionA: "femur",
        optionB: "humerus",
        optionC: "radius",
        correctAnswer: "humerus",
      }),
      shuffleOptions({
        question: "The muscles are attached to the bones by ______.",
        optionA: "tendons",
        optionB: "ligaments",
        optionC: "cartilages",
        correctAnswer: "tendons",
      }),
      shuffleOptions({
        question: "The bird’s bones are ______ to make their body light.",
        optionA: "hollow",
        optionB: "solid",
        optionC: "curved",
        correctAnswer: "hollow",
      }),
      shuffleOptions({
        question: "The earthworm moves with the help of its ______.",
        optionA: "wings",
        optionB: "setae",
        optionC: "fins",
        correctAnswer: "setae",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The skeleton gives shape and support to our body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cartilage makes the ends of bones rough and uneven.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The rib cage protects the heart and lungs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The muscles can extend and cannot contract.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ligaments connect muscles to bones.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The movement of the entire body from one place to another is called locomotion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Snakes move with the help of fins.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Birds have teeth to help them eat grains easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Earthworms move with the help of bristles called setae.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The study of bones through X-rays was discovered by Wilhelm Conrad Roentgen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
