# Git hub flow

## Clone repo
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY


## Initialize repo
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Amatcha-Boanerges/landingpage-paconf.git
git push -u origin main

## Initialize repo with content

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Amatcha-Boanerges/landingpage-paconf.git
git push -u origin main


## Create a new branch
git checkout -b develop
git push --set-upstream origin develop

## Create a new feature branch

git checkout -b feat/hero-section
git checkout -b feat/awaityou
git checkout -b feat/whyattend
git checkout -b feat/improve-speed

## Update local branches for merging

git checkout develop
git pull origin develop
git checkout feat/hero-section
git pull origin feat/hero-section

## Merge feat into develop

git checkout develop
# git pull
git merge --no-ff feat/hero-section

## Resolve conflicts (if any), then:

git add .
git commit -m "Resolved merge conflicts"

## Push changes
git push origin develop

Install Tailwind `npm install -D tailwindcss@3 postcss autoprefixer` and `npx tailwindcss init --ts -p`
