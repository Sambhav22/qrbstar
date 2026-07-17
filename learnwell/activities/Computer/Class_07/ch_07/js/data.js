export const chapter = "Chapter - 7: Computer Network";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const optionKeys = ["optionA", "optionB", "optionC", "optionD"];
  const optionsArray = optionKeys
    .map((key) => object[key])
    .filter((option) => option !== undefined);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  optionKeys.forEach((key, index) => {
    if (index < optionsArray.length) {
      object[key] = optionsArray[index];
    } else {
      delete object[key];
    }
  });

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Which device broadcasts a computer’s request to every connected machine in a network?",
        optionA: "Switch",
        optionB: "Hub",
        optionC: "Router",
        correctAnswer: "Hub",
      }),
      shuffleOptions({
        question: "Which component allows a computer to communicate with others on the network?",
        optionA: "Router",
        optionB: "Network Interface Card (NIC)",
        optionC: "Cable",
        correctAnswer: "Network Interface Card (NIC)",
      }),
      shuffleOptions({
        question: "Which network connects several LANs within a single city?",
        optionA: "WAN",
        optionB: "MAN",
        optionC: "PAN",
        correctAnswer: "MAN",
      }),
      shuffleOptions({
        question: "In which topology does data travel in a circular motion from one device to another?",
        optionA: "Star",
        optionB: "Ring",
        optionC: "Mesh",
        correctAnswer: "Ring",
      }),
      shuffleOptions({
        question: "Which hardware component manages the flow of information between connected devices?",
        optionA: "Switch",
        optionB: "Hub",
        optionC: "Bridge",
        correctAnswer: "Switch",
      }),
      shuffleOptions({
        question: "Which device is used to route data across different parts of a wide area network?",
        optionA: "Repeater",
        optionB: "Router",
        optionC: "Connector",
        correctAnswer: "Router",
      }),
      shuffleOptions({
        question: "Which topology combines several star networks into a bus backbone?",
        optionA: "Tree",
        optionB: "Mesh",
        optionC: "Bus",
        correctAnswer: "Tree",
      }),
      shuffleOptions({
        question: "Which network type covers the largest geographical area?",
        optionA: "LAN",
        optionB: "MAN",
        optionC: "WAN",
        correctAnswer: "WAN",
      }),
      shuffleOptions({
        question: "Which device strengthens signals before forwarding them to another network segment?",
        optionA: "Repeater",
        optionB: "Hub",
        optionC: "Cable",
        correctAnswer: "Repeater",
      }),
      shuffleOptions({
        question: "Which computer stores and processes information at high speed to serve other computers?",
        optionA: "Workstation",
        optionB: "Server",
        optionC: "Node",
        correctAnswer: "Server",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "In a bus topology, all devices share a single ______.",
        optionA: "Backbone",
        optionB: "Ring",
        optionC: "Node",
        correctAnswer: "Backbone",
      }),
      shuffleOptions({
        question: "A ______ helps connect two separate network segments by regenerating signals.",
        optionA: "Switch",
        optionB: "Repeater",
        optionC: "Hub",
        correctAnswer: "Repeater",
      }),
      shuffleOptions({
        question: "A ______ is any device that communicates within a network.",
        optionA: "Node",
        optionB: "Cable",
        optionC: "Connector",
        correctAnswer: "Node",
      }),
      shuffleOptions({
        question: "LANs are generally connected using ______ cables.",
        optionA: "USB",
        optionB: "Coaxial",
        optionC: "HDMI",
        correctAnswer: "Coaxial",
      }),
      shuffleOptions({
        question: "A ______ enables users to share hardware like scanners and printers.",
        optionA: "Network",
        optionB: "Connector",
        optionC: "Server",
        correctAnswer: "Network",
      }),
      shuffleOptions({
        question: "A mesh network that connects every device to each other is called a ______ mesh.",
        optionA: "Full",
        optionB: "Semi",
        optionC: "Broken",
        correctAnswer: "Full",
      }),
      shuffleOptions({
        question: "A ______ provides a shared connection between a LAN and a larger network.",
        optionA: "Printer",
        optionB: "Gateway",
        optionC: "Switch",
        correctAnswer: "Gateway",
      }),
      shuffleOptions({
        question: "A star network uses a central ______ to connect all devices.",
        optionA: "Hub",
        optionB: "Repeater",
        optionC: "Router",
        correctAnswer: "Hub",
      }),
      shuffleOptions({
        question: "WANs allow communication between users in ______ locations.",
        optionA: "Nearby",
        optionB: "Distant",
        optionC: "Same-room",
        correctAnswer: "Distant",
      }),
      shuffleOptions({
        question: "A ______ is required to attach a computer to a networking service.",
        optionA: "Workstation",
        optionB: "Router",
        optionC: "Printer",
        correctAnswer: "Workstation",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "In a mesh network, messages can take multiple possible paths.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A workstation becomes part of a network only when connected to a networking service.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "MAN covers a larger area than LAN.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hub is the central device in a star topology.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Repeater reduces the strength of signals before sending them ahead.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A failure in any cable of ring topology breaks the entire network loop.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Switch broadcasts messages to all devices on the network.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Tree topology allows expansion of existing networks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "LANs usually transmit data at a very slow speed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Gateway connects a LAN to larger external networks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
