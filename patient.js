
// Temporary storage for our patient questionnaire
let patientAnswers = {};

// =========================
// Patient details form
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const patientForm = document.getElementById("patientForm");

    if (!patientForm) return;

    patientForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Collect the patient's details
        patientAnswers.details = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            dateOfBirth: document.getElementById("dateOfBirth").value,
            hospital: document.getElementById("hospital").value,
            hospitalNumber: document.getElementById("hospitalNumber").value,
            appointmentDate: document.getElementById("appointmentDate").value,
            appointmentTime: document.getElementById("appointmentTime").value
        };

        // Move to the medication questionnaire
        showMedicationQuestions();

    });

});


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

            <label for="otherMedication">
                Do you take any other medication?
            </label>

            <textarea id="otherMedication"
                rows="3"
                placeholder="Please list any other medication here">
            </textarea>

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

        // Collect other medication information
        patientAnswers.otherMedication =
            document.getElementById("otherMedication").value;

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

            alert("Brilliant! Your diabetes answers have been saved.");

        });

}

