export const chapter = "Chapter - 23: Narrating events";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What was Mr. Kamal doing when the traffic light turned red?",
          optionA: "Walking to his office",
          optionB: "Riding his bicycle",
          optionC: "Driving his car",
          correctAnswer: "Driving his car",
        },
        {
          question: "Where did the traffic light turn red?",
          optionA: "At the roundabout",
          optionB: "At the Victoria Crossing",
          optionC: "At the pedestrian crossing",
          correctAnswer: "At the Victoria Crossing",
        },
        {
          question: "What did Mr. Kamal do when the traffic light turned red?",
          optionA: "Accelerated his car",
          optionB: "Stopped his car",
          optionC: "Changed lanes",
          correctAnswer: "Stopped his car",
        },
        {
          question:
            "What did the small boy do when Mr. Kamal stopped at the traffic light?",
          optionA: "Started playing with his friends",
          optionB: "Cleaned the windscreen",
          optionC: "Sat down beside Mr. Kamal",
          correctAnswer: "Cleaned the windscreen",
        },
        {
          question: "What did the small boy use to clean the windscreen?",
          optionA: "A brush",
          optionB: "A rag",
          optionC: "A sponge",
          correctAnswer: "A rag",
        },
        {
          question: "What did the small boy do after cleaning the windscreen?",
          optionA: "Asked for directions",
          optionB: "Spread his palm for a coin",
          optionC: "Continued cleaning other cars",
          correctAnswer: "Spread his palm for a coin",
        },
        {
          question: "What did Mr. Kamal give to the small boy?",
          optionA: "A ten-rupee coin",
          optionB: "A two-rupee coin",
          optionC: "A five-rupee coin",
          correctAnswer: "A five-rupee coin",
        },
        {
          question: "What happened when Mr. Kamal dropped the coin?",
          optionA: "The traffic light turned green",
          optionB: "The small boy ran away",
          optionC: "It started raining",
          correctAnswer: "The traffic light turned green",
        },
        {
          question: "What did Mr. Kamal do when the light turned green?",
          optionA: "Continued waiting",
          optionB: "Drove his car ahead",
          optionC: "Took a nap",
          correctAnswer: "Drove his car ahead",
        },
        {
          question: "Where was Mr. Kamal heading?",
          optionA: "To the park",
          optionB: "To the market",
          optionC: "To his office",
          correctAnswer: "To his office",
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
          question: "Mr. Kamal was ________ his car to his office.",
          options: ["riding", "walking", "__________"],
          correctAnswer: "driving",
        },
        {
          question:
            "The traffic light turned ________ at the Victoria Crossing.",
          options: ["green", "red", "__________"],
          correctAnswer: "red",
        },
        {
          question:
            "Mr. Kamal ________ his car and waited patiently for the light to turn green.",
          options: ["accelerated", "stopped", "__________"],
          correctAnswer: "stopped",
        },
        {
          question:
            "A small boy came and started to wipe the ________ with a rag.",
          options: ["windows", "mirrors", "__________"],
          correctAnswer: "windscreen",
        },
        {
          question:
            "After cleaning, the small boy spread his palm before Mr. Kamal for a ________.",
          options: ["chocolate", "coin", "__________"],
          correctAnswer: "coin",
        },
        {
          question:
            "Mr. Kamal dropped a ________ coin on the small boy's hand.",
          options: ["ten-rupee", "two-rupee", "__________"],
          correctAnswer: "five-rupee",
        },
        {
          question:
            "Just then, the ________ turned green and Mr. Kamal drove his car ahead.",
          options: ["sun", "moon", "__________"],
          correctAnswer: "light",
        },
        {
          question:
            "The small boy ________ to Mr. Kamal for a coin after cleaning the windscreen.",
          options: ["asked", "screamed", "__________"],
          correctAnswer: "asked",
        },
        {
          question:
            "When the light turned green, Mr. Kamal ________ his car ahead.",
          options: ["walked", "drove", "__________"],
          correctAnswer: "drove",
        },
        {
          question: "Mr. Kamal was driving his car to ________.",
          options: ["the park", "the market", "__________"],
          correctAnswer: "his office",
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
          question: "Mr. Kamal was riding his bicycle to his office.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The traffic light turned green at the Victoria Crossing.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Mr. Kamal accelerated his car and waited patiently for the light to turn green.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "A small boy came and started to wash the windows with a rag.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "After cleaning, the small boy spread his palm before Mr. Kamal for a chocolate.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Mr. Kamal dropped a ten-rupee coin on the small boy's hand.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Just then, the moon turned green and Mr. Kamal drove his car ahead.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The small boy whispered to Mr. Kamal for a coin after cleaning the windscreen.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "When the light turned green, Mr. Kamal walked his car ahead.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Mr. Kamal was driving his car to the market.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
