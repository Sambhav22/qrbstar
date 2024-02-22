export const chapter = "Chapter - 1: Super Senses";
export const noOfActivities = 3

const shuffleQues = (ques) => {
  let arr = ques.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object
  const optionsArray = [optionA, optionB, optionC]

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  object.optionC = optionsArray[2]

  return object
}


if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
          question: "What are the five sense organs mentioned in the text?",
          optionA: "Nose, Ears, Skin, Hair, Eyes",
          optionB: "Nose, Ears, Tongue, Skin, Eyes",
          optionC: "Heart, Lungs, Liver, Brain, Stomach",
          correctAnswer: "B) Nose, Ears, Tongue, Skin, Eyes",
         }),
      shuffleOptions({
          question: "How do sharks use their sense of smell for finding food?",
          optionA: "They taste the water with their tongue",
          optionB:
            "They follow the direction of smell detected by their nostrils",
          optionC: "They rely on their vision to locate food",
          correctAnswer:
            "B) They follow the direction of smell detected by their nostrils",
         }),
      shuffleOptions({
          question:
            "Which animals are mentioned as having the ability to determine orientation through reflected sound?",
          optionA: "Dogs and Cats",
          optionB: "Bats and Cetaceans",
          optionC: "Birds and Reptiles",
          correctAnswer: "B) Bats and Cetaceans",
         }),
      shuffleOptions({
          question:
            "How do grazing animals like deer benefit from their sense of hearing?",
          optionA: "It helps them locate prey",
          optionB: "It provides a warning of approaching predators",
          optionC: "It assists in finding food through sound",
          correctAnswer: "B) It provides a warning of approaching predators",
         }),
      shuffleOptions({
          question:
            "What is another term for the sense of touch mentioned in the text?",
          optionA: "Olfactory sense",
          optionB: "Tactile sense",
          optionC: "Auditory sense",
          correctAnswer: "B) Tactile sense",
         }),
      shuffleOptions({
          question:
            "Where are the taste receptors mainly found in reptiles, birds, and mammals?",
          optionA: "Upper surface of the tongue",
          optionB: "Inner cheeks",
          optionC: "Roof of the mouth",
          correctAnswer: "A) Upper surface of the tongue",
         }),
      shuffleOptions({
          question: "How is the sense of taste related to the sense of smell?",
          optionA: "They are unrelated",
          optionB: "Taste is enhanced when the nose is blocked",
          optionC: "Smell is dependent on taste",
          correctAnswer: "B) Taste is enhanced when the nose is blocked",
         }),
      shuffleOptions({
          question:
            "What is exceptional about a cat's vision mentioned in the text?",
          optionA: "They can see in color",
          optionB: "They have excellent night vision",
          optionC: "They can see underwater",
          correctAnswer: "B) They have excellent night vision",
         }),
      shuffleOptions({
          question:
            "Which birds are specifically mentioned as having keen eyesight for survival?",
          optionA: "Chickens",
          optionB: "Eagles, Owls, Hawks",
          optionC: "Sparrows",
          correctAnswer: "B) Eagles, Owls, Hawks",
         }),
      shuffleOptions({
          question: "How do some animals like dogs communicate happiness?",
          optionA: "By chirping",
          optionB: "By wagging their tail",
          optionC: "By howling",
          correctAnswer: "B) By wagging their tail",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        questions: [
          {
            question:
              "Many animals use sound to communicate with each other, and hearing in these species is particularly important for their _________.",
            options: ["Navigation", "Survival", "Smell"],
            answer: "Survival",
          },
          {
            question:
              "The sense of touch in animals, also known as tactile sense, is utilized by cats through their whiskers and stiffer hair to feel around and sense a change in ___________.",
            options: ["Taste", "Air currents", "Sight"],
            answer: "Air currents",
          },
          {
            question:
              "In reptiles, birds, and mammals, taste receptors are primarily found on the upper surface of the _________.",
            options: ["Nose", "Tongue", "Skin"],
            answer: "Tongue",
          },
          {
            question:
              "Cats often refuse to eat when their nose is blocked because taste in animals is significantly dependent on the sense of ___________.",
            options: ["Touch", "Smell", "Hearing"],
            answer: "Smell",
          },
          {
            question:
              "The sense of vision in animals, such as cats, is well adapted for hunting, and they have excellent _________.",
            options: ["Hearing", "Night vision", "Taste"],
            answer: "Night vision",
          },
          {
            question:
              "Sharks use their keen sense of smell combined with timing to determine the direction of smell and follow the nostrils that first detect the smell, helping them find their _________.",
            options: ["Communication partners", "Prey", "Shelter"],
            answer: "Prey",
          },
          {
            question:
              "Deer and other grazing animals rely on their sense of hearing to provide them with a warning of __________ predators.",
            options: ["Flying", "Approaching", "Communicating"],
            answer: "Approaching",
          },
          {
            question:
              "The sense of taste allows animals to detect and identify dissolved chemicals, and taste is mainly dependent on the sense of _________.",
            options: ["Touch", "Hearing", "Smell"],
            answer: "Smell",
          },
          {
            question:
              "Dogs, like many animals, communicate happiness through symbols, and when a dog is happy, it often ___________.",
            options: ["Barks loudly", "Wags its tail", "Sniffs the air"],
            answer: "Wags its tail",
          },
          {
            question:
              "Predatory birds such as eagles, owls, and hawks have keen eyesight, allowing them to see __________ times as far as humans can.",
            options: ["Two", "Three", "Four"],
            answer: "Four",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        questions: [
          {
            question:
              "The sense of smell in sharks is combined with timing to find food.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Cats use their whiskers and stiffer hair for their sense of taste.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Taste receptors in reptiles, birds, and mammals are mainly found on the lower surface of the tongue.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Animals like dogs communicate happiness by wagging their tail.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Predatory birds such as eagles, owls, and hawks have poor eyesight.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Deer and other grazing animals use their sense of hearing to locate prey.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Insects like ants, bees, and termites communicate by releasing special chemicals.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "The tactile sense is also known as the sense of touch.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Dogs can make food choices based on how food feels rather than how it tastes or smells.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The sense of vision in cats is not well adapted for hunting.",
            options: ["True", "False"],
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
