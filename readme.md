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
scp -r dist/* SERVER:~/VERSION
```

Now you'll need to log into the server, make a backup copy of the currently deployed version in
(`cp -r /var/www/duelystcards ~/OLD_VERSION`),and then replace the contents of that directory with your new `~/VERSION` files.
