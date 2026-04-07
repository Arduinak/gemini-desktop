Gemini Desktop (Unofficial)

A simple and lightweight desktop client for Google Gemini built with Electron.
📥 Installation & Build

If you just want to use the app, you can find the installer in the out/make/squirrel.windows/x64/ directory after running the build command.

    [!IMPORTANT]
    Shortcut Issue: The installer might not automatically create a desktop shortcut.
    Where to find the app: If you can't find it in your Start menu, the installed application is located here:
    C:\Users\YourName\AppData\Local\gemini_desktop\
    Look for gemini-desktop.exe inside the app-1.0.0 folder.

🛠️ For Developers (How to Build/Modify)

If you want to modify the code or build the installer yourself, follow these steps:
1. Prerequisites

Ensure you have the following installed:

    Node.js (LTS version)

    npm (comes with Node.js)

2. Setup & Development

    Clone this repository:
    Bash

    git clone https://github.com/Arduinak/gemini-desktop.git

    Navigate to the project folder:
    Bash

    cd gemini-desktop

    Install dependencies:
    Bash

    npm install

    Run the app in development mode:
    Bash

    npm start

3. Build your own Installer (.exe)

To package the app into a Windows installer:
Bash

npm run make

The .exe setup file will be generated in: out/make/squirrel.windows/x64/.
🇸🇰 Slovenský popis (V skratke)

Toto je neoficiálny desktopový klient pre Gemini.

    Inštalácia: Ak sa nevytvorí zástupca na ploche, aplikáciu nájdete v priečinku AppData/Local/gemini_desktop.

    Pre vývojárov: Ak chcete kód upraviť, použite príkazy npm install a npm start. Pre vytvorenie inštalačky použite npm run make.

⚖️ License

This project is licensed under the GNU GPL v2.
