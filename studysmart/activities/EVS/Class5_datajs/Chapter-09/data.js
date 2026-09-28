export const chapter = "Chapter - 9: Making Clothes";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What is the basic unit used to make fabric?",
        "optionA": "Cloth",
        "optionB": "Thread",
        "optionC": "Needle",
        "correctAnswer": "Thread"
      },
      {
        "question": "Which fibre is known for being smooth and shiny?",
        "optionA": "Wool",
        "optionB": "Silk",
        "optionC": "Cotton",
        "correctAnswer": "Silk"
      },
      {
        "question": "Which tool is used for stitching clothes?",
        "optionA": "Needle",
        "optionB": "Loom",
        "optionC": "Charkha",
        "correctAnswer": "Needle"
      },
      {
        "question": "Linen is made from which plant?",
        "optionA": "Cotton",
        "optionB": "Flax",
        "optionC": "Bamboo",
        "correctAnswer": "Flax"
      },
      {
        "question": "Which fibre is durable and wrinkle-resistant?",
        "optionA": "Cotton",
        "optionB": "Silk",
        "optionC": "Polyester",
        "correctAnswer": "Polyester"
      },
      {
        "question": "What process helps create patterns in fabric?",
        "optionA": "Washing",
        "optionB": "Weaving",
        "optionC": "Drying",
        "correctAnswer": "Weaving"
      },
      {
        "question": "Which fibre is used to keep us warm in winter?",
        "optionA": "Cotton",
        "optionB": "Linen",
        "optionC": "Wool",
        "correctAnswer": "Wool"
      },
      {
        "question": "Which process joins fibres to make yarn?",
        "optionA": "Spinning",
        "optionB": "Stitching",
        "optionC": "Cutting",
        "correctAnswer": "Spinning"
      },
      {
        "question": "Which fibre is eco-friendly according to the chapter?",
        "optionA": "Nylon",
        "optionB": "Bamboo",
        "optionC": "Polyester",
        "correctAnswer": "Bamboo"
      },
      {
        "question": "Why are exhibitions organised in schools?",
        "optionA": "To display creative work",
        "optionB": "To sell clothes",
        "optionC": "To wash fabrics",
        "correctAnswer": "To display creative work"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The ______ is used to spin fibres into thread.",
        "optionA": "Needle",
        "optionB": "Charkha",
        "optionC": "Loom",
        "correctAnswer": "Charkha"
      },
      {
        "question": "Cotton is a ______ fibre.",
        "optionA": "Synthetic",
        "optionB": "Artificial",
        "optionC": "Natural",
        "correctAnswer": "Natural"
      },
      {
        "question": "Nylon is made from ______.",
        "optionA": "Plants",
        "optionB": "Animals",
        "optionC": "Petroleum",
        "correctAnswer": "Petroleum"
      },
      {
        "question": "Embroidery uses ______ threads to decorate clothes.",
        "optionA": "Colourful",
        "optionB": "Rough",
        "optionC": "Plain",
        "correctAnswer": "Colourful"
      },
      {
        "question": "Wool comes from ______.",
        "optionA": "Sheep",
        "optionB": "Plants",
        "optionC": "Worms",
        "correctAnswer": "Sheep"
      },
      {
        "question": "Fabric is made by ______ threads together.",
        "optionA": "Cutting",
        "optionB": "Joining",
        "optionC": "Burning",
        "correctAnswer": "Joining"
      },
      {
        "question": "Recycling helps save ______.",
        "optionA": "Water",
        "optionB": "Resources",
        "optionC": "Time",
        "correctAnswer": "Resources"
      },
      {
        "question": "Silk comes from the ______ of a moth.",
        "optionA": "Leaf",
        "optionB": "Root",
        "optionC": "Cocoon",
        "correctAnswer": "Cocoon"
      },
      {
        "question": "A handloom is a ______ machine.",
        "optionA": "Manual",
        "optionB": "Automatic",
        "optionC": "Electric",
        "correctAnswer": "Manual"
      },
      {
        "question": "Polyester is a ______ fibre.",
        "optionA": "Natural",
        "optionB": "Synthetic",
        "optionC": "Plant",
        "correctAnswer": "Synthetic"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Cotton is soft and breathable.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Polyester is a natural fibre.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A charkha is used to spin fibres into thread.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Embroidery makes clothes more beautiful.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Recycling clothes increases waste.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Bamboo can be used to make fabric.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Synthetic fibres are biodegradable.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Tailorbirds stitch leaves to make nests.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Wool is suitable for hot summer weather.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Stitching helps join pieces of cloth.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
