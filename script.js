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

    hospitalSites: [
        "Test Hospital - Flexible Times"
    ],

    regimens: {

        am: {

            fixedPrepTimes: false,
            dietStartDays: 3,
            sennaStartDays: 4,
            waterStartDays: 2,
            fastingTime: "14:30",

            medications: [
            ],

            waterTasks: true,
            sennaTasks: true,
            waterAfterPrep: true,
            fastingHoursBefore: 2,
            prepDoses: 2,
            firstDoseDay: 1,
            firstDoseTime: "18:15"

        },

        pm: {

            fixedPrepTimes: false,
            dietStartDays: 3,
            sennaStartDays: 4,
            waterStartDays: 2,
            fastingTime: "16:30",

            medications: [
            ],

            waterTasks: true,
            sennaTasks: true,
            waterAfterPrep: true,
            fastingHoursBefore: 2,
            prepDoses: 2,
            firstDoseDay: 1,
            firstDoseTime: "20:15"

        },

        evening: {

            fixedPrepTimes: false,
            dietStartDays: 3,
            sennaStartDays: 4,
            waterStartDays: 2,
            fastingTime: "20:30",

            medications: [
            ],

            waterTasks: true,
            sennaTasks: true,
            waterAfterPrep: true,
            fastingHoursBefore: 2,
            prepDoses: 2,
            firstDoseDay: 0,
            firstDoseTime: "08:15"

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

        iron: {
        stopDaysBefore: 7
    },

    hospitalSites: [
        "Northern General Hospital",
        "Royal Hallamshire Hospital"
    ],

    

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
                    sennaTasks: true,
                    sennaStartDays: 3,
                    waterAfterPrep: false,
                    dietStartDays: 5,
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
                    sennaTasks: true,
                    sennaStartDays: 3,
                    waterAfterPrep: false,
                    dietStartDays: 5,
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
                    sennaTasks: true,
                    sennaStartDays: 3,
                    waterAfterPrep: false,
                    dietStartDays: 5,
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


//=============================
// Medication Protocols
//=============================
const medicationNames = {

    apixaban: "Apixaban",

    edoxaban: "Edoxaban",

    rivaroxaban: "Rivaroxaban"

};

const medicationProtocols = {

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
// Medication pathway
// =========================

medicationSelect.addEventListener("change", function () {

    showMedicationPathways();

});



function showMedicationPathways() {

    const medication =
        medicationSelect.value;

    medicationPathway.innerHTML = "";

    if (medication === "") {

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
    medicationProtocols[protocolKey];


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
// Get Medication Tasks
//==========================

function getMedicationTasks(day) {

    const medication =
        medicationSelect.value;

    if (medication === "") {

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
        medicationProtocols[protocolKey];

    if (!protocol) {

        return [];

    }


    const pathway =
        protocol.pathways[pathwayKey];

    if (!pathway) {

        return [];

    }


    if (!pathway.instructions) {

        return [];

    }


    const instructions =
        pathway.instructions.filter(function (instruction) {

            return instruction.day === day;

        });


    return instructions.map(function (instruction) {

    let text = instruction.text;

    if (medicationNames[medication]) {

        text = text.replaceAll(
            "DOAC",
            medicationNames[medication]
        );

    }

    return {

        type: "medication",

        text: text

    };

});

}


//=============================
// Get Iron Tasks
//=============================


function getIronTasks(day) {

    const iron =
        ironSelect.value;

    if (iron !== "Yes") {
        return [];
    }

    if (
        !activeProfile.iron ||
        !activeProfile.iron.stopDaysBefore
    ) {
        return [];
    }

    const stopDaysBefore =
        activeProfile.iron.stopDaysBefore;

    if (day === -stopDaysBefore) {

        return [
            {
                type: "medication",
                text: "Stop taking oral iron."
            }
        ];

    }

    return [];

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
    picolax: "Picolax"
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

            ${icons[task.type]}

            <span>${task.text}</span>

        </div>

    `;

}


// =========================
// Add Task List
// =========================


function addTaskList(tasks) {

    let html = "";

    tasks.forEach(function(task) {

        html += addTask(task);

    });

    return html;

}


// =========================
// Get Prep Tasks
// =========================


function getPrepTasks(
    dayId,
    dayBefore,
    appointmentHour,
    appointmentDate
) {

    let tasks = [];

    const regimen =
        activeProfile.currentRegimen;


    // =========================
    // Fixed hospital schedules
    // =========================

   if (regimen.fixedPrepTimes) {

    regimen.prepSchedule.forEach(function(prep, index) {

        if (prep.dayBefore === dayBefore) {

            tasks.push({
                id: dayId + "-prep" + index,
                text: prep.time + " " + prep.text,
                type: "prep"
            });

            if (prep.additionalWater) {
                tasks.push({
                    id: dayId + "-prep-water" + index,
                    text: "After your bowel preparation, drink an additional " +
                          prep.additionalWater + "mls of water",
                    type: "water"
                });
            }

        }

    });

} else {

    
    // =========================
    // Flexible schedules
    // =========================

    

        // First dose

        if (
            dayBefore ===
            regimen.firstDoseDay
        ) {

            tasks.push({

                id:
                    dayId +
                    "-prep1",

                text:
                    regimen.firstDoseTime +
                    " " +
                    regimen.firstDoseText,

                type: "prep"

            });

        }


        // Second dose

        if (dayBefore === 0) {

            const secondDose =
                new Date(appointmentDate);

            secondDose.setHours(
                appointmentHour - 5
            );


            tasks.push({

                id:
                    dayId +
                    "-prep2",

                text:
                    secondDose.toLocaleTimeString(
                        [],
                        {
                            hour: "2-digit",
                            minute: "2-digit"
                        }
                    ) +
                    " " +
                    regimen.secondDoseText,

                type: "prep"

            });

        }

    }

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

//==========================
// Iron Tasks
//==========================

    const ironTasks =
    getIronTasks(-day);

tasks.push(...ironTasks);

    ///=====================
    /// Medication tasks ///
    ///=====================
    const medicationTasks =
    getMedicationTasks(-day);

tasks.push(...medicationTasks);



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
    appointmentHour
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
                appointmentHour,
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
                appointmentHour,
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
    appointmentHour
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
            appointmentHour,
            date
        );

tasks.push(
    ...getMedicationTasks(0)
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

            <p>
                <strong>Plan starts:</strong>
                ${new Date(
                    appointment.getTime() -
                    (7 * 24 * 60 * 60 * 1000)
                ).toLocaleDateString()}
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
                appointmentHour
            );

        }

        else {

            addAppointmentDay(
                currentDate,
                appointmentHour
            );

        }

    }

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


                        .task {

                            display: flex;

                            align-items:
                                flex-start;

                            margin:
                                3px 0;

                            line-height: 1.2;

                        }


                        .task i {

                            margin-right: 6px;

                            width: 16px;

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
