const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs'); // Pridané na kontrolu súborov

function createWindow() {
  const iconPath = path.join(__dirname, 'assets', 'icon.ico');
  
  // Malý test do konzoly - uvidíš v termináli, či súbor naozaj vidí
  if (fs.existsSync(iconPath)) {
    console.log("Ikonka nájdená na:", iconPath);
  } else {
    console.log("VAROVANIE: Ikonka sa nenašla na:", iconPath);
  }

  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "Gemini Desktop",
    // Ak súbor neexistuje, icon bude null a apka aspoň nezamrzne
    icon: fs.existsSync(iconPath) ? iconPath : undefined,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  win.loadURL('https://gemini.google.com');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});