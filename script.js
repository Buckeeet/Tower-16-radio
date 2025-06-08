function handleLogin() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const tada = document.getElementById('tada');
  const startup = document.getElementById('startup');
  const vhs = document.getElementById('vhs');

  if (user === 'Junction' && pass === 'XII12') {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('boot-screen').style.display = 'block';
    tada.play();

    setTimeout(() => {
      document.getElementById('boot-text').textContent = 'BOOTING SYSTEM...\nLOADING MODULES...\nESTABLISHING INTERFACE...';
    }, 2000);

    setTimeout(() => {
      document.getElementById('boot-screen').style.display = 'none';
      document.getElementById('main-interface').style.display = 'block';
      startup.play();

      setTimeout(() => {
        vhs.play();
      }, 4000);
    }, 6000);
  } else {
    alert('Access Denied');
  }
}

// Handle keyword input on main interface
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('command-input');
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const value = input.value.trim().toLowerCase();
      if (value === 'access-arkive') {
        alert('Accessing internal archive...');
        // Load internal file archive view
        // You can replace this with an actual page switch or UI update
      } else if (value === 'delta-node') {
        window.open('https://example.com', '_blank');
      } else {
        alert('Unknown command.');
      }
    }
  });
});
