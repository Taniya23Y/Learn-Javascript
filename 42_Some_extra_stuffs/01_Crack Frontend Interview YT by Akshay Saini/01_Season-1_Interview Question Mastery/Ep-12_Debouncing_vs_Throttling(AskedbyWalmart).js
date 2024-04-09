// Debouncing and Throttling both are the concept use for optimising performance of a web app.
// and it happens limiting the rate of execution of a particular function

/**
    Debouncing and throttling are two techniques used in JavaScript to control the frequency of 
    function calls. They are both useful for preventing excessive function calls, which can 
    improve performance and prevent unnecessary work.

    --> Debouncing delays the execution of a function until a certain amount of time has passed since 
    the last time it was called. This is useful for preventing functions from being called too often, 
    such as when a user is typing in a search bar. For example, you might use debouncing to delay 
    the execution of a function that searches for products until the user has stopped typing for 
    500 milliseconds. This would prevent the function from being called every time the user types 
    a single character, which could slow down the application.

    --> Throttling limits the number of times a function can be called within a certain period of time. 
    This is useful for preventing functions from being called too often, such as when a user is scrolling 
    through a list of items. For example, you might use throttling to limit the execution of a function that 
    loads images to once every 100 milliseconds. This would prevent the function from being called every time 
    the user scrolls a single pixel, which could waste bandwidth and slow down the application.

    Both debouncing and throttling can be implemented using JavaScript libraries such as lodash or underscore. 
    They can also be implemented manually, but this can be more difficult and error-prone.

--> Here are some examples of when you might use debouncing and throttling:
==) Debouncing:
    (1). Searching for products in a search bar
    (2). Validating a user's input
    (3). Resizing a window

==): Throttling:
    (1). Loading images
    (2). Sending network requests
    (3). Updating a DOM element
 
*/

//* Visual representation of both 
// Debouncing
/**
 * this is key stroke
 * | | | | | | |    | | |
 * s a m s u n g 
 *             |____|
 *             > 300 ms
 *                  ⬆
 *               function call()
*/
//* so if the difference between two keystroke events is 300ms 

// Throttling
/**
 * this is keystroke
 * | | | | | | | | | |
 * s a m s u n g 
 * |             | | | |  
 * ⬆ __________  ⬆
 *     300ms 
 * function call()
*/
//* and in this the difference between two function calls is 300ms 