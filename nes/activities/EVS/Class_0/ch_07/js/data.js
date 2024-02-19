export const chapter = "Chapter - 7: Beautiful Earth";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the Earth often referred to as?",
          optionA: "The Moon",
          optionB: "Our Home Planet",
          optionC: "Mars",
          correctAnswer: "B",
        },
        {
          question: "What do humans call Earth?",
          optionA: "The Red Planet",
          optionB: "Our Home Planet",
          optionC: "Saturn",
          correctAnswer: "B",
        },
        {
          question: "What is mentioned as a landform on Earth?",
          optionA: "Stars",
          optionB: "Valleys",
          optionC: "Comets",
          correctAnswer: "B",
        },
        {
          question: "Where do humans live according to the text?",
          optionA: "Mars",
          optionB: "The Moon",
          optionC: "Earth",
          correctAnswer: "C",
        },
        {
          question: "What are examples of landforms mentioned in the text?",
          optionA: "Lakes, forests, and deserts",
          optionB: "Mountain, plains, and hills",
          optionC: "Icebergs, valleys, and plateaus",
          correctAnswer: "B",
        },
        {
          question:
            "Which of the following is not mentioned as a water body on Earth?",
          optionA: "Seas",
          optionB: "Oceans",
          optionC: "Mountains",
          correctAnswer: "C",
        },
        {
          question: "What is not listed as a landform in the text?",
          optionA: "Deserts",
          optionB: "Valleys",
          optionC: "Islands",
          correctAnswer: "C",
        },
        {
          question:
            "What type of landform is characterized by its elevated height?",
          optionA: "Valleys",
          optionB: "Mountains",
          optionC: "Deserts",
          correctAnswer: "B",
        },
        {
          question: "What is mentioned as a water body on Earth?",
          optionA: "Forests",
          optionB: "Rivers",
          optionC: "Caves",
          correctAnswer: "B",
        },
        {
          question:
            "What are the two categories of features mentioned on Earth in the text?",
          optionA: "Land and Air",
          optionB: "Landforms and Water Bodies",
          optionC: "Mountains and Valleys",
          correctAnswer: "B",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question: "The Earth is our ________ planet. It is very beautiful.",
          optionA: "Only",
          optionB: "Home",
          optionC: "Moon",
          correctAnswer: "B",
        },
        {
          question: "We ________ on it.",
          optionA: "Explore",
          optionB: "Live",
          optionC: "Travel",
          correctAnswer: "B",
        },
        {
          question: "Earth has different landforms such as __________.",
          optionA: "Mountains",
          optionB: "Deserts",
          optionC: "Forests",
          correctAnswer: "A",
        },
        {
          question: "It also has water bodies such as __________.",
          optionA: "Oceans",
          optionB: "Mountains",
          optionC: "Forests",
          correctAnswer: "A",
        },
        {
          question:
            "The Earth is often referred to as the '__________ planet.'",
          optionA: "Red",
          optionB: "Blue",
          optionC: "Green",
          correctAnswer: "B",
        },
        {
          question:
            "Earth is a place where humans, animals, and __________ coexist.",
          optionA: "Aliens",
          optionB: "Insects",
          optionC: "Plants",
          correctAnswer: "C",
        },
        {
          question: "The beauty of Earth lies in its __________ landscapes.",
          optionA: "Barren",
          optionB: "Diverse",
          optionC: "Small",
          correctAnswer: "B",
        },
        {
          question: "Earth is unique because of its abundance of __________.",
          optionA: "Volcanoes",
          optionB: "Water",
          optionC: "Lava",
          correctAnswer: "B",
        },
        {
          question: "One of the natural wonders of Earth is the __________.",
          optionA: "Great Wall of China",
          optionB: "Grand Canyon",
          optionC: "Eiffel Tower",
          correctAnswer: "B",
        },
        {
          question: "The vastness of the Earth's __________ is awe-inspiring.",
          optionA: "Skies",
          optionB: "Deserts",
          optionC: "Oceans",
          correctAnswer: "C",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Earth is our home planet.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Humans live on Mars.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Mountains, plains, and hills are examples of water bodies.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Earth has water bodies such as seas, oceans, and rivers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The Moon is often referred to as the 'Red Planet.'",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Insects and aliens coexist on Earth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The beauty of Earth lies in its diverse landscapes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Earth is unique because of its abundance of lava.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The Grand Canyon is one of the natural wonders of Earth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The vastness of Earth's oceans is awe-inspiring.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
   };
}

export var activityData;
