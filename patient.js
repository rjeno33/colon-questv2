
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

        alert("Brilliant! Your medication answers have been saved.");

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
