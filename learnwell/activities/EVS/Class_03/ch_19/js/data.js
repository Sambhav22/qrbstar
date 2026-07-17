export const chapter = "Chapter - 18: Clothes We wear";
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
        question: "What is the process of interlacing threads to make cloth called?",
        optionA: "Spinning",
        optionB: "Weaving",
        optionC: "Printing",
        correctAnswer: "Weaving",
      }),
      shuffleOptions({
        question: "What were the earliest materials used by humans to cover their bodies?",
        optionA: "Tree bark",
        optionB: "Animal skins",
        optionC: "Paper",
        correctAnswer: "Animal skins",
      }),
      shuffleOptions({
        question: "Which device was used in olden times for weaving cloth?",
        optionA: "Loom",
        optionB: "Wheel",
        optionC: "Brush",
        correctAnswer: "Loom",
      }),
      shuffleOptions({
        question: "Which type of dyes are made from plants?",
        optionA: "Synthetic",
        optionB: "Natural",
        optionC: "Chemical",
        correctAnswer: "Natural",
      }),
      shuffleOptions({
        question: "In which method is a cloth tied into knots before dyeing?",
        optionA: "Tie and Dye",
        optionB: "Embroidery",
        optionC: "Printing",
        correctAnswer: "Tie and Dye",
      }),
      shuffleOptions({
        question: "What is used to make designs in block printing?",
        optionA: "Metal blocks",
        optionB: "Wooden blocks",
        optionC: "Plastic blocks",
        correctAnswer: "Wooden blocks",
      }),
      shuffleOptions({
        question: "Kalamkari is done with the help of a special _____.",
        optionA: "Needle",
        optionB: "Pen",
        optionC: "Stick",
        correctAnswer: "Pen",
      }),
      shuffleOptions({
        question: "What kind of work is done with coloured threads on fabric?",
        optionA: "Knitting",
        optionB: "Embroidery",
        optionC: "Painting",
        correctAnswer: "Embroidery",
      }),
      shuffleOptions({
        question: "In which state do men wear a lungi called mundu?",
        optionA: "Kerala",
        optionB: "Punjab",
        optionC: "Gujarat",
        correctAnswer: "Kerala",
      }),
      shuffleOptions({
        question: "Which three colours are called the primary colours?",
        optionA: "Red, Blue and Green",
        optionB: "Pink, Orange and Yellow",
        optionC: "Red, Black and White",
        correctAnswer: "Red, Blue and Green",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Weaving is the art of making _____.",
        optionA: "Thread",
        optionB: "Cloth",
        optionC: "Paper",
        correctAnswer: "Cloth",
      }),
      shuffleOptions({
        question: "The large machines used in mills to make cloth are called _____.",
        optionA: "Textile mills",
        optionB: "Oil mills",
        optionC: "Sugar mills",
        correctAnswer: "Textile mills",
      }),
      shuffleOptions({
        question: "Primary colours are _____.",
        optionA: "Red, Blue and Green",
        optionB: "Red, Black and White",
        optionC: "Yellow, Pink and Grey",
        correctAnswer: "Red, Blue and Green",
      }),
      shuffleOptions({
        question: "The method of printing designs with wooden blocks is known as _____.",
        optionA: "Block printing",
        optionB: "Leaf printing",
        optionC: "Screen printing",
        correctAnswer: "Block printing",
      }),
      shuffleOptions({
        question: "In tie and dye, the cloth is first _____.",
        optionA: "Tied",
        optionB: "Washed",
        optionC: "Ironed",
        correctAnswer: "Tied",
      }),
      shuffleOptions({
        question: "Embroidery is done using different coloured _____.",
        optionA: "Threads",
        optionB: "Brushes",
        optionC: "Dyes",
        correctAnswer: "Threads",
      }),
      shuffleOptions({
        question: "Natural dyes are obtained from _____.",
        optionA: "Stones",
        optionB: "Plants",
        optionC: "Plastics",
        correctAnswer: "Plants",
      }),
      shuffleOptions({
        question: "Women in western India wear _____.",
        optionA: "Saree",
        optionB: "Lehenga-choli",
        optionC: "Salwar-kameez",
        correctAnswer: "Lehenga-choli",
      }),
      shuffleOptions({
        question: "Men in Punjab wear _____.",
        optionA: "Kurta-pyjama and pagri",
        optionB: "Shirt and mundu",
        optionC: "Dhoti and angarakha",
        correctAnswer: "Kurta-pyjama and pagri",
      }),
      shuffleOptions({
        question: "A saree is a long piece of _____.",
        optionA: "Unstitched cloth",
        optionB: "Stitched cloth",
        optionC: "Wool cloth",
        correctAnswer: "Unstitched cloth",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Weaving is one of the oldest surviving crafts in the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Synthetic dyes are made from parts of plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Tie and dye involves tying and dyeing the cloth to make designs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Block printing is usually done on cotton fabric.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Embroidery is done with paint and brushes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Saree is an unstitched cloth worn by women.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Men in Kerala wear phiran salwar.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Colours make clothes look bright and attractive.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Weaving is the process of sewing garments together.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Textile mills produce thousands of metres of cloth in a day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
