npm run build

cd build

git add . -f

git commit -m "Manual deploy to gh-pages"

#git push origin master:gh-pages -f
git subtree push --prefix build origin gh-pages
#git push origin $(git subtree split --prefix build master):gh-pages --force

cd ..
