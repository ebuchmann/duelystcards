# Duelyst Deck Builder
## by ebuchmann

### TODO
- Add set/expansion info to card data
- Prevent free unlocked cards from costing spirit (probably spirit: 0 and check for that before applying regular spirit)
- Add faction icon to navigation (if there is one)
- Create a card component wrapper to share functions between a general card and other cards
- Warn about no general on imports (catch thrown error)
- Add some footer info, github link, etc.
- Fix deck list (side) sorting
- Count general as a card in the 40 count
- Limit deck to 40 cards

### Improvements
- Icon on "import deck" button
- Icon on "save deck" button
- Attempt to find faction from import if general is missing
- Add media query triggers to change # of visible cards
- Add background behind faction text on faction select screen
- Hide "save deck" button if the deck is empty
- Sprite maps for all small icons

### Beta
- Server or host on GitHub
- Add Google Analytics
- Move images off dropbox
- Webpack deploy scripts
