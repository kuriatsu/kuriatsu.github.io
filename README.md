# kuriatsu.github.io

## Setup build environment
```sh
sudo apt install nodejs npm wget
sudo npm install n -g
sudo n stable
sudo apt purge -y nodejs npm
sudo apt autoremove
```

## Install npm packages
```sh
cd kuriatsu.github.io
npm install
```

## Preview
```sh
npm run dev
```

## Build and Deploy
```sh
npm run build
npm run deploy
```

