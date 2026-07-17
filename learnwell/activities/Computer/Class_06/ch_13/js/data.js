export const chapter = "Chapter - 13: Fun with Magnets";
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
        question: "Who was the shepherd boy credited with discovering natural magnets?",
        optionA: "Newton",
        optionB: "Magnes",
        optionC: "Faraday",
        correctAnswer: "Magnes",
      }),
      shuffleOptions({
        question: "Which material is not attracted by a magnet?",
        optionA: "Iron",
        optionB: "Steel",
        optionC: "Plastic",
        correctAnswer: "Plastic",
      }),
      shuffleOptions({
        question: "Which magnet is made from a mixture of aluminium, nickel, cobalt, copper and iron?",
        optionA: "Ferrite magnet",
        optionB: "Alloy magnet",
        optionC: "Temporary magnet",
        correctAnswer: "Alloy magnet",
      }),
      shuffleOptions({
        question: "The ends of a magnet where the magnetic force is the strongest are called—",
        optionA: "poles",
        optionB: "edges",
        optionC: "points",
        correctAnswer: "poles",
      }),
      shuffleOptions({
        question: "What happens when the north pole of one magnet is brought near the north pole of another?",
        optionA: "They attract",
        optionB: "They repel",
        optionC: "They stick together",
        correctAnswer: "They repel",
      }),
      shuffleOptions({
        question: "Which device always points in the north-south direction?",
        optionA: "Speedometer",
        optionB: "Magnetic compass",
        optionC: "Thermometer",
        correctAnswer: "Magnetic compass",
      }),
      shuffleOptions({
        question: "Which of these is a permanent magnet?",
        optionA: "Soft iron",
        optionB: "Steel",
        optionC: "Lodestone",
        correctAnswer: "Steel",
      }),
      shuffleOptions({
        question: "What are domains in a magnet?",
        optionA: "Areas where all molecular magnets point the same way",
        optionB: "Regions of strong heat",
        optionC: "Dust particles",
        correctAnswer: "Areas where all molecular magnets point the same way",
      }),
      shuffleOptions({
        question: "Which train moves using the force of magnets?",
        optionA: "Metro",
        optionB: "Maglev",
        optionC: "Bullet train",
        correctAnswer: "Maglev",
      }),
      shuffleOptions({
        question: "What happens if a magnet is hammered or dropped from a height?",
        optionA: "It becomes stronger",
        optionB: "It loses magnetism",
        optionC: "It gains new poles",
        correctAnswer: "It loses magnetism",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The rock that attracted the shepherd’s iron stick was called _______.",
        optionA: "Magnetite",
        optionB: "Granite",
        optionC: "Basalt",
        correctAnswer: "Magnetite",
      }),
      shuffleOptions({
        question: "Materials that can be attracted by a magnet are known as ______.",
        optionA: "magnetic materials",
        optionB: "non-magnetic materials",
        optionC: "plastic materials",
        correctAnswer: "magnetic materials",
      }),
      shuffleOptions({
        question: "Temporary magnets are usually made of ______.",
        optionA: "soft iron",
        optionB: "steel",
        optionC: "copper",
        correctAnswer: "soft iron",
      }),
      shuffleOptions({
        question: "A freely suspended magnet always comes to rest in the ____ direction.",
        optionA: "north-south",
        optionB: "east-west",
        optionC: "up-down",
        correctAnswer: "north-south",
      }),
      shuffleOptions({
        question: "The invisible area around a magnet where its effect is felt is called ______.",
        optionA: "magnetic field",
        optionB: "electric field",
        optionC: "force zone",
        correctAnswer: "magnetic field",
      }),
      shuffleOptions({
        question: "Magnets exert more force at their ______.",
        optionA: "poles",
        optionB: "centre",
        optionC: "edges",
        correctAnswer: "poles",
      }),
      shuffleOptions({
        question: "The ability of a magnetic material to attract or repel objects is called ______.",
        optionA: "magnetism",
        optionB: "repulsion",
        optionC: "rotation",
        correctAnswer: "magnetism",
      }),
      shuffleOptions({
        question: "Magnets used in cranes to lift iron objects are ______.",
        optionA: "electromagnets",
        optionB: "bar magnets",
        optionC: "ring magnets",
        correctAnswer: "electromagnets",
      }),
      shuffleOptions({
        question: "A horseshoe magnet should be stored with a piece of ____ kept across its poles.",
        optionA: "soft iron",
        optionB: "wood",
        optionC: "steel",
        correctAnswer: "soft iron",
      }),
      shuffleOptions({
        question: "Alnico magnets are used in ______.",
        optionA: "coils of transistors",
        optionB: "television screens",
        optionC: "magnifying glasses",
        correctAnswer: "coils of transistors",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The attractive force of a magnet is the same at every point on it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Like poles of two magnets attract each other.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A freely suspended bar magnet always aligns in the north-south direction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Heating a magnet strongly destroys its magnetism.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The earth itself acts as a big magnet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ferrite magnets are soft and flexible in nature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Each half of a broken magnet has both north and south poles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The magnetic effect cannot pass through water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Magnets are used in credit cards and ATM cards.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Magnetic poles can exist singly without the other.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
