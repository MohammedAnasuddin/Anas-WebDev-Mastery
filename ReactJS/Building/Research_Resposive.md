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
