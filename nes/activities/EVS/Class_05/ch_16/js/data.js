export const chapter = "Chapter - 16: Adventure and Exploration";
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
    questions: [
      {
        questions: [
          {
            question: "What are heavenly bodies?",
            options: [
              "Objects on Earth",
              "Objects in the sky",
              "Objects in the ocean",
            ],
            answer: "Objects in the sky",
          },
          {
            question:
              "What is the characteristic feature of comets when they approach the sun?",
            options: ["They freeze", "They form a tail", "They shrink"],
            answer: "They form a 'tail'",
          },
          {
            question: "How is a meteorite formed?",
            options: [
              "By melting in the atmosphere",
              "Leftover bits from a meteor after impact",
              "Pieces of a comet",
            ],
            answer: "Leftover bits from a meteor after impact",
          },
          {
            question: "Who was the first man to go into space?",
            options: ["Neil Armstrong", "Yuri Gagarin", "Valentina Tereshkova"],
            answer: "Yuri Gagarin",
          },
          {
            question: "Who was the first woman to go into space?",
            options: [
              "Sunita Williams",
              "Valentina Tereshkova",
              "Kalpana Chawla",
            ],
            answer: "Valentina Tereshkova",
          },
          {
            question: "How many planets are there in our solar system?",
            options: ["Six", "Nine", "Eight"],
            answer: "Eight",
          },
          {
            question: "Who was the first Indian woman to climb Mount Everest?",
            options: ["Bachendri Pal", "Kalpana Chawla", "Sunita Williams"],
            answer: "Bachendri Pal",
          },
          {
            question: "What is the highest peak in the world?",
            options: ["K2", "Mount Everest", "Mount Kilimanjaro"],
            answer: "Mount Everest",
          },
          {
            question: "What is the purpose of mountaineering training?",
            options: [
              "Learning to swim",
              "Developing discipline and strength",
              "Riding bicycles",
            ],
            answer: "Developing discipline and strength",
          },
          {
            question:
              "What type of mountains pose a risk of avalanches for mountaineers?",
            options: ["Rocky", "Volcanic", "Snow-clad"],
            answer: "Snow-clad",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        fill_in_the_blank_questions: [
          {
            question:
              "The objects we see in the sky, such as stars, planets, satellites, asteroids, comets, and meteors, are collectively known as _______.",
            options: [
              "Celestial bodies",
              "Atmospheric entities",
              "Oceanic phenomena",
            ],
            answer: "Celestial bodies",
          },
          {
            question:
              "Asteroids are small bodies of iron and rock that ________________.",
            options: [
              "Stay stationary in space",
              "Orbit the moon",
              "Float in space and orbit the sun",
            ],
            answer: "Float in space and orbit the sun",
          },
          {
            question:
              "A meteoroid becomes a meteor when it enters Earth's _____________.",
            options: ["Magnetosphere", "Atmosphere", "Biosphere"],
            answer: "Atmosphere",
          },
          {
            question:
              "Comets are composed of ice and gas, and when they get close to the sun, they melt and form a ____________.",
            options: ["Nebula", "Tail", "Shield"],
            answer: "Tail",
          },
          {
            question:
              "There are __________ planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.",
            options: ["Ten", "Eight", "Twelve"],
            answer: "Eight",
          },
          {
            question:
              "A satellite is an object in space that orbits around a bigger object. It can be either natural, like the moon, or artificial, like the ____________.",
            options: [
              "International Space Station",
              "Hubble Space Telescope",
              "Mars Rover",
            ],
            answer: "International Space Station",
          },
          {
            question:
              "Yuri Gagarin was the first man to go into space in _________.",
            options: ["1961", "1969", "1975"],
            answer: "1961",
          },
          {
            question:
              "Kalpana Chawla, the first Indian woman to go into space, tragically lost her life in the space shuttle named _____________.",
            options: ["Discovery", "Challenger", "Columbia"],
            answer: "Columbia",
          },
          {
            question:
              "The highest peak in the world, Mount Everest, is _________ meters high.",
            options: ["8848", "9765", "7500"],
            answer: "8848",
          },
          {
            question:
              "Mountaineers face challenges such as loose rocks, ice blocks, sudden weather changes, and the risk of ____________ on snowy mountains.",
            options: ["Tornadoes", "Avalanches", "Earthquakes"],
            answer: "Avalanches",
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
        true_or_false_questions: [
          {
            question:
              "Yuri Gagarin was the first man to go into space on 12 April, 1961.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Comets are balls of ice and gas that orbit around stars.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Mount Everest is the highest peak in the world at 8848 meters.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Kalpana Chawla went on her first space flight as part of the NASA space program on 19 November, 1997.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Sunita Williams served as the commander of the International Space Station in 2012.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Asteroids are smaller than planets and orbit the sun.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Mountaineers may come across dangers like loose rocks or ice blocks while climbing mountains.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "There are twelve planets in our solar system.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Valentina Tereshkova was the first person to land on the moon.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Satellites can only be artificial and not natural.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
