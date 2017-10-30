# Duelyst Deck Builder

## Where it can be found
[duelystcards.com](http://duelystcards.com/)

## Installation
```console
yarn install
```

## Usage
Create a `credentials.js` file locally that includes

```js
const env = process.env.NODE_ENV

const def = {
  imgur: {
    clientId: API_ID,
    clientSecret: API_SECRET,
  },
  duelystVersion: CURRENT_VERSION
}

const config = {
  development: {
    api: {
      url: '//localhost:3000',
      version: 'api'
    }
  }
}

export default Object.assign({}, def, config[env])
```

To bundle the current tree and run a local server for testing.

```console
yarn run dev
```

## Release
Bundle the static files for production, then copy them up to the server so they can replace the current static files:

```console
yarn run build
scp -r dist/* SERVER:~/duelystcards-versions/VERSION
rm -rf /var/www/duelystcards.com/* && cp -r ~/duelystcards-versions/VERSION/* /var/www/duelystcards.com/ <-- on server
```
