export const chapter = "Chapter - 10: The World of Things Around Us";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which of these is a living thing?",
        "optionA": "Rock",
        "optionB": "Bird",
        "optionC": "Table",
        "correctAnswer": "Bird"
      },
      {
        "question": "Which material is used to make furniture and doors?",
        "optionA": "Plastic",
        "optionB": "Cotton",
        "optionC": "Wood",
        "correctAnswer": "Wood"
      },
      {
        "question": "Which of these objects is commonly made of glass?",
        "optionA": "Door",
        "optionB": "Pencil",
        "optionC": "Bottle",
        "correctAnswer": "Bottle"
      },
      {
        "question": "Which of these can flow from one place to another?",
        "optionA": "Milk",
        "optionB": "Stone",
        "optionC": "Book",
        "correctAnswer": "Milk"
      },
      {
        "question": "Which state of matter spreads out in the air?",
        "optionA": "Gas",
        "optionB": "Liquid",
        "optionC": "Solid",
        "correctAnswer": "Gas"
      },
      {
        "question": "Which of these is an example of a solid?",
        "optionA": "Water",
        "optionB": "Ice cube",
        "optionC": "Steam",
        "correctAnswer": "Ice cube"
      },
      {
        "question": "Which material is commonly used to make coins?",
        "optionA": "Cotton",
        "optionB": "Wood",
        "optionC": "Metal",
        "correctAnswer": "Metal"
      },
      {
        "question": "Which of these is a natural material found in nature?",
        "optionA": "Nylon",
        "optionB": "Clay",
        "optionC": "Plastic",
        "correctAnswer": "Clay"
      },
      {
        "question": "Which of these materials is man-made?",
        "optionA": "Plastic",
        "optionB": "Wool",
        "optionC": "Cotton",
        "correctAnswer": "Plastic"
      },
      {
        "question": "Which of these materials can be see-through?",
        "optionA": "Glass",
        "optionB": "Wood",
        "optionC": "Stone",
        "correctAnswer": "Glass"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Living things can ______ and grow.",
        "optionA": "melt",
        "optionB": "break",
        "optionC": "breathe",
        "correctAnswer": "breathe"
      },
      {
        "question": "Wood comes from ______.",
        "optionA": "trees",
        "optionB": "rivers",
        "optionC": "sand",
        "correctAnswer": "trees"
      },
      {
        "question": "Metal is ______, strong and hard.",
        "optionA": "dull",
        "optionB": "soft",
        "optionC": "shiny",
        "correctAnswer": "shiny"
      },
      {
        "question": "Glass is used for making ______.",
        "optionA": "leaves",
        "optionB": "windows",
        "optionC": "clouds",
        "correctAnswer": "windows"
      },
      {
        "question": "Transparent materials let all ______ pass through them.",
        "optionA": "soil",
        "optionB": "light",
        "optionC": "sand",
        "correctAnswer": "light"
      },
      {
        "question": "Liquids take the shape of the ______ they are poured into.",
        "optionA": "container",
        "optionB": "tree",
        "optionC": "rock",
        "correctAnswer": "container"
      },
      {
        "question": "______ spread out to fill the space they are in.",
        "optionA": "stones",
        "optionB": "solids",
        "optionC": "gases",
        "correctAnswer": "gases"
      },
      {
        "question": "Cotton is a ______ material that comes from plants.",
        "optionA": "natural",
        "optionB": "artificial",
        "optionC": "plastic",
        "correctAnswer": "natural"
      },
      {
        "question": "Plastic is an ______ material made by people.",
        "optionA": "artificial",
        "optionB": "natural",
        "optionC": "living",
        "correctAnswer": "artificial"
      },
      {
        "question": "Steam is an example of a ______.",
        "optionA": "solid",
        "optionB": "gas",
        "optionC": "liquid",
        "correctAnswer": "gas"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Plants and animals are living things.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Chairs and toys can grow and breathe.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Glass should be handled carefully because it can break easily.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Liquids cannot flow from one place to another.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Air is a gas around us.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Solids have a fixed shape.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Cotton and wool are natural materials.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Plastic and nylon are made by people.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Wood and metal are examples of transparent materials.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Gases spread out to fill the space they are in.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
