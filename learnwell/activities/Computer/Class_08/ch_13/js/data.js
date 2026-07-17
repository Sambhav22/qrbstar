export const chapter = "Chapter - 13: Sound";
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
        question: "Which part of the ear collects sound and sends it inward?",
        optionA: "Cochlea",
        optionB: "Pinna",
        optionC: "Auditory nerve",
        correctAnswer: "Pinna",
      }),
      shuffleOptions({
        question: "Which medium carries sound the fastest?",
        optionA: "Air",
        optionB: "Water",
        optionC: "Steel",
        correctAnswer: "Steel",
      }),
      shuffleOptions({
        question: "What makes the vocal cords vibrate to produce sound?",
        optionA: "Blood flow",
        optionB: "Air from the lungs",
        optionC: "Movement of the tongue",
        correctAnswer: "Air from the lungs",
      }),
      shuffleOptions({
        question: "Which part of a sound wave has air particles closely packed?",
        optionA: "Rarefaction",
        optionB: "Compression",
        optionC: "Silence",
        correctAnswer: "Compression",
      }),
      shuffleOptions({
        question: "Which vibrating part makes a mosquito produce sound?",
        optionA: "Antennae",
        optionB: "Legs",
        optionC: "Wings",
        correctAnswer: "Wings",
      }),
      shuffleOptions({
        question: "What happens to sound when the vibrating object stops?",
        optionA: "It becomes louder",
        optionB: "It stops immediately",
        optionC: "It speeds up",
        correctAnswer: "It stops immediately",
      }),
      shuffleOptions({
        question: "Which part of a speaker vibrates to create sound?",
        optionA: "Coil",
        optionB: "Diaphragm",
        optionC: "Magnet",
        correctAnswer: "Diaphragm",
      }),
      shuffleOptions({
        question: "Which organs finally interpret sound signals?",
        optionA: "Ears and brain together",
        optionB: "Nose and brain",
        optionC: "Tongue and throat",
        correctAnswer: "Ears and brain together",
      }),
      shuffleOptions({
        question: "What happens when you press a ringing bicycle bell tightly?",
        optionA: "It vibrates more",
        optionB: "It stops vibrating and the sound stops",
        optionC: "It becomes louder",
        correctAnswer: "It stops vibrating and the sound stops",
      }),
      shuffleOptions({
        question: "Which instrument produces sound when air vibrates inside it?",
        optionA: "Tabla",
        optionB: "Flute",
        optionC: "Sitar",
        correctAnswer: "Flute",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Sound is produced when an object ______.",
        optionA: "freezes",
        optionB: "vibrates",
        optionC: "rusts",
        correctAnswer: "vibrates",
      }),
      shuffleOptions({
        question: "The human voice is created by the vibration of ______.",
        optionA: "nostrils",
        optionB: "vocal cords",
        optionC: "eardrum",
        correctAnswer: "vocal cords",
      }),
      shuffleOptions({
        question: "A sound wave consists of compressions and ______.",
        optionA: "collisions",
        optionB: "rarefactions",
        optionC: "shadows",
        correctAnswer: "rarefactions",
      }),
      shuffleOptions({
        question: "Sound cannot travel through a ______.",
        optionA: "vacuum",
        optionB: "liquid",
        optionC: "solid",
        correctAnswer: "vacuum",
      }),
      shuffleOptions({
        question: "The eardrum vibrates when ______ strike it.",
        optionA: "sound waves",
        optionB: "water waves",
        optionC: "light rays",
        correctAnswer: "sound waves",
      }),
      shuffleOptions({
        question: "The pitch of a sound depends on its ______.",
        optionA: "amplitude",
        optionB: "frequency",
        optionC: "loudness",
        correctAnswer: "frequency",
      }),
      shuffleOptions({
        question: "A large amplitude of vibration produces ______ sound.",
        optionA: "softer",
        optionB: "louder",
        optionC: "dull",
        correctAnswer: "louder",
      }),
      shuffleOptions({
        question: "The ______ changes vibrations into nerve signals in the ear.",
        optionA: "cochlea",
        optionB: "larynx",
        optionC: "pinna",
        correctAnswer: "cochlea",
      }),
      shuffleOptions({
        question: "The unit used to measure loudness is ______.",
        optionA: "metre",
        optionB: "decibel (dB)",
        optionC: "gram",
        correctAnswer: "decibel (dB)",
      }),
      shuffleOptions({
        question: "When air vibrates inside a flute, it forms a ______.",
        optionA: "light beam",
        optionB: "water wave",
        optionC: "sound wave",
        correctAnswer: "sound wave",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Sound travels faster in solids than in gases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Thin vocal cords produce a high-pitched voice.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Noise is made of regular and pleasant vibrations.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sound cannot travel on the moon because there is no air.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A tabla produces sound when its membrane vibrates.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Humans can hear sounds between 20 Hz and 20,000 Hz.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Increasing amplitude makes a sound softer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dolphins can hear very high-frequency sounds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A thicker string produces a higher-pitched sound.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sound needs a medium to travel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
