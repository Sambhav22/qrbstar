export const chapter = "Chapter - 6: Reproduction in Animals ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is reproduction?",
          optionA: "The process of breathing",
          optionB: "The process of eating",
          optionC:
            "The process by which an organism produces more of its own kind",
          correctAnswer: "C",
        },
        {
          question:
            "What are the two modes of reproduction in plants and animals?",
          optionA: "Eating and breathing",
          optionB: "Asexual and sexual",
          optionC: "Binary Fission and Budding",
          correctAnswer: "B",
        },
        {
          question: "In which organism does binary fission occur?",
          optionA: "Frog",
          optionB: "Amoeba",
          optionC: "Fish",
          correctAnswer: "B",
        },
        {
          question:
            "What is the term for the process of creating an exact copy of a biological entity?",
          optionA: "Fusion",
          optionB: "Fertilization",
          optionC: "Cloning",
          correctAnswer: "C",
        },
        {
          question: "Which reproductive system produces male gametes?",
          optionA: "Female reproductive system",
          optionB: "Male reproductive system",
          optionC: "Both male and female reproductive systems",
          correctAnswer: "B",
        },
        {
          question:
            "What is the process of fusion of a sperm and an ovum called?",
          optionA: "Fission",
          optionB: "Cloning",
          optionC: "Fertilisation",
          correctAnswer: "C",
        },
        {
          question: "Where does internal fertilisation take place?",
          optionA: "Inside the egg",
          optionB: "Outside the female body",
          optionC: "Inside the female body",
          correctAnswer: "C",
        },
        {
          question:
            "What is the term for animals that give birth to young ones?",
          optionA: "Oviparous",
          optionB: "Viviparous",
          optionC: "Metamorphosis",
          correctAnswer: "B",
        },
        {
          question: "How is in vitro fertilisation (IVF) carried out?",
          optionA: "Inside the female body",
          optionB: "In a glass test tube or a petri dish",
          optionC: "In the natural environment",
          correctAnswer: "B",
        },
        {
          question:
            "What is the term for the attachment of the embryo to the uterus wall?",
          optionA: "Implantation",
          optionB: "Incubation",
          optionC: "Fertilisation",
          correctAnswer: "A",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      [
        {
          question:
            "______ reproduction, only one parent is involved, as seen in organisms like hydra, amoeba, bacteria, and fungi.",
          optionA: "Sexual",
          optionB: "Asexual",
          optionC: "External",
          correctAnswer: "B",
        },
        {
          question:
            "The mode of asexual reproduction involving the splitting of an organism into two is known as __________.",
          optionA: "Fertilization",
          optionB: "Binary Fission",
          optionC: "Budding",
          correctAnswer: "B",
        },
        {
          question:
            "In budding, an adult hydra develops a swelling on the side of its body that grows into a __________.",
          optionA: "Clone",
          optionB: "Nucleus",
          optionC: "Daughter bud",
          correctAnswer: "C",
        },
        {
          question:
            "Cloning is the process of creating an exact copy of a biological entity and was exemplified by the first cloned mammal named __________.",
          optionA: "Dolly",
          optionB: "Fido",
          optionC: "Buddy",
          correctAnswer: "A",
        },
        {
          question:
            "Male reproductive organs called __________ produce male gametes known as sperms.",
          optionA: "Ovaries",
          optionB: "Testes",
          optionC: "Uterus",
          correctAnswer: "B",
        },
        {
          question: "The fusion of a sperm and an ovum is termed __________.",
          optionA: "Fission",
          optionB: "Fertilization",
          optionC: "Budding",
          correctAnswer: "B",
        },
        {
          question:
            "Internal fertilization occurs inside the __________ in animals like humans, cows, and dogs.",
          optionA: "Egg",
          optionB: "Male body",
          optionC: "Female body",
          correctAnswer: "C",
        },
        {
          question:
            "In certain cases where normal internal fertilization is not possible, in vitro fertilization (IVF) is carried out __________.",
          optionA: "In the natural environment",
          optionB: "Inside the female body",
          optionC: "In a glass test tube or a petri dish",
          correctAnswer: "C",
        },
        {
          question:
            "The attachment of the embryo to the uterus wall is known as __________.",
          optionA: "Implantation",
          optionB: "Incubation",
          optionC: "Fertilization",
          correctAnswer: "A",
        },
        {
          question:
            "Oviparous animals lay eggs, and the hard shell in a hen's egg is one such protective layer formed around the developing __________.",
          optionA: "Embryo",
          optionB: "Larva",
          optionC: "Fetus",
          correctAnswer: "A",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "Reproduction involves the process of creating more organisms of the same kind.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Asexual reproduction involves the participation of two parents.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Binary fission is a mode of reproduction where an organism splits into two identical offspring.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Cloning is the process of creating a biological entity that is not genetically identical to the original.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The male reproductive system produces female gametes called eggs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In sexual reproduction, both male and female of a species are involved.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Internal fertilization occurs outside the female body.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In vitro fertilization (IVF) is a process carried out inside the female body.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Oviparous animals give birth to live young ones.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Metamorphosis is a process in which young ones transform into adults without significant changes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
