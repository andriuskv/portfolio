#!/bin/bash
set -e

git config user.name "Travis CI"
git config user.email "ikandrius@gmail.com"

npm run build
git checkout gh-pages --force
rm -r andrius-kvedaras-cv.pdf CNAME favicon.ico index.html css assets && cp dist/. .

git add .
git commit -m "Deploy to GitHub Pages"

# Force push from the current repo's master branch to the remote repo's gh-pages branch.
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
