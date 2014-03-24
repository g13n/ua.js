UA.js
=====

ua.js is a very small library to detect user-agents (browsers) and devices.
The library has methods to detect specific browsers (major ones) and also
support for detecting class of browsers (like Gecko, WebKit, etc.)

Usage
-----

```javascript
if (UA.isOpera()) {
    // Opera browser
}
if (UA.isTV()) {
    // I'm running on a TV!
}
```
