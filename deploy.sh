npm run generate

cd dist

echo "hypercode.it" > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:jakubgania/hypercode.it.git master:gh-pages

cd ..