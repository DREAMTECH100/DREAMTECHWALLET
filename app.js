function login() {
  let user = document.getElementById("username").value.trim();
  let pass = document.getElementById("password").value.trim();
  let msg = document.getElementById("errorMsg");

  if (user === "Staceyjordan" && pass === "stacey1234") {
    // Correct GitHub Pages URL
    const repoName = "DREAMTECHWALLET"; // your repo
    const walletURL = `https://dreamtech100.github.io/${repoName}/index.html`;

    window.location.href = indexURL;
  } else {
    msg.textContent = "Invalid username or password";
  }
}


function runCountdown() {
  const releaseDate = new Date();
  releaseDate.setMonth(releaseDate.getMonth() + 3); // 3 months from now

  function updateTimer() {
    const now = new Date();
    const diff = releaseDate - now;

    const countdownEl = document.getElementById("countdown");
    const btnCountdownEl = document.getElementById("btnCountdown");
    const btn = document.getElementById("withdrawBtn");

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
    const secs = Math.floor((diff / 1000) % 60);

    countdownEl.innerText = `${days} days ${hrs} hrs ${mins} mins ${secs} secs`;
    btnCountdownEl.innerText = `${days}d ${hrs}h ${mins}m ${secs}s`;
  }

  updateTimer();
  setInterval(updateTimer, 1000); // update every second
}

// Run countdown only on wallet page
if (window.location.pathname.includes("index.html")) {
  runCountdown();
}


