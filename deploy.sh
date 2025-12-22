npm run build

cd build

git add . -f

git commit -m "Manual deploy to gh-pages"

git push origin master:gh-pages -f

cd ..
