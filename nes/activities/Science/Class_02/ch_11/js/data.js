export const chapter = "Chapter - 11: SAFETY RULES ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What should you do if there is no footpath while walking?",
          optionA: "Walk on your right side",
          optionB: "Walk on your left side",
          optionC: "Walk in the middle of the road",
          correctAnswer: "B) Walk on your left side",
        },
        {
          question:
            "What precaution should be taken while crossing the road at a zebra crossing?",
          optionA: "Close your eyes",
          optionB: "Look both sides for traffic",
          optionC: "Cross without checking",
          correctAnswer: "B) Look both sides for traffic",
        },
        {
          question: "What is the recommended action when boarding a bus?",
          optionA: "Push to get in quickly",
          optionB: "Stand in a queue",
          optionC: "Jump onto the bus",
          correctAnswer: "B) Stand in a queue",
        },
        {
          question: "What should you wear while riding a cycle for safety?",
          optionA: "Sunglasses",
          optionB: "Helmet",
          optionC: "Scarf",
          correctAnswer: "B) Helmet",
        },
        {
          question: "What is the proper way to handle sharp objects at home?",
          optionA: "Play with them carefully",
          optionB: "Keep them at your bedside",
          optionC: "Do not play with them and keep them at a proper place",
          correctAnswer:
            "C) Do not play with them and keep them at a proper place",
        },
        {
          question:
            "What precaution should be taken when dealing with electrical wires, switches, and appliances?",
          optionA: "Touch them with wet hands",
          optionB: "Keep them away from children",
          optionC: "Avoid using them altogether",
          correctAnswer: "B) Keep them away from children",
        },
        {
          question:
            "What is advised if someone gets hurt or injured by chance?",
          optionA: "Run away",
          optionB: "Stay calm and inform an elder or teacher",
          optionC: "Keep it a secret",
          correctAnswer: "B) Stay calm and inform an elder or teacher",
        },
        {
          question: "What is the recommended behavior in the school corridors?",
          optionA: "Run to get to the class faster",
          optionB: "Walk calmly",
          optionC: "Jump on the desks and chairs",
          correctAnswer: "B) Walk calmly",
        },
        {
          question:
            "What should you do if you find someone playing near ponds, rivers, or streams?",
          optionA: "Join them",
          optionB: "Wait for your turn",
          optionC: "Advise them not to play near such places",
          correctAnswer: "C) Advise them not to play near such places",
        },
        {
          question:
            "What is the appropriate action if you or someone else gets hurt?",
          optionA: "Panic and scream",
          optionB: "Inform an elder or teacher for necessary first aid",
          optionC: "Ignore it and continue playing",
          correctAnswer:
            "B) Inform an elder or teacher for necessary first aid",
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
          question: "Always walk on the ___________.",
          options: ["Road", "Footpath", "Playground"],
          correctAnswer: "Footpath",
        },
        {
          question: "Cross the road at ___________.",
          options: ["Any point", "Zebra crossing", "Traffic signal"],
          correctAnswer: "Zebra crossing",
        },
        {
          question:
            "While traveling in a vehicle, do not lean out or put your head out of a ___________.",
          options: ["Car window", "Moving vehicle", "Bus door"],
          correctAnswer: "Moving vehicle",
        },
        {
          question: "Always stand in a queue while ___________ a bus.",
          options: ["Watching", "Boarding", "Ignoring"],
          correctAnswer: "Boarding",
        },
        {
          question:
            "Do not play with sharp objects like knife, blade, scissors, and ___________.",
          options: ["Pencil", "Needle", "Fork"],
          correctAnswer: "Needle",
        },
        {
          question:
            "Do not touch electrical wires, switches, and appliances with ___________.",
          options: ["Dry hands", "Wet hands", "Gloves"],
          correctAnswer: "Wet hands",
        },
        {
          question: "Keep your toys and things at ___________.",
          options: ["Random places", "Proper place", "School"],
          correctAnswer: "Proper place",
        },
        {
          question: "Do not run on ___________.",
          options: ["Playground", "Stairs", "Road"],
          correctAnswer: "Stairs",
        },
        {
          question: "Never fight with others or bully them at ___________.",
          options: ["Playground", "School", "Home"],
          correctAnswer: "School",
        },
        {
          question: "Always play in ___________.",
          options: ["Dark and lonely places", "Open spaces", "Hallways"],
          correctAnswer: "Open spaces",
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
            "Walking on the footpath is always important to avoid harm or accidents.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Leaning out or putting your head out of a moving vehicle is safe.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Playing with sharp objects like knives and blades is recommended for children.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Running on stairs is a safe practice.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "It is advised to disturb the driver and make noise while traveling in a vehicle.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Touching electrical wires and switches with wet hands is safe.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Playing near ponds, rivers, or streams is a safe activity.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Jumping on desks and chairs is recommended behavior in school corridors.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Climbing on shelves or window sills is a safe practice.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Getting on or off a moving vehicle is safe.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
