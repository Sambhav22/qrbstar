export const chapter = "Chapter - 3: Materials in Daily Life";
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
        question: "Which fibre is obtained by chemically treating cellulose from wood pulp?",
        optionA: "Nylon",
        optionB: "Rayon",
        optionC: "Acrylic",
        correctAnswer: "Rayon",
      }),
      shuffleOptions({
        question: "Which fibre was the first fully synthetic fibre made without using natural raw materials?",
        optionA: "Polyester",
        optionB: "Nylon",
        optionC: "Rayon",
        correctAnswer: "Nylon",
      }),
      shuffleOptions({
        question: "Which fibre is soft, light and warm, making it a good substitute for wool?",
        optionA: "Polyester",
        optionB: "Acrylic",
        optionC: "Nylon",
        correctAnswer: "Acrylic",
      }),
      shuffleOptions({
        question: "Which plastic is used to make non-stick cookware because oil and water do not adhere to it?",
        optionA: "Bakelite",
        optionB: "Teflon",
        optionC: "PVC",
        correctAnswer: "Teflon",
      }),
      shuffleOptions({
        question: "Which synthetic fibre is known for being wrinkle-free and quick to dry?",
        optionA: "Rayon",
        optionB: "Polyester",
        optionC: "Cotton",
        correctAnswer: "Polyester",
      }),
      shuffleOptions({
        question: "Which material is commonly used for electrical wire covering because it does not conduct electricity?",
        optionA: "Metal",
        optionB: "Plastic",
        optionC: "Rubber",
        correctAnswer: "Plastic",
      }),
      shuffleOptions({
        question: "Which fibre has the highest tensile strength among the commonly used ones?",
        optionA: "Rayon",
        optionB: "Nylon",
        optionC: "Cotton",
        correctAnswer: "Nylon",
      }),
      shuffleOptions({
        question: "Which synthetic fibre is used in parachute fabrics and fishing nets because of its strength?",
        optionA: "Acrylic",
        optionB: "Nylon",
        optionC: "Polyester",
        correctAnswer: "Nylon",
      }),
      shuffleOptions({
        question: "Which type of plastic is used for cooker handles and electrical switches as it does not soften on heating?",
        optionA: "Thermoplastic",
        optionB: "Thermosetting plastic",
        optionC: "PVC",
        correctAnswer: "Thermosetting plastic",
      }),
      shuffleOptions({
        question: "Which fibre is used for making PET bottles and food-grade containers?",
        optionA: "Acrylic",
        optionB: "Polyester (PET)",
        optionC: "Rayon",
        correctAnswer: "Polyester (PET)",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Rayon is made from ______ obtained from wood pulp.",
        optionA: "cellulose",
        optionB: "nylon",
        optionC: "polyester",
        correctAnswer: "cellulose",
      }),
      shuffleOptions({
        question: "Polyester is the polymer of ______.",
        optionA: "ester",
        optionB: "glucose",
        optionC: "vinyl",
        correctAnswer: "ester",
      }),
      shuffleOptions({
        question: "Nylon is a polymer known as ______.",
        optionA: "polyamide",
        optionB: "cellulose",
        optionC: "acrylic",
        correctAnswer: "polyamide",
      }),
      shuffleOptions({
        question: "Acrylic fibres are produced from the polymerisation of ______.",
        optionA: "ethanol",
        optionB: "acrylonitrite",
        optionC: "polythene",
        correctAnswer: "acrylonitrite",
      }),
      shuffleOptions({
        question: "Plastics that soften on heating are called ______.",
        optionA: "thermoplastics",
        optionB: "thermosetting plastics",
        optionC: "rigid plastics",
        correctAnswer: "thermoplastics",
      }),
      shuffleOptions({
        question: "Rayon is also known as ______ silk.",
        optionA: "natural",
        optionB: "artificial",
        optionC: "plastic",
        correctAnswer: "artificial",
      }),
      shuffleOptions({
        question: "PET is commonly used to manufacture ______.",
        optionA: "blankets",
        optionB: "bottles and containers",
        optionC: "carpets",
        correctAnswer: "bottles and containers",
      }),
      shuffleOptions({
        question: "Plastics are made from long-chain molecules known as ______.",
        optionA: "fibres",
        optionB: "polymers",
        optionC: "salts",
        correctAnswer: "polymers",
      }),
      shuffleOptions({
        question: "Wallace Carothers discovered nylon in ______.",
        optionA: "1935",
        optionB: "1925",
        optionC: "1940",
        correctAnswer: "1935",
      }),
      shuffleOptions({
        question: "Nylon can be blended with ______ to make strong, durable fabrics.",
        optionA: "wool",
        optionB: "jute",
        optionC: "metal",
        correctAnswer: "wool",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Rayon is not a pure synthetic fibre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Polyester does not shrink and resists wrinkles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Acrylic fibres are used as an alternative to wool.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Thermoplastics can be remoulded on heating.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nylon has low tensile strength.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Plastics do not decompose easily and remain in the environment for years.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Synthetic fibres dry faster than natural fibres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bakelite is a thermosetting plastic.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Polyester is made from cellulose.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Acrylic fibres are attacked easily by insects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
