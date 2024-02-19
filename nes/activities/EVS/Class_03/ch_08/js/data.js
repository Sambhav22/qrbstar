export const chapter = "Chapter - 8: Birds Flying High";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What do down feathers do for birds?",
          optionA: "Help in flying",
          optionB: "Keep the body warm",
          optionC: "Aid in building nests",
          correctAnswer: "b) Keep the body warm",
        },
        {
          question: "Which type of beak do eagles and vultures have?",
          optionA: "Curved Beaks",
          optionB: "Horny Beaks",
          optionC: "Hooked Beaks",
          correctAnswer: "c) Hooked Beaks",
        },
        {
          question: "What is the purpose of a bird's beak?",
          optionA: "Collecting food",
          optionB: "Building nests",
          optionC: "Flying high",
          correctAnswer: "a) Collecting food",
        },
        {
          question:
            "Which birds have long and pointed beaks for catching fish?",
          optionA: "Parrots",
          optionB: "Cranes and pelicans",
          optionC: "Sparrows and pigeons",
          correctAnswer: "b) Cranes and pelicans",
        },
        {
          question: "What kind of sounds do Nightingale and Cuckoo produce?",
          optionA: "Harsh sounds",
          optionB: "No sounds at all",
          optionC: "Musical sounds",
          correctAnswer: "c) Musical sounds",
        },
        {
          question: "What is the purpose of migration for some birds?",
          optionA: "Building nests",
          optionB: "Finding mates",
          optionC: "Escaping cold weather",
          correctAnswer: "c) Escaping cold weather",
        },
        {
          question: "What do flight feathers help birds do?",
          optionA: "Build nests",
          optionB: "Fly high in the sky",
          optionC: "Collect food",
          correctAnswer: "b) Fly high in the sky",
        },
        {
          question: "Which birds have curved beaks for cracking nuts?",
          optionA: "Eagles and vultures",
          optionB: "Parrots and hornbills",
          optionC: "Sparrows and pigeons",
          correctAnswer: "b) Parrots and hornbills",
        },
        {
          question: "How do birds with horny beaks feed?",
          optionA: "Catching fish",
          optionB: "Cracking nuts",
          optionC: "Picking up food from the ground",
          correctAnswer: "c) Picking up food from the ground",
        },
        {
          question: "What is the purpose of a bird's boat-shaped body?",
          optionA: "Flying high",
          optionB: "Keeping warm",
          optionC: "Building nests",
          correctAnswer: "a) Flying high",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question: "Birds are found almost ____________.",
          options: ["everywhere", "nowhere", "somewhere"],
          correctAnswer: "everywhere",
        },
        {
          question: "Birds have ____________ shaped body.",
          options: ["car", "boat", "plane"],
          correctAnswer: "boat",
        },
        {
          question: "__________ feathers keep the body of birds warm.",
          options: ["Down", "Flight", "Soft"],
          correctAnswer: "Down",
        },
        {
          question: "Birds like parrots and hornbills have ____________ beaks.",
          options: ["curved", "pointed", "hooked"],
          correctAnswer: "curved",
        },
        {
          question:
            "Birds make sounds to call or sing. Nightingale and cuckoo produce ____________ sounds.",
          options: ["harsh", "musical", "silent"],
          correctAnswer: "musical",
        },
        {
          question: "Some birds have very ____________ voice such as crow.",
          options: ["harsh", "melodious", "whispering"],
          correctAnswer: "harsh",
        },
        {
          question:
            "Birds that live in cold regions migrate to some ____________ places.",
          options: ["warmer", "colder", "cooler"],
          correctAnswer: "warmer",
        },
        {
          question: "Birds with ____________ beaks are good at catching fish.",
          options: ["curved", "pointed", "hooked"],
          correctAnswer: "pointed",
        },
        {
          question:
            "Horny beaks are found in birds like ____________ and pigeons.",
          options: ["sparrows", "peacocks", "eagles"],
          correctAnswer: "sparrows",
        },
        {
          question:
            "Some birds have ____________ beaks to pick up food lying on the ground.",
          options: ["curved", "horny", "hooked"],
          correctAnswer: "horny",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Birds have boat-shaped bodies.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "All birds can fly.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Night birds are generally quiet and do not make sounds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Birds with curved beaks are good at cracking nuts.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Migratory birds move to colder places during winters.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "All birds build nests for their eggs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Parrots can imitate human voices.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Horny beaks are found in birds like eagles and vultures.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Birds with pointed beaks are good at catching fish.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "All birds migrate to warmer places during winter.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
   };
}

export var activityData;
