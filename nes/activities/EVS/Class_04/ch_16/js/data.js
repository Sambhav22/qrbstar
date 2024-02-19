export const chapter = "Chapter - 16: Tale of a River";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What river is mentioned as the most sacred river of India in the text?",
          optionA: "Yamuna",
          optionB: "Ganga",
          optionC: "Brahmaputra",
          correctAnswer: "b) Ganga",
        },

        {
          question:
            "How do perennial rivers like Ganga, Yamuna, and Brahmaputra get their water?",
          optionA: "From rainwater",
          optionB: "From melting glaciers",
          optionC: "From underground springs",
          correctAnswer: "b) From melting glaciers",
        },

        {
          question:
            "What is the main source of freshwater mentioned in the text?",
          optionA: "Rainwater",
          optionB: "Rivers",
          optionC: "Dams",
          correctAnswer: "b) Rivers",
        },

        {
          question: "What causes rain according to the text?",
          optionA: "Evaporation and condensation",
          optionB: "Melting glaciers",
          optionC: "Dam construction",
          correctAnswer: "a) Evaporation and condensation",
        },

        {
          question:
            "What are some man-made sources of water mentioned in the text?",
          optionA: "Aquatic plants",
          optionB: "Reservoirs and canals",
          optionC: "Rain fed rivers",
          correctAnswer: "b) Reservoirs and canals",
        },

        {
          question:
            "What is the harmful effect of using polluted water for irrigation mentioned in the text?",
          optionA: "Increased fertility of fields",
          optionB: "Infertility in some years",
          optionC: "Improved crop yield",
          correctAnswer: "b) Infertility in some years",
        },

        {
          question:
            "What man-made sources are helpful in producing electricity, according to the text?",
          optionA: "Canals",
          optionB: "Reservoirs",
          optionC: "Dams",
          correctAnswer: "c) Dams",
        },

        {
          question:
            "What is the primary cause of river water pollution mentioned in the text?",
          optionA: "Melting glaciers",
          optionB: "Dam construction",
          optionC: "Dumping normal to toxic wastes",
          correctAnswer: "c) Dumping normal to toxic wastes",
        },

        {
          question:
            "What is the consequence of water pollution on aquatic life, as per the text?",
          optionA: "Increased biodiversity",
          optionB: "Endangerment of fishes and plants",
          optionC: "Improved habitat",
          correctAnswer: "b) Endangerment of fishes and plants",
        },

        {
          question:
            "Which process involves river water turning into vapor and rising in the atmosphere?",
          optionA: "Condensation",
          optionB: "Evaporation",
          optionC: "Filtration",
          correctAnswer: "b) Evaporation",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question:
            "__________ is the most sacred river of India mentioned in the text.",
          optionA: "Yamuna",
          optionB: "Ganga",
          optionC: "Brahmaputra",
          correctAnswer: "b) Ganga",
        },

        {
          question:
            "Rivers like Ganga, Yamuna, and Brahmaputra get their water from the melting of ____________.",
          optionA: "glaciers",
          optionB: "rainwater",
          optionC: "underground springs",
          correctAnswer: "a) glaciers",
        },

        {
          question:
            "The main source of freshwater mentioned in the text is ____________.",
          optionA: "rainwater",
          optionB: "rivers",
          optionC: "dams",
          correctAnswer: "b) rivers",
        },

        {
          question:
            "Rain is caused by the process of ____________ and ____________.",
          optionA: "evaporation, condensation",
          optionB: "melting, freezing",
          optionC: "filtration, precipitation",
          correctAnswer: "a) evaporation, condensation",
        },

        {
          question:
            "Man-made sources of water mentioned in the text include ____________ and ____________.",
          optionA: "aquatic plants, reservoirs",
          optionB: "reservoirs, canals",
          optionC: "rain-fed rivers, dams",
          correctAnswer: "b) reservoirs, canals",
        },

        {
          question:
            "The harmful effect of using polluted water for irrigation is ____________ in some years.",
          optionA: "increased fertility",
          optionB: "infertility",
          optionC: "improved crop yield",
          correctAnswer: "b) infertility",
        },

        {
          question:
            "Dams are helpful in producing ____________ according to the text.",
          optionA: "freshwater",
          optionB: "electricity",
          optionC: "rainwater",
          correctAnswer: "b) electricity",
        },

        {
          question:
            "The primary cause of river water pollution mentioned in the text is dumping ____________.",
          optionA: "rainwater",
          optionB: "toxic wastes",
          optionC: "underground springs",
          correctAnswer: "b) toxic wastes",
        },

        {
          question:
            "Water pollution results in endangerment of ____________ and ____________.",
          optionA: "aquatic life, crops",
          optionB: "fishes, plants",
          optionC: "rivers, mountains",
          correctAnswer: "b) fishes, plants",
        },

        {
          question:
            "The process involving river water turning into vapor and rising in the atmosphere is called ____________.",
          optionA: "condensation",
          optionB: "evaporation",
          optionC: "precipitation",
          correctAnswer: "b) evaporation",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "The Ganga is the most sacred river of India.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },

        {
          question:
            "Perennial rivers like Ganga have water throughout the year.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },

        {
          question: "Rain fed rivers carry water only during the rainy season.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },

        {
          question: "Dams are not helpful in producing electricity.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },

        {
          question: "Polluted water is full of germs and pollutants.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },

        {
          question:
            "Using polluted water for irrigation can result in increased fertility of fields.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },

        {
          question: "Rainwater is the primary cause of river water pollution.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },

        {
          question: "Water pollution endangers aquatic life and plants.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },

        {
          question: "Melting glaciers are the source of rainwater.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },

        {
          question:
            "Evaporation is the process of water turning into vapor and rising in the atmosphere.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
   };
}

export var activityData;
