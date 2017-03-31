# Duelyst Deck Builder

## Where it can be found
[duelystcards.com](http://duelystcards.com/)

## Installation
```console
yarn install
```

## Usage
Create a `credentials.js` file locally that includes
```
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

```
yarn run dev
```

To bundle the current tree and run a local server for testing.

## Release
