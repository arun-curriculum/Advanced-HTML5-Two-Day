#HTML5 Continued

##Geolocation
- HTML5 gives you the capability to get a user's location based on the browser's best guess.
- This works ok for desktop browsers, but it is really meant for mobile browsers.
- On mobile browsers this can access the phone's GPS if available.
- Like many of the HTML5 JavaScript components, geolocation is appended to the `navigator` object:

```javascript
navigator.geolocation.getCurrentPosition(geoSuccess);
```

- The geoSuccess callback gets information about the position:

```javascript
function geoSuccess(position) {
	console.log(position.coords.latitude);
	console.log(position.coords.longitude);
}
```

- If the information is pulled from a phone GPS, you get additional information like heading and speed. Here is a [good reference](http://diveintohtml5.info/geolocation.html) for the API.

##Geolocation Exercise
- In this exercise we will use the geolocation api to render a Google Map of your current location.
- You will be using the [maps starter application](maps_starter_app/) as a starting point.
- Your goal is to write code in js/app.js and index.html that will render a map of your current location.