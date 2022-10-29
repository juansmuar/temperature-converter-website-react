# Make It Real - Temperature Converter react

This is a solution to the Temperature converter project of the Make It Real course with React.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Input a temperature value in Celsius degrees and select an option to convert it to Kelvin or Fahrenheit.

## My process

### Built with

- HTML5
- CSS
- CSS Grid
- javaScript
- React

### What I learned

In this project we learn how to use useState to refresh a varible value in React.

```js
    const [degrees, setDegrees] = useState(0);
    const [option, setOption] = useState("kelvin");
    const [result, setResult] = useState(0);

    function handleDeg (event) {
        setDegrees(event.target.value);
    }

    function handleOp (event) {
        setOption(event.target.value);
    }

    <div>
        <label htmlFor="degrees">Degrees</label>
            <input type="text" id="degrees" onChange={handleDeg}/>
    </div>
```


### Continued development

We need to continue learning about how React works.

### Useful resources

- [Resource 1](https://www.w3schools.com/react/react_usestate.asp) - This helped me to understand useState.

## Author

- Juan Sebastián Muñoz


## Acknowledgments

Thanks to Salomón, Julián and the teacher.
