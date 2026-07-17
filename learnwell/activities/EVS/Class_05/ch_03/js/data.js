export const chapter = "Chapter - 3: Our Senses";
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
        question: "Which organ helps us to see the things around us?",
        optionA: "Nose",
        optionB: "Eyes",
        optionC: "Skin",
        correctAnswer: "Eyes",
      }),
      shuffleOptions({
        question: "What are the two light-sensitive cells present in the retina?",
        optionA: "Cones and rods",
        optionB: "Discs and plates",
        optionC: "Taste buds",
        correctAnswer: "Cones and rods",
      }),
      shuffleOptions({
        question: "Which part of the body contains olfactory receptors?",
        optionA: "Nose",
        optionB: "Tongue",
        optionC: "Ears",
        correctAnswer: "Nose",
      }),
      shuffleOptions({
        question: "Who invented the Braille script for the blind?",
        optionA: "Helen Keller",
        optionB: "Louis Braille",
        optionC: "Anne Sullivan",
        correctAnswer: "Louis Braille",
      }),
      shuffleOptions({
        question: "Which sense organ helps us to hear different sounds?",
        optionA: "Ear",
        optionB: "Tongue",
        optionC: "Eyes",
        correctAnswer: "Ear",
      }),
      shuffleOptions({
        question: "How many types of touch sensations do we feel?",
        optionA: "Two",
        optionB: "Four",
        optionC: "Five",
        correctAnswer: "Four",
      }),
      shuffleOptions({
        question: "What connects our sense organs with the brain?",
        optionA: "Nerves",
        optionB: "Bones",
        optionC: "Veins",
        correctAnswer: "Nerves",
      }),
      shuffleOptions({
        question: "Who taught Helen Keller to communicate by spelling words into her hand?",
        optionA: "Anne Sullivan",
        optionB: "Alexander Bell",
        optionC: "Louis Braille",
        correctAnswer: "Anne Sullivan",
      }),
      shuffleOptions({
        question: "Who advised Helen Keller’s parents to contact the Perkins Institute for the Blind?",
        optionA: "Alexander Graham Bell",
        optionB: "Louis Braille",
        optionC: "Anne Sullivan",
        correctAnswer: "Alexander Graham Bell",
      }),
      shuffleOptions({
        question: "What are differently-abled people also called?",
        optionA: "Challenging people",
        optionB: "Special people",
        optionC: "Active people",
        correctAnswer: "Special people",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The organ responsible for the sense of smell is the ______.",
        optionA: "nose",
        optionB: "ear",
        optionC: "skin",
        correctAnswer: "nose",
      }),
      shuffleOptions({
        question: "The receptors for taste are called ______.",
        optionA: "taste buds",
        optionB: "smell buds",
        optionC: "sound cells",
        correctAnswer: "taste buds",
      }),
      shuffleOptions({
        question: "The retina of the eye contains ______.",
        optionA: "cones and rods",
        optionB: "blood vessels",
        optionC: "tiny bones",
        correctAnswer: "cones and rods",
      }),
      shuffleOptions({
        question: "Nerve endings in the ____ help us feel cold, heat, contact, and pain.",
        optionA: "skin",
        optionB: "tongue",
        optionC: "ear",
        correctAnswer: "skin",
      }),
      shuffleOptions({
        question: "The information from sense organs is carried to the brain by ______.",
        optionA: "nerves",
        optionB: "veins",
        optionC: "cells",
        correctAnswer: "nerves",
      }),
      shuffleOptions({
        question: "The brain sends back commands through ______.",
        optionA: "motor nerves",
        optionB: "arteries",
        optionC: "lungs",
        correctAnswer: "motor nerves",
      }),
      shuffleOptions({
        question: "Helen Keller was both ____ and ____.",
        optionA: "deaf and blind",
        optionB: "short and weak",
        optionC: "young and ill",
        correctAnswer: "deaf and blind",
      }),
      shuffleOptions({
        question: "Books for the visually challenged are written in ______.",
        optionA: "Braille script",
        optionB: "cursive script",
        optionC: "Morse code",
        correctAnswer: "Braille script",
      }),
      shuffleOptions({
        question: "Braille numbers are formed by placing a ____ sign before letters A to J.",
        optionA: "number",
        optionB: "question",
        optionC: "dot",
        correctAnswer: "number",
      }),
      shuffleOptions({
        question: "Differently-abled people should be treated with ______.",
        optionA: "kindness and respect",
        optionB: "anger",
        optionC: "ignorance",
        correctAnswer: "kindness and respect",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The tongue helps us to hear sounds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The sense of touch is present only in our hands.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Braille script is read by touching raised dots.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Helen Keller was born in Tuscumbia, Alabama.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Olfactory receptors are located in the nostrils.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The retina is covered with rods and cones.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sense organs carry messages to the brain through veins.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The brain sends messages through motor nerves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Braille was based on a tactile military code called night writing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Differently-abled people are a burden on society.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
