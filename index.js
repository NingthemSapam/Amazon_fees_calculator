function calculateFees(){

   
    const price = parseFloat(document.getElementById("price").value);
    const cost = parseFloat(document.getElementById("cost").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const category = document.getElementById("category").value;

      if (isNaN(price) || isNaN(cost) || isNaN(weight) || category === "default") {
      alert("Please fill in all fields correctly.");
      return;
    }


const referralRate = 0.15;
    const referralFee = price * referralRate;

    // 2. Calculate FBA Fee based on weight
    let fbaFee = 0;
    if (weight <= 500) {
      fbaFee = 50;
    } else if (weight <= 1000) {
      fbaFee = 100;
    } else {
      fbaFee = 150; // very basic logic for demo
    }

    // 3. Profit Calculation
    const profit = price - cost - referralFee - fbaFee;

    // 4. Show Results
    document.getElementById("referralFee").textContent = `₹${referralFee.toFixed(2)}`;
    document.getElementById("fbaFee").textContent = `₹${fbaFee.toFixed(2)}`;
    document.getElementById("profit").textContent = `₹${profit.toFixed(2)}`;

     // Change button to reset mode
    const btn = document.querySelector(".btn");
    btn.textContent = "Reset";
    btn.onclick = resetCalculator;
  }
  
   function resetCalculator() {
    document.getElementById("price").value = "";
    document.getElementById("cost").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("category").value = "default";

    document.getElementById("referralFee").textContent = "₹0";
    document.getElementById("fbaFee").textContent = "₹0";
    document.getElementById("profit").textContent = "₹0";

    // Restore calculate button
    const btn = document.querySelector(".btn");
    btn.textContent = "Calculate";
    btn.onclick = calculateFees;
  }
  