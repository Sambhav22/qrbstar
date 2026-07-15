export const chapter = "Chapter - 3: Grouping Materials";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the process of grouping and sorting materials called?",
          optionA: "Classification",
          optionB: "Sorting",
          optionC: "Grouping",
          correctAnswer: "a) Classification",
        },
        {
          question: "How are materials grouped or classified?",
          optionA: "Based on their color",
          optionB: "Based on their shape",
          optionC:
            "Based on their similarities and dissimilarities and various properties",
          correctAnswer:
            "c) Based on their similarities and dissimilarities and various properties",
        },
        {
          question:
            "Why are objects in a departmental store usually placed in groups?",
          optionA: "To confuse customers",
          optionB: "To make the store look organized",
          optionC: "To help customers and shopkeepers locate items easily",
          correctAnswer:
            "c) To help customers and shopkeepers locate items easily",
        },
        {
          question:
            "Why would a carpenter use wood to make a door instead of paper or rubber?",
          optionA: "Because wood is cheaper",
          optionB: "Because wood is stronger and lasts longer",
          optionC: "Because wood is more readily available",
          correctAnswer: "b) Because wood is stronger and lasts longer",
        },
        {
          question:
            "What property of metals is widely used for making jewellery and decorative articles?",
          optionA: "Hardness",
          optionB: "Conductivity",
          optionC: "Lustre",
          correctAnswer: "c) Lustre",
        },
        {
          question:
            "Which of the following is a soft substance according to the text?",
          optionA: "Iron",
          optionB: "Steel",
          optionC: "Camphor",
          correctAnswer: "c) Camphor",
        },
        {
          question:
            "What is the property that gives us an idea of how hard a substance is?",
          optionA: "Toughness",
          optionB: "Hardness",
          optionC: "Texture",
          correctAnswer: "b) Hardness",
        },
        {
          question:
            "Which property refers to the feel of a material when touched?",
          optionA: "Hardness",
          optionB: "Texture",
          optionC: "Transparency",
          correctAnswer: "b) Texture",
        },
        {
          question:
            "What is the property that allows some substances to dissolve in water?",
          optionA: "Hardness",
          optionB: "Solubility",
          optionC: "Conductivity",
          correctAnswer: "b) Solubility",
        },
        {
          question: "What property allows certain objects to float on water?",
          optionA: "Hardness",
          optionB: "Floatation",
          optionC: "Conductivity",
          correctAnswer: "b) Floatation",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question:
            "Classification of materials is the process of grouping and sorting materials based on their ____________ and dissimilarities.",
          options: {
            a: "Sizes",
            b: "Colors",
            c: "Similarities",
          },
          correctAnswer: "c",
        },
        {
          question:
            "The property of metals that is widely used for making jewelry and decorative articles is called ____________.",
          options: {
            a: "Texture",
            b: "Conductivity",
            c: "Lustre",
          },
          correctAnswer: "c",
        },
        {
          question:
            "Different substances have different degrees of ____________, which gives an idea of what a substance could be.",
          options: {
            a: "Hardness",
            b: "Solubility",
            c: "Conductivity",
          },
          correctAnswer: "a",
        },
        {
          question:
            "The property of materials that allows the flow of heat and electric current through it is called ____________.",
          options: {
            a: "Floatation",
            b: "Conductivity",
            c: "Transparency",
          },
          correctAnswer: "b",
        },
        {
          question:
            "Objects float or sink based on the materials they are made of and their ____________.",
          options: {
            a: "Color",
            b: "Shape",
            c: "Size",
          },
          correctAnswer: "b",
        },
        {
          question:
            "Materials that completely dissolve in water are called ____________ materials, while those that do not are called ____________ materials.",
          options: {
            a: "Transparent, Opaque",
            b: "Soluble, Insoluble",
            c: "Conductive, Non-conductive",
          },
          correctAnswer: "b",
        },
        {
          question:
            "Transparent materials allow light of all wavelengths to pass through with equal ease. Examples include glass, water, air, and some ____________.",
          options: {
            a: "Metals",
            b: "Plastics",
            c: "Rocks",
          },
          correctAnswer: "b",
        },
        {
          question:
            "The property of a substance to dissolve in another substance is called ____________.",
          options: {
            a: "Conductivity",
            b: "Solubility",
            c: "Transparency",
          },
          correctAnswer: "b",
        },
        {
          question:
            "Materials like wood and plastic, which do not allow electricity or heat to pass through them, are called ____________ or bad conductors.",
          options: {
            a: "Conductors",
            b: "Insulators",
            c: "Solvents",
          },
          correctAnswer: "b",
        },
        {
          question:
            "Gases, in general, are poor conductors of heat. The air trapped in feathers of birds keeps them warm. Similarly, a sweater also keeps us warm. This is an example of ____________.",
          options: {
            a: "Insulation",
            b: "Transparency",
            c: "Conductivity",
          },
          correctAnswer: "a",
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
            "The Neolithic Age is thought to have existed from circa 8000 BC to 4000 BC.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question:
            "Early Man learned to grow food and started living in permanent settlements during the Neolithic Age.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question:
            "The use of the wheel was primarily for religious ceremonies during the Neolithic Age.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "b",
        },
        {
          question:
            "Pottery became shapely and strong during the Neolithic Age after learning how to bake it, making it more durable.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question:
            "Early Man started to produce rough cotton cloth using the wheel as a spinning wheel during the Neolithic Age.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question:
            "Leadership during the Neolithic Age was often based on the principle of the oldest or most powerful person becoming the leader.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question:
            "Early Man prayed to natural forces like wind, rain, and lightning during the Neolithic Age.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question:
            "The dead bodies during the Neolithic Age were primarily cremated, not buried with tools, food, and other items.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "b",
        },
        {
          question:
            "Neolithic characteristics observed among tribes today include hunting, gathering, farming, herding, and fishing.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question: "Gases, in general, are good conductors of heat.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "b",
        },
      ],
  };
}

export var activityData;
