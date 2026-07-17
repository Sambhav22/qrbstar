export const chapter = "Chapter - 9: Reproduction in Animals";
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
        question: "Which process enables organisms to produce more individuals of their own kind?",
        optionA: "Digestion",
        optionB: "Respiration",
        optionC: "Reproduction",
        correctAnswer: "Reproduction",
      }),
      shuffleOptions({
        question: "Which organs in humans are responsible for producing gametes?",
        optionA: "Lungs",
        optionB: "Kidneys",
        optionC: "Gonads",
        correctAnswer: "Gonads",
      }),
      shuffleOptions({
        question: "Which of the following is the male gamete?",
        optionA: "Ovum",
        optionB: "Sperm",
        optionC: "Zygote",
        correctAnswer: "Sperm",
      }),
      shuffleOptions({
        question: "Which hormone is secreted by the testes?",
        optionA: "Testosterone",
        optionB: "Progesterone",
        optionC: "Oestrogen",
        correctAnswer: "Testosterone",
      }),
      shuffleOptions({
        question: "Which type of fertilisation occurs inside the female body?",
        optionA: "External fertilisation",
        optionB: "Internal fertilisation",
        optionC: "Artificial fertilisation",
        correctAnswer: "Internal fertilisation",
      }),
      shuffleOptions({
        question: "What is formed when the zygote undergoes repeated cell division?",
        optionA: "Foetus",
        optionB: "Embryo",
        optionC: "Clone",
        correctAnswer: "Embryo",
      }),
      shuffleOptions({
        question: "Animals that lay eggs are called:",
        optionA: "Viviparous",
        optionB: "Oviparous",
        optionC: "Mammals",
        correctAnswer: "Oviparous",
      }),
      shuffleOptions({
        question: "Which method of asexual reproduction is found in Amoeba?",
        optionA: "Budding",
        optionB: "Binary fission",
        optionC: "Fragmentation",
        correctAnswer: "Binary fission",
      }),
      shuffleOptions({
        question: "Which reproductive technique is used to help women with blocked oviducts?",
        optionA: "External fertilisation",
        optionB: "Cloning",
        optionC: "In-vitro fertilisation",
        correctAnswer: "In-vitro fertilisation",
      }),
      shuffleOptions({
        question: "Which mammal was the first to be successfully cloned?",
        optionA: "Cow",
        optionB: "Dolly sheep",
        optionC: "Goat",
        correctAnswer: "Dolly sheep",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The fusion of sperm and ovum is known as ______.",
        optionA: "implantation",
        optionB: "fertilisation",
        optionC: "incubation",
        correctAnswer: "fertilisation",
      }),
      shuffleOptions({
        question: "The female gamete is called the ______.",
        optionA: "embryo",
        optionB: "ovum",
        optionC: "clone",
        correctAnswer: "ovum",
      }),
      shuffleOptions({
        question: "After repeated cell division, the zygote develops into an ______.",
        optionA: "egg",
        optionB: "embryo",
        optionC: "adult",
        correctAnswer: "embryo",
      }),
      shuffleOptions({
        question: "Frogs undergo a series of changes known as ______.",
        optionA: "budding",
        optionB: "metamorphosis",
        optionC: "fission",
        correctAnswer: "metamorphosis",
      }),
      shuffleOptions({
        question: "A fully recognisable stage of the unborn baby is known as the ______.",
        optionA: "zygote",
        optionB: "clone",
        optionC: "foetus",
        correctAnswer: "foetus",
      }),
      shuffleOptions({
        question: "Producing an exact genetic copy of an organism is called ______.",
        optionA: "cloning",
        optionB: "fertilisation",
        optionC: "incubation",
        correctAnswer: "cloning",
      }),
      shuffleOptions({
        question: "The warmth provided by the mother hen sitting on eggs is called ______.",
        optionA: "implantation",
        optionB: "incubation",
        optionC: "attachment",
        correctAnswer: "incubation",
      }),
      shuffleOptions({
        question: "In humans, the baby develops inside the mother’s ______.",
        optionA: "ovary",
        optionB: "uterus",
        optionC: "fallopian tube",
        correctAnswer: "uterus",
      }),
      shuffleOptions({
        question: "Animals that give birth to young ones are called ______ animals.",
        optionA: "oviparous",
        optionB: "viviparous",
        optionC: "amphibians",
        correctAnswer: "viviparous",
      }),
      shuffleOptions({
        question: "Hydra reproduces asexually through ______.",
        optionA: "binary fission",
        optionB: "budding",
        optionC: "cloning",
        correctAnswer: "budding",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A zygote is formed after the fusion of the sperm and the ovum.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "External fertilisation takes place inside the female body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The embryo gets implanted in the wall of the uterus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A foetus is the earliest stage of development after fertilisation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Frogs and fish undergo metamorphosis.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In binary fission, one parent cell splits into two identical daughter cells.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Test-tube babies grow and develop in glass tubes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Oviparous animals give birth to young ones.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dolly was the first cloned mammal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In budding, a new organism grows as an outgrowth on the parent’s body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
