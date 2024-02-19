export const chapter = "Chapter - 11: Safety saves ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What are some common reasons that can cause a fire?",
          optionA: "Using too many plugs in one socket",
          optionB: "Playing with matchsticks and burning candles",
          optionC: "Both A and B",
          correctAnswer: "C) Both A and B",
        },
        {
          question: "What should you do if your clothes catch fire?",
          optionA: "Run to get help",
          optionB: "Stop, drop to the ground, cover your face, and roll over",
          optionC: "Use water to extinguish the flames",
          correctAnswer:
            "B) Stop, drop to the ground, cover your face, and roll over",
        },
        {
          question:
            "What should you do if there is smoke during a fire emergency?",
          optionA: "Stand up and run towards the exit",
          optionB:
            "Lie down and crawl to the exit, keeping your nose close to the ground",
          optionC: "Use elevators for a quicker escape",
          correctAnswer:
            "B) Lie down and crawl to the exit, keeping your nose close to the ground",
        },
        {
          question:
            "How can a fire caused by paper, wood, or plastic be extinguished?",
          optionA: "Use water",
          optionB: "Use sand or mud",
          optionC: "Use a fire extinguisher",
          correctAnswer: "A) Use sand or water",
        },
        {
          question: "What is the purpose of first aid?",
          optionA: "To provide medical treatment",
          optionB: "To increase damage from an accident",
          optionC: "To prevent further damage until professional help arrives",
          correctAnswer:
            "C) To prevent further damage until professional help arrives",
        },
        {
          question:
            "What should be done for cuts and wounds as part of first aid?",
          optionA: "Wrap a sterile gauze bandage without cleaning the wound",
          optionB:
            "Clean the affected area with an antiseptic lotion and apply a sterile dressing",
          optionC: "Ignore the wound and wait for a doctor",
          correctAnswer:
            "B) Clean the affected area with an antiseptic lotion and apply a sterile dressing",
        },
        {
          question: "What should you do in case of nose bleeding?",
          optionA: "Tilt your head backward",
          optionB:
            "Bend your neck forward and press the bleeding side of your nose",
          optionC: "Blow your nose to clear the blood",
          correctAnswer:
            "B) Bend your neck forward and press the bleeding side of your nose",
        },
        {
          question: "How should a sprain be initially treated?",
          optionA: "Apply heat to the injured joint",
          optionB: "Apply ice-packs to reduce swelling",
          optionC: "Ignore it as it will heal on its own",
          correctAnswer: "B) Apply ice-packs to reduce swelling",
        },
        {
          question:
            "What should you do in the case of fractures as part of first aid?",
          optionA: "Encourage movement of the fractured part",
          optionB: "Call for a doctor and provide support with splints",
          optionC: "Apply a tourniquet above the fracture",
          correctAnswer:
            "B) Call for a doctor and provide support with splints",
        },
        {
          question: "What should be done in case of poisoning?",
          optionA: "Wait for symptoms to appear",
          optionB: "Take the victim to a doctor immediately",
          optionC: "Ignore it if it seems minor",
          correctAnswer: "B) Take the victim to a doctor immediately",
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
            "Fire can spread quickly, even a small flame can turn into a major fire in a matter of ____________.",
          options: ["Seconds", "Minutes", "Hours"],
          correctAnswer: "Minutes",
        },
        {
          question:
            "In the event of a fire, it is essential to use the ____________ instead of lifts for a safer escape.",
          options: ["Elevators", "Stairs", "Windows"],
          correctAnswer: "Stairs",
        },
        {
          question:
            "Before opening a door during a fire, it is recommended to feel it lightly using the back of your hand. If it is hot, do not open it; look for ____________.",
          options: ["Another door", "A window", "A fire extinguisher"],
          correctAnswer: "Another door",
        },
        {
          question:
            "In the case of a gas leakage, all windows and doors of the kitchen should be opened, and one should avoid operating any electric switch or striking matchsticks. Faulty gas pipes should be replaced ____________.",
          options: ["Immediately", "Next week", "After a month"],
          correctAnswer: "Immediately",
        },
        {
          question:
            "First aid is not a medical treatment; its objective is to prevent further damage until the arrival of ____________ or transportation to the hospital.",
          options: ["A nurse", "A friend", "A doctor"],
          correctAnswer: "A doctor",
        },
        {
          question:
            "For cuts and wounds, it is important to wash away all dirt around the wound and clean the affected area with a cotton ball soaked in ____________.",
          options: ["Water", "Antiseptic lotion", "Alcohol"],
          correctAnswer: "Antiseptic lotion",
        },
        {
          question:
            "During nose bleeding, it is advised to sit down, bend your neck forward, and press the bleeding side of your nose firmly with ____________.",
          options: ["A tissue", "Your fingers", "A cloth"],
          correctAnswer: "Your fingers",
        },
        {
          question:
            "Ice-packs or ice-cubes should be applied over the injured joint in the case of a ____________ to reduce swelling.",
          options: ["Fracture", "Burn", "Sprain"],
          correctAnswer: "Sprain",
        },
        {
          question:
            "In case of a snake bite, keeping the victim calm and still is crucial, as movement can cause the venom to travel more quickly through the body. Also, the affected area should not be raised above ____________.",
          options: ["The head", "The heart", "The knees"],
          correctAnswer: "The heart",
        },
        {
          question:
            "For minor burns, it is recommended to wash the burnt area with plenty of cold water and apply ____________ on it.",
          options: ["Ice", "Antiseptic cream", "Butter"],
          correctAnswer: "Antiseptic cream",
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
            "Fire can spread quickly, even a small flame can turn into a major fire in a matter of minutes.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "During a fire emergency, it is safe to use elevators for a quicker escape.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Before opening a door during a fire, it is advisable to feel it lightly using the back of your hand. If it is hot, you should not open it.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In case of a gas leakage, it is recommended to operate electric switches and strike matchsticks to identify the source quickly.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "First aid is a medical treatment aimed at curing the victim's injuries before the arrival of professional help.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In the case of cuts and wounds, it is essential to ignore the wound and wait for a doctor's assistance.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "During nose bleeding, it is recommended to tilt your head backward to prevent blood from flowing down your throat.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Applying heat to an injured joint is the recommended first aid for a sprain.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In case of a snake bite, keeping the victim calm and still is crucial, as movement can slow down the spread of venom.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In the case of minor burns, it is advisable to apply ice directly to the burnt area.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
