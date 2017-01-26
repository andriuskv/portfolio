#!/bin/bash
set -e

npm run build

echo "Clone repo and get gh-pages branch"
git clone https://github.com/AndriusKv/portfolio.git gh-pages
cd ./gh-pages
git checkout gh-pages
cd ..

echo "Copy build to gh-pages"
rm -rf ./gh-pages/**/*
cp -r ./dist/. ./gh-pages

echo "Commit to gh-pages"
cd ./gh-pages
git config user.name "Travis CI"
git config user.email "ikandrius@gmail.com"

git add .
git commit -m "Deploy to GitHub Pages"

# Force push from the current repo's master branch to the remote repo's gh-pages branch.
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" gh-pages > /dev/null 2>&1
