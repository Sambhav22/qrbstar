export const chapter = "Chapter - 9: SAFETY RULES ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is safety?",
          optionA: "Ignoring potential dangers",
          optionB: "Being careful and staying away from harm",
          optionC: "Taking unnecessary risks",
          correctAnswer: "Being careful and staying away from harm",
        },
        {
          question: "What are safety rules designed for?",
          optionA: "Creating chaos",
          optionB: "Avoiding accidents",
          optionC: "Encouraging risky behavior",
          correctAnswer: "Avoiding accidents",
        },
        {
          question:
            "What is a common safety rule at home regarding sharp objects?",
          optionA: "Play with knives for fun",
          optionB:
            "Avoid playing with sharp things like knives, scissors, blades, etc.",
          optionC: "Use sharp objects without supervision",
          correctAnswer:
            "Avoid playing with sharp things like knives, scissors, blades, etc.",
        },
        {
          question:
            "What should you do before crossing the road according to safety rules?",
          optionA: "Run quickly across the road",
          optionB: "Look at both sides of the road",
          optionC: "Cross the road anywhere",
          correctAnswer: "Look at both sides of the road",
        },
        {
          question: "What does a red traffic light indicate?",
          optionA: "Go",
          optionB: "Wait",
          optionC: "Stop",
          correctAnswer: "Stop",
        },
        {
          question:
            "What is the recommended action when using a swing in school?",
          optionA: "Stand in front of the swing",
          optionB: "Avoid standing near the swing",
          optionC: "Jump on the swing",
          correctAnswer: "Avoid standing near the swing",
        },
        {
          question:
            "What should you never use for sharpening pencils according to school safety rules?",
          optionA: "Blade",
          optionB: "Scissors",
          optionC: "Sharpener",
          correctAnswer: "Blade",
        },
        {
          question:
            "What is the primary purpose of traffic signals with a yellow light?",
          optionA: "Go",
          optionB: "Wait",
          optionC: "Stop",
          correctAnswer: "Wait",
        },
        {
          question: "What is a general safety rule when on the road?",
          optionA: "Run or play on the road",
          optionB: "Always walk on the footpath",
          optionC: "Cross the road anywhere",
          correctAnswer: "Always walk on the footpath",
        },
        {
          question:
            "What is the importance of following safety rules at different places?",
          optionA: "They encourage accidents",
          optionB: "They help avoid accidents",
          optionC: "They create confusion",
          correctAnswer: "They help avoid accidents",
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
            "Safety is being careful and staying away from ___________.",
          optionA: "Danger",
          optionB: "Fun",
          optionC: "Noise",
          correctAnswer: "Danger",
        },
        {
          question:
            "Rules that help us keep safe are known as ___________ rules.",
          optionA: "Game",
          optionB: "Safety",
          optionC: "School",
          correctAnswer: "Safety",
        },
        {
          question:
            "At home, one should not play with sharp things like knives, scissors, ___________, etc.",
          optionA: "Sticks",
          optionB: "Forks",
          optionC: "Blades",
          correctAnswer: "Blades",
        },
        {
          question:
            "It is advisable not to touch electric sockets or ___________ at home.",
          optionA: "Gadgets",
          optionB: "Plugs",
          optionC: "Wires",
          correctAnswer: "Plugs",
        },
        {
          question:
            "On the road, it is important to always walk on the ___________.",
          optionA: "Road",
          optionB: "Footpath",
          optionC: "Grass",
          correctAnswer: "Footpath",
        },
        {
          question:
            "Before crossing the road, one should look at both sides of the road and cross at the ___________ crossing only.",
          optionA: "Street",
          optionB: "Zebra",
          optionC: "Signal",
          correctAnswer: "Zebra",
        },
        {
          question:
            "According to traffic signals, the red light indicates ___________.",
          optionA: "Go",
          optionB: "Wait",
          optionC: "Stop",
          correctAnswer: "Stop",
        },
        {
          question:
            "In school, it is recommended not to jump on the desks or ___________.",
          optionA: "Chairs",
          optionB: "Tables",
          optionC: "Benches",
          correctAnswer: "Chairs",
        },
        {
          question:
            "One should never throw things on each other in ___________.",
          optionA: "Playgrounds",
          optionB: "Class",
          optionC: "Corridors",
          correctAnswer: "Class",
        },
        {
          question:
            "The text mentions three lights of traffic signals. The yellow light indicates that one should ___________.",
          optionA: "Stop",
          optionB: "Wait",
          optionC: "Go",
          correctAnswer: "Wait",
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
          question:
            "Safety is about being careless and not worrying about harm.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Safety rules are designed to encourage accidents.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "It is safe to play with sharp things like knives, scissors, and blades at home.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "It is advisable to touch electric sockets or plugs without caution at home.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "One should always walk on the road instead of using the footpath.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "According to traffic signals, the red light indicates 'Go.'",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "It is recommended to jump on desks and chairs in school.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Throwing things at each other in class is considered acceptable behavior.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "One should cross the road anywhere without looking at both sides.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Schools play no role in developing well-rounded individuals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
