#!/bin/bash
set -ev && \
cd ./_site && \
git init && \
git config user.name "admien33" && \
git config user.email "damiengreboval@gmail.com" && \
git remote add upstream "https://$GH_TOKEN@github.com/admien33/clean_blog-ext.git"  && \
git fetch upstream  && \
git reset upstream/gh-pages  && \
git add -A . && \
git commit -am 'build' && \
git push -q upstream HEAD:gh-pages && \
rm -fr .git && \
cd ../
