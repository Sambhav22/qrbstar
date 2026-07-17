export const chapter = "Chapter - 3: Bones and Muscles";
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
        question: "Which part of the body protects the brain?",
        optionA: "Rib cage",
        optionB: "Skull",
        optionC: "Backbone",
        correctAnswer: "Skull",
      }),
      shuffleOptions({
        question: "How many bones are present in the adult human skeleton?",
        optionA: "260",
        optionB: "206",
        optionC: "210",
        correctAnswer: "206",
      }),
      shuffleOptions({
        question: "What is the longest bone in the human body?",
        optionA: "Backbone",
        optionB: "Femur",
        optionC: "Rib",
        correctAnswer: "Femur",
      }),
      shuffleOptions({
        question: "Which joint allows movement in all directions?",
        optionA: "Hinge",
        optionB: "Ball and socket",
        optionC: "Pivot",
        correctAnswer: "Ball and socket",
      }),
      shuffleOptions({
        question: "Which type of joints are found between the skull bones?",
        optionA: "Movable",
        optionB: "Immovable",
        optionC: "Hinge",
        correctAnswer: "Immovable",
      }),
      shuffleOptions({
        question: "Which part of the skeleton protects the spinal cord?",
        optionA: "Rib cage",
        optionB: "Backbone",
        optionC: "Skull",
        correctAnswer: "Backbone",
      }),
      shuffleOptions({
        question: "What are bones joined together by?",
        optionA: "Ligaments",
        optionB: "Tendons",
        optionC: "Cartilage",
        correctAnswer: "Ligaments",
      }),
      shuffleOptions({
        question: "Which fibres connect muscles to bones?",
        optionA: "Ligaments",
        optionB: "Tendons",
        optionC: "Veins",
        correctAnswer: "Tendons",
      }),
      shuffleOptions({
        question: "Which muscles work without our control?",
        optionA: "Voluntary",
        optionB: "Involuntary",
        optionC: "Skeletal",
        correctAnswer: "Involuntary",
      }),
      shuffleOptions({
        question: "Which muscle of the body is the strongest?",
        optionA: "Heart",
        optionB: "Tongue",
        optionC: "Leg",
        correctAnswer: "Tongue",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The hard framework of bones in our body is called __________.",
        optionA: "Skeleton",
        optionB: "Backbone",
        optionC: "Rib cage",
        correctAnswer: "Skeleton",
      }),
      shuffleOptions({
        question: "Bones are made of __________ and minerals.",
        optionA: "Living cells",
        optionB: "Water",
        optionC: "Fats",
        correctAnswer: "Living cells",
      }),
      shuffleOptions({
        question: "The rib cage is made up of __________ pairs of ribs.",
        optionA: "10",
        optionB: "12",
        optionC: "14",
        correctAnswer: "12",
      }),
      shuffleOptions({
        question: "Each small bone in the backbone is called __________.",
        optionA: "Vertebra",
        optionB: "Rib",
        optionC: "Femur",
        correctAnswer: "Vertebra",
      }),
      shuffleOptions({
        question: "The lower jaw is __________ while the rest of the skull bones are fixed.",
        optionA: "Movable",
        optionB: "Rigid",
        optionC: "Soft",
        correctAnswer: "Movable",
      }),
      shuffleOptions({
        question: "The shoulder girdle joins the __________ to the spine.",
        optionA: "Upper arm",
        optionB: "Lower arm",
        optionC: "Leg",
        correctAnswer: "Upper arm",
      }),
      shuffleOptions({
        question: "The last two pairs of ribs are called __________.",
        optionA: "Floating ribs",
        optionB: "Fixed ribs",
        optionC: "Loose ribs",
        correctAnswer: "Floating ribs",
      }),
      shuffleOptions({
        question: "Muscles are attached to bones by __________.",
        optionA: "Tendons",
        optionB: "Ligaments",
        optionC: "Nerves",
        correctAnswer: "Tendons",
      }),
      shuffleOptions({
        question: "The muscles that move at our will are called __________.",
        optionA: "Voluntary muscles",
        optionB: "Involuntary muscles",
        optionC: "Cardiac muscles",
        correctAnswer: "Voluntary muscles",
      }),
      shuffleOptions({
        question: "The backbone is also known as the __________ column.",
        optionA: "Vertebral",
        optionB: "Central",
        optionC: "Neural",
        correctAnswer: "Vertebral",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The skeleton helps us to stand upright.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Babies are born with 300 bones.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The rib cage protects the lungs and the heart.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The backbone is made of one long bone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The hinge joint allows movement in all directions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The ball and socket joint is found in the shoulder and hip.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ligaments join muscles to bones.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Muscles work in pairs to move body parts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The heart has voluntary muscles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The tongue is the strongest muscle in our body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
