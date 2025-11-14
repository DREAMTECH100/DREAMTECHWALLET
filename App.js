function login() {
  let user = document.getElementById("username").value.trim();
  let pass = document.getElementById("password").value.trim();
  let msg = document.getElementById("errorMsg");

  if (user === "Staceyjordan" && pass === "stacey1234") {

    // Detect the GitHub Pages base path
    const pathParts = window.location.pathname.split("/");
    const repoName = pathParts[1]; // GitHub repo folder

    // Build final wallet.html URL
    const finalURL = `/${repoName}/wallet.html`;

    window.location.href = finalURL;

  } else {
    msg.textContent = "Invalid username or password";
  }
}





function runCountdown() {
  const releaseDate = new Date();  
  releaseDate.setMonth(releaseDate.getMonth() + 3);

  function updateTimer() {
    const now = new Date();
    const diff = releaseDate - now;

    const countdownEl = document.getElementById("countdown");
    const btnCountdownEl = document.getElementById("btnCountdown");
    const btn = document.getElementById("withdrawBtn");

    // Prevent errors if these elements don't exist
    if (!countdownEl || !btnCountdownEl || !btn) return;

    if (diff <= 0) {
      countdownEl.innerText = "Unlocked!";
      btnCountdownEl.innerText = "Withdrawal Available";
      btn.disabled = false;
      btn.classList.add("withdraw-active");
      btn.innerText = "Withdraw Funds";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);

    countdownEl.innerText = `${days} days ${hrs} hrs ${mins} mins`;
    btnCountdownEl.innerText = `${days}d ${hrs}h ${mins}m`;
  }

  updateTimer();
  setInterval(updateTimer, 60000); // update every minute
}



/* ========== RUN COUNTDOWN ONLY ON WALLET PAGE ========== */

if (window.location.pathname.includes("wallet.html")) {
  runCountdown();
}

