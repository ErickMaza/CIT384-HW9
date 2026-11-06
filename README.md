# JavaScript Mini Demo

homework demo showing JavaScript date formatting, string to number conversion, validation, conditional messages, and a formatted price calculation.

## Files

- `index.html` — the page structure and external stylesheet/script links.
- `script.js` — date, number validation, arithmetic, formatting, and conditional messages.
- `style.css` — responsive card-based styling.
- `screenshot.png` — screenshot of the finished webpage.

## Built-in objects and methods

- `Date()` with `getMonth()`, `getDate()`, and `getFullYear()`
- `String()` with `padStart()`
- `Number()` with `Number.isNaN()` and `Number.isInteger()`
- `Number.prototype.toFixed()`
- `document.getElementById()` and `textContent` / `innerHTML` properties

## GitHub Pages

https://erickmaza.github.io/CIT384-HW9/

## Screenshot

![JavaScript Mini Demo webpage](./screenshot.png)

## Reflection

The easiest part was choosing values and using arithmetic to calculate an order total. The hardest part was keeping the conversion checks clear while handling both valid and invalid numeric strings. I learned that JavaScript months start at zero, so I need to add one when displaying a month from a `Date` object. I learned that the `Number` object can convert strings and check whether the result is `NaN` or an integer. I also learned that JavaScript can update elements in the browser with the DOM, so results can be displayed directly on the page.
