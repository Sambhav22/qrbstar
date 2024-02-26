export const chapter = "Chapter - 8: Simple Machines";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is a machine?",
          optionA:
            "A device used to make work easier, faster, and more efficient",
          optionB: "A tool that complicates tasks",
          optionC: "A stationary object in the workplace",
          correctAnswer: "A",
        },
        {
          question: "How are simple machines different from complex machines?",
          optionA:
            "Simple machines have only one moving part, while complex machines have many.",
          optionB: "Simple machines are larger in size.",
          optionC: "Complex machines are less efficient.",
          correctAnswer: "A",
        },
        {
          question: "What is a lever in a simple machine?",
          optionA: "A circular device",
          optionB: "A rod that can turn around a fixed point",
          optionC: "A rotating pulley",
          correctAnswer: "B",
        },
        {
          question:
            "In which class of lever is the fulcrum positioned between the load and the effort?",
          optionA: "First Class Lever",
          optionB: "Second Class Lever",
          optionC: "Third Class Lever",
          correctAnswer: "A",
        },
        {
          question:
            "Which of the following is an example of a second-class lever?",
          optionA: "Scissors",
          optionB: "Wheelbarrow",
          optionC: "Fishing rod",
          correctAnswer: "B",
        },
        {
          question: "What is an inclined plane used for?",
          optionA: "Rolling heavy objects",
          optionB: "Lifting heavy objects vertically",
          optionC: "Pushing heavy objects horizontally",
          correctAnswer: "C",
        },
        {
          question: "How is a screw described in terms of inclined planes?",
          optionA: "A stationary inclined plane",
          optionB: "A revolving inclined plane",
          optionC: "A straight inclined plane",
          correctAnswer: "B",
        },
        {
          question: "What does a wedge do in a simple machine?",
          optionA: "Connects two inclined planes",
          optionB: "Revolves around an axis",
          optionC: "Cuts materials apart",
          correctAnswer: "C",
        },
        {
          question: "What is the main component of a wheel and axle?",
          optionA: "Two wheels of the same diameter",
          optionB: "Two wheels of different diameters attached together",
          optionC: "A single wheel",
          correctAnswer: "B",
        },
        {
          question: "How does a pulley work in lifting a load?",
          optionA: "By rotating on its own axis",
          optionB: "By using a grooved wheel and a rope",
          optionC: "By sliding along an inclined plane",
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
            "A device or tool used to make work easier, faster, and more efficient is a ____________.",
          optionA: "Wheel",
          optionB: "Lever",
          optionC: "Pulley",
          correctAnswer: "Lever",
        },
        {
          question:
            "Unlike complex machines, simple machines use only a ____________ force.",
          optionA: "Single",
          optionB: "Multiple",
          optionC: "Rotational",
          correctAnswer: "Single",
        },
        {
          question:
            "An inclined plane is a plane surface that connects a lower level to a higher level, used to load drums on a truck and push up vehicles in houses. It is also known as a ____________.",
          optionA: "Chisel",
          optionB: "Ramp",
          optionC: "Wedge",
          correctAnswer: "Ramp",
        },
        {
          question:
            "A screw is a revolving inclined plane, and the threads of a screw may be considered as an inclined plane wrapped around the axis of the screw. A screw jack is used to lift cars and other heavy objects. It is an example of a ____________.",
          optionA: "Wedge",
          optionB: "Pulley",
          optionC: "Screw",
          correctAnswer: "Screw",
        },
        {
          question:
            "When a wheel is used with an axle, it becomes a simple machine known as a ____________.",
          optionA: "Pulley",
          optionB: "Inclined Plane",
          optionC: "Wheel and Axle",
          correctAnswer: "Wheel and Axle",
        },
        {
          question:
            "A ____________ has two inclined planes that meet at a sharp edge and cuts materials apart.",
          optionA: "Wheel and Axle",
          optionB: "Lever",
          optionC: "Wedge",
          correctAnswer: "Wedge",
        },
        {
          question:
            "A pulley is a simple machine that uses a grooved wheel and a rope to raise, lower, or move a load. It consists of a grooved wheel that rotates around a fixed point called the ____________.",
          optionA: "Axis",
          optionB: "Fulcrum",
          optionC: "Pulley Point",
          correctAnswer: "Fulcrum",
        },
        {
          question:
            "Depending on the relative positions of the fulcrum, the effort, and the load, levers are divided into ____________ classes.",
          optionA: "Two",
          optionB: "Three",
          optionC: "Four",
          correctAnswer: "Three",
        },
        {
          question:
            "An inclined plane is used to load drums on a truck and push up vehicles in houses. Another example of an inclined plane is a ____________.",
          optionA: "Chisel",
          optionB: "Screw",
          optionC: "Sloping Roof",
          correctAnswer: "Sloping Roof",
        },
        {
          question:
            "A combination of pulleys may be used to lift a heavy load with a small force. A pulley is used to draw water from a well, to hoist a flag on a pole, etc. This type of simple machine is known as a ____________.",
          optionA: "Lever",
          optionB: "Pulley",
          optionC: "Screw",
          correctAnswer: "Pulley",
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
            "A device or tool used to make work easier, faster, and more efficient is called a machine.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Simple machines use only a single force and are often characterized by having only one moving part.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "An inclined plane is a flat surface that connects a higher level to a lower level and is often used to push up vehicles in houses.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A screw is a stationary inclined plane with threads wrapped around the axis of the screw.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A wheel and axle become a simple machine when two wheels of different diameters are attached together.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "A wedge is a simple machine with two inclined planes meeting at a sharp edge, designed to connect materials together.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A pulley uses a grooved wheel and a rope to raise, lower, or move a load, and the fixed point around which the wheel rotates is called the fulcrum.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Levers can be classified into two classes: first class levers have the fulcrum between the load and the effort, while second class levers have the load between the fulcrum and the effort.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "An inclined plane is used for rolling heavy objects, lifting heavy objects vertically, and pushing heavy objects horizontally.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A combination of pulleys may be used to lift a heavy load with a small force, making pulleys a versatile simple machine.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
