export const chapter = "Chapter - 4: Understanding Birds  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What are the three main parts of a bird's body?",
            options: [
              "Head, Wings, Tail",
              "Head, Trunk, Tail",
              "Head, Legs, Beak",
            ],
            answer: "Head, Trunk, Tail",
          },
          {
            question:
              "Which feathers are located close to the bird's skin and help to keep its body warm?",
            options: ["Body Feathers", "Down Feathers", "Flight Feathers"],
            answer: "Down Feathers",
          },
          {
            question:
              "What type of movement is described as the downward and forward movement of a bird's wings?",
            options: ["Upstroke", "Downstroke", "Sidestroke"],
            answer: "Downstroke",
          },
          {
            question:
              "What characteristic of a bird's body enables it to fly easily?",
            options: [
              "Heavy Bones",
              "Streamlined (boat-shaped) Body",
              "Short Wingspan",
            ],
            answer: "Streamlined (boat-shaped) Body",
          },
          {
            question:
              "Which birds have strong, sharp, and hooked beaks to tear flesh of their prey?",
            options: ["Sparrows", "Woodpeckers", "Eagles"],
            answer: "Eagles",
          },
          {
            question: "What do birds use their beaks for?",
            options: [
              "To chew food",
              "To scratch the ground",
              "To catch, hold, and eat food, among other activities",
            ],
            answer: "To catch, hold, and eat food, among other activities",
          },
          {
            question: "How do perching birds like sparrows and crows sleep?",
            options: [
              "Hanging from branches",
              "Standing on one leg",
              "While perching",
            ],
            answer: "While perching",
          },
          {
            question:
              "What kind of feet do swimming birds like ducks and swans have?",
            options: ["Clawed feet", "Webbed feet", "Flat feet"],
            answer: "Webbed feet",
          },
          {
            question: "What is the main purpose of birds building nests?",
            options: [
              "To store food",
              "To attract mates",
              "To lay eggs and raise their young ones",
            ],
            answer: "To lay eggs and raise their young ones",
          },
          {
            question: "How do weaver birds build their nests?",
            options: [
              "By sewing leaves together",
              "By using twigs and straws",
              "By using cotton and wool",
            ],
            answer: "By weaving together leaves, grass, and twigs",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question:
            "The body of a bird is divided into three parts - _____, _____, and _____.",
          options: [
            "Legs, Beak, Wings",
            "Head, Trunk, Tail",
            "Feathers, Wings, Tail",
          ],
          correctAnswer: "Head, Trunk, Tail",
        },
        {
          question: "Birds have two pairs of limbs - _____ and _____.",
          options: ["Legs, Beak", "Wings, Feathers", "Legs, Wings"],
          correctAnswer: "Legs, Wings",
        },
        {
          question:
            "_____ feathers are short and soft, located close to the bird's skin, helping to keep their body warm.",
          options: ["Down", "Body", "Flight"],
          correctAnswer: "Down",
        },
        {
          question:
            "Flight feathers are mostly present on the wings and tail, aiding the bird to _____ and _____.",
          options: ["Sing, Dance", "Fly, Change directions", "Walk, Run"],
          correctAnswer: "Fly, Change directions",
        },
        {
          question:
            "Birds use their wings for two types of movements - _____ and _____.",
          options: [
            "Left, Right",
            "Upstroke, Downhill",
            "Upstroke, Downstroke",
          ],
          correctAnswer: "Upstroke, Downstroke",
        },
        {
          question:
            "The shape and feathers of a bird's body enable them to _____.",
          options: ["Swim", "Fly", "Dig"],
          correctAnswer: "Fly",
        },
        {
          question:
            "Birds like eagles, vultures, and kites fly at _____ heights.",
          options: ["Shorter", "Greater", "Equal"],
          correctAnswer: "Greater",
        },
        {
          question:
            "Birds do not have _____; instead, they have beaks for various purposes.",
          options: ["Teeth", "Claws", "Horns"],
          correctAnswer: "Teeth",
        },
        {
          question:
            "Birds like woodpeckers make holes in hard tree trunks with their _____ beaks.",
          options: [
            "Broad and Flat",
            "Strong and Pointed",
            "Strong, Sharp, and Hooked",
          ],
          correctAnswer: "Strong and Pointed",
        },
        {
          question:
            "Birds like ducks and swans have _____ feet with the front toes joined by skin forming a web.",
          options: ["Clawed", "Flat", "Webbed"],
          correctAnswer: "Webbed",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Birds have three main body parts - head, trunk, and tail.",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question: "All birds have feathers that cover their entire body.",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
            "Flight feathers are mainly present on the wings and the tail of a bird.",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
            "Birds use their beaks for chewing food and grinding it down.",
          options: ["True", "False"],
          answer: "False",
        },
        {
          question:
            "The shape and feathers of a bird's body enable them to swim easily.",
          options: ["True", "False"],
          answer: "False",
        },
        {
          question:
            "The Great Indian Desert is primarily located in the state of Maharashtra.",
          options: ["True", "False"],
          answer: "False",
        },
        {
          question:
            "Woodpeckers have broad and flat beaks for cracking nuts and seeds.",
          options: ["True", "False"],
          answer: "False",
        },
        {
          question: "Swimming birds like ducks and swans have webbed feet.",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
            "Birds with pointed beaks like hummingbirds suck nectar from flowers.",
          options: ["True", "False"],
          answer: "True",
        },
        {
          question:
            "All birds build nests to lay eggs and raise their young ones.",
          options: ["True", "False"],
          answer: "True",
        },
      ],
  };
}

export var activityData;
