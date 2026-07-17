export const chapter = "Chapter - 16: Light";
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
        question: "What is the bouncing back of light from a surface called?",
        optionA: "Refraction",
        optionB: "Reflection",
        optionC: "Dispersion",
        correctAnswer: "Reflection",
      }),
      shuffleOptions({
        question: "Which ray falls on the mirror before reflection?",
        optionA: "Reflected ray",
        optionB: "Incident ray",
        optionC: "Emergent ray",
        correctAnswer: "Incident ray",
      }),
      shuffleOptions({
        question: "The point at which the incident ray strikes the mirror is called—",
        optionA: "Focus",
        optionB: "Point of incidence",
        optionC: "Pole",
        correctAnswer: "Point of incidence",
      }),
      shuffleOptions({
        question: "What type of reflection occurs on a smooth surface?",
        optionA: "Irregular reflection",
        optionB: "Regular reflection",
        optionC: "No reflection",
        correctAnswer: "Regular reflection",
      }),
      shuffleOptions({
        question: "What kind of image is formed by a plane mirror?",
        optionA: "Real and inverted",
        optionB: "Virtual and erect",
        optionC: "Enlarged and real",
        correctAnswer: "Virtual and erect",
      }),
      shuffleOptions({
        question: "Which instrument helps us see objects not in our direct line of sight?",
        optionA: "Telescope",
        optionB: "Periscope",
        optionC: "Microscope",
        correctAnswer: "Periscope",
      }),
      shuffleOptions({
        question: "Which device produces beautiful patterns using multiple reflections?",
        optionA: "Electroscope",
        optionB: "Kaleidoscope",
        optionC: "Magnetometer",
        correctAnswer: "Kaleidoscope",
      }),
      shuffleOptions({
        question: "Splitting of sunlight into seven colours is known as—",
        optionA: "Reflection",
        optionB: "Dispersion of light",
        optionC: "Absorption",
        correctAnswer: "Dispersion of light",
      }),
      shuffleOptions({
        question: "Which part of the eye controls the amount of light entering it?",
        optionA: "Cornea",
        optionB: "Iris",
        optionC: "Retina",
        correctAnswer: "Iris",
      }),
      shuffleOptions({
        question: "Which point in the eye has no sensory cells and cannot form an image?",
        optionA: "Pupil",
        optionB: "Blind spot",
        optionC: "Optic nerve",
        correctAnswer: "Blind spot",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The perpendicular drawn at the point of incidence on a mirror is called the ______.",
        optionA: "normal",
        optionB: "pole",
        optionC: "axis",
        correctAnswer: "normal",
      }),
      shuffleOptions({
        question: "A plane mirror always forms an image that is ______.",
        optionA: "inverted",
        optionB: "virtual and erect",
        optionC: "real",
        correctAnswer: "virtual and erect",
      }),
      shuffleOptions({
        question: "When light falls on a rough surface, ______ reflection occurs.",
        optionA: "regular",
        optionB: "diffused (irregular)",
        optionC: "shadow",
        correctAnswer: "diffused (irregular)",
      }),
      shuffleOptions({
        question: "The band of seven colours formed by splitting white light is called the ______.",
        optionA: "spectrum",
        optionB: "lens",
        optionC: "shadow",
        correctAnswer: "spectrum",
      }),
      shuffleOptions({
        question: "The coloured circular part of the eye is called the ______.",
        optionA: "pupil",
        optionB: "iris",
        optionC: "cornea",
        correctAnswer: "iris",
      }),
      shuffleOptions({
        question: "The eye lens is held in place by ______ muscles.",
        optionA: "optic",
        optionB: "ciliary",
        optionC: "fibre",
        correctAnswer: "ciliary",
      }),
      shuffleOptions({
        question: "The image formed on the back surface of the eye is on the ______.",
        optionA: "pupil",
        optionB: "retina",
        optionC: "iris",
        correctAnswer: "retina",
      }),
      shuffleOptions({
        question: "The ability of the eye to change its focal length is called ______.",
        optionA: "magnification",
        optionB: "accommodation",
        optionC: "reflection",
        correctAnswer: "accommodation",
      }),
      shuffleOptions({
        question: "The least distance of distinct vision for a normal eye is ______.",
        optionA: "15 cm",
        optionB: "25 cm",
        optionC: "35 cm",
        correctAnswer: "25 cm",
      }),
      shuffleOptions({
        question: "The reflection of light more than once from two mirrors is called ______.",
        optionA: "refraction",
        optionB: "multiple reflection",
        optionC: "dispersion",
        correctAnswer: "multiple reflection",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The angle of incidence is always equal to the angle of reflection.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Diffused reflection means the laws of reflection are not followed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A plane mirror forms a virtual and erect image.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Periscope works on the principle of reflection of light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sunlight consists of seven colours.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Retina contains cones for bright light and rods for dim light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Blind spot has no light-sensitive cells.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ciliary muscles help the eye adjust its focal length.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cataract occurs when the eye lens becomes cloudy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kaleidoscope works on the principle of refraction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
