@echo off
cd /d "%~dp0"
"C:\Program Files\Git\cmd\git.exe" init
"C:\Program Files\Git\cmd\git.exe" add .
"C:\Program Files\Git\cmd\git.exe" commit -m "Initial commit"
"C:\Program Files\Git\cmd\git.exe" branch -M main
"C:\Program Files\Git\cmd\git.exe" remote add origin https://github.com/muhammad-mudassir-ali/my-portfolio.git
"C:\Program Files\Git\cmd\git.exe" push -f origin main
call npm install
call npm run deploy