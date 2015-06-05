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

##Introduction to Web Sockets
- One of the most powerful uses for Node is its ability to handle seamless "real-time" experiences.
- Sockets are a way for a browser and server to communicate without the standard request-response cycle.
- Chat clients, real-time data feeds, and operational dashboards are some examples of where sockets have been used effectively.

##How it Basically Works
- A client makes an initial request out to the server and a "handshake" is created - AKA a connection has been established.
- This "handshake" is given a unique socket with a unique ID.
- Essentially this request never completes and remains open for the duration of the session.
- Every further request-response simulation is done via a manifestation of a JavaScript event.
- In a perfect world this is how things would always operate with sockets but certain factors such as browser incompatibility and more can interfere with a proper handshake. As a result, a more brute-force approach of "polling" may be required.

##Socket.io
- Socket.io is a library that essentially manages browser capabilities to connect a client with a server through web sockets in the most ideal way possible.
- It can switch between polling and sockets automatically and basically automate the handshake process.
- Socket.io works on the client and the server side to achieve seamless interaction.

##Socket-Based Chat Mechanism
- We will be building a chat application in Node using web sockets.

####The Client Setup
- The client will also use Socket.io to handle the handshake and any further events.
- The first thing that will be needed is to create the handshake with the server:

```javascript
var socket = io.connect("server_url or blank for current server");
```

- The client can also detect and respond to events:

```javascript
socket.on('event', function(params) { });
```

- The client can also "emit" events:

```javascript
socket.emit('event', params);
```

##In-Class Lab: Build the Chat
- In this lab we will be coding working to create a real-time chat application.
- The front end is already done for you [here](chat_starter_app/).
- You will be working in js/app.js to develop the code to interact with the web socket server.
- The server can be found at: http://arunchatserver.herokuapp.com/
- **Bonus:** Use your knowledge of front end JavaScript to change the page title when a new chat is received.

##Introduction to Web Workers
- Web workers add concurrency support for JavaScript.
- With web workers you can accomplish multi-threaded processes with little effort.
- You would generally use a web worker to run a long-running script of some kind that can run in the background.
- Let's see how they work:

#####Setting up a web worker

```javascript
var worker = new Worker("counter.js");
```

#####Responding to worker events
- Workers can trigger events which can be detected.

```javascript
worker.addEventListener("message", function(event) {
	console.log(event.data);
});
```

#####Sending messages from workers (in counter.js)
- Workers can send messages back to the main file.

```javascript
self.postMessage(data);
```

#####Invoking a worker
- Workers need to be started from the main file in order to run.

```javascript
worker.postMessage();
```

##Web Worker Exercise
- In this exercise we will practice web workers by building a simple counter.
- You will create a worker that sets an interval and increases a count by 1 every one second.
- The worker should post the count back to the main file as a message.
- The main file should detect the message and display the new count on the page.