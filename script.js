function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function hitungBMI() {
  const berat = parseFloat(document.getElementById("berat").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value) / 100;

  if (!berat || !tinggi) {
    document.getElementById("hasilBMI").textContent = "Masukkan berat dan tinggi dengan benar.";
    return;
  }

  const bmi = (berat / (tinggi * tinggi)).toFixed(1);
  let status = "";

  if (bmi < 18.5) status = "Kurus";
  else if (bmi < 25) status = "Normal";
  else if (bmi < 30) status = "Kelebihan berat badan";
  else status = "Obesitas";

  document.getElementById("hasilBMI").textContent = `BMI Anda: ${bmi} (${status})`;
}
