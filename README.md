[![Build Status](https://circleci.com/gh/ssmlee04/react-iframe-mobile.svg?style=shield&circle-token=1f53d1ff431881e678ef5379988aca1b8a421747)](https://circleci.com/gh/ssmlee04/react-iframe-mobile.svg?style=shield&circle-token=1f53d1ff431881e678ef5379988aca1b8a421747)

# React IFrame

Simple React iframe for your mobile.


## Usage

```
var Iframe = require("react-iframe");

<Iframe url="http://www.clearstreet.io" />
```

es6:

```
import Iframe from "react-iframe";

<Iframe url="http://www.clearstreet.io" />
```

Optional properties width and height can be sent as either percentage (eg. '100%') or px (eg. '100px');


## Demo

Do

```
npm install -g beefy && npm install react && npm install && npm run demo
```

To see the iframe working with some content