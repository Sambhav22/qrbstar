export const chapter = "Chapter - 3: The Human Skeleton";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What are bones composed of?",
          optionA: "Iron and zinc",
          optionB: "Calcium, phosphorus, and collagen",
          optionC: "Oxygen and nitrogen",
          correctAnswer: "B) Calcium, phosphorus, and collagen",
        },
        {
          question: "What is the function of compact bone?",
          optionA: "It provides flexibility",
          optionB: "It is the solid, hard outside part of the bone",
          optionC: "It stores bone marrow",
          correctAnswer: "B) It is the solid, hard outside part of the bone",
        },
        {
          question: "How many bones are in the human skeleton?",
          optionA: "300",
          optionB: "206",
          optionC: "100",
          correctAnswer: "B) 206",
        },
        {
          question: "What is the purpose of the spine in the skeletal system?",
          optionA: "To protect the heart",
          optionB: "To hold the body upright",
          optionC: "To enclose the brain",
          correctAnswer: "B) To hold the body upright",
        },
        {
          question: "What does the ribcage protect?",
          optionA: "Kidneys",
          optionB: "Heart and lungs",
          optionC: "Liver",
          correctAnswer: "B) Heart and lungs",
        },
        {
          question: "What are forelimbs in the human body?",
          optionA: "Legs",
          optionB: "Arms",
          optionC: "Ribs",
          correctAnswer: "B) Arms",
        },
        {
          question:
            "Which joint allows movement in all directions, such as in the shoulders and hips?",
          optionA: "Hinge joint",
          optionB: "Ball and socket joint",
          optionC: "Pivot joint",
          correctAnswer: "B) Ball and socket joint",
        },
        {
          question: "What connects muscles to bones?",
          optionA: "Ligaments",
          optionB: "Tendons",
          optionC: "Cartilage",
          correctAnswer: "B) Tendons",
        },
        {
          question: "How do muscles work?",
          optionA: "By pushing bones",
          optionB: "By pulling bones",
          optionC: "By expanding bones",
          correctAnswer: "B) By pulling a bone",
        },
        {
          question: "What type of muscles are the muscles of the heart?",
          optionA: "Voluntary muscles",
          optionB: "Involuntary muscles",
          optionC: "Smooth muscles",
          correctAnswer: "B) Involuntary muscles",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            "Bones are composed of __________, __________, and a fibrous substance known as collagen.",
          options: {
            A: "Iron and zinc",
            B: "Calcium, phosphorus",
            C: "Oxygen, nitrogen",
          },
          correctAnswer: "B",
        },
        {
          question:
            "The solid, hard outside part of the bone is called __________ bone.",
          options: {
            A: "Compact",
            B: "Cancellous",
            C: "Hollow",
          },
          correctAnswer: "A",
        },
        {
          question:
            "The human skeleton consists of __________ bones as many bones fuse together as we grow up.",
          options: {
            A: "150",
            B: "206",
            C: "300",
          },
          correctAnswer: "B",
        },
        {
          question: "The spine or backbone is attached to the __________.",
          options: {
            A: "Ribs",
            B: "Skull",
            C: "Hip girdle",
          },
          correctAnswer: "B",
        },
        {
          question: "The ribcage protects our __________ and __________.",
          options: {
            A: "Kidneys, liver",
            B: "Heart, lungs",
            C: "Stomach, spleen",
          },
          correctAnswer: "B",
        },
        {
          question:
            "Our body has two pairs of limbs - forelimbs and hindlimbs. Forelimbs are also known as __________.",
          options: {
            A: "Legs",
            B: "Arms",
            C: "Ribs",
          },
          correctAnswer: "B",
        },
        {
          question:
            "A ball and socket joint allows movement in __________ directions, and it is found in __________ and __________.",
          options: {
            A: "Forward, elbows",
            B: "All, shoulders, hips",
            C: "Sideways, knees",
          },
          correctAnswer: "B",
        },
        {
          question:
            "Joints are the places where two or more bones fit together and are held together by strong bands of fibre-like structures called __________.",
          options: {
            A: "Tendons",
            B: "Ligaments",
            C: "Cartilage",
          },
          correctAnswer: "B",
        },
        {
          question:
            "Muscles are connected to the bones by strong fibres called __________.",
          options: {
            A: "Nerves",
            B: "Tendons",
            C: "Ligaments",
          },
          correctAnswer: "B",
        },
        {
          question:
            "Voluntary muscles have voluntary movement and are found between the skin and the bones, such as in the __________.",
          options: {
            A: "Heart",
            B: "Legs",
            C: "Neck",
          },
          correctAnswer: "C",
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
            "Bones are composed of iron, zinc, and a fibrous substance known as collagen.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
        {
          question:
            "The solid, hard outside part of the bone is called cancellous bone.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
        {
          question:
            "The human skeleton consists of 206 bones as many bones fuse together as we grow up.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A",
        },
        {
          question: "The spine or backbone is attached to the ribs.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
        {
          question: "The ribcage protects our kidneys and liver.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
        {
          question:
            "Our body has two pairs of limbs - forelimbs and hindlimbs. Forelimbs are also known as ribs.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
        {
          question:
            "A ball and socket joint allows movement only in back and forth direction.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
        {
          question:
            "Joints are the places where two or more bones fit together and are held together by tendons.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
        {
          question:
            "Muscles are connected to the bones by strong fibres called nerves.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
        {
          question:
            "Voluntary muscles have involuntary movement and are found between the skin and the bones, such as in the heart.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
      ],
    ],
  };
}

export var activityData;
