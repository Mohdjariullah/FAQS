const data = [{
  question: `How can I download the app?`,
  answer: `To download the APK files, head over to the <a href="https://sangwan5688.github.io/download">download</a> section. There are download links present for every release. You can download the latest version for your device from there.`
}, {
  question: `What is the difference between the three links for Android and which one should I download?`,
  answer: `Two architecture-specific (arm64-v8a and armeabi-v7a) and a Universal apk are provided with every release. Depending upon your device architecture (arm64 or armeabi) you can download the APK which supports your device. Most modern devices support arm64-v8a whereas older devices support armeabi-v7a. Your device will most probably support arm64-v8a. If your device architecture is 'x86' or 'x86_64', or if you are having a problem installing/running platform-specific releases or you are not sure about your device architecture and don't want to take the risk of installation failing because of the wrong version, then you can install the Universal version which supports all device architectures, but has a larger size.`
}, {
  question: `How to install it on iOS`,
  answer: `You can use <a href="https://altstore.io/">altstore</a> or <a href="https://usescarlet.com/">scarlet</a> to sideload the app on iOS.</br>
  <div class="container">
    Here're basic steps to do so via altstore:</br>
    <li>Download and install AltServer on your computer from the <a href="https://altstore.io/">altstore website</a>.</li>
    <li>Connect your iPhone to your computer with a lightning cable.</li>
    <li>Launch AltServer from your computer and make sure your iPhone is selected.</li>
    <li>Click on the AltStore icon in the system tray and select "Install AltStore" on your iPhone. You will need to enter your Apple ID and password when prompted.</li>
    <li>After AltStore is installed on your iPhone, open it and go to the "My Apps" tab.</li>
    <li>Click the "+" button in the top left corner of the screen and select the BlackHole IPA file you downloaded.</li>
    <li>Wait for AltStore to install the app on your iPhone, this may take a few minutes.</li>
    <li>Once the app is installed, it will appear on your iPhone's home screen like any other app. You can now launch it and start listenting to music.</li>
    That's it!  For more instructions please visit <a href="https://altstore.io/">altstore.io</a> or <a href="https://usescarlet.com/">scarletapp.com</a>
  </div>`
}, {
  question: `Is BlackHole on Play Store?`,
  answer: `No, BlackHole isn't on PlayStore and is likely to remain so.`
}, {
  question: `Is BlackHole on F-Droid?`,
  answer: `Yes, BlackHole is on F-Droid as well as IzzyDroid.`
}, {
  question: `Why am I getting all Indian Songs in Search results, even after I changed the language setting to English.`,
  answer: `First of all, Make sure you have selected the appropriate language in settings. Also, for some reason, The API which BlackHole uses shows Indian search results for every search which is made outside of India. To solve the issue you can either use a VPN with any Indian Server or use the youtube section of the app.`
}, {
  question: `While importing Playlists from Spotify I am getting all Indian Songs. Why so?`,
  answer: `When you import any playlist from Spotify, BlackHole searches the songs of that playlist inside the app itself and then adds the top search result in the playlist. So, in short, the import depends upon search results. As described in the above issue, Make sure you have selected the appropriate language in settings. Also, if you're not from India, use a VPN with an Indian server.`
}, {
  question: `Can we download songs?`,
  answer: `Yup, you can even download songs.`
}, {
  question: `What's the default encoding and song quality for downloading and streaming?`,
  answer: `The songs are available in m4a format with 320 kbps max resolution in the main section, whereas, in weba format with 140 kbps (flexible) resolution in the Youtube section.`
}]
