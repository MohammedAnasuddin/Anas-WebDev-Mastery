# Conquering Responsive Layouts.

While debugging Responsiveness only operate on properties which are not responsive.

## Percentages

By default CSS provides Responsiveness it's us who performs something  and makes  unresponsive.

> Check that out by removing width form the CSS.

Since by default the width is `100%`  of the parent for every element.

hence using percentages we get back the default responsiveness.

> hence using percentages makes life easy.

If the child is greater than parent the overflow occurs because CSS ensures that there is no loss of information due to larger dimensions.

> `note`
> 
> We avoid setting heights. if we do the responsiveness is lost.
> 
> Use border-box for easy life .

## Using `em` as font-size

`em` gets multiplied as we go deeper to the children , Hence the child looks greater in size than the parent it self. `1.23em` -> 1.25 * parent's font size.

`em` performs the Compounding effect. 

Hence always use `rem` since the reference is not dynamic i.e , multiplies he root font size rather than parent size.

> `Note`
> 
> `em` only takes reference from parent font-size for the font-size children of the element.
> 
> Suppose `font-size` also is relative to child font-size:
> 
> ```css
> .child {
>   font-size: 2em; // 2 * 2em  (2 * 2em) ...
> Causes infinite refernces loop
> }
> ```
> 
> *For other properties it takes current element(child) `font-size` as reference. CSS makes these properties scale **relative to the text inside that element**, so spacing matches the text size visually.* 

## Working with `max-width`

Helps to restrict width growing as parent width increases. If not apllied things goes from one to other end of the screen and user needs to scan the  whole screen.

It restricts responsiveness(of width) after a limit.

## Viewport Units

> `Note`
> 
> Don't use viewport units for Font-Sizes they are some accessibility issues with them. If they screen gets too short so does the text hence users of smaller screen cannot read properly. and  for the Large Screens the paragraphs get so large hence not optimal.

Viewports enable us to reference the current viewport dimensions.

The problem is if the content dimensions > viewport dimensions ( Large images on the mobile)

If you are using them make sure to do extreme testing.

> ### Using BEM Notations
> 
> use BEM Naming Convention to name Classes.

## Linking Custom Fonts

Just place the `<link>` above the stylesheet reference. and use in the `font-family` wherever needed.

## Flexbox

Flex items tries to be as small as possible by default and all of them  `tries` to be equal. If width: `100%` then all the flex items will distribute evenly in the parent width.

### Spacing between Flex Items

use `gap` property

> Website is made up of boxes and responsiveness is dynamically moving boxes.

## Learnings from the Implementions

Responsiveness ≠ shrinking or stretching.  
It means:

- **Same content → different layouts** depending on screen size.

- **Prioritize readability & usability** (content-first design). 

- **Prioritize content** (don’t hide important info on small screens).

- **Adapts fluidly** (not just breakpoints, but fluid resizing too).

- **Use max-width containers** to prevent content stretching too wide.

- Don’t design desktop first → mobile will be a pain.

- Don’t rely only on breakpoints → embrace fluid design.

- Don’t forget accessibility (readable font sizes, enough contrast).

### Relative Units (don’t hardcode pixels everywhere)

- `rem` → scalable text.

- `%` → flexible widths.

- `vh/vw` → viewport-based scaling.

- `min()`, `max()`, `clamp()` → modern responsive typography.

### ✅ Flexbox & Grid

- **Flexbox** → for alignment & 1D layouts.

- **Grid** → for 2D layouts (your desktop sketch is a perfect grid use case).

### ✅ Media Queries

- Change layout based on screen width



> ### Ideal Buttons Width
> 
> **Why `h-11 min-w-11`?** This ensures our buttons have a minimum touch target of 44px by 44px (`11 * 4px = 44px`), which is crucial for accessibility on mobile devices.
