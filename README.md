# piss.js

A simple and minimal JS Framework with 0 deps containing one function, `piss`. This function has the background color changed to yellow and the text color changed to orange of any elements that match the selector given.

## Example Code
index.html: 
```html
<html>
    <head>
        <script src="https://raw.githubusercontent.com/grian32/piss.js/master/piss.js"></script>
        <script src="test.js" defer></script>
    </head>

    <body id="whatever">
        hi!
    </body>
</html>
```

example.js:
```js
piss("#body")
```

The only thing of note here is that the script that uses the `piss` function must have `defer`, since if the elements are not yet loaded, it cannot change their style.

This example code is also available in the `example` directory contained in this repository.

## License

This library is licensed under the MIT License, please read the included `LICENSE` file for more details.
