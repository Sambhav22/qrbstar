export const chapter = "Chapter - 7: Body Movement ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What is the primary function of the skeletal system in humans?",
          optionA: "To produce blood cells",
          optionB: "To facilitate movement",
          optionC: "To regulate body temperature",
          correctAnswer: "To facilitate movement",
        },
        {
          question:
            "Which part of the human skeletal system protects the brain and sense organs?",
          optionA: "Ribs",
          optionB: "Backbone",
          optionC: "Skull",
          correctAnswer: "Skull",
        },
        {
          question:
            "What is the primary function of the pelvic girdle in the human body?",
          optionA: "Provides shape and support",
          optionB: "Facilitates movement of shoulders and arms",
          optionC: "Forms a bowl-like structure for sitting",
          correctAnswer: "Forms a bowl-like structure for sitting",
        },
        {
          question:
            "Which type of joint allows movement in almost all directions, such as the shoulders and hips?",
          optionA: "Fixed joint",
          optionB: "Hinge joint",
          optionC: "Ball and socket joint",
          correctAnswer: "Ball and socket joint",
        },
        {
          question:
            "How do doctors typically identify bone injuries, such as fractures?",
          optionA: "By studying X-ray images",
          optionB: "By performing a physical examination",
          optionC: "By analyzing blood samples",
          correctAnswer: "By studying X-ray images",
        },
        {
          question: "What is the function of tendons in the human body?",
          optionA: "Facilitate movement between bones",
          optionB: "Attach muscles to bones",
          optionC: "Connect two bones at a joint",
          correctAnswer: "Attach muscles to bones",
        },
        {
          question:
            "Which type of muscle is under the control of our will and has striped cells?",
          optionA: "Involuntary muscles",
          optionB: "Smooth muscles",
          optionC: "Voluntary muscles",
          correctAnswer: "Voluntary muscles",
        },
        {
          question: "What is the purpose of contour feathers in birds?",
          optionA: "Provide lift and balance",
          optionB: "Trap air for insulation",
          optionC: "Aid in walking and perching",
          correctAnswer: "Trap air for insulation",
        },
        {
          question: "How does a fish primarily achieve movement in water?",
          optionA: "Jumping",
          optionB: "Crawling",
          optionC: "Swinging its tail",
          correctAnswer: "Swinging its tail",
        },
        {
          question: "How does an earthworm move within the soil?",
          optionA: "By flying",
          optionB: "By contracting and expanding muscles",
          optionC: "By crawling with limbs",
          correctAnswer: "By contracting and expanding muscles",
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
            "The Upanishads are considered the latter part of the ________.",
          options: [
            "Vedic literature",
            "Jain scriptures",
            "Buddhist teachings",
          ],
          correctAnswer: "Vedic literature",
        },
        {
          question:
            "Mahavira, the founder of Jainism, wandered from place to place for ________ years in search of true knowledge.",
          options: ["5", "10", "12"],
          correctAnswer: "12",
        },
        {
          question:
            "Gautam Buddha attained enlightenment under a ________ tree at the age of ________.",
          options: ["Banyan, 29", "Peepal, 35", "Oak, 40"],
          correctAnswer: "Peepal, 35",
        },
        {
          question:
            "The Four Noble Truths of Buddhism state that the world has ________, and we can overcome misery and sorrow by getting rid of ________.",
          options: [
            "happiness, desire",
            "sufferings, attachment",
            "peace, ignorance",
          ],
          correctAnswer: "sufferings, attachment",
        },
        {
          question:
            "Jain monks who went door to door in nearby villages and towns begging for food were called ________.",
          options: ["Monsoons", "Bhikshus", "Vedantins"],
          correctAnswer: "Bhikshus",
        },
        {
          question:
            "The primary reason for the destruction of wildlife in the prairies is ________ and ________ for farming.",
          options: [
            "pollution, climate change",
            "game hunting, clearing",
            "natural disasters, habitat loss",
          ],
          correctAnswer: "game hunting, clearing",
        },
        {
          question:
            "Two centuries after Mahavira, the Jains were divided into two groups or sects: ________ and ________.",
          options: [
            "Shvetambaras, Hindus",
            "Digambaras, Vaishnavas",
            "Mahayana, Theravada",
          ],
          correctAnswer: "Digambaras, Vaishnavas",
        },
        {
          question:
            "The word 'sangha' means a ________ or association, and both Buddhist and Jain monks abandoned homes to form sanghas.",
          options: ["monastery", "union", "cave"],
          correctAnswer: "union",
        },
        {
          question:
            "The universities at Taxila, Nalanda, and Vikramshila were places where scholars and students came to study ________.",
          options: ["Hinduism", "Buddhism", "Jainism"],
          correctAnswer: "Buddhism",
        },
        {
          question:
            "The Buddha's teachings are contained in the Four Noble Truths and the Noble Eight-fold ________.",
          options: ["Path", "Doctrine", "Vow"],
          correctAnswer: "Path",
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
          question: "The skull is made up of twenty-two bones.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The rib cage protects delicate and important organs like the heart and the lungs.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Fixed joints allow a wide range of movement of bones.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The pelvic girdle forms a bowl-like structure on which the body rests and is used to sit.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Muscles can only contract and not extend.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Birds have teeth to aid in chewing their food.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Fish achieve movement primarily by swinging their tail.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Snakes move in a straight line by extending their body without forming loops.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The Buddha's teachings are contained in the Four Noble Truths and the Noble Eight-fold Path.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Jain monks who went door to door in nearby villages and towns begging for food were called Monsoons.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
