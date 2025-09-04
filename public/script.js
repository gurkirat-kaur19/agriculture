document.getElementById('cropForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  const soil = document.getElementById('soil').value;
  const ph = parseFloat(document.getElementById('ph').value);

  const response = await fetch('/recommend', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ city, soil, ph })
  });

  const data = await response.json();
  document.getElementById('result').innerText = `
    🌾 Crop: ${data.crop}
    🌱 Fertilizer: ${data.fertilizer}
    💧 Irrigation: ${data.irrigation}
  `;
});
