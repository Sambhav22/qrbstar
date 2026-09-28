export const chapter = "Chapter - 3: Food Mysteries";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What causes food to spoil and become unsafe to eat?",
        "optionA": "Microbes",
        "optionB": "Sunlight",
        "optionC": "Wind",
        "correctAnswer": "Microbes"
      },
      {
        "question": "Which type of food spoils faster due to high moisture content?",
        "optionA": "Biscuits",
        "optionB": "Cooked rice",
        "optionC": "Nuts",
        "correctAnswer": "Cooked rice"
      },
      {
        "question": "What happens to food when microbes grow on it?",
        "optionA": "It becomes sweeter",
        "optionB": "It becomes harder",
        "optionC": "It changes smell, taste, or look",
        "correctAnswer": "It changes smell, taste, or look"
      },
      {
        "question": "Which method is used to keep food fresh by lowering temperature?",
        "optionA": "Drying",
        "optionB": "Refrigeration",
        "optionC": "Salting",
        "correctAnswer": "Refrigeration"
      },
      {
        "question": "Which microbe helps in making bread soft and fluffy?",
        "optionA": "Bacteria",
        "optionB": "Yeast",
        "optionC": "Mould",
        "correctAnswer": "Yeast"
      },
      {
        "question": "What is the main purpose of drying food?",
        "optionA": "To remove moisture",
        "optionB": "To add flavour",
        "optionC": "To increase weight",
        "correctAnswer": "To remove moisture"
      },
      {
        "question": "Which method uses salt, oil, or vinegar to preserve food?",
        "optionA": "Freezing",
        "optionB": "Canning",
        "optionC": "Pickling",
        "correctAnswer": "Pickling"
      },
      {
        "question": "Why should food be kept in airtight containers?",
        "optionA": "To increase taste",
        "optionB": "To keep away air and germs",
        "optionC": "To cool the food",
        "correctAnswer": "To keep away air and germs"
      },
      {
        "question": "What is the role of saliva in digestion?",
        "optionA": "It cools food",
        "optionB": "It starts breaking down food",
        "optionC": "It stores food",
        "correctAnswer": "It starts breaking down food"
      },
      {
        "question": "Which teeth are used for grinding food?",
        "optionA": "Incisors",
        "optionB": "Canines",
        "optionC": "Molars",
        "correctAnswer": "Molars"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Eating spoiled food can cause ________.",
        "optionA": "strength",
        "optionB": "vomiting",
        "optionC": "growth",
        "correctAnswer": "vomiting"
      },
      {
        "question": "Food should be stored in clean ________.",
        "optionA": "containers",
        "optionB": "bags",
        "optionC": "boxes",
        "correctAnswer": "containers"
      },
      {
        "question": "Microbes grow faster in ________ weather.",
        "optionA": "cold",
        "optionB": "hot",
        "optionC": "dry",
        "correctAnswer": "hot"
      },
      {
        "question": "Bread develops ________ patches when it spoils.",
        "optionA": "shiny",
        "optionB": "smooth",
        "optionC": "fuzzy",
        "correctAnswer": "fuzzy"
      },
      {
        "question": "Dry foods last longer because they have less ________.",
        "optionA": "air",
        "optionB": "moisture",
        "optionC": "heat",
        "correctAnswer": "moisture"
      },
      {
        "question": "________ helps to keep food fresh for a few days.",
        "optionA": "Refrigeration",
        "optionB": "Heating",
        "optionC": "Boiling",
        "correctAnswer": "Refrigeration"
      },
      {
        "question": "Curd is made from milk by ________.",
        "optionA": "drying",
        "optionB": "fermentation",
        "optionC": "freezing",
        "correctAnswer": "fermentation"
      },
      {
        "question": "Ginger tea is a home remedy for ________.",
        "optionA": "fever",
        "optionB": "cold",
        "optionC": "indigestion",
        "correctAnswer": "indigestion"
      },
      {
        "question": "Digestion begins in the ________.",
        "optionA": "stomach",
        "optionB": "mouth",
        "optionC": "intestine",
        "correctAnswer": "mouth"
      },
      {
        "question": "________ teeth help in tearing food.",
        "optionA": "Incisors",
        "optionB": "Canines",
        "optionC": "Molars",
        "correctAnswer": "Canines"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Food spoilage means food becomes unsafe to eat.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Dry food spoils faster than fresh food.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Freezing stops bacteria from growing completely.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Fermentation always makes food harmful.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Eating too fast can cause choking.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Saliva helps in breaking down food in the mouth.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Eating too many sweets can cause tooth decay.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Seasonal foods are less nutritious than stored foods.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Washing hands before eating prevents germs.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Talking while eating helps digestion.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
