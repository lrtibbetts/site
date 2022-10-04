#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

echo 'lucytibbetts.website' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:lrtibbetts/lrtibbetts.github.io.git main

cd -