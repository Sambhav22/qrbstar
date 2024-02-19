export const chapter = "Chapter - 4: Nervous System  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What is the main function of the nervous system?",
            options: [
              "Pumping blood",
              "Controlling and coordinating body actions",
              "Digesting food",
            ],
            answer: "Controlling and coordinating body actions",
          },
          {
            question:
              "Which part of the brain is responsible for learning, thinking, memory, and logic?",
            options: ["Cerebellum", "Medulla", "Cerebrum"],
            answer: "Cerebrum",
          },
          {
            question: "What is the function of the cerebellum?",
            options: [
              "Controls involuntary actions",
              "Maintains balance and body posture",
              "Coordinates sensory information",
            ],
            answer: "Maintains balance and body posture",
          },
          {
            question: "Where is the medulla located, and what is its role?",
            options: [
              "Below the cerebellum; controls voluntary movements",
              "Behind the cerebrum; responsible for memory",
              "Below the cerebellum; controls involuntary actions like breathing and heart rate",
            ],
            answer:
              "Below the cerebellum; controls involuntary actions like breathing, beating of heart, digestion, blood pressure etc.",
          },
          {
            question: "What is the spinal cord's role in the nervous system?",
            options: [
              "Controls thinking and memory",
              "Transmits messages between the brain and the rest of the body",
              "Coordinates balance and body posture",
            ],
            answer:
              "Transmits messages between the brain and the rest of the body",
          },
          {
            question:
              "Which type of nerves carry messages from the sense organs to the spinal cord and the brain?",
            options: ["Motor nerves", "Sensory nerves", "Mixed nerves"],
            answer: "Sensory nerves",
          },
          {
            question:
              "What are reflex actions, and where do they primarily involve?",
            options: [
              "Voluntary actions involving the brain",
              "Automatic actions involving only the nerves and spinal cord",
              "Involuntary actions controlled by the cerebellum",
            ],
            answer:
              "Automatic actions involving only the nerves and spinal cord",
          },
          {
            question: "How do the eyes transmit information to the brain?",
            options: [
              "Through taste buds",
              "Via optic nerves",
              "Through motor nerves",
            ],
            answer: "Via optic nerves",
          },
          {
            question: "What is the function of the eardrum in the ear?",
            options: [
              "Collects sound waves and turns them into vibrations",
              "Protects the ear canal",
              "Connects the outer ear to the inner ear",
            ],
            answer: "Collects sound waves and turns them into vibrations",
          },
          {
            question:
              "How does the brain enable us to taste different flavors?",
            options: [
              "Through optic nerves",
              "Via motor nerves",
              "Through taste buds and taste cells",
            ],
            answer: "Through taste buds and taste cells",
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
        questions: [
          {
            question:
              "The nervous system comprises the brain, spinal cord, and __________.",
            options: ["Lungs", "Kidneys", "Nerves"],
            correctAnswer: "Nerves",
          },
          {
            question:
              "The __________ is responsible for controlling and coordinating all actions, receiving information from all parts of the body.",
            options: ["Cerebellum", "Medulla", "Brain"],
            correctAnswer: "Brain",
          },
          {
            question:
              "The cerebrum, the outermost part of the brain, is the center of __________.",
            options: ["Digestion", "Intelligence", "Blood circulation"],
            correctAnswer: "Intelligence",
          },
          {
            question:
              "The cerebellum, located behind the cerebrum, controls __________ movements of our body.",
            options: ["Involuntary", "Voluntary", "Respiratory"],
            correctAnswer: "Voluntary",
          },
          {
            question:
              "The medulla, a bulb-shaped structure below the cerebellum, connects the brain to the __________.",
            options: ["Liver", "Spinal cord", "Kidneys"],
            correctAnswer: "Spinal cord",
          },
          {
            question:
              "The spinal cord is a thick bundle of nerves that extends from the medulla to almost the end of the __________.",
            options: ["Ribcage", "Vertebral column", "Pelvis"],
            correctAnswer: "Vertebral column",
          },
          {
            question:
              "Nerves are bundles of fibers made up of special cells called __________.",
            options: ["Blood cells", "Neurons", "Epithelial cells"],
            correctAnswer: "Neurons",
          },
          {
            question:
              "Sensory nerves carry messages from the sense organs to the __________ and the brain.",
            options: ["Heart", "Spinal cord", "Lungs"],
            correctAnswer: "Spinal cord",
          },
          {
            question: "Reflex actions involve only the nerves and __________.",
            options: ["Muscles", "Skin", "Spinal cord"],
            correctAnswer: "Spinal cord",
          },
          {
            question:
              "The surface of the tongue includes bumps called __________, which detect different tastes.",
            options: ["Papillae", "Follicles", "Alveoli"],
            correctAnswer: "Papillae",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        questions: [
          {
            question: "The cerebrum is the smallest part of the brain.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The medulla controls involuntary actions such as breathing and digestion.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Sensory nerves carry messages from the brain to other parts of the body.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The spinal cord is protected by the bony vertebral column.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Reflex actions involve conscious decision-making by the brain.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question: "Ears help us to see different things around us.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "The sense organs include the eyes, ears, nose, skin, and tongue.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "The cornea is the transparent front part of the eye.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "The outer ear is also known as the pinna.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Skin is made up of only two layers: epidermis and dermis.",
            options: ["True", "False"],
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
