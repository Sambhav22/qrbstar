export const chapter = "Chapter -18: Building Bridges";
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
          "question": "What tool is used to dig the ground and place mortar in a head pan?",
          "optionA": "Measuring Tape",
          "optionB": "Hoe",
          "correctAnswer": "Hoe"
        }),
      shuffleOptions({
          "question": "Which tool is used to transport materials?",
          "optionA": "Concrete Mixer",
          "optionB": "Plumb Bob",
          "correctAnswer": "Head Pan"
        }),
      shuffleOptions({
          "question": "What is the purpose of a plumb bob in construction?",
          "optionA": "To check the vertical alignment of civil work",
          "optionB": "To spread mortar",
          "correctAnswer": "To check the vertical alignment of civil work"
        }),
      shuffleOptions({
          "question": "Which tool is used to thoroughly mix concrete at the site?",
          "optionA": "Hand Saw",
          "optionB": "Chisel",
          "correctAnswer": "Concrete Mixer"
        }),
      shuffleOptions({
          "question": "What is the function of a drill machine in construction?",
          "optionA": "To remove excess concrete",
          "optionB": "To make holes into or through metal, wood, bricks, etc.",
          "correctAnswer": "To make holes into or through metal, wood, bricks, etc."
        }),
      shuffleOptions({
          "question": "What material was commonly used to construct bridges in small towns or rural areas?",
          "optionA": "Steel",
          "optionB": "Bamboo",
          "correctAnswer": "Bamboo"
        }),
      shuffleOptions({
          "question": "Which type of bridge consists of horizontal beams supported at both ends?",
          "optionA": "Beam Bridge",
          "optionB": "Suspension Bridge",
          "correctAnswer": "Beam Bridge"
        }),
      shuffleOptions({
          "question": "What distinguishes a flyover from a bridge?",
          "optionA": "Flyovers are made of stone, while bridges are made of steel.",
          "optionB": "Flyovers facilitate faster movements of vehicles and people over roads.",
          "correctAnswer": "Flyovers facilitate faster movements of vehicles and people over roads."
        }),
      shuffleOptions({
          "question": "What are some of the materials required to construct a bridge?",
          "optionA": "Glass and plastic",
          "optionB": "Concrete and stone",
          "correctAnswer": "Concrete and stone"
        }),
      shuffleOptions({
          "question": "Who is typically in charge of overseeing bridge construction?",
          "optionA": "Civil engineer",
          "optionB": "Architect",
          "correctAnswer": "Civil engineer"
        }
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "A ________ is used to dig the ground and place mortar in a head pan.",
          "optionA": "Plumb Bob",
          "optionB": "Hoe",
          "optionC": "Masonry Trowel",
          "correctAnswer": "Hoe"
        }),
      shuffleOptions({
          "question": "________ is used to transport materials.",
          "optionA": "Concrete Mixer",
          "optionB": "Plumb Bob",
          "optionC": "Head Pan",
          "correctAnswer": "Head Pan"
        }),
      shuffleOptions({
          "question": "________ is used to spread mortar.",
          "optionA": "Measuring Tape",
          "optionB": "Concrete Mixer",
          "optionC": "Masonry Trowel",
          "correctAnswer": "Masonry Trowel"
        }),
      shuffleOptions({
          "question": "Measuring Tape is used to ________.",
          "optionA": "dig the ground",
          "optionB": "transport materials",
          "optionC": "measure the length and breadth of walls",
          "correctAnswer": "measure the length and breadth of walls"
        }),
      shuffleOptions({
          "question": "________ is used to check the vertical alignment of civil work.",
          "optionA": "Concrete Mixer",
          "optionB": "Plumb Bob",
          "optionC": "Head Pan",
          "correctAnswer": "Plumb Bob"
        }),
      shuffleOptions({
          "question": "________ is used to level the ground.",
          "optionA": "Earth Rammer",
          "optionB": "Hand Saw",
          "optionC": "Chisel",
          "correctAnswer": "Earth Rammer"
        }),
      shuffleOptions({
          "question": "________ is used to make holes into or through metal, wood, bricks etc.",
          "optionA": "Drill Machine",
          "optionB": "Concrete Mixer",
          "optionC": "Plumb Bob",
          "correctAnswer": "Drill Machine"
        }),
      shuffleOptions({
          "question": "In small towns or rural areas, bamboo bridges were created with logs of bamboo trees used as pillars and flat wooden pieces tied to these pillars with ropes to cross ________.",
          "optionA": "rivers",
          "optionB": "lakes",
          "optionC": "streams",
          "correctAnswer": "streams"
        }),
      shuffleOptions({
          "question": "The type of bridge characterized by a semi-circular structure is called a(n) ________.",
          "optionA": "Beam Bridge",
          "optionB": "Suspension Bridge",
          "optionC": "Arch Bridge",
          "correctAnswer": "Arch Bridge"
        }),
      shuffleOptions({
          "question": "A civil engineer is typically in charge of overseeing bridge construction to ensure ________.",
          "optionA": "safety and durability",
          "optionB": "aesthetics and design",
          "optionC": "speed and efficiency",
          "correctAnswer": "safety and durability"
        }
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "Bridges are constructed to connect two parts of the land.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "A hoe is used primarily for transporting materials.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Measuring Tape is used to spread mortar.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Plumb Bob is used to check the vertical alignment of civil work.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Concrete Mixer is used to thoroughly mix concrete at the site.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Bamboo bridges are highly durable due to their natural materials.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Suspension bridges have a roadway that hangs from steel cables supported by two high towers.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Arch bridges are characterized by a straight structure.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "A flyover and a bridge serve the same purpose.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Steel, concrete, stone, and timber are some of the materials used in bridge construction.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }
      ],
  };
}

export var activityData;
