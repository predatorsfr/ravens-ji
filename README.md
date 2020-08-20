# ravens-ji

WIP

## Installation

 - you can follow the [LINK](wip) to access at the firebase.
 - you can follow the [LINK](wip) to access at the firebase data-base.

## Usage

WIP

## MEDIA
**UPLOAD**

```bash
// Create a root reference
var storageRef = firebase.storage().ref();

// Create a reference to 'mountains.jpg'
var mountainsRef = storageRef.child('mountains.jpg');

// Create a reference to 'images/mountains.jpg'
var mountainImagesRef = storageRef.child('images/mountains.jpg');

// While the file names are the same, the references point to different files
mountainsRef.name === mountainImagesRef.name            // true
mountainsRef.fullPath === mountainImagesRef.fullPath    // false
```

**DOWLOAD**

```bash
// Create a reference to the file we want to download
var starsRef = storageRef.child('images/stars.jpg');

// Get the download URL
starsRef.getDownloadURL().then(function(url) {
  // Insert url into an <img> tag to "download"
}).catch(function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/object-not-found':
      // File doesn't exist
      break;

    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;

    ...

    case 'storage/unknown':
      // Unknown error occurred, inspect the server response
      break;
  }
});
```

## Information
```bash
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC0Fmg1icbvKxuuPMvi7p4yqSNrEoUu5wc",
    authDomain: "ravens-ji.firebaseapp.com",
    databaseURL: "https://ravens-ji.firebaseio.com",
    projectId: "ravens-ji",
    storageBucket: "ravens-ji.appspot.com",
    messagingSenderId: "507314827738",
    appId: "1:507314827738:web:2e49f89f87a3aaa16510e3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
```
## SOURCES

*Library*
- [GIT: fileuploader](https://github.com/fris-fruitig/react-firebase-file-uploader#readme)
- [DOC: material-ui](https://material-ui.com/getting-started/usage/)
- [DOC: react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [DOC: react-icons](https://react-icons.github.io/react-icons/)
- [DOC: framer-motion](https://www.framer.com/motion/)

*Helper*
- [LINK video: react-firebase](https://www.youtube.com/watch?v=Oi4v5uxTY5o)
- [LINK video: media](https://www.youtube.com/watch?v=4ZCy1AK7x4I)
- [FIREBASE docs: general](https://firebase.google.com/docs/storage/web/start)
- [FIREBASE docs: javascrypt links](https://firebase.google.com/docs/web/setup)
