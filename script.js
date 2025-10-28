// Scroll ke bagian BMI
document.getElementById("scrollBtn").addEventListener("click", () => {
  document.getElementById("bmi").scrollIntoView({ behavior: "smooth" });
});

// Hitung BMI
document.getElementById("calcBtn").addEventListener("click", () => {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;
  const result = document.getElementById("result");
  const advice = document.getElementById("advice");

  if (!weight || !height) {
    result.textContent = "⚠️ Masukkan berat dan tinggi badan dengan benar!";
    advice.textContent = "";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(1);
  let status = "";
  let saran = "";

  if (bmi < 18.5) {
    status = "Kurus";
    saran = "Cobalah makan lebih sering dengan porsi kecil tapi bergizi tinggi. Perbanyak makanan berprotein seperti telur, ayam, ikan, kacang-kacangan, dan susu.";
  } else if (bmi >= 18.5 && bmi < 25) {
    status = "Normal";
    saran = "Pertahankan pola hidupmu! Tetap konsumsi makanan seimbang dan rutin olahraga agar tubuh tetap fit.";
  } else if (bmi >= 25 && bmi < 30) {
    status = "Gemuk";
    saran = "Kurangi makanan tinggi gula dan lemak. Ganti camilan dengan buah segar, dan usahakan jalan kaki setiap hari.";
  } else {
    status = "Obesitas";
    saran = "Segera atur pola makanmu, hindari fast food, dan mulai aktivitas fisik ringan setiap hari. Konsultasikan ke ahli gizi bila perlu.";
  }

  result.innerHTML = `BMI kamu: <b>${bmi}</b> (${status})`;
  advice.textContent = saran;
});
