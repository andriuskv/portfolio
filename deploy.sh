#!/bin/bash

git config user.name "Andrius Kvedaras"
git config user.email "ikandrius@gmail.com"

ls -la
npm run build
cd dist

git add .
git commit -m "Deploy to GitHub Pages"

# Force push from the current repo's master branch to the remote repo's gh-pages branch.
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
