function attemptLogin() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "Junction" && pass === "XII12") {
    document.getElementById("login-screen").style.display = "none";
    bootUp();
  } else {
    alert("Access Denied.");
  }
}

function bootUp() {
  const tada = document.getElementById("tada");
  const ps1 = document.getElementById("ps1");
  const vhs = document.getElementById("vhs");

  tada.play();

  setTimeout(() => {
    ps1.play();
  }, 1500); // after tada

  setTimeout(() => {
    document.getElementById("boot-screen").style.display = "block";
    const bootText = document.getElementById("boot-text");

    const lines = [
      "BOOTING SYSTEM...",
      "CHECKING MEMORY...",
      "LOADING CORE MODULES...",
      "ACCESSING ARCHIVE: TŌWER-16...",
      "SYSTEM ONLINE"
    ];

    let i = 0;
    let interval = setInterval(() => {
      if (i < lines.length) {
        bootText.textContent += lines[i] + "\n";
        i++;
      } else {
        clearInterval(interval);
        document.getElementById("boot-screen").style.display = "none";
        document.getElementById("main-interface").style.display = "block";
        vhs.play();
      }
    }, 1000);
  }, 3000); // Wait for sound effects to finish
}

document.getElementById("command-input").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const cmd = e.target.value.toLowerCase();
    if (cmd === "access-arkive") {
      document.getElementById("main-interface").innerHTML = `
        <h2>Tōwer-16 File Archive</h2>
        <ul>
          <li>Log_001.txt</li>
          <li>Specimen_Report.XV</li>
          <li>UNKNOWN_FILE(Δ).dat</li>
        </ul>`;
    } else if (cmd === "delta-node") {
      window.open("https://example.com", "_blank");
    } else {
      alert("Command not recognized.");
    }
    e.target.value = "";
  }
});
