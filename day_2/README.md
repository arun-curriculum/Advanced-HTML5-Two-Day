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

##Using HTML5 Audio
- With HTML5, you can play audio files directly through the browser window.
- If no specific UI is developed, your computer will display the default player in the window. This will usually be QuickTime if you have iTunes installed.
- Let's have a look at how we can do this without any fancy components:

```html
<audio src="instrumental.mp3" controls autoplay loop></audio>
```

- This will create an audio element that will play when the page is loaded.

##Audio.js
- [Audio.js](http://kolber.github.io/audiojs/) is a JavaScript library that helps you create a neat UI for using audio on your web page.
- Let's also have a look at the [GitHub documentation](https://github.com/kolber/audiojs).
- Audio.js also gives you the flexibility to revert to a Flash player if no HTML5 audio is supported.
- Let's try to implement this together for the instrumental song.

##Using HTML5 Video
- HTML5 video replaces the need for Flash in browsers that support the new standard.
- It wraps in the standard controls that you are likely to see on a Flash player, with additional features such as responsiveness and a rich API of functions.
- Because of these features, you can do things like [this](http://craftymind.com/factory/html5video/CanvasVideo.html).
- HTML5 video is implemented in the same way as audio in that it has its own tag:

```html
<video controls>
	<source src="sample.ogg" type="video/ogg">
	<source src="sample.mp4" type="video/mp4">
</video>
```

- Note that we can specify multiple formats for browser compatibility.
- Let's try an example with this video: http://vjs.zencdn.net/v/oceans.mp4

##Video.js
- [Video.js](http://www.videojs.com/) is an API for working with HTML5 video.
- The framework wraps in a robust UI to make the video look neat.
- Let's take a look at the [Video.js documentation](https://github.com/videojs/video.js).
- We will try to implement the oceans video now using Video.js.