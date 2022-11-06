cp -R src .tmp
tsc
vite build

cp -a .tmp.types/. dist/

# cleanup
rm -rf .tmp
rm -rf .tmp.types