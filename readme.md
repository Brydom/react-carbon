# react-carbon
A React component for using both custom and standard Carbon ads.

**I'm no longer contributing, but, feel free to create PRs and I will be happy to review and merge.**

## Installation

`npm i react-carbon --save`

## Usage

The component takes these arguments:

- `name` - The ID given to the wrapper
- `placement` - The placement ID from Carbon
- `serve` - The served ad ID from Carbon
- `script` - Loading a static script for custom ads
- `fallback` - Fallback JSX if ad cannot be loaded (e.g. due to an adblocker)

### Standard ads

```
import React, { Component } from "react";
import Carbon from "react-carbon";

class App extends Component {
  render() {
    return (
      ...
      <Carbon name="carbon-home" placement="pixelmobco" serve="CK7I42Q7" />;
      ...
    );
  }
}

export default App;
```

### Custom ads

```
import React, { Component } from "react";
import Carbon from "react-carbon";

class App extends Component {
  render() {
    return (
      ...
      <Carbon
        name="carbon-search"
        serve="CK7I42JE"
        script="/native_banner.js"
      />
      ...
    )
  }
}

export default App;
```

An example of `native_banner.js`:

```
(function(){  
  if(typeof _bsa !== 'undefined' && _bsa) {
      _bsa.init('custom', 'CK7I42JE', 'placement:pixelmobco',
        {
          target: '#carbon-search',
          template: `
            <a href="##link##" class="native-banner" style="background: linear-gradient(-30deg, ##backgroundColor##E5, ##backgroundColor##E5 45%, ##backgroundColor## 45%) #fff;">
              <div class="native-main">
                <img class="native-img" img src="##logo##">
                <div class="native-details" style="color: ##textColor##">
                  <span class="native-company">Sponsored by ##company##</span>
                  <span class="native-desc">##description##</span>
                </div>
                <span class="native-cta" style="color: ##ctaTextColor##; background-color: ##ctaBackgroundColor##;">##callToAction##</span>
              </div>
            </a>
            <a class="native-via" href="##adViaLink##">Ads via BuySellAds</a>
          `,
        }
      );
    }
})();
```
