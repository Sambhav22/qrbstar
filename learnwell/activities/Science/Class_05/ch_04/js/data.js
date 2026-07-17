export const chapter = "Chapter - 4: The Nervous System";
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
        question: "Which part of the brain controls thinking, memory and learning?",
        optionA: "Cerebellum",
        optionB: "Cerebrum",
        optionC: "Medulla",
        correctAnswer: "Cerebrum",
      }),
      shuffleOptions({
        question: "Which part of the brain joins it to the spinal cord?",
        optionA: "Cerebellum",
        optionB: "Medulla",
        optionC: "Cerebrum",
        correctAnswer: "Medulla",
      }),
      shuffleOptions({
        question: "Which nerves carry messages from sense organs to the brain?",
        optionA: "Motor",
        optionB: "Sensory",
        optionC: "Mixed",
        correctAnswer: "Sensory",
      }),
      shuffleOptions({
        question: "Which part of the brain helps us to keep our body balance?",
        optionA: "Cerebellum",
        optionB: "Cerebrum",
        optionC: "Medulla",
        correctAnswer: "Cerebellum",
      }),
      shuffleOptions({
        question: "Which organ protects the spinal cord?",
        optionA: "Skull",
        optionB: "Backbone",
        optionC: "Rib cage",
        correctAnswer: "Backbone",
      }),
      shuffleOptions({
        question: "Which part of the nervous system acts like a connecting cable between brain and body parts?",
        optionA: "Brain",
        optionB: "Spinal cord",
        optionC: "Nerves",
        correctAnswer: "Spinal cord",
      }),
      shuffleOptions({
        question: "Which sense organ helps us to detect smells and also in breathing?",
        optionA: "Nose",
        optionB: "Ear",
        optionC: "Tongue",
        correctAnswer: "Nose",
      }),
      shuffleOptions({
        question: "Which sense organ helps us to hear sounds and maintain balance?",
        optionA: "Skin",
        optionB: "Ear",
        optionC: "Eye",
        correctAnswer: "Ear",
      }),
      shuffleOptions({
        question: "Which nerves carry messages both to and from the brain?",
        optionA: "Motor",
        optionB: "Sensory",
        optionC: "Mixed",
        correctAnswer: "Mixed",
      }),
      shuffleOptions({
        question: "Which part of the nervous system controls reflex actions in our body?",
        optionA: "Cerebellum",
        optionB: "Spinal cord",
        optionC: "Cerebrum",
        correctAnswer: "Spinal cord",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The __________ is the control centre of our body.",
        optionA: "Brain",
        optionB: "Heart",
        optionC: "Lungs",
        correctAnswer: "Brain",
      }),
      shuffleOptions({
        question: "The __________ is the largest part of the brain.",
        optionA: "Cerebellum",
        optionB: "Cerebrum",
        optionC: "Medulla",
        correctAnswer: "Cerebrum",
      }),
      shuffleOptions({
        question: "The __________ controls involuntary actions like breathing and heartbeat.",
        optionA: "Cerebrum",
        optionB: "Medulla",
        optionC: "Cerebellum",
        correctAnswer: "Medulla",
      }),
      shuffleOptions({
        question: "The __________ is situated at the back of the head and helps in balancing the body.",
        optionA: "Cerebellum",
        optionB: "Medulla",
        optionC: "Cerebrum",
        correctAnswer: "Cerebellum",
      }),
      shuffleOptions({
        question: "The spinal cord is protected by the __________.",
        optionA: "Backbone",
        optionB: "Skull",
        optionC: "Ribs",
        correctAnswer: "Backbone",
      }),
      shuffleOptions({
        question: "The __________ nerves carry messages from the brain to muscles.",
        optionA: "Motor",
        optionB: "Sensory",
        optionC: "Mixed",
        correctAnswer: "Motor",
      }),
      shuffleOptions({
        question: "The __________ nerves carry messages from sense organs to the brain.",
        optionA: "Sensory",
        optionB: "Motor",
        optionC: "Mixed",
        correctAnswer: "Sensory",
      }),
      shuffleOptions({
        question: "The sense organ that helps us to taste different flavours is the __________.",
        optionA: "Tongue",
        optionB: "Nose",
        optionC: "Ear",
        correctAnswer: "Tongue",
      }),
      shuffleOptions({
        question: "The skin has millions of tiny __________ that help us feel pain and heat.",
        optionA: "Nerve endings",
        optionB: "Muscles",
        optionC: "Bones",
        correctAnswer: "Nerve endings",
      }),
      shuffleOptions({
        question: "Reflex actions are controlled by the __________.",
        optionA: "Spinal cord",
        optionB: "Brain",
        optionC: "Cerebellum",
        correctAnswer: "Spinal cord",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The brain is the control centre of our body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The cerebrum is the smallest part of the brain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The cerebellum controls body balance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The medulla controls voluntary actions like walking and writing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The spinal cord is made up of 33 vertebrae.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Motor nerves carry messages from sense organs to the brain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mixed nerves carry messages both to and from the brain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The nose helps us in smelling and breathing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The tongue helps us to see different objects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The skin is the largest sense organ of the body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
