export const chapter = "Chapter - 17: My Story";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What was John Clemens' occupation?",
          optionA: "Farmer",
          optionB: "Inventor",
          optionC: "Merchant",
          correctAnswer: "Merchant",
        },
        {
          question: "What was Mrs. Clemens' attitude towards work?",
          optionA: "She avoided work as much as possible.",
          optionB: "She enjoyed working and having a real frolic.",
          optionC: "She left all the work to her husband.",
          correctAnswer: "She enjoyed working and having a real frolic.",
        },
        {
          question:
            "What did John Clemens spend a good deal of time thinking about?",
          optionA: "Inventing new machines",
          optionB: "His large land tract in Tennessee",
          optionC: "Making his children laugh",
          correctAnswer: "His large land tract in Tennessee",
        },
        {
          question:
            "What did the children do during the day when Mrs. Clemens was busy?",
          optionA: "Played board games",
          optionB: "Roamed the countryside and picked nuts and berries",
          optionC: "Helped with housework",
          correctAnswer: "Roamed the countryside and picked nuts and berries",
        },
        {
          question: "Who was a famous storyteller among the children?",
          optionA: "John Clemens",
          optionB: "Jennie",
          optionC: "Uncle Ned",
          correctAnswer: "Uncle Ned",
        },
        {
          question:
            "What nickname was given to Sam Clemens when he was a child?",
          optionA: "Little John",
          optionB: "Little Sam",
          optionC: "Little Ned",
          correctAnswer: "Little Sam",
        },
        {
          question: "Where did Sam Clemens spend his summers as a child?",
          optionA: "In Hannibal",
          optionB: "On the Quarles farm in Florida",
          optionC: "In Tennessee",
          correctAnswer: "On the Quarles farm in Florida",
        },
        {
          question: "What did Sam Clemens excel in at school?",
          optionA: "Mathematics",
          optionB: "Spelling",
          optionC: "History",
          correctAnswer: "Spelling",
        },
        {
          question: "What did Sam Clemens long to be when he was a boy?",
          optionA: "A writer",
          optionB: "A pilot on the Mississippi River",
          optionC: "A teacher",
          correctAnswer: "A pilot on the Mississippi River",
        },
        {
          question: "What pen name did Sam Clemens use for his writings?",
          optionA: "John Clemens",
          optionB: "Mark Twain",
          optionC: "Will Bowen",
          correctAnswer: "Mark Twain",
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
            "John Clemens was a farmer, merchant, and postmaster in the Missouri town of ____________.",
          options: ["Hannibal", "Florida", "Mississippi"],
          correctAnswer: "Florida",
        },
        {
          question:
            "Mrs. Clemens liked to get her work done and then have a real ____________.",
          options: ["vacation", "frolic", "rest"],
          correctAnswer: "frolic",
        },
        {
          question:
            "John Clemens spent a good deal of time thinking about selling a great tract of land in ____________.",
          options: ["Florida", "Tennessee", "Missouri"],
          correctAnswer: "Tennessee",
        },
        {
          question:
            "The children would often listen to stories from Uncle Ned, who was known for describing ____________ and goblins.",
          options: ["witches", "pirates", "fairies"],
          correctAnswer: "witches",
        },
        {
          question:
            "Sam Clemens was often referred to as '____________' by the neighbors.",
          options: ["John", "Mark Twain", "little Sam"],
          correctAnswer: "little Sam",
        },
        {
          question:
            "Sam ran away and hid on board a ____________ until it was well down the river.",
          options: ["train", "ship", "carriage"],
          correctAnswer: "ship",
        },
        {
          question:
            "At the age of nine, Sam was known for being a good ____________.",
          options: ["speller", "writer", "swimmer"],
          correctAnswer: "swimmer",
        },
        {
          question:
            "Sam's two best chums were Will Bowen and John ____________.",
          options: ["Clemens", "Briggs", "Quarles"],
          correctAnswer: "Briggs",
        },
        {
          question:
            "Sam's teachers thought he should train himself for a ____________.",
          options: ["doctor", "writer", "pilot"],
          correctAnswer: "writer",
        },
        {
          question:
            "Sam Clemens signed his writings with the pen name ____________.",
          options: ["John Clemens", "Mark Twain", "Will Bowen"],
          correctAnswer: "Mark Twain",
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
          question: "Is John Clemens known for being a merry man?",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Did Mrs. Clemens enjoy having people around when doing housework?",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Did John Clemens buy seventy-five thousand acres of land in Tennessee for a few cents an acre?",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Did Uncle Ned tell stories that always began with 'Once 'pon a time'?",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Was Sam Clemens often called 'Little John' by the neighbors?",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Did Sam run away and hide on a train at the age of nine?",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Did Sam have fine gray eyes and a fast, energetic voice?",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Were Sam's two best friends, Will Bowen and John Briggs, excellent swimmers?",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Did Sam's teachers believe he should pursue a career as a writer?",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Did Sam Clemens sign his writings with the pen name 'John Clemens'?",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
