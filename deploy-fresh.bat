@echo off
cd /d "%~dp0"
echo Initializing Git repository...
"C:\Program Files\Git\cmd\git.exe" init

echo Configuring Git...
"C:\Program Files\Git\cmd\git.exe" config --local user.name "muhammad-mudassir-ali"
"C:\Program Files\Git\cmd\git.exe" config --local user.email "muhammadmudassirmagray7786@gmail.com"

echo Adding files...
"C:\Program Files\Git\cmd\git.exe" add -f .

echo Creating commit...
"C:\Program Files\Git\cmd\git.exe" commit -m "Portfolio deployment"

echo Setting up main branch...
"C:\Program Files\Git\cmd\git.exe" branch -M main

echo Adding remote...
"C:\Program Files\Git\cmd\git.exe" remote remove origin
"C:\Program Files\Git\cmd\git.exe" remote add origin https://github.com/muhammad-mudassir-ali/my-portfolio.git

echo Pushing to main...
"C:\Program Files\Git\cmd\git.exe" push -f origin main

echo Installing dependencies...
call npm install

echo Building project...
call npm run build

echo Deploying to gh-pages...
call npm run deploy

echo Done!
pause