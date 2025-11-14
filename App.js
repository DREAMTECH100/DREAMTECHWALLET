function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let msg = document.getElementById("errorMsg");

  if (user === "Staceyjordan" && pass === "stacey1234") {
    window.location.href = "wallet.html";
  } else {
    msg.textContent = "Invalid username or password";
  }
}
/* GLOBAL COUNTDOWN TIMER */
function runCountdown() {
  const releaseDate = new Date();
  releaseDate.setMonth(releaseDate.getMonth() + 3);

  function updateTimer() {
    const now = new Date();
    const diff = releaseDate - now;

    if (diff <= 0) {
      document.getElementById("countdown").innerText = "Unlocked!";
      document.getElementById("btnCountdown").innerText = "Withdrawal Available";
      const btn = document.getElementById("withdrawBtn");
      btn.disabled = false;
      btn.classList.add("withdraw-active");
      btn.innerText = "Withdraw Funds";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("countdown").innerText = 
        `${days} days ${hrs} hrs ${mins} mins`;

    document.getElementById("btnCountdown").innerText = 
        `${days}d ${hrs}h ${mins}m`;
  }

  updateTimer();
  setInterval(updateTimer, 60000); // update every 1 minute
}

/* RUN ONLY ON WALLET PAGE */
if (location.pathname.includes("wallet.html")) {
  runCountdown();
}
