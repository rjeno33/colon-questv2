
// Temporary storage for our patient questionnaire
let patientAnswers = {};


// =========================
// Patient details form and editing
// =========================

let editingSection = null;
let patientDetailsHTML = "";

document.addEventListener("DOMContentLoaded", function () {

    const container = document.querySelector(".patient-container");

    // Keep a copy of the original patient details screen
    patientDetailsHTML = container.innerHTML;

    setupPatientDetailsForm();

});

function setupPatientDetailsForm() {

    const patientForm = document.getElementById("patientForm");

    if (!patientForm) return;

    // Fill in previous answers if the patient is editing
    if (patientAnswers.details) {

        Object.entries(patientAnswers.details).forEach(([key, value]) => {

            const field = document.getElementById(key);

            if (field) {
                field.value = value || "";
            }

        });

    }

    patientForm.addEventListener("submit", function (event) {

        event.preventDefault();

        patientAnswers.details = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            dateOfBirth: document.getElementById("dateOfBirth").value,
            hospital: document.getElementById("hospital").value,
            hospitalNumber: document.getElementById("hospitalNumber").value,
            appointmentDate: document.getElementById("appointmentDate").value,
            appointmentTime: document.getElementById("appointmentTime").value
        };

        // If editing, return to the review screen
        if (editingSection === "details") {

            editingSection = null;
            showReviewScreen();

        } else {

            // Otherwise continue the normal questionnaire
            showMedicationQuestions();

        }

    });

}

// Return to the patient details form
function editPatientDetails() {

    const container = document.querySelector(".patient-container");

    container.innerHTML = patientDetailsHTML;

    editingSection = "details";

    setupPatientDetailsForm();

}



// =========================
// Common medication questions
// =========================

function showMedicationQuestions() {

    const container = document.querySelector(".patient-container");

    container.innerHTML = `

        <h1>Colon Quest</h1>

        <h2>Your medications</h2>

        <p class="intro">
            Please tell us about any of the following medications
            that you currently take.
        </p>

        <p>
            Select each medication that applies to you.
            We'll then ask you a little more about it.
        </p>

        <form id="medicationForm">

            <!-- Iron -->

            <label>
                <input type="checkbox"
                    class="medication-checkbox"
                    value="Iron supplements"
                    data-details="ironDetails">

                Iron supplements
            </label>

            <div id="ironDetails" class="medication-details" hidden>
                <label>What dose of iron do you take?</label>
                <input type="text" id="ironDose"
                    placeholder="e.g. 200mg">

                <label>How often do you take it?</label>
                <input type="text" id="ironFrequency"
                    placeholder="e.g. Once daily">
            </div>


            <!-- Mounjaro -->

            <label>
                <input type="checkbox"
                    class="medication-checkbox"
                    value="Mounjaro"
                    data-details="mounjaroDetails">

                Mounjaro
            </label>

            <div id="mounjaroDetails" class="medication-details" hidden>
                <label>What strength of Mounjaro do you take?</label>
                <input type="text" id="mounjaroDose"
                    placeholder="e.g. 5mg">

                <label>How often do you take it?</label>
                <input type="text" id="mounjaroFrequency"
                    placeholder="e.g. Once weekly">
            </div>


            <!-- Loperamide -->

            <label>
                <input type="checkbox"
                    class="medication-checkbox"
                    value="Loperamide"
                    data-details="loperamideDetails">

                Loperamide
            </label>

            <div id="loperamideDetails" class="medication-details" hidden>
                <label>What dose of loperamide do you take?</label>
                <input type="text" id="loperamideDose"
                    placeholder="e.g. 2mg">

                <label>How often do you take it?</label>
                <input type="text" id="loperamideFrequency"
                    placeholder="e.g. Twice daily">
            </div>


            <!-- Ramipril -->

            <label>
                <input type="checkbox"
                    class="medication-checkbox"
                    value="Ramipril"
                    data-details="ramiprilDetails">

                Ramipril
            </label>

            <div id="ramiprilDetails" class="medication-details" hidden>
                <label>What dose of ramipril do you take?</label>
                <input type="text" id="ramiprilDose"
                    placeholder="e.g. 5mg">

                <label>How often do you take it?</label>
                <input type="text" id="ramiprilFrequency"
                    placeholder="e.g. Once daily">
            </div>


            <hr>

            <button type="submit" class="start-button">
                Continue
            </button>

        </form>

    `;


    // Handle medication form submission
    const medicationForm = document.getElementById("medicationForm");

    medicationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // Collect selected medications
        patientAnswers.medications = [];

        document.querySelectorAll(".medication-checkbox:checked")
            .forEach(function(checkbox) {

                const medication = {
                    name: checkbox.value
                };

                // Collect dose and frequency
                const detailsBox = document.getElementById(
                    checkbox.dataset.details
                );

                const inputs = detailsBox.querySelectorAll("input");

                medication.dose = inputs[0].value;
                medication.frequency = inputs[1].value;

                patientAnswers.medications.push(medication);

            });


        showAnticoagulationQuestions();

    });

    
    // Show or hide medication details when a box is ticked
    container.addEventListener("change", function (event) {

        if (!event.target.classList.contains("medication-checkbox")) {
            return;
        }

        const detailsId = event.target.dataset.details;
        const detailsBox = document.getElementById(detailsId);

        detailsBox.hidden = !event.target.checked;

    });

}


// =========================
// Blood-thinning medication
// =========================

function showAnticoagulationQuestions() {

    const container = document.querySelector(".patient-container");

    container.innerHTML = `

        <h1>Colon Quest</h1>

        <h2>Blood-thinning medication</h2>

        <p class="intro">
            Do you currently take any medication to thin your blood?
        </p>

        <form id="anticoagulationForm">

            <label>
                <input type="radio" name="bloodThinner"
                    value="no" required>
                No
            </label>

            <label>
                <input type="radio" name="bloodThinner"
                    value="yes">
                Yes
            </label>

            <label>
                <input type="radio" name="bloodThinner"
                    value="unsure">
                I'm not sure
            </label>

            <div id="bloodThinnerList" hidden>

                <hr>

                <h3>Which medication do you take?</h3>

                <p>Please select all that apply.</p>

                ${[
                    "Apixaban",
                    "Edoxaban",
                    "Rivaroxaban",
                    "Dabigatran",
                    "Warfarin",
                    "Clopidogrel",
                    "Aspirin",
                    "Ticagrelor",
                    "Other"
                ].map(function(medication, index) {

                    return `
                        <label>
                            <input type="checkbox"
                                class="blood-thinner-checkbox"
                                value="${medication}"
                                data-details="bloodDetail${index}">
                            ${medication}
                        </label>

                        <div id="bloodDetail${index}"
                            class="medication-details" hidden>

                            ${medication === "Other" ? `
                                <label>What is the name of the medication?</label>
                                <input type="text"
                                    class="blood-other-name"
                                    placeholder="Medication name">
                            ` : ""}

                            <label>What dose do you take?</label>
                            <input type="text"
                                placeholder="e.g. 5mg"
                                class="blood-dose">

                            <label>How often do you take it?</label>
                            <input type="text"
                                placeholder="e.g. Twice daily"
                                class="blood-frequency">

                        </div>
                    `;

                }).join("")}

            </div>

            <button type="submit" class="start-button">
                Continue
            </button>

        </form>

    `;


    // Show the medication list when Yes is selected

    container.querySelectorAll(
        'input[name="bloodThinner"]'
    ).forEach(function(radio) {

        radio.addEventListener("change", function() {

            document.getElementById("bloodThinnerList").hidden =
                radio.value !== "yes";

        });

    });


    // Show individual medication details when selected

    container.addEventListener("change", function(event) {

        if (!event.target.classList.contains(
            "blood-thinner-checkbox"
        )) {
            return;
        }

        const detailsId = event.target.dataset.details;

        document.getElementById(detailsId).hidden =
            !event.target.checked;

    });


    // Save the blood-thinning medication answers

    const form = document.getElementById("anticoagulationForm");

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const status = form.querySelector(
            'input[name="bloodThinner"]:checked'
        ).value;

        patientAnswers.bloodThinningMedication = {
            status: status,
            medications: []
        };

        if (status === "yes") {

            container.querySelectorAll(
                ".blood-thinner-checkbox:checked"
            ).forEach(function(checkbox) {

                const detailsBox = document.getElementById(
                    checkbox.dataset.details
                );

                const medication = {
                    name: checkbox.value,
                    dose: detailsBox.querySelector(
                        ".blood-dose"
                    ).value,
                    frequency: detailsBox.querySelector(
                        ".blood-frequency"
                    ).value
                };

                if (checkbox.value === "Other") {
                    medication.otherName =
                        detailsBox.querySelector(
                            ".blood-other-name"
                        ).value;
                }

                patientAnswers.bloodThinningMedication
                    .medications.push(medication);

            });

        }

        showDiabetesQuestions();

    });

}


// =========================
// Diabetes questionnaire
// =========================

function showDiabetesQuestions() {

    const container = document.querySelector(".patient-container");

    const tabletOptions = [
        "Metformin",
        "Gliclazide",
        "Dapagliflozin (Forxiga)",
        "Empagliflozin (Jardiance)",
        "Canagliflozin (Invokana)",
        "Ertugliflozin (Steglatro)",
        "Sitagliptin",
        "Linagliptin",
        "Pioglitazone",
        "Other",
        "I don't know the name"
    ];

    const insulinOptions = [
        "Levemir",
        "Lantus",
        "Toujeo",
        "Tresiba",
        "Humalog",
        "NovoRapid",
        "Fiasp",
        "NovoMix",
        "Humulin",
        "Other",
        "I don't know the name"
    ];

    function createMedicationOptions(options, type) {

        return options.map(function(medication, index) {

            const id = type + index;

            return `
                <label>
                    <input type="checkbox"
                        class="${type}-checkbox"
                        value="${medication}"
                        data-details="${id}Details">

                    ${medication}
                </label>

                <div id="${id}Details"
                    class="medication-details" hidden>

                    ${medication === "Other" ? `
                        <label>What is the medication called?</label>
                        <input type="text" class="${type}-other">
                    ` : ""}

                    <label>What dose do you take?</label>
                    <input type="text"
                        class="${type}-dose"
                        placeholder="${type === "insulin" ? "e.g. 20 units" : "e.g. 500mg"}">

                    <label>How often do you take it?</label>
                    <input type="text"
                        class="${type}-frequency"
                        placeholder="${type === "insulin" ? "e.g. Twice daily" : "e.g. Once daily"}">

                    ${type === "insulin" ? `
                        <label>When do you take it?</label>
                        <input type="text"
                            class="${type}-timing"
                            placeholder="e.g. Before breakfast and evening meal">
                    ` : ""}

                </div>
            `;

        }).join("");

    }


    container.innerHTML = `

        <h1>Colon Quest</h1>

        <h2>Diabetes</h2>

        <p class="intro">
            Do you have diabetes?
        </p>

        <form id="diabetesForm">

            <label>
                <input type="radio"
                    name="diabetesStatus"
                    value="no" required>
                No
            </label>

            <label>
                <input type="radio"
                    name="diabetesStatus"
                    value="yes">
                Yes
            </label>

            <label>
                <input type="radio"
                    name="diabetesStatus"
                    value="unsure">
                I'm not sure
            </label>


            <div id="diabetesDetails" hidden>

                <hr>

                <label for="diabetesType">
                    What type of diabetes do you have?
                </label>

                <select id="diabetesType" required>
                    <option value="">Please select</option>
                    <option value="type1">Type 1 diabetes</option>
                    <option value="type2">Type 2 diabetes</option>
                    <option value="other">Another type of diabetes</option>
                    <option value="unsure">I'm not sure</option>
                </select>


                <hr>

                <h3>Diabetes tablets and other medicines</h3>

                <p>
                    Do you take any of these medications?
                    Select all that apply.
                </p>

                ${createMedicationOptions(tabletOptions, "tablet")}


                <hr>

                <h3>Insulin</h3>

                <p>
                    Do you use any insulin?
                    Select all that apply.
                </p>

                ${createMedicationOptions(insulinOptions, "insulin")}

            </div>


            <button type="submit" class="start-button">
                Continue
            </button>

        </form>

    `;


    // Show diabetes questions when Yes is selected

    container.querySelectorAll(
        'input[name="diabetesStatus"]'
    ).forEach(function(radio) {

        radio.addEventListener("change", function() {

            document.getElementById("diabetesDetails").hidden =
                radio.value !== "yes";

            document.getElementById("diabetesType").required =
                radio.value === "yes";

        });

    });


    // Show individual medication details

    container.addEventListener("change", function(event) {

        if (
            !event.target.classList.contains("tablet-checkbox") &&
            !event.target.classList.contains("insulin-checkbox")
        ) {
            return;
        }

        const detailsBox = document.getElementById(
            event.target.dataset.details
        );

        detailsBox.hidden = !event.target.checked;

    });


    // Collect medication answers

    function collectDiabetesMedications(type) {

        const results = [];

        container.querySelectorAll(
            "." + type + "-checkbox:checked"
        ).forEach(function(checkbox) {

            const detailsBox = document.getElementById(
                checkbox.dataset.details
            );

            const medication = {
                name: checkbox.value,
                dose: detailsBox.querySelector(
                    "." + type + "-dose"
                ).value,
                frequency: detailsBox.querySelector(
                    "." + type + "-frequency"
                ).value
            };

            if (checkbox.value === "Other") {
                medication.otherName =
                    detailsBox.querySelector(
                        "." + type + "-other"
                    ).value;
            }

            if (type === "insulin") {
                medication.timing =
                    detailsBox.querySelector(
                        ".insulin-timing"
                    ).value;
            }

            results.push(medication);

        });

        return results;

    }


    // Save answers when Continue is pressed

    document.getElementById("diabetesForm")
        .addEventListener("submit", function(event) {

            event.preventDefault();

            const status = container.querySelector(
                'input[name="diabetesStatus"]:checked'
            ).value;

            patientAnswers.diabetes = {
                status: status,
                type: null,
                tablets: [],
                insulin: []
            };

            if (status === "yes") {

                patientAnswers.diabetes.type =
                    document.getElementById("diabetesType").value;

                patientAnswers.diabetes.tablets =
                    collectDiabetesMedications("tablet");

                patientAnswers.diabetes.insulin =
                    collectDiabetesMedications("insulin");

            }

           showSteroidQuestions();

        });

}


// =========================
// Steroid questionnaire
// =========================

function showSteroidQuestions() {

    const container = document.querySelector(".patient-container");

    container.innerHTML = `

        <h1>Colon Quest</h1>

        <h2>Steroid medication</h2>

        <p class="intro">
            Do you currently take any steroid medication?
        </p>

        <form id="steroidForm">

            <label>
                <input type="radio"
                    name="steroidStatus"
                    value="no" required>
                No
            </label>

            <label>
                <input type="radio"
                    name="steroidStatus"
                    value="yes">
                Yes
            </label>

            <label>
                <input type="radio"
                    name="steroidStatus"
                    value="unsure">
                I'm not sure
            </label>


            <div id="steroidDetails" hidden>

                <hr>

                <label for="steroidName">
                    What is the name of your steroid?
                </label>

                <input type="text"
                    id="steroidName"
                    placeholder="e.g. Prednisolone">

                <label for="steroidDose">
                    What dose do you take?
                </label>

                <input type="text"
                    id="steroidDose"
                    placeholder="e.g. 5mg">

                <label for="steroidFrequency">
                    How often do you take it?
                </label>

                <input type="text"
                    id="steroidFrequency"
                    placeholder="e.g. Once daily">

                <label for="steroidRoute">
                    How do you take your steroid?
                </label>

                <select id="steroidRoute">
                    <option value="">Please select</option>
                    <option value="tablets">Tablets</option>
                    <option value="inhaler">Inhaler</option>
                    <option value="injection">Injection</option>
                    <option value="cream">Cream or ointment</option>
                    <option value="other">Other</option>
                    <option value="unsure">I'm not sure</option>
                </select>

            </div>


            <button type="submit" class="start-button">
                Continue
            </button>

        </form>

    `;


    // Show or hide steroid details

    container.querySelectorAll(
        'input[name="steroidStatus"]'
    ).forEach(function(radio) {

        radio.addEventListener("change", function() {

            const details = document.getElementById(
                "steroidDetails"
            );

            details.hidden = radio.value !== "yes";

        });

    });


    // Save steroid answers

    document.getElementById("steroidForm")
        .addEventListener("submit", function(event) {

            event.preventDefault();

            const status = container.querySelector(
                'input[name="steroidStatus"]:checked'
            ).value;

            patientAnswers.steroids = {
                status: status,
                name: "",
                dose: "",
                frequency: "",
                route: ""
            };

            if (status === "yes") {

                patientAnswers.steroids.name =
                    document.getElementById("steroidName").value;

                patientAnswers.steroids.dose =
                    document.getElementById("steroidDose").value;

                patientAnswers.steroids.frequency =
                    document.getElementById("steroidFrequency").value;

                patientAnswers.steroids.route =
                    document.getElementById("steroidRoute").value;

            }

            showOtherMedicalQuestions();

        });

}


 // =========================
 // Other medical questions
 // =========================

function showOtherMedicalQuestions() {

    const container = document.querySelector(".patient-container");

    container.innerHTML = `

        <h1>Colon Quest</h1>

        <h2>Other medical conditions</h2>

        <p class="intro">
            We'd like to know a little more about your health
            so that your hospital team can prepare for your procedure.
        </p>

        <form id="otherMedicalForm">

            <!-- Pacemaker / ICD -->

            <hr>

            <h3>Pacemaker or heart device</h3>

            <p>
                Do you have a pacemaker or an implantable
                cardioverter defibrillator (ICD)?
            </p>

            <label>
                <input type="radio" name="heartDevice"
                    value="no" required>
                No
            </label>

            <label>
                <input type="radio" name="heartDevice"
                    value="pacemaker">
                Pacemaker
            </label>

            <label>
                <input type="radio" name="heartDevice"
                    value="icd">
                ICD
            </label>

            <label>
                <input type="radio" name="heartDevice"
                    value="both">
                Both
            </label>

            <label>
                <input type="radio" name="heartDevice"
                    value="unsure">
                I'm not sure
            </label>


            <!-- Respiratory conditions -->

            <hr>

            <h3>Breathing and lung conditions</h3>

            <p>
                Do you have any of the following conditions?
            </p>

            <label>
                <input type="radio" name="respiratoryStatus"
                    value="no" required>
                No
            </label>

            <label>
                <input type="radio" name="respiratoryStatus"
                    value="yes">
                Yes
            </label>

            <label>
                <input type="radio" name="respiratoryStatus"
                    value="unsure">
                I'm not sure
            </label>

            <div id="respiratoryDetails" hidden>

                <p>Select all that apply:</p>

                <label>
                    <input type="checkbox"
                        class="respiratory-checkbox"
                        value="Asthma">
                    Asthma
                </label>

                <label>
                    <input type="checkbox"
                        class="respiratory-checkbox"
                        value="COPD">
                    COPD
                </label>

                <label>
                    <input type="checkbox"
                        class="respiratory-checkbox"
                        value="Sleep apnoea"
                        id="sleepApnoeaSelect">
                    Sleep apnoea
                </label>

                <label>
                    <input type="checkbox"
                        class="respiratory-checkbox"
                        value="Other lung condition">
                    Another breathing or lung condition
                </label>

                <div id="sleepApnoeaDetails"
                    class="medication-details" hidden>

                    <label>
                        Do you use a CPAP or BiPAP machine?
                    </label>

                    <label>
                        <input type="radio" name="cpapUse"
                            value="CPAP">
                        CPAP
                    </label>

                    <label>
                        <input type="radio" name="cpapUse"
                            value="BiPAP">
                        BiPAP
                    </label>

                    <label>
                        <input type="radio" name="cpapUse"
                            value="both">
                        Both
                    </label>

                    <label>
                        <input type="radio" name="cpapUse"
                            value="no">
                        I don't use one
                    </label>

                    <label>
                        <input type="radio" name="cpapUse"
                            value="unsure">
                        I'm not sure
                    </label>

                </div>

            </div>


            <!-- Mobility and accessibility -->

            <hr>

            <h3>Mobility and accessibility</h3>

            <p>
                Do you have any mobility or accessibility
                requirements that we should know about?
            </p>

            <label>
                <input type="checkbox"
                    class="mobility-checkbox"
                    value="Walking stick">
                I use a walking stick
            </label>

            <label>
                <input type="checkbox"
                    class="mobility-checkbox"
                    value="Walking frame">
                I use a walking frame
            </label>

            <label>
                <input type="checkbox"
                    class="mobility-checkbox"
                    value="Wheelchair">
                I use a wheelchair
            </label>

            <label>
                <input type="checkbox"
                    class="mobility-checkbox"
                    value="Help with walking">
                I need help walking
            </label>

            <label>
                <input type="checkbox"
                    class="mobility-checkbox"
                    value="Help with transfers">
                I need help getting on or off a bed or chair
            </label>

            <label>
                <input type="checkbox"
                    class="mobility-checkbox"
                    value="Other accessibility requirement">
                Another accessibility requirement
            </label>


            <!-- Additional information -->

            <hr>

            <h3>Anything else?</h3>

            <p>
                Is there anything else about your health
                or circumstances that you think your
                hospital team should know?
            </p>

            <textarea id="additionalHealthInformation"
                rows="4"
                placeholder="Please tell us anything else you think is important">
            </textarea>


            <button type="submit" class="start-button">
                Continue
            </button>

        </form>

    `;


    // Show respiratory questions when Yes is selected

    container.querySelectorAll(
        'input[name="respiratoryStatus"]'
    ).forEach(function(radio) {

        radio.addEventListener("change", function() {

            document.getElementById(
                "respiratoryDetails"
            ).hidden = radio.value !== "yes";

        });

    });


    // Show CPAP/BiPAP question when sleep apnoea is selected

    document.getElementById("sleepApnoeaSelect")
        .addEventListener("change", function() {

            document.getElementById(
                "sleepApnoeaDetails"
            ).hidden = !this.checked;

        });


    // Save answers

    document.getElementById("otherMedicalForm")
        .addEventListener("submit", function(event) {

            event.preventDefault();

            const heartDevice = container.querySelector(
                'input[name="heartDevice"]:checked'
            ).value;

            const respiratoryStatus = container.querySelector(
                'input[name="respiratoryStatus"]:checked'
            ).value;

            const cpapSelection = container.querySelector(
                'input[name="cpapUse"]:checked'
            );

            patientAnswers.otherMedical = {

                heartDevice: heartDevice,

                respiratoryStatus: respiratoryStatus,

                respiratoryConditions: Array.from(
                    container.querySelectorAll(
                        ".respiratory-checkbox:checked"
                    )
                ).map(function(item) {
                    return item.value;
                }),

                cpapUse: cpapSelection ? cpapSelection.value : "",

                mobility: Array.from(
                    container.querySelectorAll(
                        ".mobility-checkbox:checked"
                    )
                ).map(function(item) {
                    return item.value;
                }),

                additionalInformation:
                    document.getElementById(
                        "additionalHealthInformation"
                    ).value

            };

            showFinalMedicationQuestions();

        });

}


// =========================
// Final medication questions
// =========================

function showFinalMedicationQuestions() {

    const container = document.querySelector(".patient-container");

    container.innerHTML = `
        <h2>One last medication question</h2>

        <p>
            Are you taking any other medicines that we haven't
            already asked you about?
        </p>

        <p>
            This includes prescription medicines, medicines
            bought from a pharmacy or shop, vitamins and supplements.
        </p>

        <form id="finalMedicationForm">

            <label>
                <input type="radio" name="otherMedicationStatus"
                    value="no" required>
                No
            </label>

            <br>

            <label>
                <input type="radio" name="otherMedicationStatus"
                    value="yes">
                Yes
            </label>

            <br>

            <label>
                <input type="radio" name="otherMedicationStatus"
                    value="unsure">
                I'm not sure
            </label>

            <div id="otherMedicationDetails" hidden>

                <label for="otherMedicationText">
                    Please tell us the names of the medicines,
                    vitamins or supplements you take:
                </label>

                <textarea
                    id="otherMedicationText"
                    rows="5"
                    placeholder="Enter the names here...">
                </textarea>

            </div>

            <br>

            <button type="submit">Continue</button>

        </form>
    `;

    const statusOptions = document.querySelectorAll(
        'input[name="otherMedicationStatus"]'
    );

    const detailsBox = document.getElementById(
        "otherMedicationDetails"
    );

    statusOptions.forEach(option => {

        option.addEventListener("change", function() {

            detailsBox.hidden = this.value !== "yes";

        });

    });

    document.getElementById("finalMedicationForm")
        .addEventListener("submit", function(event) {

            event.preventDefault();

            const status = document.querySelector(
                'input[name="otherMedicationStatus"]:checked'
            ).value;

            const details = document.getElementById(
                "otherMedicationText"
            ).value.trim();

            patientAnswers.otherMedication = {
                status: status,
                details: details
            };

showReviewScreen();

        });

}


// =========================
// Patient review screen
// =========================

function showReviewScreen() {

    const container = document.querySelector(".patient-container");

container.innerHTML = `
        <h2>Review your answers</h2>

        <p>
            Please take a moment to check the information
            you have provided.
        </p>

        <div id="reviewAnswers"></div>

        <hr>

        <p>
            <strong>Important:</strong> This is a test version
            of Colon Quest. Your answers will not be sent
            to your hospital.
        </p>

        <button type="button" id="confirmAnswers">
            Confirm answers
        </button>
    `;

    const reviewArea = document.getElementById("reviewAnswers");

    // Make question names easier to read
    function readableName(name) {

        return name
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, letter => letter.toUpperCase());

    }

    // Display answers safely as text
    function displayValue(parent, value, label) {

        const item = document.createElement("div");
        item.className = "review-item";

        if (label) {

            const heading = document.createElement("strong");
            heading.textContent = readableName(label) + ": ";
            item.appendChild(heading);

        }

        if (Array.isArray(value)) {

            if (value.length === 0) {
                item.appendChild(document.createTextNode("None provided"));
            } else {

                const list = document.createElement("ul");

                value.forEach(entry => {

                    const listItem = document.createElement("li");
                    displayValue(listItem, entry);
                    list.appendChild(listItem);

                });

                item.appendChild(list);

            }

        } else if (value !== null && typeof value === "object") {

            const details = document.createElement("div");

            Object.entries(value).forEach(([key, entry]) => {

                displayValue(details, entry, key);

            });

            item.appendChild(details);

        } else {

            const text = document.createTextNode(
                value === "" || value === null || value === undefined
                    ? "Not provided"
                    : String(value)
            );

            item.appendChild(text);

        }

        parent.appendChild(item);

    }

    // Build a section for each group of answers
    Object.entries(patientAnswers).forEach(([key, value]) => {

        const section = document.createElement("section");
        section.className = "review-section";

        const heading = document.createElement("h3");
        heading.textContent = readableName(key);

        section.appendChild(heading);

        displayValue(section, value);

        reviewArea.appendChild(section);

    });

    // Confirm button
    document.getElementById("confirmAnswers")
        .addEventListener("click", function() {

            alert(
                "Thank you! You have reviewed your answers. " +
                "This is a prototype, so nothing has been sent."
            );

        });

}

