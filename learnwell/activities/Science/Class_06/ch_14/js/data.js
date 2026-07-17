export const chapter = "Chapter - 14: Lights, Shadows and Reflections";
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
        question: "Which is the brightest natural source of light for us?",
        optionA: "Moon",
        optionB: "Sun",
        optionC: "Stars",
        correctAnswer: "Sun",
      }),
      shuffleOptions({
        question: "Which of the following is a cold source of light?",
        optionA: "Electric bulb",
        optionB: "Tube light",
        optionC: "Candle",
        correctAnswer: "Tube light",
      }),
      shuffleOptions({
        question: "Which of these objects gives out its own light?",
        optionA: "Tree",
        optionB: "Candle",
        optionC: "Mirror",
        correctAnswer: "Candle",
      }),
      shuffleOptions({
        question: "Which substance allows light to pass only partially through it?",
        optionA: "Glass",
        optionB: "Tracing paper",
        optionC: "Wood",
        correctAnswer: "Tracing paper",
      }),
      shuffleOptions({
        question: "What is the path called in which light travels?",
        optionA: "Curved path",
        optionB: "Straight line",
        optionC: "Circular path",
        correctAnswer: "Straight line",
      }),
      shuffleOptions({
        question: "Which instrument works on the principle that light travels in a straight line?",
        optionA: "Periscope",
        optionB: "Pinhole camera",
        optionC: "Kaleidoscope",
        correctAnswer: "Pinhole camera",
      }),
      shuffleOptions({
        question: "Which of the following is required for the formation of a shadow?",
        optionA: "Opaque object",
        optionB: "Transparent object",
        optionC: "Colourful object",
        correctAnswer: "Opaque object",
      }),
      shuffleOptions({
        question: "What happens to the shadow when the object moves closer to the light source?",
        optionA: "It becomes smaller",
        optionB: "It becomes larger",
        optionC: "It disappears",
        correctAnswer: "It becomes larger",
      }),
      shuffleOptions({
        question: "What is the phenomenon called when light bounces back after striking a surface?",
        optionA: "Reflection",
        optionB: "Refraction",
        optionC: "Absorption",
        correctAnswer: "Reflection",
      }),
      shuffleOptions({
        question: "What type of reflection occurs on a smooth surface like a mirror?",
        optionA: "Irregular reflection",
        optionB: "Regular reflection",
        optionC: "Diffuse reflection",
        correctAnswer: "Regular reflection",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The moon shines because it ______ the light of the sun.",
        optionA: "reflects",
        optionB: "produces",
        optionC: "blocks",
        correctAnswer: "reflects",
      }),
      shuffleOptions({
        question: "The objects which do not give out light of their own are called ______ objects.",
        optionA: "luminous",
        optionB: "non-luminous",
        optionC: "bright",
        correctAnswer: "non-luminous",
      }),
      shuffleOptions({
        question: "The size of a shadow ______ when the object is moved away from the source of light.",
        optionA: "increases",
        optionB: "decreases",
        optionC: "remains same",
        correctAnswer: "decreases",
      }),
      shuffleOptions({
        question: "Glass, air and clear water are examples of ______ substances.",
        optionA: "transparent",
        optionB: "translucent",
        optionC: "opaque",
        correctAnswer: "transparent",
      }),
      shuffleOptions({
        question: "A ______ camera forms an inverted image on the screen.",
        optionA: "lens",
        optionB: "pinhole",
        optionC: "mirror",
        correctAnswer: "pinhole",
      }),
      shuffleOptions({
        question: "The process of light bouncing back after striking a surface is called ______.",
        optionA: "absorption",
        optionB: "reflection",
        optionC: "refraction",
        correctAnswer: "reflection",
      }),
      shuffleOptions({
        question: "The mirror shows an image due to the phenomenon of ______.",
        optionA: "transmission",
        optionB: "reflection",
        optionC: "dispersion",
        correctAnswer: "reflection",
      }),
      shuffleOptions({
        question: "The production of light by living organisms is called ______.",
        optionA: "radiation",
        optionB: "bioluminescence",
        optionC: "luminosity",
        correctAnswer: "bioluminescence",
      }),
      shuffleOptions({
        question: "Shadows are formed on the side ______ the light source.",
        optionA: "towards",
        optionB: "opposite",
        optionC: "below",
        correctAnswer: "opposite",
      }),
      shuffleOptions({
        question: "The sideways reversal of an image in a mirror is called ______.",
        optionA: "inversion",
        optionB: "lateral inversion",
        optionC: "rotation",
        correctAnswer: "lateral inversion",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Light is a form of energy that helps us to see objects.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fireflies are examples of man-made sources of light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A translucent object allows light to pass completely through it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Shadows can be seen even in complete darkness.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A shadow is always black in colour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A mirror forms an image because it reflects light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sun and stars are luminous bodies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "An opaque object does not allow light to pass through it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A periscope uses two plane mirrors fixed at 45°.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The image in a plane mirror shows lateral inversion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
