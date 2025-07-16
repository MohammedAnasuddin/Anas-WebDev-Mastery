# Responsive CSS

**Responsive:** Website response with the screen size.

## Units

1. **px**: fixed unit but varies according to the screen sizes(but every screen has its own measurent of pixel on one screen 1 px might be 1 m and on another it might be 2 cm)

2. **%** : how of the parent should the element occupy 
   
   1. - `width: 100%` → works because the parent block-level element naturally fills the viewport width.
      
      - `height: 100%` → doesn’t work unless the parent has an explicit height, because height depends on content otherwise.

3. **vw and vh**:  works like `%` but considers the parent as `viewport` rater than it's  actual parent. 
   
   1. `1vw` is equal to 1% of the viewport's width, and `1vh` is equal to 1% of the viewport's height.
   
   2. For landscape: vw > vh and for vertical: vh>vw
   
   3. vw is independent of change in screen height. and vice-versa.

4. **vmax and vmin:** works like `%` but with respecctive to larger(vmax) or smaller(vmin) dimension of the current viewport
   
   1. For Lanscape : **1vmax** is `1%` of width   since for landcape width>height.
   
   2. For Vertical: **1vmax** is equal to `1%` of *Height* of screen since for vertical larger dimension is height
   
   3. > This varies according the current dimensions of viewport, if the landscape viewport gets reduced to a extent where width<height, the vmax / vmin starts working with respective to height. 
      
      |        | Landscape | Vertical |
      | ------ | --------- | -------- |
      | `vmax` | width     | height   |
      | `vmin` | height    | width    |

5. **em and rem** em works like multiplier for the value of parents property. 
   
   1. `font-size: 2em` == twice of the `font-size of the parent`, helps to control children using parent 
   
   **rem**: same like `em` but refrence parent is the `root font-size `  hence `r` is prefixed. and value of **1rem is 16px.**

## Layout of website

> Prefer `class` over `id` attribute.

### Absolute position:

Fixed Positions with unresponsiveness , use them in extreme need

### Flex Positions:

- aalign-items: works on cross-axis(Y-Axis)

- Justify-content: works on main-axis(X-axis).

Flex compress children size based on the screen size. To avoid the compression use `flex-wrap : wrap`  wrapping starts when on further reducing the screen size will result in compression of size of the children. 

## Media Queries

Syntax:

```css
@media (max-width:600px){
 // All the styles here are applied until screen width is 600px or lesser
    // 600px covers all the protrait devices. 
}
```

## Principles for Responsiveness

- CSS Flexbox

- CSS Units

- Responsive Typography

- Mobile-First Approach

- Flexible Images and Media  

## Tips from the Project

Always use `postion: relative` for parent/container elements to avoid disorder of children elements.  

### Using Icons in Responsiveness

To use icons use remix icon

```css
.nav i{
    display: none;
} 


@media (max-width: 600px){
    .nav h4{
        display: none;
    }

    .nav i{
        display: block;
        font-size: 3vw;
    }
}
```



Calculate required dimensions using diffrent dimensions using `calc()` function.

    For example I need to fill the rest of the containeer with dv and a nav of 1vh is present alreay so remaining sace is `calc(100% - 1vh)`

> **In `calc()`, you *must* have spaces around operators**
> 
> CSS parser requires spaces around `+`, `-`, `*`, `/` inside `calc()`.
