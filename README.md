
## About the framework 

- can be used to test Javascript projects
- follows the expect(x).toAction.(y) type of syntax for readability 
- at the moment it includes: 
  * describe
  * it
  * matchers (toEqual, toContain - works for finding an item in an Array or finding a substring, toThrowError)
- it was build around a simple Square class which can be found in the repository as well to assist with how tests need to be written 

### Further developments needed

- increase usability: move test results to the webpage
- increase visibility in terms of where the code broke, what the cause was etc
- before / after blocks 
- context
- additional matchers 

## To use:

### Setup 

- clone the repository and replace the Square and SquareSpec files with your own. In the SpecRunner you'll also need to amend the names of the files that need to be loaded
- alternatively, you can add the lib folder and SpecRunner directly in your project folder if you have one already

### Testing 

- open SpecRunner in your browser
- hit inspect and check the console to see the results of your tests
