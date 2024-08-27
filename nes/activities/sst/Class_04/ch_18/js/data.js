export const chapter = "Chapter - 18: Life in the Peninsular Plateau  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What are the two main parts of the Peninsular Plateau in India?",
        optionA: "Western Ghats and Eastern Ghats",
        optionB: "Malwa Plateau and Deccan Plateau",
        optionC: "Vindhya and Satpura",
        correctAnswer: "B",
      },
      {
        question:
          "Which state is known for its diamond mines and wildlife sanctuary?",
        optionA: "Telangana",
        optionB: "Maharashtra",
        optionC: "Madhya Pradesh",
        correctAnswer: "C",
      },
      {
        question:
          "Which state is rich in minerals like bauxite, limestone, graphite, coal, and iron ore, and has heavy industries like Bhilai Steel Plant and BALCO?",
        optionA: "Chhattisgarh",
        optionB: "Odisha",
        optionC: "Andhra Pradesh",
        correctAnswer: "A",
      },
      {
        question:
          "Which state is famous for its IT industry and aerospace research laboratories, such as DRDO and DRDL?",
        optionA: "Telangana",
        optionB: "Maharashtra",
        optionC: "Karnataka",
        correctAnswer: "A",
      },
      {
        question: "What is the capital of Andhra Pradesh?",
        optionA: "Hyderabad",
        optionB: "Amaravati",
        optionC: "Visakhapatnam",
        correctAnswer: "B",
      },
      {
        question:
          "Which state is known for its sandalwood and teak forests, and has a large number of cottage industries in incense sticks and sandal articles?",
        optionA: "Karnataka",
        optionB: "Tamil Nadu",
        optionC: "Maharashtra",
        correctAnswer: "A",
      },
      {
        question:
          "Which state has Kanyakumari, the southernmost point of mainland India, and is known for its Kaveri river?",
        optionA: "Maharashtra",
        optionB: "Tamil Nadu",
        optionC: "Karnataka",
        correctAnswer: "B",
      },
      {
        question: "What is the common language spoken in Tamil Nadu?",
        optionA: "Kannada",
        optionB: "Telugu",
        optionC: "Tamil",
        correctAnswer: "C",
      },
      {
        question: "Which city is known for its film industry called Kollywood?",
        optionA: "Chennai",
        optionB: "Hyderabad",
        optionC: "Bengaluru",
        correctAnswer: "A",
      },
      {
        question:
          "Which state is famous for its silk sarees of Kanchipuram and Madurai?",
        optionA: "Andhra Pradesh",
        optionB: "Karnataka",
        optionC: "Tamil Nadu",
        correctAnswer: "C",
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
          "The Peninsular Plateau in India is divided into two main parts - Malwa Plateau and Deccan Plateau. Other than Madhya Pradesh, Chhattisgarh, and Telangana, all other states in the Peninsular Plateau have both _______ and plateau.",
        options: ["Deserts", "Coastal plain", "Mountains"],
        correctAnswer: "Coastal plain",
      },
      {
        question:
          "The important hills in Madhya Pradesh are the _______ and Satpura.",
        options: ["Western Ghats", "Vindhya", "Himalayas"],
        correctAnswer: "Vindhya",
      },
      {
        question: "Chhattisgarh is located in the basin of the _______ River.",
        options: ["Ganges", "Brahmaputra", "Mahanadi"],
        correctAnswer: "Mahanadi",
      },
      {
        question:
          "Odisha has both coastal plains and plateaus, and the Mahanadi River has formed a fertile _______ here.",
        options: ["Desert", "Delta", "Rainforest"],
        correctAnswer: "Delta",
      },
      {
        question:
          "Maharashtra comprises a plateau with a narrow strip of coastal _______.",
        options: ["Desert", "Plateau", "Plain"],
        correctAnswer: "Plain",
      },
      {
        question:
          "Telangana, located entirely in the Deccan Plateau, was carved out of the state of _______.",
        options: ["Madhya Pradesh", "Andhra Pradesh", "Odisha"],
        correctAnswer: "Andhra Pradesh",
      },
      {
        question:
          "Andhra Pradesh has both plain and plateau areas. The inner area of Andhra Pradesh is a _______.",
        options: ["Plateau", "Desert", "Rainforest"],
        correctAnswer: "Plateau",
      },
      {
        question:
          "Karnataka is located on the Western Ghats and comprises both plain and _______ regions.",
        options: ["Desert", "Rainforest", "Plateau"],
        correctAnswer: "Plateau",
      },
      {
        question:
          "Tamil Nadu is bounded by the Bay of Bengal to the east and the _______ to the south.",
        options: ["Desert", "Himalayas", "Indian Ocean"],
        correctAnswer: "Indian Ocean",
      },
      {
        question:
          "Tamil Nadu is known for its rich mineral resources, including mica, iron ore, and _______.",
        options: ["Gold", "Diamonds", "Limestone"],
        correctAnswer: "Limestone",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The Peninsular Plateau is a region with varied landforms.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Madhya Pradesh is located in the Malwa Plateau.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Odisha has both coastal plains and plateaus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Maharashtra is known for its thriving film industry, Bollywood.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Telangana was carved out of the state of Andhra Pradesh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Andhra Pradesh comprises both plain and plateau areas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Karnataka is located on the Western Ghats and has abundant sandalwood and teak forests.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Tamil Nadu has a coastline along the Bay of Bengal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Chhattisgarh is located in the basin of the Ganges River.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Madhya Pradesh is primarily a desert region.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
