document.getElementById("checkBtn").addEventListener("click", function () {
  let dobInput = document.getElementById("dobInput").value;
  let result = document.getElementById("result");

  if (dobInput === "") {
    result.style.color = "red";
    result.textContent = "⚠️ Please select your date of birth!";
    return;
  }

  let today = new Date();                 // current date
  let dob = new Date(dobInput);           // user DOB
  let age = today.getFullYear() - dob.getFullYear();

  // check if birthday has not happened yet this year
  let month = today.getMonth() - dob.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  // Validation messages
  if (age < 0) {
    result.style.color = "red";
    result.textContent = "⚠️ Invalid DOB!";
  } else if (age < 18) {
    result.style.color = "orange";
    result.textContent = "❌ You are " + age + " years old. Under 18!";
  } else if (age <= 120) {
    result.style.color = "green";
    result.textContent = "✅ You are " + age + " years old. Age is valid!";
  } else {
    result.style.color = "red";
    result.textContent = "⚠️ Please enter a realistic DOB!";
  }
});
