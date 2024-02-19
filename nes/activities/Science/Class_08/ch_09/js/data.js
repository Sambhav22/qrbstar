export const chapter = "Chapter - 9: Friction";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is friction?",
          optionA: "A force that attracts objects to each other",
          optionB:
            "A force that comes into play when two surfaces are rubbed against each other",
          optionC: "A force that causes objects to move in the same direction",
          correctAnswer:
            "B) A force that comes into play when two surfaces are rubbed against each other",
        },
        {
          question: "In which direction does the force of friction act?",
          optionA: "In the same direction as the applied force",
          optionB: "In a random direction",
          optionC: "Opposite to the direction of motion or applied force",
          correctAnswer:
            "C) Opposite to the direction of motion or applied force",
        },
        {
          question:
            "What is the role of irregularities on surfaces in the origin of friction?",
          optionA: "Increases smoothness",
          optionB: "Reduces friction",
          optionC:
            "Causes interlocking, opposing motion, and gives rise to friction",
          correctAnswer:
            "C) Causes interlocking, opposing motion, and gives rise to friction",
        },
        {
          question:
            "Which type of friction occurs when an object is at rest relative to another object?",
          optionA: "Rolling friction",
          optionB: "Sliding friction",
          optionC: "Static friction",
          correctAnswer: "C) Static friction",
        },
        {
          question: "What is the measure of sliding friction?",
          optionA: "Force required to start the object moving",
          optionB:
            "Force required to keep the body moving with a constant speed",
          optionC: "Force acting on a stationary object",
          correctAnswer:
            "B) Force required to keep the body moving with a constant speed",
        },
        {
          question:
            "Why is rolling friction generally smaller than sliding friction?",
          optionA: "Rolling friction has more irregularities",
          optionB: "Rolling friction occurs on smoother surfaces",
          optionC: "Rolling friction involves circular motion",
          correctAnswer: "B) Rolling friction occurs on smoother surfaces",
        },
        {
          question: "What advantages does friction have in our daily life?",
          optionA: "Causes wear and tear",
          optionB: "Reduces efficiency",
          optionC:
            "Enables starting and stopping motion, prevents slipping, and aids in writing",
          correctAnswer:
            "C) Enables starting and stopping motion, prevents slipping, and aids in writing",
        },
        {
          question: "What is a disadvantage of friction mentioned in the text?",
          optionA: "Reduces efficiency of machines",
          optionB: "Enables cutting things",
          optionC: "Helps in writing on the blackboard",
          correctAnswer: "A) Reduces efficiency of machines",
        },
        {
          question: "How can friction be reduced according to the text?",
          optionA: "Increasing roughness of surfaces",
          optionB: "Applying talcum powder",
          optionC:
            "Using lubricants, polishing surfaces, and employing wheels or ball bearings",
          correctAnswer:
            "C) Using lubricants, polishing surfaces, and employing wheels or ball bearings",
        },
        {
          question: "How is friction increased in the case of vehicles?",
          optionA: "Smoothing the tires",
          optionB: "Designing tires with grooves on the surface",
          optionC: "Decreasing the weight of vehicles",
          correctAnswer: "B) Designing tires with grooves on the surface",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      [
        {
          question:
            "Friction is a force that comes into play when two surfaces are __________ against each other.",
          optionA: "attracted",
          optionB: "rubbed",
          optionC: "compressed",
          correctAnswer: "b) rubbed",
        },
        {
          question:
            "If there was no friction, we would not be able to __________.",
          optionA: "fly",
          optionB: "walk",
          optionC: "swim",
          correctAnswer: "b) walk",
        },
        {
          question:
            "The force of friction always acts in a direction that is __________ to that of the applied force or motion.",
          optionA: "parallel",
          optionB: "opposite",
          optionC: "perpendicular",
          correctAnswer: "b) opposite",
        },
        {
          question: "Friction is dependent on the __________ of the body.",
          optionA: "color",
          optionB: "mass",
          optionC: "temperature",
          correctAnswer: "b) mass",
        },
        {
          question:
            "The nature of the surface plays a crucial role in the origin of friction; if the surfaces are __________, friction is large.",
          optionA: "smooth",
          optionB: "wet",
          optionC: "rough",
          correctAnswer: "c) rough",
        },
        {
          question:
            "Friction is of three types: Static friction, Sliding friction, and __________ friction.",
          optionA: "Rolling",
          optionB: "Bouncing",
          optionC: "Jumping",
          correctAnswer: "a) Rolling",
        },
        {
          question:
            "Sliding friction is generally __________ than static friction.",
          optionA: "greater",
          optionB: "equal",
          optionC: "lesser",
          correctAnswer: "c) lesser",
        },
        {
          question:
            "The force that resists motion when an object rolls over another object is called __________ friction.",
          optionA: "sliding",
          optionB: "rolling",
          optionC: "static",
          correctAnswer: "b) rolling",
        },
        {
          question:
            "Friction has certain advantages in daily life, such as enabling starting and stopping motion and preventing __________.",
          optionA: "flying",
          optionB: "slipping",
          optionC: "bouncing",
          correctAnswer: "b) slipping",
        },
        {
          question:
            "Methods of reducing friction include using lubricants, polishing surfaces, and employing wheels or __________.",
          optionA: "springs",
          optionB: "gears",
          optionC: "ball bearings",
          correctAnswer: "c) ball bearings",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3)
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "Friction is a force that comes into play when two surfaces are rubbed against each other.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The force of friction always acts in a direction that is parallel to the direction of motion.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The nature of the surface does not play a role in the origin of friction.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Rolling friction is generally greater than static friction.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Friction has only disadvantages and no advantages in our daily life.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Friction can be reduced to zero by using perfectly smooth surfaces.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Static friction comes into play when objects are in motion relative to each other.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Sliding friction occurs when a body is sliding over a surface with constant speed.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The caste system in ancient Hindu society resulted in national unity and progress.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Continuous wars depleted the population of the warrior class, weakening the rulers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };

export var activityData;
