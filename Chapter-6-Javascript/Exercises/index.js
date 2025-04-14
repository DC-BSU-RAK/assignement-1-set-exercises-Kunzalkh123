function calculate() {
    const price = 1.72; 
    const liters = parseFloat(document.getElementById("liters").value); 
    const total = price * liters; 
    document.getElementById("totalAmount").innerText = "Total Amount: AED" + total.toFixed(2); 
  }