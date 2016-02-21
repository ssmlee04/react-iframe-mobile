[![Build Status](https://circleci.com/gh/ssmlee04/react-iframe-mobile.svg?style=shield&circle-token=1f53d1ff431881e678ef5379988aca1b8a421747)](https://circleci.com/gh/ssmlee04/react-iframe-mobile.svg?style=shield&circle-token=1f53d1ff431881e678ef5379988aca1b8a421747)

# React IFrame mobile

Simple React iframe for your mobile.  Reason why I come up with this module is because "react-iframe" module doesn't work on my iPhone. 

Also because a mobile device is really small.  It's very likely you want a easy "close" button on the page to be able to close the iframe easily.  

![example](http://i.stack.imgur.com/dH8V7.jpg)

## Usage

```
var Iframe = require("react-iframe-mobile");

<Iframe url="http://www.clearstreet.io" />
```

es6:

```
import Iframe from "react-iframe-mobile";

<Iframe url="http://www.clearstreet.io" />
```

Optional properties width and height can be sent as either percentage (eg. '100%') or px (eg. '100px');


## Demo

Do

```
npm install -g beefy && npm install react && npm install && npm run demo
```

To see the iframe working with some content