export const chapter = "Chapter - 19: Fuel";
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
        question: "Which fuel is the cleanest and safest source of energy?",
        optionA: "Coal",
        optionB: "Petrol",
        optionC: "Natural gas",
        correctAnswer: "Natural gas",
      }),
      shuffleOptions({
        question: "Which fuel is mainly used in public transport vehicles in Delhi?",
        optionA: "Diesel",
        optionB: "CNG",
        optionC: "Petrol",
        correctAnswer: "CNG",
      }),
      shuffleOptions({
        question: "What is the process of converting fuel into energy called?",
        optionA: "Combustion",
        optionB: "Melting",
        optionC: "Condensation",
        correctAnswer: "Combustion",
      }),
      shuffleOptions({
        question: "Which resource can be replaced again and again?",
        optionA: "Renewable resource",
        optionB: "Fossil fuel",
        optionC: "Non-renewable resource",
        correctAnswer: "Renewable resource",
      }),
      shuffleOptions({
        question: "Which fuel is found under the ground and beneath the ocean floor?",
        optionA: "Petroleum",
        optionB: "Coal",
        optionC: "CNG",
        correctAnswer: "Petroleum",
      }),
      shuffleOptions({
        question: "Which fuel was earlier used only for cooking but is now used in vehicles too?",
        optionA: "LPG",
        optionB: "Diesel",
        optionC: "Kerosene",
        correctAnswer: "LPG",
      }),
      shuffleOptions({
        question: "Which Indian state is known for producing coal?",
        optionA: "Jharkhand",
        optionB: "Punjab",
        optionC: "Kerala",
        correctAnswer: "Jharkhand",
      }),
      shuffleOptions({
        question: "Which fuel was once used to run steam engines?",
        optionA: "Coal",
        optionB: "Petrol",
        optionC: "Diesel",
        correctAnswer: "Coal",
      }),
      shuffleOptions({
        question: "Which energy source uses the movement of air to produce electricity?",
        optionA: "Wind energy",
        optionB: "Solar energy",
        optionC: "Geothermal energy",
        correctAnswer: "Wind energy",
      }),
      shuffleOptions({
        question: "Which energy source comes from the heat inside the Earth?",
        optionA: "Geothermal energy",
        optionB: "Solar energy",
        optionC: "Hydro energy",
        correctAnswer: "Geothermal energy",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "_______ is an eco-friendly fuel that produces less smoke.",
        optionA: "CNG",
        optionB: "Diesel",
        optionC: "Petrol",
        correctAnswer: "CNG",
      }),
      shuffleOptions({
        question: "_______ is a thick, dark liquid found under the ground.",
        optionA: "Petroleum",
        optionB: "Coal",
        optionC: "Natural gas",
        correctAnswer: "Petroleum",
      }),
      shuffleOptions({
        question: "The black or brownish-black rock used as fuel is called _______.",
        optionA: "Coal",
        optionB: "Iron",
        optionC: "Granite",
        correctAnswer: "Coal",
      }),
      shuffleOptions({
        question: "_______ is used in tractors, buses, and generators.",
        optionA: "Diesel",
        optionB: "Petrol",
        optionC: "LPG",
        correctAnswer: "Diesel",
      }),
      shuffleOptions({
        question: "_______ are formed by the decomposition of buried dead organisms.",
        optionA: "Fossil fuels",
        optionB: "Renewable resources",
        optionC: "Minerals",
        correctAnswer: "Fossil fuels",
      }),
      shuffleOptions({
        question: "_______ energy is obtained from the heat of the Earth.",
        optionA: "Geothermal",
        optionB: "Wind",
        optionC: "Solar",
        correctAnswer: "Geothermal",
      }),
      shuffleOptions({
        question: "_______ is a renewable resource that can be used again and again.",
        optionA: "Wind energy",
        optionB: "Coal",
        optionC: "Petroleum",
        correctAnswer: "Wind energy",
      }),
      shuffleOptions({
        question: "The process of burning fuel to obtain energy is called _______.",
        optionA: "Combustion",
        optionB: "Evaporation",
        optionC: "Condensation",
        correctAnswer: "Combustion",
      }),
      shuffleOptions({
        question: "_______ was once used to produce steam for trains.",
        optionA: "Coal",
        optionB: "Diesel",
        optionC: "CNG",
        correctAnswer: "Coal",
      }),
      shuffleOptions({
        question: "_______ fuels like biodiesel and hydrogen can replace non-renewable fuels.",
        optionA: "Alternate",
        optionB: "Fossil",
        optionC: "Natural",
        correctAnswer: "Alternate",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Fossil fuels are renewable resources.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Diesel produces more power than petrol.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "CNG is lighter than air and disperses quickly when released.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "LPG is mostly used for cooking purposes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Petroleum can be used to make plastics and medicines.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Windmills convert wind energy into electricity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Biofuels cost less than fossil fuels.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Natural gas is found above the layers of petroleum deposits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Geothermal energy is produced from the heat of the Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Using CNG in vehicles helps to reduce air pollution.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
