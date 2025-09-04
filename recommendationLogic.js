function getRecommendation(soil, temp, humidity, ph) {
  let crop = 'Wheat';
  if (soil === 'loamy' && temp > 25 && humidity > 60) crop = 'Rice';
  else if (soil === 'clayey' && temp < 20) crop = 'Potato';
  else if (soil === 'sandy' && temp > 30) crop = 'Millet';

  let fertilizer = 'Balanced NPK';
  if (crop === 'Rice' && ph < 6.5) fertilizer = 'Urea and DAP';
  else if (crop === 'Wheat') fertilizer = 'Ammonium Sulphate';

  let irrigation = 'Twice a week';
  if (crop === 'Rice') irrigation = '3 times/week';
  else if (crop === 'Millet') irrigation = 'Once/week';

  return { crop, fertilizer, irrigation };
}

module.exports = { getRecommendation };
