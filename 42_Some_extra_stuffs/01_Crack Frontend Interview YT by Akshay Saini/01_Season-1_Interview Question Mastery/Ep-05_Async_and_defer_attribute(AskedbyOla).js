//* Both async and defer are attributes that can be added to the script tag in HTML to indicate how the browser should load the JavaScript file.

//* async:- tells the browser to load the JavaScript file asynchronously. This means that the browser will continue to load the rest of the page 
//*         while the JavaScript file is downloading. Once the JavaScript file has been downloaded, the browser will execute it as soon as possible.

//* defer:- tells the browser to load the JavaScript file after the HTML document has been parsed. This means that the browser will wait until the 
//*         HTML document has been completely loaded before it starts downloading the JavaScript file. Once the JavaScript file has been downloaded,
//*         the browser will execute it in the order in which it appears in the document.

// In general, async is the preferred attribute to use because it allows the browser to load the JavaScript file as soon as possible, which can improve 
// the performance of the page. However, defer may be a better choice if the JavaScript file is not critical to the initial rendering of the page, or 
// if the script relies on the DOM being fully loaded before it can be executed.

//----> So, this is what scripts are loaded in browser
//* understand by flowchart

//*                  |                                               Normal
// Html Parsing      |  >----(parsing)-----                                              --------(parsing again)---->
//  Script           |                   >-------(fetching)->-------(executing)----------->
// -------------------------------------------------------------------------------------------------------------------------
//*                  |                                               Async
// Html Parsing      |  >----(parsing)-------                                       --------(parsing again)---->
//  Script           |       >---(fetching)->-------(executing)----------->
//----------------------------------------------------------------------------------------------------------------------------
//*                  |                                                 Defer
// Html Parsing      |  >----(parsing)-------------------------------------(parsing again)---->
//  Script           |                   >-------(fetching)----->                             >---(executing)----------->


/**
 * Important Point:- Before deciding what to use when
 * (1). That Async attribute does not guarantee the order of execute But defer does. So What does that mean.
 * ----> If we put a async attribute in multiple scripts like{we have multiple scripts that are dependent 
 *       on each other}then using the async tag doesnot guarantee that this script will execute in particular order
 *       that may break the code. So in that case. Defer are in picture.
 * 
 * ======> When to use async and defer
 * Async: Use the async attribute for scripts that do not rely on any DOM elements or other scripts. For example, analytics scripts, 
 *        third-party scripts, and scripts that perform non-blocking operations.
 * Defer: Use the defer attribute for scripts that need to be executed in a specific order, or that rely on the DOM being in a certain 
 *        state before they can be executed. For example, scripts that initialize widgets, scripts that manipulate the DOM, and scripts 
 *        that load other scripts.
*/

