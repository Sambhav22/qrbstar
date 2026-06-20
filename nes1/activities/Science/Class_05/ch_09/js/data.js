export const chapter = "Chapter - 9: Soil";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is soil primarily composed of?",
          optionA: "Rocks",
          optionB: "Minerals and organic material",
          optionC: "Water",
          correctAnswer: "Minerals and organic material",
        },
        {
          question:
            "Which type of soil requires the addition of fertilizers to make it fertile?",
          optionA: "Loamy soil",
          optionB: "Clayey soil",
          optionC: "Sandy soil",
          correctAnswer: "Sandy soil",
        },
        {
          question:
            "Why is loamy soil considered appropriate for plant growth?",
          optionA: "It forms hard lumps when given water.",
          optionB: "It can hold moisture and is also rich in nutrients.",
          optionC: "It develops cracks in hot weather.",
          correctAnswer: "It can hold moisture and is also rich in nutrients.",
        },
        {
          question:
            "What is the process of breaking down rocks by natural forces, such as the sun, wind, and water, called?",
          optionA: "Erosion",
          optionB: "Weathering",
          optionC: "Decomposition",
          correctAnswer: "Weathering",
        },
        {
          question:
            "Which layer of the soil profile is rich in organic material and provides nutrients and minerals to plants?",
          optionA: "Horizon B (Subsoil)",
          optionB: "Horizon A (Topsoil)",
          optionC: "Horizon C (Bedrock)",
          correctAnswer: "Horizon A (Topsoil)",
        },
        {
          question:
            "What is the layer of the soil below the topsoil called, containing bigger pieces of rock and fewer plants?",
          optionA: "Horizon A (Topsoil)",
          optionB: "Horizon B (Subsoil)",
          optionC: "Horizon O (Topmost Layer)",
          correctAnswer: "Horizon B (Subsoil)",
        },
        {
          question:
            "What is the primary cause of soil erosion due to human activities mentioned in the text?",
          optionA: "Overgrazing by cattle",
          optionB: "Deforestation",
          optionC: "Terrace farming",
          correctAnswer: "Deforestation",
        },
        {
          question:
            "How does terrace farming contribute to soil conservation in hilly areas?",
          optionA: "By cutting down trees in large numbers.",
          optionB: "By preventing soil erosion through steps or terraces.",
          optionC: "By building dams along river banks.",
          correctAnswer:
            "By preventing soil erosion through steps or terraces.",
        },
        {
          question:
            "What is the cheapest and most effective way of soil conservation mentioned in the text?",
          optionA: "Terrace farming",
          optionB: "Building dams",
          optionC: "Planting trees",
          correctAnswer: "Planting trees",
        },
        {
          question: "What does soil conservation involve?",
          optionA: "Accelerating soil erosion",
          optionB: "Protection and prevention against erosion",
          optionC: "Increasing deforestation",
          correctAnswer: "Protection and prevention against erosion",
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
            "Sandy soil requires the addition of ____________ to make it fertile.",
          optionA: "Water",
          optionB: "Fertilizers",
          optionC: "Plants",
          correctAnswer: "Fertilizers",
        },
        {
          question:
            "Loamy soil is known for its ability to hold ____________ and rich nutrients.",
          optionA: "Air",
          optionB: "Moisture",
          optionC: "Rocks",
          correctAnswer: "Moisture",
        },
        {
          question: "Clayey soil forms hard lumps when given ____________.",
          optionA: "Sunlight",
          optionB: "Water",
          optionC: "Fertilizers",
          correctAnswer: "Water",
        },
        {
          question:
            "Soil is formed by the slow process of breaking down of rocks through natural forces such as ____________, wind, and water.",
          optionA: "Earthquakes",
          optionB: "Volcanoes",
          optionC: "Sun",
          correctAnswer: "Sun",
        },
        {
          question:
            "The topsoil, where most plant roots are found, is made from the mixture of ____________ and minerals.",
          optionA: "Water",
          optionB: "Air",
          optionC: "Organic material",
          correctAnswer: "Organic material",
        },
        {
          question:
            "Horizon B (Subsoil) contains bigger pieces of rock and is mostly composed of ____________ and minerals.",
          optionA: "Organic material",
          optionB: "Clay",
          optionC: "Water",
          correctAnswer: "Clay",
        },
        {
          question:
            "Horizon C (Bedrock) is the layer of the soil where ____________ is found.",
          optionA: "Air",
          optionB: "Water",
          optionC: "Rock",
          correctAnswer: "Rock",
        },
        {
          question:
            "Soil erosion is the process of carrying away the top fertile layer of soil by ____________, wind, or other factors.",
          optionA: "Plants",
          optionB: "Humans",
          optionC: "Water",
          correctAnswer: "Water",
        },
        {
          question:
            "Deforestation is a major cause of soil erosion because the roots of trees and plants help in holding soil particles ____________.",
          optionA: "Firmly",
          optionB: "Loosely",
          optionC: "Temporarily",
          correctAnswer: "Firmly",
        },
        {
          question:
            "One of the ways mentioned for soil conservation is ____________ farming in hilly areas, where the slope is cut into steps or terraces.",
          optionA: "Traditional",
          optionB: "Terrace",
          optionC: "Urban",
          correctAnswer: "Terrace",
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
            "Sandy soil requires the addition of fertilizers to make it fertile.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Loamy soil is not suitable for plant growth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Clayey soil forms hard lumps when given water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Soil is formed by the rapid process of breaking down of rocks through natural forces.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The topsoil is often dark in color due to its composition.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Horizon B (Subsoil) contains smaller pieces of rock than the above layer.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Horizon C (Bedrock) is the layer of the soil where water is found.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Water is not a natural agent that causes soil erosion.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Deforestation is a minor cause of soil erosion.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Building dams along river banks can control the speed and amount of flowing water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
