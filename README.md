# short-async
Simpe and minimalistic [co](https://github.com/tj/co) wrapper.
## Requirements
* Node.js >= 4

## Usage Examples
It's good to use as a simple wrapper for async functions.

Take a look on this example with `mocha.js`:
```javascript
"use strict";

const async = require("short-async");

describe("My test", () => {
  
  it("Should pass", async(function* () {
      yield something();
      
      assert.isTrue(true);
  }));
  
});
```
