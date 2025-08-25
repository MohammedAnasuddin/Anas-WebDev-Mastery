## Debugging React

## General Useful Tips

### Disabling Strict Mode Log

In strict mode React runs everything tice to ensure the purity of the components.

To disable double logging :

1. Go to React Dev Tools

2. Select the debug icon and Check the option ` ✔ Hide logs during the second render` .

### Debugging in VS COde itself

1. Click on the debug icon on left panel

2. Click run and select Web app chrome

3. change url to your project url

4. Again go to Debug icon and hit run.



## React Dev Tools

### Components Tab

Have all components in tree structure.

Use select to get elements from the page.

Click the Bug Icon to log all the details about the Component in the console.

#### Simulating Suspense

Select  component and hit the `clock icon` this will put the component  it's suspense state.

#### Simulating Error Boundary

Select component and hit the` !icon` to get component in it's error state.

#### Recommended Settings

`Components Setting`: 

Set `Open in Editor URL`: VS Code  , to open  selected components code in the VS Code.

Set Filters to hide configuration components from the tree. 



### Profiler Tab

Gives all the details about   States changes and re-renders

At top No. of times components re rendered and time taken by the component to re render.

Component (x ms of y ms)  here x is the render time without the Childs and y is the total time taken to render with the child completely rendered.

> This helps to understand whether the component renders slowly or the children inside it.

In Collection of graphs (Bar graphs) the longest one is the slowest , provides a good identification and upon learning provides the information why it was slow?



Use range char to identify the slowest components (components taking so long).

#### Recommended Settings

1. Check Record Why each Component rendered while profiling. Exactly tells why Component was re rendered.

2. Hide commits with  less than :  set this to `10ms`



> Go to performance tab in DevTools and set throttling 6x slower to actually test how your website performs on really slow devices.



## Maximizing Performance using Profiler

Profiler helps to identify performance related bugs.

1. If you want to incluse the frstload click the 🔁icon  or To track specific functionality hit the 🔵 button.

2. Perform the interaction which is slow.

3. After stopping profiling , beside ⚙ you will se 1/R where `R` is  re-rendered occurred. 

4. There are collection of graphs stating time taken to re render. Long Bars -> slower render and shorter Bars -> faster render

5. To optimize, select the longest graph in the ranked chart format 📊
   
   1. Ranked Chart displays the descending sort for render time of various components during the selected render. Hence Component at the top takes the most time.
   
   2. Identify what makes this component so long to render and fix it.
   
   3. > `NOTE`
      > 
      > If the color of component is :
      > 
      > 1. gray:  Component didn't change from the previous render.
      > 
      > 2. green: Changed from the previous render
      > 
      > 3. orange: 
   
   4.  Click the component to get he information about how many times it rendered. and describes why it was re rendered(if enabled in the settings).
   
   5. If you want to Low Bar graphs set the limit in settings under commit option.
   
   6. Repeat this process by throttling performance in to 6x slow and concurrency to 1.to ensure website works smoothly for everyone. 


