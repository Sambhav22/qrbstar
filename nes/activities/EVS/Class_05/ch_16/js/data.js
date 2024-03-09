export const chapter = "Chapter -16: Adventure and Exploration";
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
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions(
        {
            "question": "What is the term used for small bodies of iron and rock floating in space?",
            "optionA": "Meteor",
            "optionB": "Comet",
            "optionC": "Asteroid",
            "correctAnswer": "C) Asteroid"
        }),
      shuffleOptions({
            "question": "When a small object in space enters Earth's atmosphere, what is it called?",
            "optionA": "Meteor",
            "optionB": "Comet",
            "optionC": "Meteorite",
            "correctAnswer": "A) Meteor"
        }),
      shuffleOptions({
            "question": "What is formed when bits of iron and rock are left over from a meteor after impacting Earth's surface?",
            "optionA": "Meteor",
            "optionB": "Comet",
            "optionC": "Meteorite",
            "correctAnswer": "C) Meteorite"
        }),
      shuffleOptions({
            "question": "What are balls of ice and gas that orbit around stars called?",
            "optionA": "Planets",
            "optionB": "Comets",
            "optionC": "Satellites",
            "correctAnswer": "B) Comets"
        }),
      shuffleOptions({
            "question": "How many planets are there in our solar system?",
            "optionA": "Six",
            "optionB": "Nine",
            "optionC": "Eight",
            "correctAnswer": "C) Eight"
        }),
      shuffleOptions({
            "question": "What is an object in space that orbits around a bigger object called?",
            "optionA": "Asteroid",
            "optionB": "Satellite",
            "optionC": "Meteoroid",
            "correctAnswer": "B) Satellite"
        }),
      shuffleOptions({
            "question": "Who was the first man to go into space?",
            "optionA": "Neil Armstrong",
            "optionB": "Valentina Tereshkova",
            "optionC": "Yuri Gagarin",
            "correctAnswer": "C) Yuri Gagarin"
        }),
      shuffleOptions({
            "question": "Who was the first Indian woman to go into space?",
            "optionA": "Kalpana Chawla",
            "optionB": "Sunita Williams",
            "optionC": "Rakesh Sharma",
            "correctAnswer": "A) Kalpana Chawla"
        }),
      shuffleOptions({
            "question": "What term is used for astronauts getting out of a vehicle while in space?",
            "optionA": "EVA",
            "optionB": "IVA",
            "optionC": "AVA",
            "correctAnswer": "A) EVA"
        }),
      shuffleOptions({
            "question": "Who was the first Indian to go into space?",
            "optionA": "Rakesh Sharma",
            "optionB": "Kalpana Chawla",
            "optionC": "Neil Armstrong",
            "correctAnswer": "A) Rakesh Sharma"
        }
    ]
    
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
            "question": "The first man to go into space was _______ on 12 April, 1961.",
            "optionA": "Neil Armstrong",
            "optionB": "Yuri Gagarin",
            "optionC": "Valentina Tereshkova",
            "correctAnswer": "B) Yuri Gagarin"
        }),
      shuffleOptions({
            "question": "A small object in space that enters Earth's atmosphere is called a _______.",
            "optionA": "Meteorite",
            "optionB": "Comet",
            "optionC": "Meteor",
            "correctAnswer": "C) Meteor"
        }),
      shuffleOptions({
            "question": "Bits of iron and rock left over from a meteor after impacting with Earth's surface are called _______.",
            "optionA": "Comets",
            "optionB": "Meteors",
            "optionC": "Meteorites",
            "correctAnswer": "C) Meteorites"
        }),
      shuffleOptions({
            "question": "The highest peak in the world, Mount Everest, is _______ metres high.",
            "optionA": "8848",
            "optionB": "9876",
            "optionC": "7500",
            "correctAnswer": "A) 8848"
        }),
      shuffleOptions({
            "question": "The first Indian woman to go into space was _______ on 19 November, 1997.",
            "optionA": "Kalpana Chawla",
            "optionB": "Sunita Williams",
            "optionC": "Rakesh Sharma",
            "correctAnswer": "A) Kalpana Chawla"
        }),
      shuffleOptions({
            "question": "The first person to go on a spacewalk was _______.",
            "optionA": "Neil Armstrong",
            "optionB": "Alexei Leonov",
            "optionC": "Yuri Gagarin",
            "correctAnswer": "B) Alexei Leonov"
        }),
      shuffleOptions({
            "question": "Mountaineers climb mountains for _______.",
            "optionA": "Money",
            "optionB": "Adventure",
            "optionC": "Fame",
            "correctAnswer": "B) Adventure"
        }),
      shuffleOptions({
            "question": "Mountaineering requires courage, strength, stamina, experience, and _______.",
            "optionA": "Wealth",
            "optionB": "Technical ability",
            "optionC": "Luck",
            "correctAnswer": "B) Technical ability"
        }),
      shuffleOptions({
            "question": "The spirit of mountaineering helps to develop discipline, humility, courage, and _______.",
            "optionA": "Arrogance",
            "optionB": "Self-confidence",
            "optionC": "Fear",
            "correctAnswer": "B) Self-confidence"
        }),
      shuffleOptions({
            "question": "The Nehru Institute of Mountaineering is located in _______.",
            "optionA": "Uttarakhand",
            "optionB": "Darjeeling",
            "optionC": "Himachal Pradesh",
            "correctAnswer": "A) Uttarakhand"
        }
    ]
    
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
            "question": "Mount Everest is the tallest peak in the world.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Yuri Gagarin was the first woman to go into space.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Mountaineers need to carry heavy oxygen tanks while climbing mountains.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Comets are made of iron and rock.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Valentina Tereshkova was the first person to land on the moon.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Asteroids are larger than planets.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Sunita Williams has spent more than 500 days in space.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Meteorites are formed when meteoroids enter Earth's atmosphere.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Rakesh Sharma was the first Indian to go into space.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "The Nehru Institute of Mountaineering is located in Darjeeling.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }
    ]
    
    ],
  };
}

export var activityData;
