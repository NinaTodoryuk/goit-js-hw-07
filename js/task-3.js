const nameInput = document.getElementById('name-input');
    const nameOutput = document.getElementById('name-output');

    nameInput.addEventListener('input', () => {
      const inputValue = nameInput.value; 
      
      if (inputValue) {
        nameOutput.textContent = inputValue;
      } else {
        nameOutput.textContent = 'Anonymous';
      }
    })