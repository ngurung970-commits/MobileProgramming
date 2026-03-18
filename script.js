function calculate() {
  const inputs = document.querySelectorAll('.mark');
  let total = 0;
  let valid = true;

  inputs.forEach(input => {
    const val = Number(input.value);
    if (input.value === '' || val < 0 || val > 100) {
      valid = false;
    }
    total += val;
  });

  const result = document.getElementById('result');

  if (!valid) {
    result.style.color = 'orange';
    result.textContent = 'Please enter valid marks (0–100) for all subjects.';
    return;
  }

  result.textContent = `Total: ${total} — `;

  if (total < 400) {
    result.style.color = 'red';
    result.textContent += 'Fail';
  } else if (total < 500) {
    result.style.color = '#555';
    result.textContent += 'Third Division';
  } else if (total < 600) {
    result.style.color = '#555';
    result.textContent += 'Second Division';
  } else if (total < 700) {
    result.style.color = '#2255cc';
    result.textContent += 'First Division';
  } else {
    result.style.color = 'green';
    result.textContent += 'Distinction';
  }
}