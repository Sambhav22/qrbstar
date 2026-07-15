export const chapter = "Chapter - 10: Simple Machines  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is a machine in the context of the given text?",
          optionA: "Any tool",
          optionB:
            "A device that makes work easier, quicker, and uses less energy",
          optionC: "An object with wheels and axles",
          correctAnswer: "B",
        },
        {
          question: "Which of the following is an example of a lever?",
          optionA: "Cranes",
          optionB: "Pair of scissors",
          optionC: "Ramps",
          correctAnswer: "B",
        },
        {
          question: "What is the main purpose of a pulley?",
          optionA: "To push two objects apart",
          optionB: "To slide heavy objects up an inclined plane",
          optionC: "To move loads or change the direction of force",
          correctAnswer: "C",
        },
        {
          question: "What is an inclined plane?",
          optionA: "A flat surface with one end higher than the other",
          optionB: "A device with a wheel and a rod attached",
          optionC: "An object that pushes two things apart",
          correctAnswer: "A",
        },
        {
          question:
            "In the wheel and axle machine, what role does the rod play?",
          optionA: "It slides heavy objects up a higher point",
          optionB: "It forms a sharp edge to push two objects apart",
          optionC: "It serves as an axle to help lift or move loads",
          correctAnswer: "C",
        },
        {
          question:
            "Which simple machine is created by putting two inclined planes back to back?",
          optionA: "Screw",
          optionB: "Wedge",
          optionC: "Pulley",
          correctAnswer: "B",
        },
        {
          question: "How does a screw differ from an inclined plane?",
          optionA: "It is used to lift heavy objects",
          optionB: "It is an inclined plane wrapped around a pole",
          optionC: "It is a flat surface with one end higher than the other",
          correctAnswer: "B",
        },
        {
          question: "What is the primary purpose of a wedge?",
          optionA: "To move objects easily",
          optionB: "To push two objects apart",
          optionC: "To change the direction of force",
          correctAnswer: "B",
        },
        {
          question: "Which type of simple machine is a seesaw an example of?",
          optionA: "Lever",
          optionB: "Pulley",
          optionC: "Inclined Plane",
          correctAnswer: "A",
        },
        {
          question:
            "What is the common characteristic of all simple machines mentioned in the text?",
          optionA: "They use electricity",
          optionB:
            "They increase the effect of force or change the direction of applied force",
          optionC: "They are complex and difficult to understand",
          correctAnswer: "B",
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
            "In our daily life, we apply different forces to do different kinds of work such as lifting heavy objects or opening a can. We often use tools that help us to complete a work quickly and with less effort. A tool that is used to do work easily, quickly, and uses less energy is called a __________.",
          options: ["Mechanism", "Device", "Machine"],
          answer: "Machine",
        },
        {
          question:
            "Common tools that we use every day such as staplers, screwdrivers, and a pair of scissors are examples of __________ machines.",
          options: ["Complex", "Advanced", "Simple"],
          answer: "Simple",
        },
        {
          question:
            "Simple machines are of six main types - lever, pulley, inclined plane, wheel and axle, wedge, and __________.",
          options: ["Rotor", "Gear", "Screw"],
          answer: "Screw",
        },
        {
          question:
            "The lever is made up of a straight rigid object like a board or a bar which pivots on a turning point. By applying the force at one end of a lever, we can use it to lift or move heavy objects, cut things, and open lids. Examples of levers include bottle openers, a pair of scissors, claw hammers, seesaws, pliers, crowbars, and __________.",
          options: ["Tweezers", "Wrenches", "Files"],
          answer: "Tweezers",
        },
        {
          question:
            "A __________ is a type of simple machine that uses a wheel with a groove in it and a rope. The rope fits into the groove, and one end of the rope goes around the load.",
          options: ["Cable", "Pulley", "Hoist"],
          answer: "Pulley",
        },
        {
          question:
            "An inclined plane is a flat surface with one end higher than the other. This allows for heavy objects to slide up to a higher point rather than be lifted. It is generally easier to slide something than to lift it. Examples of inclined planes include slides and __________.",
          options: ["Swings", "Chutes", "Springs"],
          answer: "Chutes",
        },
        {
          question:
            "Wheel and axle is another simple machine. It uses a wheel with a rod attached in the middle as an axle to help it lift or move loads. In some cases, this machine works like a lever to multiply force, as with a doorknob or a fishing reel. In other cases, it is used to move objects easily, such as with wheels on a __________.",
          options: ["Cart", "Skateboard", "Bicycle"],
          answer: "Bicycle",
        },
        {
          question:
            "A __________ is a simple machine used to push two objects apart. If you put two inclined planes back to back forming a sharp edge, you get a wedge.",
          options: ["Blade", "Paddle", "Disc"],
          answer: "Blade",
        },
        {
          question:
            "A __________ is a special kind of inclined plane. It's basically an inclined plane wrapped around a pole. Screws are used to lift things or to hold them together.",
          options: ["Bolt", "Nut", "Screw"],
          answer: "Screw",
        },
        {
          question:
            "The six main types of simple machines are lever, pulley, inclined plane, wheel and axle, wedge, and __________.",
          options: ["Ratchet", "Gear", "Cog"],
          answer: "Gear",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Lever is a type of simple machine.",
          optionA: "True",
        optionB: "False",
          answer: "True",
        },
        {
          question:
            "A pulley uses a wheel with a groove and a rope to move loads.",
          optionA: "True",
        optionB: "False",
          answer: "True",
        },
        {
          question:
            "An inclined plane is a surface where one end is lower than the other, allowing heavy objects to slide up.",
          optionA: "True",
        optionB: "False",
          answer: "True",
        },
        {
          question:
            "Wheel and axle is a simple machine that works by using a wheel with a rod attached as an axle.",
          optionA: "True",
        optionB: "False",
          answer: "True",
        },
        {
          question:
            "A wedge is a simple machine designed to pull two objects apart.",
          optionA: "True",
        optionB: "False",
          answer: "False",
        },
        {
          question:
            "A screw is essentially an inclined plane wrapped around a pole.",
          optionA: "True",
        optionB: "False",
          answer: "True",
        },
        {
          question:
            "Rivers are not essential sources of drinking water for urban and rural areas.",
          optionA: "True",
        optionB: "False",
          answer: "False",
        },
        {
          question:
            "Groundwater is primarily procured by collecting surface water.",
          optionA: "True",
        optionB: "False",
          answer: "False",
        },
        {
          question:
            "Excessive drilling of borewells has not led to the drying of groundwater aquifers in some parts of the country.",
          optionA: "True",
        optionB: "False",
          answer: "False",
        },
        {
          question:
            "Dams are structures built across rivers primarily for single-purpose projects.",
          optionA: "True",
        optionB: "False",
          answer: "False",
        },
      ],
  };
}

export var activityData;
