export const chapter = "अध्याय -1: भारत प्यारा, देश हमारा";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "सही विकल्प पर टिक करें:",
    questions: [
        {
          "question": "भारत का देशनाम क्या है?",
          "optionA": "भारत रत्न",
          "optionB": "भारत प्यारा",
          "optionC": "भारत गंगा",
          "correctAnswer": "भारत प्यारा"
        },
        {
          "question": "कौन-कौन से स्थल भारत में सबसे सुंदर हैं?",
          "optionA": "यमुना",
          "optionB": "गंगा",
          "optionC": "ताजमहल",
          "correctAnswer": "ताजमहल"
        },
        {
          "question": "भारत के खेत किस रंग में होते हैं?",
          "optionA": "नीला",
          "optionB": "हरा",
          "optionC": "पीला",
          "correctAnswer": "हरा"
        },
        {
          "question": "भारतीय धरोहर में कौन-कौन से युगों के जोड़े गए हैं?",
          "optionA": "राम-सीता",
          "optionB": "कान्हा-गीता",
          "optionC": "तुलसी-रहीम",
          "correctAnswer": "राम-सीता"
        },
        {
          "question": "भारतीय संगीत के बारे में क्या कहा गया है?",
          "optionA": "सभी राग हिमाचल प्रदेश के हैं।",
          "optionB": "सभी ऋतुएं भारतीय संगीत के हिस्सा हैं।",
          "optionC": "सभी गाने भारतीय उपमहाद्वीप के हैं।",
          "correctAnswer": "सभी ऋतुएं भारतीय संगीत के हिस्सा हैं।"
        },
        {
          "question": "भारत के विकास में कौन-कौन से तत्व शामिल हैं?",
          "optionA": "तन-मन-धन",
          "optionB": "सागर-गंगा",
          "optionC": "गीता-रहीम",
          "correctAnswer": "तन-मन-धन"
        },
        {
          "question": "भारत का कौन-सा धरोहर सबसे अधिक महत्वपूर्ण माना जाता है?",
          "optionA": "ताजमहल",
          "optionB": "हरियाली",
          "optionC": "तुलसी",
          "correctAnswer": "हरियाली"
        },
        {
          "question": "भारतीय संस्कृति में किस भाषा का प्रमुख योगदान है?",
          "optionA": "अंग्रेज़ी",
          "optionB": "संस्कृत",
          "optionC": "फ़ारसी",
          "correctAnswer": "संस्कृत"
        },
        {
          "question": "कौन सा प्रोफेशन विशेष रूप से पाठ में वर्णित किया गया है जो वर्दी पहनता है?",
          "optionA": "छात्र",
          "optionB": "पुलिस",
          "optionC": "डॉक्टर",
          "correctAnswer": "पुलिस"
        },
        {
          "question": "शीतकालीन वस्त्र सामान्यतः किस उपकरण से बने होते हैं, पाठ के अनुसार?",
          "optionA": "कॉटन",
          "optionB": "ऊन",
          "optionC": "रेनकोट",
          "correctAnswer": "ऊन"
        }
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "रिक्त स्थान भरें:",
    questions: [
        {
          "question": "भारत प्यारा, _______ हमारा।",
          "optionA": "देश",
          "optionB": "गाँव",
          "optionC": "संगीत",
          "correctAnswer": "देश"
        },
        {
          "question": "सबसे सुंदर, सबसे _______ ।",
          "optionA": "नवाब",
          "optionB": "मस्ताना",
          "optionC": "न्यारा",
          "correctAnswer": "न्यारा"
        },
        {
          "question": "यहाँ खड़ा है हिमगिरि _______।",
          "optionA": "पार्वत",
          "optionB": "समुंदर",
          "optionC": "वन",
          "correctAnswer": "पार्वत"
        },
        {
          "question": "सागर सदा पाँव है _______।",
          "optionA": "सफाई",
          "optionB": "धोता",
          "optionC": "रोता",
          "correctAnswer": "धोता"
        },
        {
          "question": "गंगा की बहती है _______।",
          "optionA": "देश",
          "optionB": "पानी",
          "optionC": "धारा",
          "correctAnswer": "धारा"
        },
        {
          "question": "हरे-भरे हैं _______ हमारे।",
          "optionA": "खेल",
          "optionB": "पैसे",
          "optionC": "खेत",
          "correctAnswer": "खेत"
        },
        {
          "question": "यही दुलारा, सब _______ का",
          "optionA": "रंग",
          "optionB": "आग",
          "optionC": "ऋतुओं",
          "correctAnswer": "ऋतुओं"
        },
        {
          "question": "जनमें यहीं राम और _______।",
          "optionA": "सीता",
          "optionB": "राजा",
          "optionC": "किंवदंती",
          "correctAnswer": "सीता"
        },
        {
          "question": "तुलसी-रहीम सबका _______।",
          "optionA": "प्रेम",
          "optionB": "धर्म",
          "optionC": "प्यारा",
          "correctAnswer": "प्यारा"
        },
        {
          "question": "तन-मन-धन, _______ लुटाएँगे।",
          "optionA": "खजाना",
          "optionB": "प्राण",
          "optionC": "सोना",
          "correctAnswer": "प्राण"
        }
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "सत्य के लिए 'सत्य' और असत्य कथन के लिए 'असत्य' लिखें:",
    questions: [
        {
          "question": "भारत का देशनाम 'भारत रत्न' है।",
          "optionA": "सही",
          "optionB": "गलत",
          "correctAnswer": "गलत"
        },
        {
          "question": "ताजमहल भारत में सबसे सुंदर स्थलों में से एक है।",
          "optionA": "सही",
          "optionB": "गलत",
          "correctAnswer": "सही"
        },
        {
          "question": "भारत में खेत हरी-भरी होते हैं।",
          "optionA": "सही",
          "optionB": "गलत",
          "correctAnswer": "सही"
        },
        {
          "question": "राम और सीता का जन्म भारत में हुआ था।",
          "optionA": "सही",
          "optionB": "गलत",
          "correctAnswer": "सही"
        },
        {
          "question": "तुलसी और रहीम भारतीय संस्कृति के महत्वपूर्ण व्यक्तित्व हैं।",
          "optionA": "सही",
          "optionB": "गलत",
          "correctAnswer": "सही"
        },
        {
          "question": "भारत में अधिकांश धरोहर विदेशी हैं।",
          "optionA": "सही",
          "optionB": "गलत",
          "correctAnswer": "गलत"
        },
        {
          "question": "संविधान में भारत का राष्ट्रीय पक्षी 'मोर' घोषित किया गया है।",
          "optionA": "सही",
          "optionB": "गलत",
          "correctAnswer": "सही"
        },
        {
          "question": "भारतीय संस्कृति का प्रमुख योगदान संस्कृत भाषा ने किया है।",
          "optionA": "सही",
          "optionB": "गलत",
          "correctAnswer": "सही"
        },
        {
          "question": "पुलिस व्यक्तिगत वर्दी पहनती है।",
          "optionA": "सही",
          "optionB": "गलत",
          "correctAnswer": "गलत"
        },
        {
          "question": "शीतकालीन वस्त्र अधिकतर रेनकोट से बने होते हैं।",
          "optionA": "सही",
          "optionB": "गलत",
          "correctAnswer": "गलत"
        }
      ],
  };
}

export var activityData;
