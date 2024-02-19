export const chapter = "Chapter - 21: Picture writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the dominant color palette described in the sunset scene?",
          optionA: "Blues and greens",
          optionB: "Oranges and pinks",
          optionC: "Purples and reds",
          correctAnswer: "Oranges and pinks",
        },
        {
          question: "What is the main feature near the shore in the scene?",
          optionA: "A bustling marketplace",
          optionB: "A lone wooden boat",
          optionC: "A group of people playing",
          correctAnswer: "A lone wooden boat",
        },
        {
          question:
            "What is the person near the water's edge doing in the scene?",
          optionA: "Running",
          optionB: "Gazing at the view",
          optionC: "Fishing",
          correctAnswer: "Gazing at the view",
        },
        {
          question: "What is reflected on the water's surface?",
          optionA: "Clouds",
          optionB: "Silhouettes of trees",
          optionC: "The wooden boat's silhouette",
          correctAnswer: "The wooden boat's silhouette",
        },
        {
          question: "How is the atmosphere of the scene described?",
          optionA: "Chaotic",
          optionB: "Serene",
          optionC: "Energetic",
          correctAnswer: "Serene",
        },
        {
          question: "What is the position of the sun in the described scene?",
          optionA: "Rising above the horizon",
          optionB: "Directly overhead",
          optionC: "Dipped below the horizon",
          correctAnswer: "Dipped below the horizon",
        },
        {
          question: "What is the effect of the waves in the scene?",
          optionA: "Loud crashing",
          optionB: "Gentle lapping",
          optionC: "Violent splashing",
          correctAnswer: "Gentle lapping",
        },
        {
          question:
            "What emotion does the written piece aim to evoke in the reader?",
          optionA: "Confusion",
          optionB: "Sadness",
          optionC: "Serenity and captivation",
          correctAnswer: "Serenity and captivation",
        },
        {
          question: "What is frozen in time in the described scene?",
          optionA: "People dancing",
          optionB: "A moment of quiet beauty",
          optionC: "A fast-paced race",
          correctAnswer: "A moment of quiet beauty",
        },
        {
          question: "What does picture writing aim to achieve?",
          optionA: "Providing facts and figures",
          optionB: "Translating visual stimuli into written form",
          optionC: "Conducting scientific experiments",
          correctAnswer: "Translating visual stimuli into written form",
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
            "As the sun dipped below the horizon, its warm glow painted the sky in a palette of ______ and ______, casting a serene ambiance over the tranquil lake.",
          options: ["Greens, blues", "Oranges, pinks", "Purples, reds"],
          correctAnswer: "Oranges, pinks",
        },
        {
          question:
            "A lone wooden boat drifted lazily near the ______, its silhouette mirrored on the rippling water.",
          options: ["Hilltop", "Shore", "Clouds"],
          correctAnswer: "Shore",
        },
        {
          question:
            "On the water's edge stood a ______ figure, captivated by the kaleidoscope of colors playing before them.",
          options: ["Busy", "Solitary", "Joyful"],
          correctAnswer: "Solitary",
        },
        {
          question:
            "The gentle lapping of the waves echoed the ______ beauty of the moment, a tableau frozen in time.",
          options: ["Dynamic", "Quiet", "Chaotic"],
          correctAnswer: "Quiet",
        },
        {
          question:
            "Imagine a ______ sunset over a calm lake, with vibrant hues of orange and pink reflecting on the water.",
          options: ["Gloomy", "Serene", "Stormy"],
          correctAnswer: "Serene",
        },
        {
          question:
            "As the sun dipped below the ______, its warm glow painted the sky in a palette of oranges and pinks.",
          options: ["Clouds", "Mountains", "Horizon"],
          correctAnswer: "Horizon",
        },
        {
          question: "A small wooden boat is gently floating near the ______.",
          options: ["Forest", "Shore", "Desert"],
          correctAnswer: "Shore",
        },
        {
          question:
            "There's a silhouette of a person standing at the ______, gazing at the breathtaking view.",
          options: ["Edge", "Center", "Top"],
          correctAnswer: "Edge",
        },
        {
          question:
            "Picture writing is a creative way to translate visual stimuli into ______ form, allowing for interpretation, imagination, and storytelling.",
          options: ["Spoken", "Written", "Mathematical"],
          correctAnswer: "Written",
        },
        {
          question:
            "The written piece aims to capture the essence of the picture, describing the scene in detail and evoking a sense of ______ and ______.",
          options: ["Chaos, confusion", "Order, structure", "Mood, atmosphere"],
          correctAnswer: "Mood, atmosphere",
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
            "The sun's warm glow painted the sky in a palette of greens and blues.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The wooden boat drifted energetically near the shore.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The waves' loud crashing echoed the quiet beauty of the moment.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The lone figure at the water's edge was engaged in a joyful dance.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Picture writing primarily aims to convey factual information.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The sun rose above the horizon, casting a gloomy ambiance.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The boat near the shore had a noticeable silhouette of trees.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The atmosphere of the scene was described as chaotic.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The person at the water's edge was running along the shore.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Interjections play a role in expressing emotions or feelings in picture writing.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
