# Research Responsive video player

## Problem

<img title="" src="file:///C:/Users/ADMIN/AppData/Roaming/marktext/images/2025-07-05-18-25-55-image.png" alt="" width="711">

I cant see the code editor inside the video

My screen resolution `1366 x 768`  

![](C:\Users\ADMIN\AppData\Roaming\marktext\images\2025-07-05-18-29-50-image.png)

Half screen resolution: `683x768`

![](C:\Users\ADMIN\Downloads\Resize%20Youtube%20Fullscreen%20Half%20Scrren.jpg)

SInce image viewers and chrome fits the image into  windrow decreasing the actual dimension lets place it as desktop background

![](C:\Users\ADMIN\Downloads\Strecthed%20image.png)

This how whole video looks when strcthed for the half-window size

Visibility is enhanced but the whole video compressed 

To avoid compression lets break the video in to equal vertical slices and fill the fill screen with a single slice for the moment.

Then we will provide a fixed scroll so that user can shifts to slices rather than moving forward and behind

![](C:\Users\ADMIN\Downloads\HAlf%20screen%20using%20Spliited%20Slice.png)

The slices is too thin , so lets break the slice into the size of the half screen of the window here `683`

![](C:\Users\ADMIN\Downloads\Splliting%20Slices%20using%20half%20screen%20size.png)

Let's fill in the slices in the actual window

![](C:\Users\ADMIN\Downloads\Half%20Screen%20Splices%20on%20full%20screen%20model%20.png)

Great ! We will provide a smooth scroll liek macOS(carasouel) on a slingle scrool user can slide from one splice to another one  also we will provide scroll bars so that user can stop at their desired psotion

By using this apprach they will be just 2 splices  

### For a quad window

Divide the video into `4 Splices` 

![](C:\Users\ADMIN\Downloads\Splliting%20Slices%20using%20quad%20screen%20size.png)

on using them on full screen: 

![](C:\Users\ADMIN\Downloads\Quad%20splices%20on%20full%20screen%20(1).png)

> For the video player we will provide special shortcuts  to scroll so as to avoid user clicking on the window to scroll they can just scroll while performing their task.

The dimensions of these splices needs to equal to thw iwndow size preferred by the user , suppose user wants to allot more than half screen to teh video the splice should be dimension of that window.

We can provide the use rwith dummy window and ask them to set and using these dimensions we can calculate the splice.

we will have a window with aheading and a  button in midle "Adjustthe desired window" button:"done" when clicked the spices slowly fads in with a play button. 

or

we will dispaly the video on website and provide them the rulers like canva so users can position there breakpoints based on this we could determing the splices dimension.

> MAke sure control panel; shouldnt change ow scrolls.

https://turboscribe.ai/downloader/youtube/mp4  

this site will give us the playable `src` link for our video

## Splicing the video Working demo

> Showing the other split as pop up player will ensure that user never misses anything.

![](C:\Users\ADMIN\AppData\Roaming\marktext\images\2025-07-15-01-03-14-image.png)

Code for splitting:

```bash
npm install fluent-ffmpeg ffmpeg-static
```

```js
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';

// Tell fluent-ffmpeg to use the bundled ffmpeg binary
ffmpeg.setFfmpegPath(ffmpegPath);

const inputFile = './file_example_MP4_1280_10MG.mp4';

// Output file names
const leftFile = './left.mp4';
const rightFile = './right.mp4';

// Video width & height
const videoWidth = 1280;  // example input width
const videoHeight = 720;  // example input height

// Calculate half width
const halfWidth = videoWidth / 2;

// Target size after resize
const targetWidth = 882;
const targetHeight = 768;

// Function to crop & resize left half
function cropAndResizeLeft() {
  return new Promise((resolve, reject) => {
    ffmpeg(inputFile)
      .videoFilter([
        `crop=${halfWidth}:${videoHeight}:0:0`,       // crop left half
        `scale=${targetWidth}:${targetHeight}`         // resize
      ])
      .on('start', cmd => console.log('Left ffmpeg cmd:', cmd))
      .on('end', () => {
        console.log('✅ Left half cropped & resized:', leftFile);
        resolve();
      })
      .on('error', err => {
        console.error('❌ Error processing left half:', err);
        reject(err);
      })
      .save(leftFile);
  });
}

// Function to crop & resize right half
function cropAndResizeRight() {
  return new Promise((resolve, reject) => {
    ffmpeg(inputFile)
      .videoFilter([
        `crop=${halfWidth}:${videoHeight}:${halfWidth}:0`, // crop right half
        `scale=${targetWidth}:${targetHeight}`             // resize
      ])
      .on('start', cmd => console.log('Right ffmpeg cmd:', cmd))
      .on('end', () => {
        console.log('✅ Right half cropped & resized:', rightFile);
        resolve();
      })
      .on('error', err => {
        console.error('❌ Error processing right half:', err);
        reject(err);
      })
      .save(rightFile);
  });
}

// Run both
(async () => {
  try {
    console.log('👉 Starting video splicing & resizing...');
    await cropAndResizeLeft();
    await cropAndResizeRight();
    console.log('🎉 Done! Both halves created & resized to 882x768.');
  } catch (err) {
    console.error('Something went wrong:', err);
  }
})();
```





First scale to half indow size and then splice







```js
//> Scale first then splice

import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';

ffmpeg.setFfmpegPath(ffmpegPath);

const inputFile = 'Sample_Videos/SampleVideo_1280x720_20mb.mp4';
const leftFile = './left.mp4';
const rightFile = './right.mp4';

// Target resolution before splitting
const targetWidth = 1368;
const targetHeight = 768;
const halfWidth = Math.floor(targetWidth / 2); // 683

// Scale & crop left half
function scaleAndCropLeft() {
  return new Promise((resolve, reject) => {
    ffmpeg(inputFile)
      .videoFilter([
        `scale=${targetWidth}:${targetHeight}`,
        `crop=${halfWidth}:${targetHeight}:0:0`  // x=0
      ])
      .outputOptions('-preset ultrafast')
      .on('start', cmd => console.log('Left ffmpeg cmd:', cmd))
      .on('end', () => {
        console.log('✅ Left half done:', leftFile);
        resolve();
      })
      .on('error', err => {
        console.error('❌ Error processing left half:', err);
        reject(err);
      })
      .save(leftFile);
  });
}

// Scale & crop right half
function scaleAndCropRight() {
  return new Promise((resolve, reject) => {
    ffmpeg(inputFile)
      .videoFilter([
        `scale=${targetWidth}:${targetHeight}`,
        `crop=${halfWidth}:${targetHeight}:${halfWidth}:0` // start x=683
      ])
      .outputOptions('-preset ultrafast')
      .on('start', cmd => console.log('Right ffmpeg cmd:', cmd))
      .on('end', () => {
        console.log('✅ Right half done:', rightFile);
        resolve();
      })
      .on('error', err => {
        console.error('❌ Error processing right half:', err);
        reject(err);
      })
      .save(rightFile);
  });
}

// Run both in parallel
(async () => {
  try {
    console.log('👉 Starting scale + split...');
    await Promise.all([ scaleAndCropLeft(), scaleAndCropRight() ]);
    console.log('🎉 Done! Both halves created at 683×768 each.');
  } catch (err) {
    console.error('Something went wrong:', err);
  }
})();

```
