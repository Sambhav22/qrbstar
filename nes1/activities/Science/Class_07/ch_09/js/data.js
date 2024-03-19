export const chapter = "Chapter - 9: Motion and Time ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is motion?",
          optionA: "A stationary object",
          optionB:
            "A body that covers equal distances in equal intervals of time",
          optionC: "A body changing its position with respect to other objects",
          correctAnswer:
            "C. A body changing its position with respect to other objects",
        },
        {
          question: "How is speed defined?",
          optionA: "The color of a moving object",
          optionB: "The distance covered by an object in a unit time",
          optionC: "The size of a moving object",
          correctAnswer: "B. The distance covered by an object in a unit time",
        },
        {
          question:
            "What is the unit of speed in the International System (SI)?",
          optionA: "Kilometer per hour",
          optionB: "Meter per second (m/s)",
          optionC: "Mile per hour",
          correctAnswer: "B. Meter per second (m/s)",
        },
        {
          question: "When is a body in uniform motion?",
          optionA:
            "When it covers unequal distances in equal intervals of time",
          optionB: "When it covers equal distances in equal intervals of time",
          optionC: "When it remains at rest",
          correctAnswer:
            "B. When it covers equal distances in equal intervals of time",
        },
        {
          question: "What does a distance-time graph represent?",
          optionA: "The color of an object over time",
          optionB: "How far something has moved in a particular time",
          optionC: "The speed of an object",
          correctAnswer: "B. How far something has moved in a particular time",
        },
        {
          question: "How is time defined?",
          optionA: "The duration in which an event takes place",
          optionB: "The size of an object",
          optionC: "The color of the sky",
          correctAnswer: "A. The duration in which an event takes place",
        },
        {
          question: "What is the SI unit of time?",
          optionA: "Minute",
          optionB: "Day",
          optionC: "Second",
          correctAnswer: "C. Second",
        },
        {
          question: "What is the largest sundial in the world used for?",
          optionA: "Measuring temperature",
          optionB: "Observing celestial movements",
          optionC: "Measuring rainfall",
          correctAnswer: "B. Observing celestial movements",
        },
        {
          question: "What is the Sand Clock or Hourglass used for?",
          optionA: "Measuring temperature",
          optionB: "Keeping track of time",
          optionC: "Observing planetary movements",
          correctAnswer: "B. Keeping track of time",
        },
        {
          question: "What does the time period of a simple pendulum depend on?",
          optionA: "The mass of the bob",
          optionB: "The angle of the swing",
          optionC: "The length of the string",
          correctAnswer: "C. The length of the string",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question:
            "A body is said to be in motion if it changes its position with respect to other objects which are ____________.",
          optionA: "Stationary",
          optionB: "Accelerating",
          optionC: "Rotating",
          correctAnswer: "A. Stationary",
        },
        {
          question:
            "The speed of a moving object is determined by the ____________ it covers in a unit time.",
          optionA: "Volume",
          optionB: "Distance",
          optionC: "Weight",
          correctAnswer: "B. Distance",
        },
        {
          question:
            "A body is in ____________ motion if it covers equal distances in equal intervals of time.",
          optionA: "Accelerated",
          optionB: "Uniform",
          optionC: "Circular",
          correctAnswer: "B. Uniform",
        },
        {
          question:
            "In a distance-time graph, distance is always taken along the ____________, while time is taken along the ____________.",
          optionA: "X-axis, Y-axis",
          optionB: "Y-axis, Z-axis",
          optionC: "Z-axis, X-axis",
          correctAnswer: "A. X-axis, Y-axis",
        },
        {
          question:
            "The SI unit of speed is meter per second, written as ____________.",
          optionA: "m/h",
          optionB: "mps",
          optionC: "km/s",
          correctAnswer: "B. mps",
        },
        {
          question:
            "Time can be defined as the ____________ in which an event takes place.",
          optionA: "Color",
          optionB: "Duration",
          optionC: "Size",
          correctAnswer: "B. Duration",
        },
        {
          question:
            "The largest sundial in the world, located at Jantar-Mantar observatory in Jaipur, is used for observing ____________.",
          optionA: "Ocean currents",
          optionB: "Celestial movements",
          optionC: "Atmospheric pressure",
          correctAnswer: "B. Celestial movements",
        },
        {
          question:
            "The Sand Clock or Hourglass is used for keeping track of ____________.",
          optionA: "Temperature",
          optionB: "Time",
          optionC: "Planetary movements",
          correctAnswer: "B. Time",
        },
        {
          question:
            "The time period of a simple pendulum depends only on the ____________ of the string.",
          optionA: "Mass",
          optionB: "Angle of swing",
          optionC: "Length",
          correctAnswer: "C. Length",
        },
        {
          question:
            "Before the invention of modern time measuring devices, ancient people used instruments like sundials, hourglasses, and ____________.",
          optionA: "Digital clocks",
          optionB: "Candle clocks",
          optionC: "Atomic clocks",
          correctAnswer: "B. Candle clocks",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3)
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question:
            "A body is in motion if it changes its position with respect to other objects which are not moving.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The speed of a moving object is determined by the color it exhibits during motion.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A distance-time graph shows how far something has moved in a particular time.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The SI unit of speed is kilometer per hour (km/h).",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A body is in uniform motion if it covers unequal distances in equal intervals of time.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Time can be defined as the duration in which an event takes place.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Sand Clock or Hourglass is used for measuring temperature.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The caste system in ancient Hindu society was not based on occupations.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The society was fragmented into high and low castes due to the caste system.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Continuous wars depleted the population of the warrior class, strengthening the rulers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };

export var activityData;
