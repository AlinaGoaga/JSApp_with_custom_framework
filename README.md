## About the framework

  This testing framework has been developed in week 7 at Makers and has been used to build an Event Planner App in JavaScript: [Event Planner](https://github.com/AlinaGoaga/EventPlanner).

  At the moment it covers:
  - describe
  - it
  - matchers :
    * toEqual
    * toContain - works for finding an item in an Array or finding a substring
    * toThrowError)

  Writing tests follows the ```expect(x).toAction.(y)``` type of syntax for readability.

  The project was build around a simple Square class which can be found in the repository as well, to assist with how tests need to be written.

## To use

### Setup

- clone the repository and replace the Square and SquareSpec files with your own. In the SpecRunner you'll also need to amend the names of the files that need to be loaded
- alternatively, you can add the lib folder and SpecRunner directly in your project folder if you have one already

### Testing

- open SpecRunner in your browser
- hit inspect and check the console to see the results of your tests

Below are examples of scenarios when all tests are passing vs some are failing.

![S1](https://github.com/AlinaGoaga/JS_testing_framework/blob/master/app_screenshot/s1.jpeg)
![S2](https://github.com/AlinaGoaga/JS_testing_framework/blob/master/app_screenshot/s2.jpeg)

## Further developments needed

- increase usability: move test results to the webpage
- increase visibility in terms of where the code broke, what the cause was etc
- before / after blocks
- context
- additional matchers 
