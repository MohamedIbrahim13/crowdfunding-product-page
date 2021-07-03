
const pledgeRadio = document.querySelectorAll('.form-check .form-check-input');


function updateCheckedStyles() {
  // add styles to selected/checked modal pledge, remove styles if not selected/checked
  pledgeRadio.forEach((input) => {
  	
    if (input.checked) {
      input.closest(".form-check").classList.add("selected");
      
    } else if (!input.checked) {
      input.closest(".form-check").classList.remove("selected");

    }
    
  });
}

pledgeRadio.forEach((btn,i) => {
	
    btn.addEventListener('change', updateCheckedStyles)
})

