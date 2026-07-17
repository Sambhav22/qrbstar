export const chapter = "Chapter - 3: Our Changing Earth";
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
        question: "Which layer below the earth’s crust contains the moving molten material?",
        optionA: "Lithosphere",
        optionB: "Asthenosphere",
        optionC: "Biosphere",
        correctAnswer: "Asthenosphere",
      }),
      shuffleOptions({
        question: "Which opening allows lava, gases and ash to come out during a volcanic eruption?",
        optionA: "Fissure",
        optionB: "Shaft",
        optionC: "Vent",
        correctAnswer: "Vent",
      }),
      shuffleOptions({
        question: "Which feature is formed when a river cuts rapidly through hard rocks in mountains?",
        optionA: "Delta",
        optionB: "Gorge / Canyon",
        optionC: "Lagoon",
        correctAnswer: "Gorge / Canyon",
      }),
      shuffleOptions({
        question: "Which agent forms U-shaped valleys, cirques and moraines?",
        optionA: "Sea waves",
        optionB: "Glaciers",
        optionC: "Wind",
        correctAnswer: "Glaciers",
      }),
      shuffleOptions({
        question: "Which part of the earthquake is located directly above the seismic focus?",
        optionA: "Crater",
        optionB: "Mouth",
        optionC: "Epicentre",
        correctAnswer: "Epicentre",
      }),
      shuffleOptions({
        question: "Which feature marks large, steep bends in a river flowing through the plains?",
        optionA: "Sand dunes",
        optionB: "Meanders",
        optionC: "Mushroom rocks",
        correctAnswer: "Meanders",
      }),
      shuffleOptions({
        question: "Which type of landform is created when sea waves erode the base of a cliff?",
        optionA: "Sea cave",
        optionB: "Barchan",
        optionC: "Fjord",
        correctAnswer: "Sea cave",
      }),
      shuffleOptions({
        question: "Which wind-formed structure looks like a crescent-shaped sand hill?",
        optionA: "Cirque",
        optionB: "Stack",
        optionC: "Barchan dune",
        correctAnswer: "Barchan dune",
      }),
      shuffleOptions({
        question: "Which sediment is deposited by glaciers and forms ridges along their sides?",
        optionA: "Moraine",
        optionB: "Loess",
        optionC: "Silt",
        correctAnswer: "Moraine",
      }),
      shuffleOptions({
        question: "Which type of volcano has not erupted for thousands of years and is unlikely to erupt again?",
        optionA: "Active",
        optionB: "Dormant",
        optionC: "Extinct",
        correctAnswer: "Extinct",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A bowl-shaped opening at the top of a volcano is called a ________.",
        optionA: "arch",
        optionB: "crater",
        optionC: "valley",
        correctAnswer: "crater",
      }),
      shuffleOptions({
        question: "A steep fall of water formed when a river flows over hard and soft rocks is a ________.",
        optionA: "waterfall",
        optionB: "dune",
        optionC: "levee",
        correctAnswer: "waterfall",
      }),
      shuffleOptions({
        question: "Wind-blown fine dust deposited far from deserts forms ________.",
        optionA: "moraine",
        optionB: "loess",
        optionC: "silt",
        correctAnswer: "loess",
      }),
      shuffleOptions({
        question: "Material carried and later deposited by a glacier is called ________.",
        optionA: "moraine",
        optionB: "dune",
        optionC: "shale",
        correctAnswer: "moraine",
      }),
      shuffleOptions({
        question: "The process of breaking rocks into small particles without movement is called ________.",
        optionA: "erosion",
        optionB: "weathering",
        optionC: "sliding",
        correctAnswer: "weathering",
      }),
      shuffleOptions({
        question: "A river bends sharply in the plains to form broad ________.",
        optionA: "meanders",
        optionB: "troughs",
        optionC: "faults",
        correctAnswer: "meanders",
      }),
      shuffleOptions({
        question: "The triangular landform created at the mouth of a river is a ________.",
        optionA: "delta",
        optionB: "gorge",
        optionC: "dune",
        correctAnswer: "delta",
      }),
      shuffleOptions({
        question: "A valley carved by moving glaciers is known as a ________.",
        optionA: "V-shaped valley",
        optionB: "U-shaped valley",
        optionC: "Rift valley",
        correctAnswer: "U-shaped valley",
      }),
      shuffleOptions({
        question: "Large steep rocks rising vertically due to sea-wave erosion are called ________.",
        optionA: "cliffs",
        optionB: "cirques",
        optionC: "dunes",
        correctAnswer: "cliffs",
      }),
      shuffleOptions({
        question: "Powerful sea waves generated by an undersea earthquake are called ________.",
        optionA: "tsunami",
        optionB: "cyclone",
        optionC: "flood wave",
        correctAnswer: "tsunami",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Sea arches are formed when sea caves become larger and only the roof remains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Loess is formed by the deposition of river sediments.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Glaciers move under their own weight and carve out U-shaped valleys.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The river flows fastest in its lower course.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Faulting occurs when two plates pull away from each other.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Deltas are mainly formed because rivers deposit heavy sediments near the sea.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Weathering involves the movement (transport) of rock particles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Barchans are wind-formed crescent-shaped sand dunes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A canyon is wider and deeper than a gorge.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Marine action refers to the work done by rivers on coastal areas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
