export const chapter = "Chapter - 21: Little Abdul Learns ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What fascinated Little Abdul about birds?",
          optionA: "How they sing",
          optionB: "How they glide in the air",
          optionC: "How they build nests",
          correctAnswer: "How they glide in the air",
        },
        {
          question:
            "How did Little Abdul's teacher react when he asked, 'How do birds fly?'",
          optionA: "The teacher scolded him.",
          optionB: "The teacher praised him and explained the concept.",
          optionC: "The teacher ignored him.",
          correctAnswer: "The teacher praised him and explained the concept.",
        },
        {
          question: "Why did the teacher take the students to the seashore?",
          optionA: "To collect seashells",
          optionB: "To watch flying birds and understand avian flight better",
          optionC: "To have a picnic",
          correctAnswer:
            "To watch flying birds and understand avian flight better",
        },
        {
          question:
            "What did Little Abdul ask about the birds' behavior at the seashore?",
          optionA: "Why they fly",
          optionB: "Why they fold their legs back",
          optionC: "Why they swim",
          correctAnswer: "Why they fold their legs back",
        },
        {
          question: "What was Little Abdul's father's occupation?",
          optionA: "Teacher",
          optionB: "Farmer",
          optionC: "Ferryman",
          correctAnswer: "Ferryman",
        },
        {
          question:
            "What did Little Abdul's father need to build after the boat was destroyed?",
          optionA: "A house",
          optionB: "A car",
          optionC: "A new boat",
          correctAnswer: "A new boat",
        },
        {
          question:
            "How did Little Abdul's cousin, Jallaluddin, respond when he didn't know the answer to a question?",
          optionA: "He tried to evade the question.",
          optionB:
            "He admitted he didn't know and said he would find the answer.",
          optionC: "He made up an answer.",
          correctAnswer:
            "He admitted he didn't know and said he would find the answer.",
        },
        {
          question: "Why did white ants not eat teak wood?",
          optionA: "It tastes good to them.",
          optionB: "It is strong and dense.",
          optionC: "It is too hard for them to chew.",
          correctAnswer: "It is strong and dense.",
        },
        {
          question:
            "How did Little Abdul find out why white ants do not eat teak wood?",
          optionA: "He asked his cousin, Jallaluddin.",
          optionB: "He conducted an experiment.",
          optionC: "He asked his science teacher.",
          correctAnswer: "He asked his science teacher.",
        },
        {
          question:
            "What lesson did the teacher draw from the taste of teak wood for Little Abdul?",
          optionA: "To eat more wood",
          optionB: "To inculcate qualities that his enemies would not like",
          optionC: "To avoid teak wood",
          correctAnswer:
            "To inculcate qualities that his enemies would not like",
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
          question: "A.P.J. Abdul Kalam had a keen sense of ________.",
          options: ["adventure", "observation", "curiosity"],
          correctAnswer: "observation",
        },
        {
          question:
            "Little Abdul was fascinated by the way birds soared and glided in the air above the open ________.",
          options: ["desert", "sea", "forest"],
          correctAnswer: "sea",
        },
        {
          question:
            "Little Abdul asked his science teacher, Subramania ________ question about how birds fly.",
          options: ["a confusing", "a silly", "a sincere"],
          correctAnswer: "a sincere",
        },
        {
          question:
            "Little Abdul and his classmates found it hard to grasp the concept of ________ flight.",
          options: ["avian", "terrestrial", "aquatic"],
          correctAnswer: "avian",
        },
        {
          question:
            "Little Abdul's father was a ________ who ferried passengers from Rameshwaram to Dhanushkodi.",
          options: ["doctor", "farmer", "ferryman"],
          correctAnswer: "ferryman",
        },
        {
          question:
            "When the boat was destroyed in a storm, Little Abdul's father decided to build a new boat by himself from available ________.",
          options: ["stones", "wood", "metal"],
          correctAnswer: "wood",
        },
        {
          question:
            "Little Abdul's cousin, Jallaluddin, was always ready to answer his ________.",
          options: ["phone calls", "queries", "messages"],
          correctAnswer: "queries",
        },
        {
          question:
            "Jallaluddin explained that white ants did not eat teak wood because it is strong, dense, and has a ________ taste.",
          options: ["sweet", "bitter", "salty"],
          correctAnswer: "bitter",
        },
        {
          question:
            "When Little Abdul asked his science teacher why white ants did not eat teak wood, the teacher suggested that Abdul ________ the wood.",
          options: ["carve", "paint", "taste"],
          correctAnswer: "taste",
        },
        {
          question:
            "The teacher told Little Abdul that he should inculcate qualities in himself that his enemies would not find ________.",
          options: ["delicious", "friendly", "palatable"],
          correctAnswer: "palatable",
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
          question: "A.P.J. Abdul Kalam was a famous scientist.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Little Abdul had a passion for studying fish.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Little Abdul's science teacher, Subramania, explained avian flight using a diagram on the blackboard.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Little Abdul's father was a doctor.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Little Abdul's father decided to build a new boat after the old one was destroyed in a storm.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Jallaluddin, Little Abdul's cousin, always had the answers to all of Abdul's questions.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "White ants don't eat teak wood because it tastes sweet to them.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Little Abdul conducted an experiment to find out why white ants don't eat teak wood.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Major Somnath Sharma and his soldiers fought bravely despite facing more than 700 attackers.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Major Somnath Sharma was killed when a bomb fell near him during the battle.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
