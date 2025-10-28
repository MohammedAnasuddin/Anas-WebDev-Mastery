## Box Levels

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Box Level Visualization Demo (High Contrast)</title>
  <style>
    /* ====== Enhanced Contrast Box-Level Utilities ====== */
    * {
      box-sizing: border-box;
      font-family: system-ui, sans-serif;
    }

    body {
      margin: 2rem;
      background: #f6f8fa;
      color: #222;
    }

    [class^="l"] {
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 6px;
      transition: all 0.2s ease-in-out;
      padding: 1rem;
      margin: 0.5rem;
    }

    /* Level 1 – Root Container (Aqua Blue) */
    .l1 {
      background-color: hsla(195, 80%, 65%, 0.3);
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
    }

    /* Level 2 – Major Section (Teal Green) */
    .l2 {
      background-color: hsla(170, 70%, 55%, 0.35);
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
    }

    /* Level 3 – Component Group (Lime Green) */
    .l3 {
      background-color: hsla(140, 60%, 55%, 0.4);
    }

    /* Level 4 – Sub-element (Sky Blue) */
    .l4 {
      background-color: hsla(210, 80%, 70%, 0.5);
    }

    /* Level 5 – Atomic Element (Violet) */
    .l5 {
      background-color: hsla(260, 70%, 75%, 0.6);
    }

    /* Hover for debugging */
    [class^="l"]:hover {
      outline: 2px dashed rgba(0, 0, 0, 0.6);
      outline-offset: 2px;
    }

    .demo {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 1rem;
    }

    .demo > div {
      flex: 1 1 45%;
      min-width: 300px;
    }

    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
    }

  </style>
</head>
<body>
  <h2>Box Level Visualization Demo (High Contrast)</h2>
  <div class="demo">
    <div class="l1">
      <p>L1 - Root Container</p>
      <div class="l2">
        <p>L2 - Major Section</p>
        <div class="l3">
          <p>L3 - Component Group</p>
          <div class="l4">
            <p>L4 - Sub-element</p>
            <div class="l5">
              <p>L5 - Atomic Element</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>

```




## CSS

```css

```
