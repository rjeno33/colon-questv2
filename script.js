/// ==============
//  Profiles
/// ==============

// ========================
// TEST FIXED PROFILE
// ========================

const testFixedProfile = {

    name: "TEST - Fixed Times",

    hospitalSites: [
        "Test Hospital - Fixed Times"
    ],

    regimens: {

        am: {

            fixedPrepTimes: true,
            dietStartDays: 4,

            medications: [
            ],

            waterTasks: false,
            sennaTasks: false,
            waterAfterPrep: true,
            fastingTime: "14:00",

            prepSchedule: [

                {
                    dayBefore: 1,
                    time: "18:10",
                    text: "TEST - First dose"
                },

                {
                    dayBefore: 0,
                    time: "03:20",
                    text: "TEST - Second dose"
                }

            ]

        },

        pm: {

            fixedPrepTimes: true,
            dietStartDays: 4,

            medications: [
            ],

            waterTasks: false,
            sennaTasks: false,
            waterAfterPrep: true,
            fastingTime: "16:00",

            prepSchedule: [

                {
                    dayBefore: 1,
                    time: "20:20",
                    text: "TEST - First dose"
                },

                {
                    dayBefore: 0,
                    time: "06:40",
                    text: "TEST - Second dose"
                }

            ]

        },

        evening: {

            fixedPrepTimes: true,
            dietStartDays: 4,

            medications: [
            ],

            waterTasks: false,
            sennaTasks: false,
            waterAfterPrep: true,
            fastingTime: "20:00",

            prepSchedule: [

                {
                    dayBefore: 0,
                    time: "08:30",
                    text: "TEST - First dose"
                },

                {
                    dayBefore: 0,
                    time: "12:50",
                    text: "TEST - Second dose"
                }

            ]

        }

    }

};

// ========================
// TEST FLEXIBLE PROFILE
// ========================


const testFlexibleProfile = {
    name: "TEST - Flexible Times",

        minAppointmentTime: "08:00",
    maxAppointmentTime: "21:00",

    hospitalSites: ["Test Hospital - Flexible"],

    bowelPreps: {

        moviprep: {
            name: "Moviprep",

            regimens: {
                am: {
                    fixedPrepTimes: true,
                    dietStartDays: 3,
                    medications: [],
                    waterTasks: false,
                    sennaStartDays: 3,
                     sennaTasks: true,
                    waterAfterPrep: true,
                    fastingTime: "14:30",

                    prepSchedule: [
                        {
                            dayBefore: 1,
                            time: "19:00",
                            text: "Mix Dose 1 of Moviprep as instructed in your approved preparation booklet and drink your first dose as directed",
                            additionalWater: 500
                        },
                        {
                            dayBefore: 0,
                            time: {
                                hoursBeforeAppointment: 5
                            },
                            text: "Mix Dose 2 of Moviprep as instructed in your approved preparation booklet and drink your second dose as directed",
                            additionalWater: 500
                        }
                    ]
                },

                pm: {
                    fixedPrepTimes: true,
                    dietStartDays: 3,
                    medications: [],
                    waterTasks: false,
                    sennaStartDays: 3,
                     sennaTasks: true,
                    waterAfterPrep: true,
                    fastingTime: "16:30",

                    prepSchedule: [
                        {
                            dayBefore: 1,
                            time: "19:00",
                            text: "Mix Dose 1 of Moviprep as instructed in your approved preparation booklet and drink your first dose as directed",
                            additionalWater: 500
                        },
                        {
                            dayBefore: 0,
                            time: {
                                hoursBeforeAppointment: 5
                            },
                            text: "Mix Dose 2 of Moviprep as instructed in your approved preparation booklet and drink your second dose as directed",
                            additionalWater: 500
                        }
                    ]
                },

                evening: {
                    fixedPrepTimes: true,
                    dietStartDays: 3,
                    medications: [],
                    waterTasks: false,
                    sennaTasks: false,
                    waterAfterPrep: true,
                    fastingTime: "20:30",

                    prepSchedule: [
                        {
                            dayBefore: 0,
                            time: "08:00",
                            text: "Mix Dose 1 of Moviprep as instructed in your approved preparation booklet and drink your first dose as directed",
                            additionalWater: 500
                        },
                        {
                            dayBefore: 0,
                            time: {
                                hoursBeforeAppointment: 5
                            },
                            text: "Mix Dose 2 of Moviprep as instructed in your approved preparation booklet and drink your second dose as directed",
                            additionalWater: 500
                        }
                    ]
                }
            }
        },

        plenvu: {
            name: "Plenvu",

            regimens: {
                am: {
                    fixedPrepTimes: true,
                    dietStartDays: 3,
                    medications: [],
                    waterTasks: false,
                    sennaTasks: true,
                    sennaStartDays: 3,
                    waterAfterPrep: true,
                    fastingTime: "14:30",

                    prepSchedule: [
                        {
                            dayBefore: 1,
                            time: "19:00",
                            text: "Mix Dose 1 of Plenvu with 500mls of water and drink your first dose over the next 60 minutes",
                            additionalWater: 500
                        },
                        {
                            dayBefore: 0,
                            time: {
                                hoursBeforeAppointment: 5
                            },
                            text: "Mix Dose 2 of Plenvu with 500mls of water and drink your second dose over the next 60 minutes",
                            additionalWater: 500
                        }
                    ]
                },

                pm: {
                    fixedPrepTimes: true,
                    dietStartDays: 3,
                    medications: [],
                    waterTasks: false,
                    sennaTasks: true,
                    sennaStartDays: 3,
                    waterAfterPrep: true,
                    fastingTime: "16:30",

                    prepSchedule: [
                        {
                            dayBefore: 1,
                            time: "19:00",
                            text: "Mix Dose 1 of Plenvu with 500mls of water and drink your first dose over the next 60 minutes",
                            additionalWater: 500
                        },
                        {
                            dayBefore: 0,
                            time: {
                                hoursBeforeAppointment: 5
                            },
                            text: "Mix Dose 2 of Plenvu with 500mls of water and drink your second dose over the next 60 minutes",
                            additionalWater: 500
                        }
                    ]
                },

                evening: {
                    fixedPrepTimes: true,
                    dietStartDays: 3,
                    medications: [],
                    waterTasks: false,
                    sennaTasks: true,
                    sennaStartDays: 3,
                    waterAfterPrep: true,
                    fastingTime: "20:30",

                    prepSchedule: [
                        {
                            dayBefore: 0,
                            time: "08:00",
                            text: "Mix Dose 1 of Plenvu with 500mls of water and drink your first dose over the next 60 minutes",
                            additionalWater: 500
                        },
                        {
                            dayBefore: 0,
                            time: {
                                hoursBeforeAppointment: 5
                            },
                            text: "Mix Dose 2 of Plenvu with 500mls of water and drink your second dose over the next 60 minutes",
                            additionalWater: 500
                        }
                    ]
                }
            }
        }
    }
};




// =========================
// SHEFFIELD PROFILE
// =========================

const sheffieldProfile = {

    name: "Sheffield",

    minAppointmentTime: "08:00",
maxAppointmentTime: "21:00",

medications: {

    iron: {
        enabled: true,
        stopDaysBefore: 7,
        instruction: "Stop taking oral iron."
    },

    mounjaro: {
        enabled: true,
        stopDaysBefore: 7,
        instruction: "Stop taking Mounjaro."
    },

        loperamide: {
        enabled: true,
        stopDaysBefore: 2,
        instruction: "Stop taking loperamide."
    },

    ramipril: {
        enabled:true,
        stopDaysBefore:0,
        instruction: "Do not take Ramipril today and for 2 days after your procedure."
    }

},

    // =========================
// Diabetes protocols
// =========================

diabetes: {
 
    enabled: true,

    type1: {

                 mixedInsulin: {
                      dayBefore: "Reduce your evening dose of {medication} by 50%.",
                      dayOfTest: "Reduce your morning dose of {medication} by 50%."
},

backgroundInsulin: {

    dayBefore: "Reduce your evening dose of {medication} by 25%.",

    dayOfTest: "Reduce your morning dose of {medication} by 25%."

},

       veryLongInsulin: {

           dayBefore: "Take your {medication} as usual.",

            dayOfTest: "Take your {medication} as usual."

},

         quickInsulin: {
    
                   dayBefore: "If you are not eating, do not take your {medication}.",
    
                    dayOfTest: "If you are not eating, do not take your {medication}."
},

        otherTablets: {

            dayBefore: "Take non sglt2 diabetes tablets as usual whilst eating, once on fluids only stop taking these medications",

            dayOfTest: "Do not take non sglt2 diabetes tablets until after your test"
        },

        tablets: {
    metformin: {
        dayBefore: "Take your {medication} as usual while eating. Once on fluids only, stop taking it.",
        dayOfTest: "Do not take your {medication}."
    },
    yaltorminSR: {
        dayBefore: "Take your {medication} as usual while eating. Once on fluids only, stop taking it.",
        dayOfTest: "Do not take your {medication}."
    },
    gliclazide: {
        dayBefore: "Take your {medication} as usual while eating. Once on fluids only, stop taking it.",
        dayOfTest: "Do not take your {medication}."
    },
    sitagliptin: {
        dayBefore: "Take your {medication} as usual while eating. Once on fluids only, stop taking it.",
        dayOfTest: "Do not take your {medication}."
    },
    linagliptin: {
        dayBefore: "Take your {medication} as usual while eating. Once on fluids only, stop taking it.",
        dayOfTest: "Do not take your {medication}."
    },
    pioglitazone: {
        dayBefore: "Take your {medication} as usual while eating. Once on fluids only, stop taking it.",
        dayOfTest: "Do not take your {medication}."
    },
    otherTablet: {
        dayBefore: "Take your {medication} as usual while eating. Once on fluids only, stop taking it.",
        dayOfTest: "Do not take your {medication}."
    }
},

        glp1: {}

    },

    type2: {

           sglt2: {
               
                  dayBefore: "Do not take your {medication} today.",
               
                  dayOfTest: "Do not take your {medication} until after your test."
},

        otherTablets: {

            dayBefore: "Take non sglt2 diabetes tablets as usual whilst eating, once on fluids only stop taking these medications",

            dayOfTest: "Do not take non sglt2 diabetes tablets until after your test"
        },

       tablets: {
    metformin: {
        dayBefore: "Take your {medication} as usual while eating. Once on fluids only, stop taking it.",
        dayOfTest: "Do not take your {medication}."
    },

    yaltorminSR: {
        dayBefore: "Take your {medication} as usual while eating. Once on fluids only, stop taking it.",
        dayOfTest: "Do not take your {medication}."
    },

    gliclazide: {
        dayBefore: "Take your {medication} as usual while eating. Once on fluids only, stop taking it.",
        dayOfTest: "Do not take your {medication}."
    },

    sitagliptin: {
        dayBefore: "Take your {medication} as usual while eating. Once on fluids only, stop taking it.",
        dayOfTest: "Do not take your {medication}."
    },

    linagliptin: {
        dayBefore: "Take your {medication} as usual while eating. Once on fluids only, stop taking it.",
        dayOfTest: "Do not take your {medication}."
    },

    pioglitazone: {
        dayBefore: "Take your {medication} as usual while eating. Once on fluids only, stop taking it.",
        dayOfTest: "Do not take your {medication}."
    },

    otherTablet: {
        dayBefore: "Take your {medication} as usual while eating. Once on fluids only, stop taking it.",
        dayOfTest: "Do not take your {medication}."
    }
},

           mixedInsulin: {
               
                    dayBefore: "Reduce your evening dose of {medication} by 50%.",
               
                    dayOfTest: "Do not take your morning dose of {medication}."
},

         backgroundInsulin: {

    dayBefore: "Reduce your evening dose of {medication} by 25%.",

    dayOfTest: "Reduce your morning dose of {medication} by 25%."

},

               veryLongInsulin: {

                    dayBefore: "Take your {medication} as usual.",

                    dayOfTest: "Take your {medication} as usual."

},

                 quickInsulin: {
                               
                         dayBefore: "If you are not eating, do not take your {medication}.",
                        
                         dayOfTest: "If you are not eating, do not take your {medication}."
},

        glp1: {}

    }

},

    
    hospitalSites: [
        "Northern General Hospital",
        "Royal Hallamshire Hospital"
    ],

    
    patientSupport: {
    enabled: true,

    tips: [
        "Some people find keeping the prep chilled makes it more palatable.",
        "Try drinking through a straw.",
        "Have a preferred approved fluid to drink alongside your prep.",
        "Take it slow and steady. Trying to rush can make you feel nauseous or risk vomiting.",
        "Ensure you drink all your prep even if your bowel movements are only liquid."
    ],

    importantMessage:
        "Failure to drink all the prep can risk your procedure being cancelled or requiring a repeat procedure.",

    preAssessment: {
        message:
            "If you have any concerns before your procedure contact our preassessment team on  0114 2269174",
        telephone: "0114 2269174"
    },

    bookingHub: {
        message:
            "If you need to rearrange or cancel your procedure contact our booking hub on 0114 2712166",
        telephone: "0114 2712166"
    }
},

    patientInformation: {

        lowResidueDiet: {
            enabled: true
        }

    },
    

    bowelPreps: {

        // =========================
        // PLENVU
        // =========================

        plenvu: {

            name: "Plenvu",

            regimens: {

                am: {

                    fixedPrepTimes: true,
                    dietStartDays: 2,

                    medications: [
                    ],

                    waterTasks: false,
                    sennaTasks: false,
                    waterAfterPrep: true,
                    fastingTime: "15:00",

                    prepSchedule: [

                        {
                            dayBefore: 1,
                            time: "19:00",
                            text: "Mix Dose 1 of Plenvu with 500mls of water and drink your first dose of Plenvu over the next 60 minutes",
                            additionalWater: 500
                        },

                        {
                            dayBefore: 0,
                            time: "04:00",
                            text: "Mix Dose 2 of Plenvu with 500mls of water and drink your second dose of Plenvu over the next 60 minutes",
                            additionalWater: 500
                        }

                    ]

                },

                pm: {

                    fixedPrepTimes: true,
                    dietStartDays: 2,

                    medications: [
                    ],

                    waterTasks: false,
                    sennaTasks: false,
                    waterAfterPrep: true,
                    fastingTime: "15:00",

                    prepSchedule: [

                        {
                            dayBefore: 1,
                            time: "19:00",
                            text: "Mix Dose 1 of Plenvu with 500mls of water and drink your first dose of Plenvu over the next 60 minutes",
                            additionalWater:500
                        },

                        {
                            dayBefore: 0,
                            time: "08:00",
                            text: "Mix Dose 2 of Plenvu with 500mls of water and drink your second dose of Plenvu over the next 60 minutes",
                            additionalWater:500
                        }

                    ]

                },

                evening: {

                    fixedPrepTimes: true,
                    dietStartDays: 2,

                    medications: [
                    ],

                    waterTasks: false,
                    sennaTasks: false,
                    waterAfterPrep: true,
                    fastingTime: "21:00",

                    prepSchedule: [

                        {
                            dayBefore: 0,
                            time: "07:00",
                            text: "Mix Dose 1 of Plenvu with 500mls of water and drink your first dose of Plenvu over the next 60 minutes",
                            additionalWater:500
                        },

                        {
                            dayBefore: 0,
                            time: "11:00",
                            text: "Mix Dose 2 of Plenvu with 500mls of water and drink your second dose of Plenvu over the next 60 minutes",
                            additionalWater:500
                        }

                    ]

                }

            }

        },


        // =========================
        // MOVIPREP
        // =========================

        moviprep: {

            name: "Moviprep",

            regimens: {

                am: {

                    fixedPrepTimes: true,
                    fastingTime: "15:00",
                    waterTasks: false,
                    sennaTasks: false,
                    waterAfterPrep: true,
                    medications: [],

                    prepSchedule: [

                        {
                            dayBefore: 1,
                            time: "19:00",
                            text: "Mix first dose of Moviprep with 1L of water and drink this over the next 60 minutes",
                            additionalWater:500
                        },

                        {
                            dayBefore: 0,
                            time: "04:00",
                            text: "Mix second dose of Moviprep with 1L of water and drink this over the next 60 minutes",
                            additionalWater:500
                        }

                    ]

                },

                pm: {

                    fixedPrepTimes: true,
                    fastingTime: "15:00",
                    waterTasks: false,
                    sennaTasks: false,
                    waterAfterPrep: true,
                    medications: [],

                    prepSchedule: [

                        {
                            dayBefore: 1,
                            time: "19:00",
                            text: "Mix first dose of Moviprep with 1L of water and drink this over the next 60 minutes",
                            additionalWater:500
                        },

                        {
                            dayBefore: 0,
                            time: "08:00",
                            text: "Mix second dose of Moviprep with 1L of water and drink this over the next 60 minutes",
                            additionalWater:500
                        }

                    ]

                },

                evening: {

                    fixedPrepTimes: true,
                    fastingTime: "21:00",
                    waterTasks: false,
                    sennaTasks: false,
                    waterAfterPrep: true,
                    medications: [],

                    prepSchedule: [

                        {
                            dayBefore: 0,
                            time: "07:00",
                            text: "Mix first dose of Moviprep with 1L of water and drink this over the next 60 minutes",
                            additionalWater:500
                        },

                        {
                            dayBefore: 0,
                            time: "12:00",
                            text: "Mix second dose of Moviprep with 1L of water and drink this over the next 60 minutes",
                            additionalWater:500
                        }

                    ]

                }

            }

        },


        // =========================
        // PICOLAX
        // =========================

        picolax: {

            name: "Picolax",

            regimens: {

                am: {

                    fixedPrepTimes: true,
                    fastingTime: null,
                    waterTasks: false,
                    sennaTasks: false,
                    waterAfterPrep: true,
                    medications: [],

                    prepSchedule: [

                        {
                            dayBefore: 1,
                            time: "17:00",
                            text: "Mix your first dose of picolax with 150mls of water and drink this.",
                            additionalWater:1000
                        },

                        {
                            dayBefore: 0,
                            time: "03:00",
                            text: "Mix your second dose of picolax with 150mls of water and drink this.",
                            additionalWater:1000
                        }

                    ]

                },

                pm: {

                    fixedPrepTimes: true,
                    fastingTime: "17:00",
                    waterTasks: false,
                    sennaTasks: false,
                    waterAfterPrep: true,
                    medications: [],

                    prepSchedule: [

                        {
                            dayBefore: 1,
                            time: "19:00",
                            text: "Mix your first dose of picolax with 150mls of water and drink this.",
                            additionalWater:1000
                        },

                        {
                            dayBefore: 0,
                            time: "08:00",
                            text: "Mix your second dose of picolax with 150mls of water and drink this.",
                            additionalWater:1000
                        }

                    ]

                },

                evening: {

                    fixedPrepTimes: true,
                    fastingTime: null,
                    waterTasks: false,
                    sennaTasks: false,
                    waterAfterPrep: true,
                    medications: [],

                    prepSchedule: [

                        {
                            dayBefore: 0,
                            time: "06:00",
                            text: "Mix your first dose of picolax with 150mls of water and drink this.",
                            additionalWater:1000
                        },

                        {
                            dayBefore: 0,
                            time: "11:30",
                            text: "Mix your second dose of picolax with 150mls of water and drink this.",
                            additionalWater:1000
                        }

                    ]

                }

            }

        },


        // =========================
        // EXTENDED PREP
        // =========================

        extended: {

            name: "Extended prep – 6 sachets Moviprep",

            regimens: {

                am: {

                    fixedPrepTimes: true,
                    fastingTime: "12:00",
                    waterTasks: false,
                    sennaTasks: false,
                    waterAfterPrep: false,
                    dietStartDays: 2,
                    medications: [],

                    prepSchedule: [

                        {
                            dayBefore: 1,
                            time: "14:00",
                            text: "Mix your first dose of Moviprep with 1L of water and drink over the next 60 minutes",
                            additionalWater:500
                        },

                        {
                            dayBefore: 1,
                            time: "17:00",
                            text: "Mix your second dose of Moviprep with 1L of water and drink over the next 60 minutes",
                            additionalWater:500
                        },

                        {
                            dayBefore: 0,
                            time: "04:00",
                            text: "Mix your third dose of Moviprep with 1L of water and drink over the next 60 minutes",
                            additionalWater:500
                        }

                    ]

                },

                pm: {

                    fixedPrepTimes: true,
                    fastingTime: "12:00",
                    waterTasks: false,
                    sennaTasks: false,
                    waterAfterPrep: false,
                    dietStartDays: 2,
                    medications: [],

                    prepSchedule: [

                        {
                            dayBefore: 1,
                            time: "17:00",
                            text: "Mix your first dose of Moviprep with 1L of water and drink over the next 60 minutes",
                            additionalWater:500
                        },

                        {
                            dayBefore: 1,
                            time: "19:00",
                            text: "Mix your second dose of Moviprep with 1L of water and drink over the next 60 minutes",
                            additionalWater:500
                        },

                        {
                            dayBefore: 0,
                            time: "09:00",
                            text: "Mix your third dose of Moviprep with 1L of water and drink over the next 60 minutes",
                            additionalWater:500
                        }

                    ]

                },

                evening: {

                    fixedPrepTimes: true,
                    fastingTime: "12:00",
                    waterTasks: false,
                    sennaTasks: false,
                    waterAfterPrep: false,
                    dietStartDays: 2,
                    medications: [],

                    prepSchedule: [

                        {
                            dayBefore: 1,
                            time: "17:00",
                            text: "Mix your first dose of Moviprep with 1L of water and drink over the next 60 minutes",
                            additionalWater:500
                        
                        },

                        {
                            dayBefore: 1,
                            time: "19:00",
                            text: "Mix your second dose of Moviprep with 1L of water and drink over the next 60 minutes",
                            additionalWater:500
                        },

                        {
                            dayBefore: 0,
                            time: "13:00",
                            text: "Mix your third dose of Moviprep with 1L of water and drink over the next 60 minutes",
                            additionalWater:500
                        }

                    ]

                }

            }

        }

    }

};
    


// =========================
// Active Profile
// =========================

const path = 
    window.location.pathname;

let activeProfile = null;

if (path.startsWith("/sheffield")) {
    activeProfile = sheffieldProfile;
}

if (path.startsWith("/chesterfield")) {
    activeProfile = chesterfieldProfile;
}


// =========================
// Variables
// =========================


const profileSelect =
    document.getElementById("profileSelect");

const siteSelect =
    document.getElementById("siteSelect");

const prepSelect =
    document.getElementById("prepSelect");



const createPlanButton =
    document.getElementById("createPlanButton");

const appointmentDate =
    document.getElementById("appointmentDate");

const clearDateButton =
    document.getElementById("clearDateButton");

const plan =
    document.getElementById("plan");

const ironSelect =
    document.getElementById("ironSelect");

const anticoagulationSelect =
    document.getElementById("anticoagulationSelect");

const medicationPathway =
    document.getElementById("medicationPathway");

// =========================
// Steroid selection
// =========================

const steroidSelect =
    document.getElementById("steroidSelect");

const steroidDoseBox =
    document.getElementById("steroidDoseBox");

const steroidDose =
    document.getElementById("steroidDose");


// Show or hide steroid dose input

steroidSelect.addEventListener("change", function() {

    if (steroidSelect.checked) {

        steroidDoseBox.style.display = "block";

    } else {

        steroidDoseBox.style.display = "none";
        steroidDose.value = "";

    }

});


// =========================
// Diabetes selection
// =========================

const diabetesType =
    document.getElementById("diabetesType");

const type1DiabetesBox =
    document.getElementById("type1DiabetesBox");

const type2DiabetesBox =
    document.getElementById("type2DiabetesBox");


// Show the correct diabetes medication options

diabetesType.addEventListener("change", function() {

    // Clear all previous Type 1 selections
    type1DiabetesBox
        .querySelectorAll('input[type="checkbox"], select')
        .forEach(function(element) {

            if (element.type === "checkbox") {
                element.checked = false;
            } else {
                element.value = "";
            }

        });


    // Clear all previous Type 2 selections
    type2DiabetesBox
        .querySelectorAll('input[type="checkbox"], select')
        .forEach(function(element) {

            if (element.type === "checkbox") {
                element.checked = false;
            } else {
                element.value = "";
            }

        });


    // Hide both medication sections
    type1DiabetesBox.style.display = "none";
    type2DiabetesBox.style.display = "none";


    // Show Type 1 options
    if (diabetesType.value === "type1") {
        type1DiabetesBox.style.display = "block";
    }


    // Show Type 2 options
    else if (diabetesType.value === "type2") {
        type2DiabetesBox.style.display = "block";
    }

});

// =========================
// Background insulin selection
// =========================

const type1BackgroundInsulin =
    document.getElementById("type1BackgroundInsulin");

const type1BackgroundInsulinNameBox =
    document.getElementById("type1BackgroundInsulinNameBox");

const type2BackgroundInsulin =
    document.getElementById("type2BackgroundInsulin");

const type2BackgroundInsulinNameBox =
    document.getElementById("type2BackgroundInsulinNameBox");


// Type 1

type1BackgroundInsulin.addEventListener("change", function() {

    type1BackgroundInsulinNameBox.style.display =
        type1BackgroundInsulin.checked ? "block" : "none";

});


// Type 2

type2BackgroundInsulin.addEventListener("change", function() {

    type2BackgroundInsulinNameBox.style.display =
        type2BackgroundInsulin.checked ? "block" : "none";

});

// =========================
// Very long-acting insulin selection
// =========================

const type1VeryLongInsulin =
    document.getElementById("type1VeryLongInsulin");

const type1VeryLongInsulinNameBox =
    document.getElementById("type1VeryLongInsulinNameBox");

const type2VeryLongInsulin =
    document.getElementById("type2VeryLongInsulin");

const type2VeryLongInsulinNameBox =
    document.getElementById("type2VeryLongInsulinNameBox");


// Type 1

type1VeryLongInsulin.addEventListener("change", function() {

    type1VeryLongInsulinNameBox.style.display =
        type1VeryLongInsulin.checked ? "block" : "none";

});


// Type 2

type2VeryLongInsulin.addEventListener("change", function() {

    type2VeryLongInsulinNameBox.style.display =
        type2VeryLongInsulin.checked ? "block" : "none";

});

// =========================
// Quick-acting insulin selection
// =========================

const type1QuickInsulin =
    document.getElementById("type1QuickInsulin");

const type1QuickInsulinNameBox =
    document.getElementById("type1QuickInsulinNameBox");

const type2QuickInsulin =
    document.getElementById("type2QuickInsulin");

const type2QuickInsulinNameBox =
    document.getElementById("type2QuickInsulinNameBox");

// Type 1
type1QuickInsulin.addEventListener("change", function() {
    type1QuickInsulinNameBox.style.display =
        type1QuickInsulin.checked ? "block" : "none";
});

// Type 2
type2QuickInsulin.addEventListener("change", function() {
    type2QuickInsulinNameBox.style.display =
        type2QuickInsulin.checked ? "block" : "none";
});

// =========================
// Mixed insulin selection
// =========================

const type1MixedInsulin =
    document.getElementById("type1MixedInsulin");

const type1MixedInsulinNameBox =
    document.getElementById("type1MixedInsulinNameBox");

const type2MixedInsulin =
    document.getElementById("type2MixedInsulin");

const type2MixedInsulinNameBox =
    document.getElementById("type2MixedInsulinNameBox");

// Type 1
type1MixedInsulin.addEventListener("change", function() {
    type1MixedInsulinNameBox.style.display =
        type1MixedInsulin.checked ? "block" : "none";
});

// Type 2
type2MixedInsulin.addEventListener("change", function() {
    type2MixedInsulinNameBox.style.display =
        type2MixedInsulin.checked ? "block" : "none";
});


// =========================
// SGLT2 selection
// =========================

const type2Sglt2 =
    document.getElementById("type2Sglt2");

const type2Sglt2NameBox =
    document.getElementById("type2Sglt2NameBox");

type2Sglt2.addEventListener("change", function() {
    type2Sglt2NameBox.style.display =
        type2Sglt2.checked ? "block" : "none";
});

// =========================
// Other diabetes tablets selection
// =========================

const type2OtherTablets =
    document.getElementById("type2OtherTablets");

const type2TabletsBox =
    document.getElementById("type2TabletsBox");

type2OtherTablets.addEventListener("change", function() {

    type2TabletsBox.style.display =
        type2OtherTablets.checked ? "block" : "none";

    // Clear individual selections when parent is unticked
    if (!type2OtherTablets.checked) {

        type2TabletsBox
            .querySelectorAll('input[type="checkbox"]')
            .forEach(function(checkbox) {
                checkbox.checked = false;
            });

    }

});

const type1OtherTablets =
    document.getElementById("type1OtherTablets");

const type1TabletsBox =
    document.getElementById("type1TabletsBox");

type1OtherTablets.addEventListener("change", function() {

    type1TabletsBox.style.display =
        type1OtherTablets.checked ? "block" : "none";

    // Clear individual selections when parent is unticked
    if (!type1OtherTablets.checked) {

        type1TabletsBox
            .querySelectorAll('input[type="checkbox"]')
            .forEach(function(checkbox) {
                checkbox.checked = false;
            });

    }

});

//=============================
// Anticoagulation Protocols
//=============================

const anticoagulationNames = {

    apixaban: "Apixaban",
    edoxaban: "Edoxaban",
    rivaroxaban: "Rivaroxaban"

};

const anticoagulationProtocols = {

    doac: {

        name: "Apixaban / Edoxaban / Rivaroxaban",

        pathways: {

            dayOfTest: {
                name: "Do not take on day of test",
                instructions: [
                    {
                        day: 0,
                        text: "Do not take your DOAC."
                    }
                ]
            },

            lastDoseDay3: {
                name: "Last dose 3 days before endoscopy",
                instructions: [
                    {
                        day: -3,
                        text: "Take your usual DOAC. This is your last dose."
                    },
                    {
                        day: -2,
                        text: "Do not take your DOAC."
                    },
                    {
                        day: -1,
                        text: "Do not take your DOAC."
                    },
                    {
                        day: 0,
                        text: "Do not take your DOAC."
                    }
                ]
            },

            aspirin: {
                name: "Aspirin substitution pathway",
                instructions: [
                    {
                        day: -3,
                        text: "Take Aspirin 300mg and your usual DOAC. This is your last dose of DOAC."
                    },
                    {
                        day: -2,
                        text: "Take Aspirin 75mg. Do not take your DOAC."
                    },
                    {
                        day: -1,
                        text: "Take Aspirin 75mg. Do not take your DOAC."
                    },
                    {
                        day: 0,
                        text: "Take Aspirin 75mg. Do not take your DOAC."
                    }
                ]
            }

        }

    },

    dabigatran: {

        name: "Dabigatran",

        pathways: {

            dayOfTest: {
                name: "Do not take on day of test",
                instructions: [
                    {
                        day: 0,
                        text: "Do not take Dabigatran."
                    }
                ]
            },

            lastDoseDay3: {
                name: "Last dose 3 days before endoscopy",
                instructions: [
                    {
                        day: -3,
                        text: "Take your usual Dabigatran. This is your last dose."
                    },
                    {
                        day: -2,
                        text: "Do not take Dabigatran."
                    },
                    {
                        day: -1,
                        text: "Do not take Dabigatran."
                    },
                    {
                        day: 0,
                        text: "Do not take Dabigatran."
                    }
                ]
            },

            lastDoseDay5: {
                name: "Last dose 5 days before endoscopy",
                instructions: [
                    {
                        day: -5,
                        text: "Take your usual Dabigatran. This is your last dose."
                    },
                    {
                        day: -4,
                        text: "Do not take Dabigatran."
                    },
                    {
                        day: -3,
                        text: "Do not take Dabigatran."
                    },
                    {
                        day: -2,
                        text: "Do not take Dabigatran."
                    },
                    {
                        day: -1,
                        text: "Do not take Dabigatran."
                    },
                    {
                        day: 0,
                        text: "Do not take Dabigatran."
                    }
                ]
            }

        }

    },

    clopidogrel: {

        name: "Clopidogrel",

        pathways: {

            continue: {
                name: "Continue as usual",
                instructions: [
                    {
                        day: 0,
                        text: "You do not need to stop taking your clopidogrel for this procedure. Continue to take it as usual."
                    }
                ]
            },

            stopDay7: {
                name: "Stop 7 days before endoscopy",
                instructions: [
                    {
                        day: -7,
                        text: "Stop taking Clopidogrel."
                    }
                ]
            }

        }

    },

    warfarin: {

        name: "Warfarin",

        pathways: {

            continue: {
                name: "Continue — INR checked on day of test",
                instructions: [
                    {
                        day: 0,
                        text: "Continue your usual Warfarin. Your INR will be checked on the day of your test."
                    }
                ]
            },

            interrupt: {
                name: "Requires interruption",
                suitableForColonQuest: false
            }

        }

    }

};

// =========================
// Anticoagulation pathway
// =========================

anticoagulationSelect.addEventListener("change", function () {

    showAnticoagulationPathways();

});


function showAnticoagulationPathways() {

    const medication =
        anticoagulationSelect.value;

    medicationPathway.innerHTML = "";

    if (medication === "" || medication === "none") {
        return;
    }

    let protocolKey = medication;

    if (
        medication === "apixaban" ||
        medication === "edoxaban" ||
        medication === "rivaroxaban"
    ) {
        protocolKey = "doac";
    }

    const protocol =
        anticoagulationProtocols[protocolKey];

    if (!protocol) {
        return;
    }

    const pathwayKeys =
        Object.keys(protocol.pathways);

    if (pathwayKeys.length === 0) {
        return;
    }

    let options = `
        <option value="">
            -- Select Medication Protocol --
        </option>
    `;

    pathwayKeys.forEach(function (pathwayKey) {

        const pathway =
            protocol.pathways[pathwayKey];

        options += `
            <option value="${pathwayKey}">
                ${pathway.name}
            </option>
        `;

    });

    medicationPathway.innerHTML = `
        <label for="pathwaySelect">
            Select the medication pathway
        </label>

        <select id="pathwaySelect">
            ${options}
        </select>
    `;

}

//==========================
// Get Anticoagulation Tasks
//==========================

function getAnticoagulationTasks(day) {

    const medication =
        anticoagulationSelect.value;

    if (medication === "" || medication === "none") {
        return [];
    }

    const pathwaySelect =
        document.getElementById("pathwaySelect");

    if (!pathwaySelect) {
        return [];
    }

    const pathwayKey =
        pathwaySelect.value;

    let protocolKey = medication;

    if (
        medication === "apixaban" ||
        medication === "edoxaban" ||
        medication === "rivaroxaban"
    ) {
        protocolKey = "doac";
    }

    const protocol =
        anticoagulationProtocols[protocolKey];

    if (!protocol) {
        return [];
    }

    const pathway =
        protocol.pathways[pathwayKey];

    if (!pathway || !pathway.instructions) {
        return [];
    }

    const instructions =
        pathway.instructions.filter(function (instruction) {

            return instruction.day === day;

        });

    return instructions.map(function (instruction) {

        let text = instruction.text;

        if (anticoagulationNames[medication]) {

            text = text.replaceAll(
                "DOAC",
                anticoagulationNames[medication]
            );

        }

        return {
            type: "medication",
            text: text
        };

    });

}




//===============================
// Patient Support
//===============================


function addPatientSupport(profile) {

    const support = profile.patientSupport;

    // Do not display support if disabled or missing
    if (!support || !support.enabled) {
        return;
    }

    let html = "";

    html += "<div class='patientSupport'>";

    html += "<h2>Tips for taking your bowel preparation</h2>";

    html += "<ul>";

    support.tips.forEach(function(tip) {
        html += "<li>" + tip + "</li>";
    });

    html += "</ul>";

    html += "<div class='importantMessage'>";

    html += "<strong>Important:</strong> ";

    html += support.importantMessage;

    html += "</div>";

    html += "<h2>Need help before your procedure?</h2>";

    html += "<p>";

    html += "<strong>Pre-assessment team</strong><br>";

    html += support.preAssessment.message;

    html += "</p>";

    html += "<p>";

    html += "<strong>Booking hub</strong><br>";

    html += support.bookingHub.message;

    html += "</p>";

    // Plan preparation and checking sign-off

    html += "<div class='planSignOff'>";

    html += "<p><strong>Plan generated by:</strong></p>";

    html += "<p>____________________________________________</p>";

    html += "<p><strong>Plan checked by:</strong></p>";

    html += "<p>____________________________________________</p>";

    html += "</div>";
    
    html += "</div>";

    plan.innerHTML += html;
}


//===============================
// Low Residue Diet Information
//===============================

function addLowResidueDiet(profile) {

    // Check whether this hospital has enabled the diet page

    const diet = profile.patientInformation?.lowResidueDiet;

    if (!diet || !diet.enabled) {
        return;
    }

    let html = "";

    html += "<div class='lowResidueDietPage'>";

    // Page heading

    html += "<div class='dietHeader'>";

    html += "<h1>COLON QUEST</h1>";

    html += "<p>Patient Colonoscopy Preparation Plan</p>";

    html += "<h2>Low Residue Diet</h2>";

    html += "<p>IMPORTANT DIETARY INFORMATION</p>";

    html += "</div>";

    // Introduction

    html += "<div class='dietIntroduction'>";

    html += "<h3>Why is this important?</h3>";

    html += "<p>You have been referred for an examination of your large bowel. To ensure a successful examination it is very important that your bowel is totally empty. Fibre in your diet takes a long time to be digested and can still be present in your bowel even after taking all of your bowel preparation.</p>";

    html += "</div>";

    // When to follow the diet

    html += "<div class='dietReminder'>";

    html += "<h3>When should I follow this diet?</h3>";

    html += "<p>Please follow the Low Residue Diet for the days instructed on page 1 of your colonoscopy preparation plan</p>";

    html += "</div>";

    // Food table heading

    html += "<h3 class='dietTableHeading'>Foods to include and foods to avoid</h3>";

    html += "<table class='dietTable'>";

    html += "<thead><tr>";

    html += "<th>Food group</th>";

    html += "<th>Foods to include</th>";

    html += "<th>Foods to avoid</th>";

    html += "</tr></thead>";

    html += "<tbody>";

    // Meat and fish

    html += "<tr>";

    html += "<th>Meat / fish</th>";

    html += "<td>Minced or well cooked – lean pork, skinless poultry and fish.</td>";

    html += "<td>Beef, lamb, ham, veal.</td>";

    html += "</tr>";

    // Fruit and vegetables

    html += "<tr>";

    html += "<th>Fruit / vegetables</th>";

    html += "<td>Potatoes – boiled, creamed, mashed or baked (no skins).</td>";

    html += "<td>All fruit and vegetables.</td>";

    html += "</tr>";

    // Pasta and rice

    html += "<tr>";

    html += "<th>Pasta / rice</th>";

    html += "<td>Plain macaroni, spaghetti, noodles. Plain boiled white rice.</td>";

    html += "<td>Wholemeal pasta or spaghetti. Brown rice, vegetable rice.</td>";

    html += "</tr>";

    // Cereals and bread

    html += "<tr>";

    html += "<th>Cereals / bread</th>";

    html += "<td>Cornflakes, crisped rice. White bread, plain teacakes and plain rolls.</td>";

    html += "<td>Weetabix, Bran flakes, muesli. Wholemeal, oatmeal or granary bread. High fibre white bread. Fruit teacakes or rolls with seeds or oats on top.</td>";

    html += "</tr>";

    // Biscuits, pastries and puddings

    html += "<tr>";

    html += "<th>Biscuits / pastries / puddings</th>";

    html += "<td>Plain biscuits and crackers. Plain sponges, white flour, plain scones, plain pancakes, plain muffins. Jelly (not red coloured), ice cream, custard. Yorkshire puddings.</td>";

    html += "<td>Wholemeal crackers, bran biscuits, digestives, oatcakes and fruit biscuits. Wholemeal flour, fruitcake, cakes with seeded jam fillings, wholemeal / fruit scones. Fruit, nut, or muesli yogurts.</td>";

    html += "</tr>";

    // Other foods

    html += "<tr>";

    html += "<th>Other</th>";

    html += "<td>Soft cheese, cottage cheese, cheese sauce. Eggs, clear soup, vinegar, mustard, herbs, Worcester sauce, sweets, sugar, seedless and shredless jam / marmalade, honey, golden syrup, treacle, lemon curd, margarine.</td>";

    html += "<td>Pickles, chutney, thick vegetable / lentil soup, jam / marmalade with skins or pips.</td>";

    html += "</tr>";

    html += "</tbody>";

    html += "</table>";

    // Closing reminder

    html += "<div class='dietFooter'>";

    html += "<strong>Remember</strong>";

    html += "<p>Follow your personalised preparation plan on page 1 and any additional instructions given to you by your endoscopy team.</p>";

    html += "</div>";

    html += "</div>";

    // Add the dietary page to the plan

    document.getElementById("lowResidueDietPage").innerHTML = html;

}


//=============================
// Get Medication Tasks
//=============================

function getMedicationTasks(day) {

    const medicationTasks = [];

    const medications =
        activeProfile.medications;

    if (!medications) {
        return [];
    }

    for (const medicationName in medications) {

        const medication =
            medications[medicationName];

        const checkbox =
            document.getElementById(medicationName + "Select");

        if (!checkbox || !checkbox.checked) {
            continue;
        }

        if (!medication.enabled) {
            continue;
        }

        if (day === -medication.stopDaysBefore) {

            medicationTasks.push({
                type: "medication",
                text: medication.instruction
            });

        }

    }

    return medicationTasks;

}

// =========================
// Diabetes medication tasks
// =========================

function getDiabetesTasks(day) {

    const tasks = [];

    // Check whether diabetes is enabled in this profile
    if (!activeProfile.diabetes ||
        !activeProfile.diabetes.enabled) {
        return tasks;
    }

    // Find the selected diabetes type
    const type = diabetesType.value;

    if (!type || type === "none") {
        return tasks;
    }

    // Get the relevant profile instructions
    const diabetesRules =
        activeProfile.diabetes[type];

    if (!diabetesRules) {
        return tasks;
    }

    // Get individual tablet rules
const tabletRules =
    diabetesRules.tablets || {};

    // Check the selected medications
for (const medicationName in diabetesRules) {

    // Skip the individual tablet collection
if (
    medicationName === "tablets" ||
    medicationName === "otherTablets"
) {
    continue;
}
        const medication =
            diabetesRules[medicationName];

        const checkboxId =
            type + medicationName.charAt(0).toUpperCase()
            + medicationName.slice(1);

        const checkbox =
            document.getElementById(checkboxId);

        if (!checkbox || !checkbox.checked) {
            continue;
        }

// Day before procedure
if (day === -1 && medication.dayBefore) {

    let instruction = medication.dayBefore;

// Insert the selected insulin name
if (
    medicationName === "backgroundInsulin" ||
    medicationName === "veryLongInsulin" ||
    medicationName === "quickInsulin" ||
    medicationName === "mixedInsulin" ||
    medicationName === "sglt2"
) {

let insulinNameType;

if (medicationName === "backgroundInsulin") {
    insulinNameType = "BackgroundInsulin";
}
else if (medicationName === "veryLongInsulin") {
    insulinNameType = "VeryLongInsulin";
}
else if (medicationName === "quickInsulin") {
    insulinNameType = "QuickInsulin";
}
    else if (medicationName === "mixedInsulin") {
    insulinNameType = "MixedInsulin";
}
else if (medicationName === "sglt2") {
    insulinNameType = "Sglt2";
}

    const insulinName =
        document.getElementById(
            type + insulinNameType + "Name"
        ).value;

    instruction = instruction.replace(
        "{medication}",
        insulinName
    );

}

    tasks.push({
        type: "medication",
        text: instruction
    });
}

// Day of procedure
if (day === 0 && medication.dayOfTest) {

    let instruction = medication.dayOfTest;

// Insert the selected insulin name
if (
    medicationName === "backgroundInsulin" ||
    medicationName === "veryLongInsulin" ||
    medicationName === "quickInsulin" ||
    medicationName === "mixedInsulin" ||
    medicationName === "sglt2"
) {

let insulinNameType;

if (medicationName === "backgroundInsulin") {
    insulinNameType = "BackgroundInsulin";
}
else if (medicationName === "veryLongInsulin") {
    insulinNameType = "VeryLongInsulin";
}
else if (medicationName === "quickInsulin") {
    insulinNameType = "QuickInsulin";
}
    else if (medicationName === "mixedInsulin") {
    insulinNameType = "MixedInsulin";
}
else if (medicationName === "sglt2") {
    insulinNameType = "Sglt2";
}

    const insulinName =
        document.getElementById(
            type + insulinNameType + "Name"
        ).value;

    instruction = instruction.replace(
        "{medication}",
        insulinName
    );

}

    tasks.push({
        type: "medication",
        text: instruction
    });
}
    }

    // =========================
// Individual diabetes tablets
// =========================

const tabletNames = {
    metformin: "Metformin",
    yaltorminSR: "Yaltormin SR",
    gliclazide: "Gliclazide",
    sitagliptin: "Sitagliptin",
    linagliptin: "Linagliptin",
    pioglitazone: "Pioglitazone",
    otherTablet: "Other diabetes medication"
};

// Check whether the tablet section is enabled
const tabletSelection =
    document.getElementById(type + "OtherTablets");

if (tabletSelection && tabletSelection.checked) {

    for (const tabletName in tabletRules) {

        const checkboxId =
            type + tabletName.charAt(0).toUpperCase()
            + tabletName.slice(1);

        const checkbox =
            document.getElementById(checkboxId);

        if (!checkbox || !checkbox.checked) {
            continue;
        }

        const tablet = tabletRules[tabletName];

        let instruction;

        if (day === -1 && tablet.dayBefore) {
            instruction = tablet.dayBefore;
        }
        else if (day === 0 && tablet.dayOfTest) {
            instruction = tablet.dayOfTest;
        }
        else {
            continue;
        }

        instruction = instruction.replace(
            "{medication}",
            tabletNames[tabletName]
        );

        tasks.push({
            type: "medication",
            text: instruction
        });
    }
}
    
    return tasks;
}

//============================
// Preparation instructions
//============================
const prepInstructions = {

    plenvu: {

        firstDose:
            "Mix your first dose of Plenvu with 500mls of water and drink over the next 60 minutes",

        secondDose:
            "Mix your second dose of Plenvu with 500mls of water and drink over the next 60 minutes",

        eachDose:
            "Drink an additional 500mls of water with each dose of bowel preparation"

    },

    moviprep: {

        firstDose:
            "Mix your first dose of Moviprep with 1 litre of water",

        secondDose:
            "Mix your second dose of Moviprep with 1 litre of water",

        eachDose:
            "Drink a further 500mls of water with each dose"

    },

    picolax: {

        firstDose:
            "Mix your first dose of Picolax with 150mls of water",

        secondDose:
            "Mix your second dose of Picolax with 150mls of water",

        eachDose:
            "Drink at least 1 litre of water with each dose"

    }

};

const prepNames = {
    plenvu: "Plenvu",
    moviprep: "Moviprep",
    picolax: "Picolax",
    extended: "Extended prep – 6 sachets Moviprep"
};

// =========================
// Populate Sites
// =========================


function populateSites() {

    siteSelect.innerHTML = "";

    const placeholder =
        document.createElement("option");

    placeholder.value = "";

    placeholder.textContent =
        "-- Select hospital site --";

    siteSelect.appendChild(placeholder);


    if (!activeProfile) {
        return;
    }


    activeProfile.hospitalSites.forEach(function(site) {

        const option =
            document.createElement("option");

        option.value = site;

        option.textContent = site;

        siteSelect.appendChild(option);

    });

}


function populatePreps() {

    // Clear the existing preparation options
    prepSelect.innerHTML = "";

    // Add the placeholder option
    const placeholder = document.createElement("option");

    placeholder.value = "";
    placeholder.textContent = "-- Select bowel preparation --";

    prepSelect.appendChild(placeholder);

    // Stop if no care provider is selected
    if (!activeProfile) {
        return;
    }

    // Add only the preparations in this profile
    Object.keys(activeProfile.bowelPreps).forEach(function(prepKey) {

        const prep = activeProfile.bowelPreps[prepKey];

        const option = document.createElement("option");

        option.value = prepKey;
        option.textContent = prep.name;

        prepSelect.appendChild(option);

    });

}


// =========================
// Add Task
// =========================

function addTask(task) {

    const icons = {

        senna:
            "<i class='fa-solid fa-pills'></i>",

        water:
            "<i class='fa-solid fa-droplet'></i>",

        diet:
            "<i class='fa-solid fa-utensils'></i>",

        prep:
            "<i class='fa-solid fa-flask'></i>",

        fast:
            "<i class='fa-solid fa-hourglass-half'></i>",

        end:
            "<i class='fa-solid fa-flag-checkered'></i>",

        medication:
            "<i class='fa-solid fa-prescription-bottle-medical'></i>"

    };

    return `
        <div class="task">
            ${icons[task.type] || ""}
            <span>${task.text}</span>
        </div>
    `;

}


// =========================
// Add Task List
// =========================

function addTaskList(tasks) {

    let html = "<ul class='taskList'>";

    tasks.forEach(function(task) {

        html += "<li>";
        html += addTask(task);
        html += "</li>";

    });

    html += "</ul>";

    return html;

}



 
 // =========================
 // Get Prep Tasks
 // =========================

function getPrepTasks(
    dayId,
    dayBefore,
    appointmentTimeString,
    appointmentDate
) {

    let tasks = [];

    const regimen = activeProfile.currentRegimen;

    // Stop safely if this regimen has no prep schedule
    if (!regimen || !Array.isArray(regimen.prepSchedule)) {
        return tasks;
    }

    // Process the prep schedule
    regimen.prepSchedule.forEach(function(prep, index) {

        if (prep.dayBefore !== dayBefore) {
            return;
        }

        let prepTime;

        // Calculate time relative to the appointment
        if (
            typeof prep.time === "object" &&
            prep.time !== null &&
            prep.time.hoursBeforeAppointment !== undefined
        ) {

            const appointment = new Date(appointmentDate);

            const parts = appointmentTimeString.split(":");

            const appointmentHours = Number(parts[0]);
            const appointmentMinutes = Number(parts[1]);

            // Set the exact appointment time, including minutes
            appointment.setHours(
                appointmentHours,
                appointmentMinutes,
                0,
                0
            );

            // Calculate the prep time
            appointment.setTime(
                appointment.getTime() -
                prep.time.hoursBeforeAppointment * 60 * 60 * 1000
            );

            prepTime = appointment.toLocaleTimeString(
                [],
                {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false
                }
            );

        } else {

            // Use a fixed time, e.g. "19:00"
            prepTime = prep.time;

        }

        // Add the preparation task
        tasks.push({
            id: dayId + "-prep" + index,
            text: prepTime + " " + prep.text,
            type: "prep"
        });

        // =========================
// Steroid instruction
// =========================

if (
    steroidSelect.checked &&
    steroidDose.value.trim() !== ""
) {

    const steroidDate = new Date(appointmentDate);

    // Set the date to the day of this preparation dose
    if (dayBefore === 1) {
        steroidDate.setDate(
            steroidDate.getDate() - 1
        );
    }

    // Calculate two hours after preparation
    const prepParts = prepTime.split(":");

    steroidDate.setHours(
        Number(prepParts[0]),
        Number(prepParts[1]),
        0,
        0
    );

    steroidDate.setTime(
        steroidDate.getTime() + 2 * 60 * 60 * 1000
    );

    const steroidTime =
        steroidDate.toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
            }
        );

    tasks.push({
        id: dayId + "-steroid" + index,
        text: steroidTime +
              " Take " +
              steroidDose.value.trim() +
              " as prescribed by your clinical team",
        type: "medication"
    });

}

        // Add an additional water task, if configured
        if (prep.additionalWater) {

            tasks.push({
                id: dayId + "-prep-water" + index,
                text: "After your bowel preparation, drink an additional " +
                      prep.additionalWater + "mls of water",
                type: "water"
            });

        }

    });

    return tasks;

}



// =========================
// Standard Day
// =========================


function addStandardDay(date, day) {

    const dayId =
        date.getFullYear() +
        "-" +
        String(
            date.getMonth() + 1
        ).padStart(2, "0") +
        "-" +
        String(
            date.getDate()
        ).padStart(2, "0");


    let tasks = [];


    ///=====================
    /// Medication tasks ///
    ///=====================
    const medicationTasks =
    getMedicationTasks(-day);

tasks.push(...medicationTasks);

    const anticoagulationTasks =
    getAnticoagulationTasks(-day);

tasks.push(...anticoagulationTasks);



    // =========================
    // Profile-specific medication
    // =========================

    activeProfile.currentRegimen.medications.forEach(
        function(medication) {

            if (day === medication.stopDays) {

                tasks.push({

                    id:
                        dayId +
                        "-" +
                        medication.id,

                    text:
                        "Stop taking " +
                        medication.name,

                    type: "medication"

                });

            }

        }
    );


    // =========================
    // Senna
    // =========================

    if (
        activeProfile.currentRegimen.sennaTasks &&
        day <= activeProfile.currentRegimen.sennaStartDays
    ) {

        tasks.push({

            id:
                dayId +
                "-senna",

            text:
                "Take Senna (2 tablets at night)",

            type: "senna"

        });

    }


    // =========================
    // Water
    // =========================

    if (
        activeProfile.currentRegimen.waterTasks &&
        day <= activeProfile.currentRegimen.waterStartDays
    ) {

        tasks.push({

            id:
                dayId +
                "-water",

            text:
                "Drink at least 1L of water",

            type: "water"

        });

    }

    
    // =========================
// Diet
// =========================

if (
    activeProfile.currentRegimen.dietStartDays != null &&
    day <= activeProfile.currentRegimen.dietStartDays
) {

    tasks.push({

        id:
            dayId +
            "-diet",

        text:
            "Follow a low residue diet",

        type: "diet"

    });

}


    if (tasks.length === 0) {

        return;

    }


    let html = "";


    html +=
        "<div class='daySection'>";


    html +=
        "<h3>" +
        date.toDateString() +
        "</h3>";


    html +=
        addTaskList(tasks);


    html +=
        "</div>";


    plan.innerHTML += html;

}


// =========================
// Day Before
// =========================


function addDayBefore(
    date,
    appointmentHour,
    appointmentTimeString
) {

    const dayId =
        date.getFullYear() +
        "-" +
        String(
            date.getMonth() + 1
        ).padStart(2, "0") +
        "-" +
        String(
            date.getDate()
        ).padStart(2, "0");


    let tasks = [];

// =========================
// Medication pathway
// =========================

const medicationTasks =
    getMedicationTasks(-1);

tasks.push(...medicationTasks);

    const diabetesTasks =
    getDiabetesTasks(-1);

tasks.push(...diabetesTasks);

    const anticoagulationTasks =
    getAnticoagulationTasks(-1);

tasks.push(...anticoagulationTasks);



    // =========================
    // Medication
    // =========================

    activeProfile.currentRegimen.medications.forEach(
        function(medication) {

            if (medication.stopDays === 1) {

                tasks.push({

                    id:
                        dayId +
                        "-" +
                        medication.id,

                    text:
                        "Stop taking " +
                        medication.name,

                    type: "medication"

                });

            }

        }
    );


    // =========================
    // Daytime appointments
    // =========================

    if (
        appointmentHour >= 8 &&
        appointmentHour < 17
    ) {

if (
    activeProfile.currentRegimen.dietStartDays != null
) {

    tasks.push({

        id:
            dayId +
            "-diet",

        text:
            "Low residue diet until " +
            activeProfile.currentRegimen.fastingTime,

        type: "diet"

    });

}



        tasks.push({

            id:
                dayId +
                "-fast",

            text:
                activeProfile.currentRegimen.fastingTime +
                " No further food or milky drinks. Only clear fluids from this point till after your procedure",

            type: "fast"

        });


        tasks.push(
            ...getPrepTasks(
                dayId,
                1,
                appointmentTimeString,
                date
            )
        );
    }

    // =========================
    // Evening appointments
    // =========================

    else {

        if (
            activeProfile.currentRegimen.sennaTasks
        ) {

            tasks.push({

                id:
                    dayId +
                    "-senna",

                text:
                    "Take Senna (2 tablets at night)",

                type: "senna"

            });

        }


        if (
            activeProfile.currentRegimen.waterTasks
        ) {

            tasks.push({

                id:
                    dayId +
                    "-water",

                text:
                    "Drink at least 1L of water",

                type: "water"

            });

        }


if (
    activeProfile.currentRegimen.dietStartDays != null
) {

    tasks.push({

        id:
            dayId +
            "-diet",

        text:
            "Low residue diet until " +
            activeProfile.currentRegimen.fastingTime,

        type: "diet"

    });

}


        tasks.push({

            id:
                dayId +
                "-fast",

            text:
                activeProfile.currentRegimen.fastingTime +
                " No further food or milky drinks. Only clear fluids",

            type: "fast"

        });


        tasks.push(
            ...getPrepTasks(
                dayId,
                1,
                appointmentTimeString,
                date
            )
        );

    }


    let html = "";


    html +=
        "<div class='daySection'>";


    html +=
        "<h3>" +
        date.toDateString() +
        "</h3>";


    html +=
        addTaskList(tasks);


    html +=
        "</div>";


    plan.innerHTML += html;

}


// =========================
// Appointment Day
// =========================


function addAppointmentDay(
    date,
    appointmentHour,
    appointmentTimeString
) {

    const dayId =
        date.getFullYear() +
        "-" +
        String(
            date.getMonth() + 1
        ).padStart(2, "0") +
        "-" +
        String(
            date.getDate()
        ).padStart(2, "0");


    const stopDrinking =
        new Date(date);

    const arrivalTime =
    new Date(date);

arrivalTime.setMinutes(
    arrivalTime.getMinutes() - 30
);


    stopDrinking.setHours(
        appointmentHour - 2,
    );


    let tasks =
        getPrepTasks(
            dayId,
            0,
            appointmentTimeString,
            date
        );

tasks.push(
    ...getMedicationTasks(0)
);

    const diabetesTasks =
    getDiabetesTasks(0);

tasks.push(...diabetesTasks);
    
tasks.push(
    ...getAnticoagulationTasks(0)
);

tasks.push({

    id:
        dayId +
        "-final",

    text:

        stopDrinking.toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        ) +

        " Stop drinking. Do not eat or drink anything else until your appointment.",

    type: "end"

});


tasks.push({

    id:
        dayId +
        "-attend",

    text:
        "Attend " +
        siteSelect.value +
        " endoscopy unit at " +
        arrivalTime.toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        ) +
        ", 30 minutes before your scheduled appointment",

    type: "end"

});


    let html = "";


    html +=
        "<div class='daySection'>";


    html +=
        "<h3>" +
        date.toDateString() +
        "</h3>";


    html +=
        addTaskList(tasks);


    html +=
        "</div>";


    plan.innerHTML += html;

}


// =========================
// Plan Summary
// =========================


function createPlanSummary(
    appointment,
    profile
) {

    const summary =
        document.getElementById("planSummary");


    summary.innerHTML = `

        <div class="summaryBox">

            <h2>Patient Preparation Plan</h2>

            <p>
                <strong>Hospital Site:</strong>
                ${siteSelect.value}
            </p>

            <p>
                <strong>Appointment:</strong>
                ${appointment.toLocaleDateString()}
            </p>

            <p>
                <strong>Time:</strong>
                ${appointment.toLocaleTimeString(
                    [],
                    {
                        hour: "2-digit",
                        minute: "2-digit"
                    }
                )}
            </p>

<p>
    <strong>Preparation:</strong>
    ${prepNames[prepSelect.value]}
</p>



            <small>
                Please follow your hospital's instructions.
            </small>

        </div>

    `;

}


// =========================
// Create Plan
// =========================


function createPlan() {

    const appointment =
        new Date(
            appointmentDate.value
        );



const appointmentHour =
    appointment.getHours();

const appointmentTime =
    appointment.getHours() * 60 +
    appointment.getMinutes();

const appointmentTimeString =
    appointment.getHours().toString().padStart(2, "0") +
    ":" +
    appointment.getMinutes().toString().padStart(2, "0");


const minTime =
    Number(
        activeProfile.minAppointmentTime.split(":")[0]
    ) * 60 +
    Number(
        activeProfile.minAppointmentTime.split(":")[1]
    );

const maxTime =
    Number(
        activeProfile.maxAppointmentTime.split(":")[0]
    ) * 60 +
    Number(
        activeProfile.maxAppointmentTime.split(":")[1]
    );

if (
    appointmentTime < minTime ||
    appointmentTime > maxTime
) {
    alert(
        "This appointment time is outside the permitted window for this care provider. Please select a time between " +
        activeProfile.minAppointmentTime +
        " and " +
        activeProfile.maxAppointmentTime +
        "."
    );

    return;
}

        // =========================
    // Anticoagulation validation
    // =========================

    if (anticoagulationSelect.value === "") {

        alert(
            "Please confirm whether the patient takes an anticoagulant or antiplatelet medication."
        );

        return;

    }


    if (
        anticoagulationSelect.value !== "none"
    ) {

        const pathwaySelect =
            document.getElementById("pathwaySelect");

        if (
            !pathwaySelect ||
            pathwaySelect.value === ""
        ) {

            alert(
                "Please select the anticoagulation medication pathway."
            );

            return;

        }

    }


    // =========================
    // Warfarin safety check
    // =========================

    if (
        anticoagulationSelect.value === "warfarin"
    ) {

        const pathwaySelect =
            document.getElementById("pathwaySelect");

        if (
            pathwaySelect &&
            pathwaySelect.value === "interrupt"
        ) {

            alert(
                "Warfarin interruption is not supported by Colon Quest. Please discuss the patient's individual anticoagulation management with the referring clinician or appropriate anticoagulation service, including whether bridging is required."
            );

            return;

        }

    }

    // =========================
// Steroid validation
// =========================

if (
    steroidSelect.checked &&
    steroidDose.value.trim() === ""
) {

    alert(
        "Please enter the additional steroid dose prescribed by the clinician."
    );

    steroidDose.focus();

    return;

}




// =========================
// Choose bowel prep
// =========================

const selectedPrep =
    activeProfile.bowelPreps[prepSelect.value];


// =========================
// Choose regimen
// =========================

let regimen;


if (appointmentHour < 13) {

    regimen =
        selectedPrep.regimens.am;

}

else if (appointmentHour < 17) {

    regimen =
        selectedPrep.regimens.pm;

}

else {

    regimen =
        selectedPrep.regimens.evening;

}


activeProfile.currentRegimen =
    regimen;

    console.log("Selected prep:", selectedPrep);
console.log("Selected regimen:", regimen);
console.log("Current regimen:", activeProfile.currentRegimen);


    // =========================
    // Create summary
    // =========================

    createPlanSummary(
        appointment,
        activeProfile
    );


    // =========================
    // Clear old plan
    // =========================

    plan.innerHTML =
        "<h2>Your 7 Day Plan</h2>";


    // =========================
    // Generate 7-day plan
    // =========================

    for (
        let day = 7;
        day >= 0;
        day--
    ) {

        const currentDate =
            new Date(appointment);


        currentDate.setDate(
            currentDate.getDate() -
            day
        );


        if (day > 1) {

            addStandardDay(
                currentDate,
                day
            );

        }

        else if (day === 1) {

            addDayBefore(
                currentDate,
                appointmentHour,
                appointmentTimeString
            
            );

        }

        else {

            addAppointmentDay(
                currentDate,
                appointmentHour,
                appointmentTimeString
            );

        }

    }

    // =========================
    // Add Patient Support
    // =========================

    addPatientSupport(activeProfile);


    // =========================
    // Add Low Residue Diet Page
    // =========================

    addLowResidueDiet(activeProfile);

}


// =========================
// Create Plan Button
// =========================


createPlanButton.addEventListener(
    "click",
    function() {

        // Care provider

        if (
            profileSelect.value === ""
        ) {

            alert(
                "Please select a care provider."
            );

            return;

        }


        // Hospital site

        if (
            siteSelect.value === ""
        ) {

            alert(
                "Please select a hospital site."
            );

            return;

        }


        // Bowel preparation

        if (
            prepSelect.value === ""
        ) {

            alert(
                "Please select the patient's bowel preparation."
            );

            return;

        }


        // Iron status

        if (
            ironSelect.value === ""
        ) {

            alert(
                "Please select the patient's iron status."
            );

            return;

        }

        // Appointment date

        if (
            appointmentDate.value === ""
        ) {

            alert(
                "Please select an appointment date."
            );

            return;

        }


        createPlan();

    }
);

// =========================
// Reset Plan Button
// =========================


clearDateButton.addEventListener(
    "click",
    function() {

        if (
            confirm(
                "Are you sure you want to clear the current plan?"
            )
        ) {

            appointmentDate.value = "";

            plan.innerHTML = "";

            document
                .getElementById("planSummary")
                .innerHTML = "";

        }

    }
);


// =========================
// Print Patient Plan
// =========================


document
    .getElementById("printPlanButton")
    .addEventListener(
        "click",
        function() {

            const summary =
                document
                    .getElementById(
                        "planSummary"
                    )
                    .innerHTML;


            const planContent =
                document
                    .getElementById(
                        "plan"
                    )
                    .innerHTML;

            const dietContent =
    document
        .getElementById(
            "lowResidueDietPage"
        )
        .innerHTML;


            const printWindow =
                window.open(
                    "",
                    "_blank"
                );


            printWindow.document.write(`

                <!DOCTYPE html>

                <html>

                <head>

                    <title>
                        Colon Quest Admin - Patient Preparation Plan
                    </title>

                    <style>

                        @page {

                            size: A4;

                            margin: 10mm;

                        }


                        body {

                            font-family:
                                Arial,
                                sans-serif;

                            margin: 0;

                            padding: 0;

                            color: #222;

                            font-size: 12px;

                        }


                        h1 {

                            text-align: center;

                            margin:
                                0 0 4px 0;

                            font-size: 22px;

                        }


                        .printSubtitle {

                            text-align: center;

                            margin-bottom: 12px;

                            font-size: 13px;

                        }


                        .summaryBox {

                            border:
                                2px solid #333;

                            border-radius: 8px;

                            padding:
                                8px 12px;

                            margin-bottom: 10px;

                        }


                        .summaryBox h2 {

                            margin:
                                0 0 6px 0;

                            font-size: 16px;

                        }


                        .summaryBox p {

                            margin:
                                3px 0;

                        }


                        .summaryBox small {

                            display: block;

                            margin-top: 6px;

                        }


                        #plan h2 {

                            font-size: 16px;

                            margin:
                                8px 0;

                        }


                        .daySection {

                            border:
                                1px solid #999;

                            border-radius: 6px;

                            padding:
                                7px 10px;

                            margin-bottom: 5px;

                            page-break-inside:
                                avoid;

                        }


                        .daySection h3 {

                            margin:
                                0 0 7px 0;

                            font-size: 14px;

                        }


.taskList {
    margin: 6px 0;
    padding-left: 25px;
}

.taskList li {
    padding-left: 4px;
    margin-bottom: 8px;
    line-height: 1.4;
}

.task {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin: 0;
    padding: 0;
    line-height: 1.4;
    background: transparent;
    border-radius: 0;
}

.task i {
    display: none;
}

.task span {
    flex: 1;
}
/* LOW RESIDUE DIET - NEW PAGE */

#lowResidueDietPage {
    break-before: page;
    page-break-before: always;
}

.lowResidueDietPage {
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
}

.lowResidueDietPage h2 {
    font-size: 20px;
    margin-bottom: 8px;
}

.dietTable {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    border: 1.5px solid black;
    font-size: 10px;
}

.dietTable th,
.dietTable td {
    border: 1.5px solid black;
    padding: 6px;
    text-align: left;
    vertical-align: top;
    line-height: 1.25;
}

.dietTable thead th {
    background: #D9EAF7;
    font-weight: bold;
}

.dietTable tbody th {
    background: #EAF8FD;
    font-weight: bold;
}

.dietTable tr {
    page-break-inside: avoid;
}

.dietFooter {
    margin-top: 8px;
    font-size: 10px;
}
                    </style>

                </head>


                <body>

                    <h1>
                        COLON QUEST
                    </h1>


                    <div class="printSubtitle">

                        Patient Colonoscopy
                        Preparation Plan

                    </div>


${summary}

${planContent}

<div style="break-before: page; page-break-before: always;"></div>

<div class="dietPrintPage">
    ${dietContent}
</div>


                </body>

                </html>

            `);


            printWindow.document.close();


            printWindow.focus();


            setTimeout(
                function() {

                    printWindow.print();

                },
                500
            );

        }
    );


// =========================
// Profile Change
// =========================


profileSelect.addEventListener(
    "change",
    function() {

        if (
            profileSelect.value ===
            "default"
        ) {

            activeProfile =
                defaultProfile;

        }

        else if (
            profileSelect.value ===
            "sheffield"
        ) {

            activeProfile =
                sheffieldProfile;

        }

        else if (
            profileSelect.value ===
            "chesterfield"
        ) {

            activeProfile =
                chesterfieldProfile;

        }

         else if (
            profileSelect.value ===
            "testFixed"
        ) {

            activeProfile =
                testFixedProfile;

         } else if (
            profileSelect.value ===
            "testFlexible"
        ) {

            activeProfile =
                testFlexibleProfile;
         }


        populateSites();
        populatePreps();


        // Clear any existing plan
        // because the preparation
        // pathway has changed.

        plan.innerHTML = "";

        document
            .getElementById(
                "planSummary"
            )
            .innerHTML = "";

    }
);


// =========================
// Initial Setup
// =========================

if (path.startsWith("/sheffield")) {

    profileSelect.value = "sheffield";

}

else if (path.startsWith("/chesterfield")) {

    profileSelect.value = "chesterfield";

}

else {

    profileSelect.value = "";

}

populateSites();

// Lock the profile on Trust-specific URLs

if (
    path.startsWith("/sheffield") ||
    path.startsWith("/chesterfield")
) {
    profileSelect.disabled = true;
}
