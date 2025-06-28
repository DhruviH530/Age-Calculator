



const dobInput = document.getElementById("dob");
const result = document.getElementById("result");

function calculateAge() {
  const dobValue = dobInput.value;

  if (!dobValue) {
    result.innerText = "Please enter your date of birth!";
    return;
  }
// je date nakhe aeni date
  const dob = new Date(dobValue); 
  // aaj ni date
  const today = new Date();       


  // Calculate kre year according
  let age = today.getFullYear() - dob.getFullYear(); 

  // Check kre k brithday pass thyo che k nai aa year ma
  const month = today.getMonth() - dob.getMonth();


  // If birthday pass nai thyo a year ma to , - kre 1 
  if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
    age--; 
  }

  result.innerText = `Aapki umar hai ${age}   saal hai. `;
}

