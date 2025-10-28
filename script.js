function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100;
  const result = document.getElementById('result');
  const advice = document.getElementById('advice');

  if (!weight || !height) {
    result.textContent = "Masukkan berat dan tinggi badan dengan benar!";
    advice.textContent = "";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(1);
  let status = "";
  let saran = "";

  if (bmi < 18.5) {
    status = "Kurus";
    saran = "Cobalah untuk meningkatkan berat badan dengan memperbanyak asupan kalori, konsumsi makanan tinggi protein seperti telur, daging, ikan, kacang-kacangan, serta rutin berolahraga untuk menambah massa otot.";
  } else if (bmi >= 18.5 && bmi < 25) {
    status = "Normal";
    saran = "Berat badan kamu ideal! Pertahankan dengan pola makan seimbang, olahraga rutin, tidur cukup, dan banyak minum air putih.";
  } else if (bmi >= 25 && bmi < 30) {
    status = "Gemuk";
    saran = "Usahakan menjaga pola makan dengan mengurangi makanan berlemak, perbanyak sayur dan buah, serta rutin berolahraga ringan.";
  } else {
    status = "Obesitas";
    saran = "Sebaiknya konsultasikan dengan dokter atau ahli gizi untuk program penurunan berat badan yang sehat dan aman. Hindari makanan cepat saji dan tingkatkan aktivitas fisik.";
  }

  result.innerHTML = `BMI kamu: <b>${bmi}</b> (${status})`;
  advice.textContent = saran;
}
