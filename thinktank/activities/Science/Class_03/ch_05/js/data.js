export const chapter = "Chapter - 5: The Human Body";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "Which organ system gives shape and support to the body, protecting inner organs like the brain and heart?",
          optionA: "Respiratory System",
          optionB: "Muscular System",
          optionC: "Skeletal System",
          correctAnswer: "Skeletal System",
        },
        {
          question: "What is the primary function of the Muscular System?",
          optionA: "Aids in breathing",
          optionB: "Helps the body move",
          optionC: "Digests food",
          correctAnswer: "Helps the body move",
        },
        {
          question: "The Respiratory System consists of which organs?",
          optionA: "Nose, windpipe, and lungs",
          optionB: "Heart, blood, and blood vessels",
          optionC: "Brain, spinal cord, and nerves",
          correctAnswer: "Nose, windpipe, and lungs",
        },
        {
          question:
            "Which system aids in the digestion of food, involving organs such as the mouth, stomach, and intestines?",
          optionA: "Nervous System",
          optionB: "Digestive System",
          optionC: "Circulatory System",
          correctAnswer: "Digestive System",
        },
        {
          question:
            "What does the Circulatory System circulate to all organs of the body through blood vessels?",
          optionA: "Oxygen and digested food",
          optionB: "Carbon dioxide and waste",
          optionC: "Saliva and digestive juices",
          correctAnswer: "Oxygen and digested food",
        },
        {
          question:
            "Which system allows us to think, feel, dream, and respond to various situations?",
          optionA: "Excretory System",
          optionB: "Reproductive System",
          optionC: "Nervous System",
          correctAnswer: "Nervous System",
        },
        {
          question: "What is the primary function of the Excretory System?",
          optionA: "Aids in reproduction",
          optionB: "Releases waste from the body in the form of urine",
          optionC: "Helps in digestion",
          correctAnswer: "Releases waste from the body in the form of urine",
        },
        {
          question:
            "Which system consists of organs that work together to produce babies?",
          optionA: "Circulatory System",
          optionB: "Skeletal System",
          optionC: "Reproductive System",
          correctAnswer: "Reproductive System",
        },
        {
          question:
            "What does the Digestive System do with the digested food in the small intestine?",
          optionA: "Sends it to the kidneys",
          optionB: "Carries it to the other parts of the body through blood",
          optionC: "Excretes it through the anus",
          correctAnswer:
            "Carries it to the other parts of the body through blood",
        },
        {
          question: "What is the primary function of the Circulatory System?",
          optionA: "Control body functions",
          optionB: "Produce babies",
          optionC:
            "Circulate blood to all organs of the body through blood vessels",
          correctAnswer:
            "Circulate blood to all organs of the body through blood vessels",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question: "The fleshy part under our skin is made up of ___________.",
          optionA: "Bones",
          optionB: "Muscles",
          optionC: "Nerves",
          correctAnswer: "Muscles",
        },
        {
          question: "The ____________ consists of nose, windpipe, and lungs.",
          optionA: "Digestive System",
          optionB: "Respiratory System",
          optionC: "Circulatory System",
          correctAnswer: "Respiratory System",
        },
        {
          question:
            "The Digestive System helps in the digestion of food. The organs involved in it are - mouth, food pipe, stomach, large intestine, small intestine, and ___________.",
          optionA: "Liver",
          optionB: "Pancreas",
          optionC: "Anus",
          correctAnswer: "Anus",
        },
        {
          question:
            "The Circulatory System consists of heart, blood, and blood vessels. The blood supplies oxygen and digested food to all parts of the body through ___________.",
          optionA: "Arteries",
          optionB: "Nerves",
          optionC: "Muscles",
          correctAnswer: "Arteries",
        },
        {
          question:
            "The Nervous System consists of brain, spinal cord, and ___________.",
          optionA: "Muscles",
          optionB: "Bones",
          optionC: "Nerves",
          correctAnswer: "Nerves",
        },
        {
          question:
            "The work of the Excretory System is to release waste from the body in the form of ___________.",
          optionA: "Sweat",
          optionB: "Urine",
          optionC: "Tears",
          correctAnswer: "Urine",
        },
        {
          question:
            "Reproductive System consists of organs that work together to produce ___________.",
          optionA: "Energy",
          optionB: "Babies",
          optionC: "Blood",
          correctAnswer: "Babies",
        },
        {
          question:
            "The Skeletal System gives shape and support to the whole body. It also protects the inner organs, for instance, our brain stays safe inside the skull and our heart and lungs stay safe inside our ___________.",
          optionA: "Ribs",
          optionB: "Spine",
          optionC: "Ribcage",
          correctAnswer: "Ribcage",
        },
        {
          question:
            "The fleshy part under our skin is made up of muscles. All the muscles together form the ___________.",
          optionA: "Digestive System",
          optionB: "Respiratory System",
          optionC: "Muscular System",
          correctAnswer: "Muscular System",
        },
        {
          question:
            "The Respiratory System consists of nose, windpipe, and ___________.",
          optionA: "Stomach",
          optionB: "Lungs",
          optionC: "Heart",
          correctAnswer: "Lungs",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question:
            "The Skeletal System gives shape and support to the whole body.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Nervous System consists of brain, spinal cord, and muscles.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Respiratory System consists of nose, windpipe, and lungs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The Digestive System helps in the digestion of food.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Circulatory System circulates blood to all organs of the body through blood vessels.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Excretory System releases waste from the body in the form of sweat.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Reproductive System consists of organs that work together to produce energy.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Muscular System is responsible for the body's movement.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Respiratory System takes in oxygen from the air and gives out carbon dioxide.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Nervous System allows us to think, feel, dream, and respond to various situations.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
