export const chapter = "Chapter - 13: Beaks and claws";
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
          question: "What type of beaks do eagles, owls, and vultures have?",
          optionA: "Curved",
          optionB: "Strong and Hooked",
          optionC: "Cracker",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question:
            "Which birds have curved beaks for cracking hard fruits and nuts?",
          optionA: "Ducks",
          optionB: "Parrots",
          optionC: "Sparrows",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question: "What is the purpose of the broad and flat beaks of ducks?",
          optionA: "Climbing",
          optionB: "Sieving water and catching insects",
          optionC: "Cracking hard fruits",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question:
            "What kind of beaks do woodpeckers have, and what is their function?",
          optionA: "Spear-shaped, for catching fish",
          optionB: "Broad and flat, for sieving water",
          optionC:
            "Chisel-shaped, for drilling tree trunks and finding insects",
          correctAnswer: "C",
         }),
      shuffleOptions({
          question:
            "Which type of beaks do pelicans and kingfishers have, and how do they use them?",
          optionA: "Cracker beaks, for husking and crushing grain",
          optionB: "Spear-shaped beaks, for catching fish",
          optionC: "Curved beaks, for cracking hard fruits",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question:
            "What is the purpose of the straw-shaped beaks of hummingbirds?",
          optionA: "Catching fish",
          optionB: "Sucking nectar from flowers",
          optionC: "Drilling tree trunks",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question:
            "Which type of claws do parrots and woodpeckers have, and how do they use them?",
          optionA: "Swimming claws, for pushing water",
          optionB: "Perching claws, for holding branches",
          optionC: "Raptorial claws, for catching prey",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question: "What type of claws do vultures, kites, and owls have?",
          optionA: "Raptorial claws, for catching prey",
          optionB: "Scratching claws, for scratching the ground",
          optionC: "Wading claws, for standing on marshes",
          correctAnswer: "A",
         }),
      shuffleOptions({
          question:
            "Which birds have scratching claws that are helpful in scratching the ground?",
          optionA: "Ducks",
          optionB: "Cocks and hens",
          optionC: "Sparrows",
          correctAnswer: "B",
         }),
      shuffleOptions({
          question: "What type of claws do ducks and swans have for swimming?",
          optionA: "Wading claws",
          optionB: "Swimming claws",
          optionC: "Perching claws",
          correctAnswer: "B",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        fill_in_the_blank_questions: [
          {
            question:
              "Eagles, owls, and vultures have strong and __________ beaks, which help them tear their prey swiftly and easily.",
            options: {
              a: "Curved",
              b: "Hooked",
              c: "Broad",
            },
            answer: "b",
          },
          {
            question:
              "Parrots have __________ beaks that assist them in cracking hard fruits and nuts.",
            options: {
              a: "Curved",
              b: "Cracker",
              c: "Chisel-shaped",
            },
            answer: "a",
          },
          {
            question:
              "Ducks have broad and flat beaks with holes, acting as sieves, allowing them to filter __________ while retaining insects, plants, and worms.",
            options: {
              a: "Water",
              b: "Air",
              c: "Sand",
            },
            answer: "a",
          },
          {
            question:
              "Woodpeckers use their long and chisel-shaped beaks to drill into tree trunks to find __________ for their food.",
            options: {
              a: "Fruits",
              b: "Insects",
              c: "Nuts",
            },
            answer: "b",
          },
          {
            question:
              "Pelicans and kingfishers possess __________ beaks, specifically designed for catching fish.",
            options: {
              a: "Straw-shaped",
              b: "Spear-shaped",
              c: "Curved",
            },
            answer: "b",
          },
          {
            question:
              "Hummingbirds have long and slender __________, allowing them to suck nectar from flowers.",
            options: {
              a: "Claws",
              b: "Beaks",
              c: "Wings",
            },
            answer: "b",
          },
          {
            question:
              "Parrots and woodpeckers have __________ claws, which are helpful for climbing rough surfaces.",
            options: {
              a: "Climbing",
              b: "Perching",
              c: "Raptorial",
            },
            answer: "a",
          },
          {
            question:
              "Sparrows, crows, and pigeons have __________ claws with three long toes in front and one short toe at the back, aiding in holding branches strongly.",
            options: {
              a: "Scratching",
              b: "Perching",
              c: "Climbing",
            },
            answer: "b",
          },
          {
            question:
              "Vultures, kites, and owls possess __________ claws, characterized by strong nails and toes, assisting in catching and killing prey.",
            options: {
              a: "Wading",
              b: "Raptorial",
              c: "Swimming",
            },
            answer: "b",
          },
          {
            question:
              "Cocks and hens are equipped with __________ claws, useful for scratching the ground.",
            options: {
              a: "Wading",
              b: "Scratching",
              c: "Swimming",
            },
            answer: "b",
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
        true_false_questions: [
          {
            question:
              "Eagles, owls, and vultures have curved beaks for tearing prey swiftly and easily.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "False",
          },
          {
            question:
              "Parrots use their beaks to climb trees and crack hard fruits and nuts.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "False",
          },
          {
            question:
              "Ducks have broad and flat beaks with holes that act as sieves for filtering water.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "True",
          },
          {
            question: "Woodpeckers have spear-shaped beaks for catching fish.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "False",
          },
          {
            question:
              "Hummingbirds use their claws to suck nectar from flowers.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "False",
          },
          {
            question:
              "Sparrows and pigeons have scratching claws for holding branches strongly.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "True",
          },
          {
            question:
              "Vultures, kites, and owls have climbing claws for catching prey.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "False",
          },
          {
            question:
              "Pelicans and kingfishers possess straw-shaped beaks for catching fish.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "False",
          },
          {
            question:
              "Ducks and swans have swimming claws with webbed toes for pushing water.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "True",
          },
          {
            question:
              "Cocks and hens have raptorial claws for scratching the ground.",
            options: {
              a: "True",
              b: "False",
            },
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
