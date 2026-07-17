export const chapter = "Chapter - 20: Bricks and Bridges";
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
        question: "What are bricks made from?",
        optionA: "Clay",
        optionB: "Sand",
        optionC: "Wood",
        correctAnswer: "Clay",
      }),
      shuffleOptions({
        question: "Which tool is used to level the ground at construction sites?",
        optionA: "Plumb bob",
        optionB: "Earth rammer",
        optionC: "Head pan",
        correctAnswer: "Earth rammer",
      }),
      shuffleOptions({
        question: "Who helped the villagers of Batpura build a bamboo bridge?",
        optionA: "Ram Bahadur the mason",
        optionB: "Champa",
        optionC: "Muniya",
        correctAnswer: "Ram Bahadur the mason",
      }),
      shuffleOptions({
        question: "Which bridge consists of independent beams joined in the middle?",
        optionA: "Beam bridge",
        optionB: "Cantilever bridge",
        optionC: "Floating bridge",
        correctAnswer: "Cantilever bridge",
      }),
      shuffleOptions({
        question: "What is used to check the vertical alignment of a wall?",
        optionA: "Measuring tape",
        optionB: "Plumb bob",
        optionC: "Chisel",
        correctAnswer: "Plumb bob",
      }),
      shuffleOptions({
        question: "The Pearl Bridge connects which two islands of Japan?",
        optionA: "Hokkaido and Okinawa",
        optionB: "Honshu and Awaji",
        optionC: "Tokyo and Kyushu",
        correctAnswer: "Honshu and Awaji",
      }),
      shuffleOptions({
        question: "Which bridge hangs from steel cables supported by towers?",
        optionA: "Arch bridge",
        optionB: "Suspension bridge",
        optionC: "Beam bridge",
        correctAnswer: "Suspension bridge",
      }),
      shuffleOptions({
        question: "What are the airtight containers in a floating bridge called?",
        optionA: "Blocks",
        optionB: "Pontoons",
        optionC: "Beams",
        correctAnswer: "Pontoons",
      }),
      shuffleOptions({
        question: "Which tool is used to spread mortar?",
        optionA: "Masonry trowel",
        optionB: "Drill machine",
        optionC: "Hoe",
        correctAnswer: "Masonry trowel",
      }),
      shuffleOptions({
        question: "The villagers built the bridge so that they could reach which town easily?",
        optionA: "Khali",
        optionB: "Manohar",
        optionC: "Rampur",
        correctAnswer: "Khali",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Clay is mixed with ______ to prepare bricks.",
        optionA: "Water",
        optionB: "Cement",
        optionC: "Lime",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "Bricks are dried in the ______ before they are baked.",
        optionA: "Shade",
        optionB: "Sun",
        optionC: "Rain",
        correctAnswer: "Sun",
      }),
      shuffleOptions({
        question: "A mixture of sand, water and cement is called ______.",
        optionA: "Mortar",
        optionB: "Concrete",
        optionC: "Paste",
        correctAnswer: "Mortar",
      }),
      shuffleOptions({
        question: "The first bridge was believed to be made from a ______ log.",
        optionA: "Fallen",
        optionB: "Wooden",
        optionC: "Broken",
        correctAnswer: "Fallen",
      }),
      shuffleOptions({
        question: "A beam bridge rests on supports called ______.",
        optionA: "Piers",
        optionB: "Beams",
        optionC: "Ropes",
        correctAnswer: "Piers",
      }),
      shuffleOptions({
        question: "The tool used to carry materials is the ______.",
        optionA: "Head pan",
        optionB: "Plumb bob",
        optionC: "Earth rammer",
        correctAnswer: "Head pan",
      }),
      shuffleOptions({
        question: "The villagers used bamboo sticks, grass pads and ______ to make a bridge.",
        optionA: "Wooden logs",
        optionB: "Plastic pipes",
        optionC: "Metal bars",
        correctAnswer: "Wooden logs",
      }),
      shuffleOptions({
        question: "Bricks are baked in a kiln at ______ temperature.",
        optionA: "500° – 1000°C",
        optionB: "1000° – 1200°C",
        optionC: "1500° – 3000°C",
        correctAnswer: "1000° – 1200°C",
      }),
      shuffleOptions({
        question: "The ______ bridge allows large ships to pass under it.",
        optionA: "Moveable",
        optionB: "Beam",
        optionC: "Floating",
        correctAnswer: "Moveable",
      }),
      shuffleOptions({
        question: "The bridge helped villagers cross the stream safely in all ______.",
        optionA: "Seasons",
        optionB: "Days",
        optionC: "Months",
        correctAnswer: "Seasons",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Bricks are one of the chief building materials used for houses and bridges.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cantilever bridges are supported by pontoons.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A plumb bob is used to check the horizontal alignment of walls.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Arch bridges were originally made of large stone blocks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Floating bridges rest on airtight containers called pontoons.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ram Bahadur was a carpenter by profession.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Pearl Bridge is the longest suspension bridge in the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Head pan is used to transport building materials.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The villagers had to cross the stream by boat before the bridge was built.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The bamboo bridge made travelling difficult for the villagers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
