//* Cross-Origin Resource Sharing (CORS) is a browser security feature that restricts HTTP requests that are initiated from scripts 
//* running in the browser. It adds HTTP headers to requests and responses to allow servers to specify who can access their resources.

//* CORS is necessary because of the same-origin policy, which prevents a web page from making requests to a domain different from the 
//* one that served the web page. This policy helps to prevent malicious websites from accessing sensitive data on other websites.

//* CORS allows servers to specify which domains can access their resources. This is done by adding the Access-Control-Allow-Origin header to the response. 
//* The header can contain a list of domains that are allowed to access the resource, or it can contain a wildcard character (*) to allow all domains to access the resource.

//* In addition to the Access-Control-Allow-Origin header, CORS also adds other headers to requests and responses. These headers include:
//* ---> Access-Control-Allow-Methods: This header specifies which HTTP methods are allowed for the request.
//* ---> Access-Control-Allow-Headers: This header specifies which HTTP headers are allowed for the request.
//* ---> Access-Control-Expose-Headers: This header specifies which HTTP headers are allowed in the response.
//* ---> Access-Control-Max-Age: This header specifies how long the browser should cache the CORS preflight request.
//* CORS is a complex topic, but it is an important one to understand if you are developing web applications that need to access resources from other domains.

// Definition:- 
// CORS is a mechanism which uses addition HTTPS headers to tell the browser whether a specific web app can share resource with another web app
// But both the web apps should have there different origins

//*      origin 1                                origin 2
//*   ____________                              ______________
//*   |           |----(preflight call)-------->|            |
//*   |    A      |     options call            |     B      |
//*   |           |<----------------------------|            |
//*   |           |    additional HTTPS         |            |
//*   |___________|-------POST----------------->|____________|
//*   

// Additional HTTPS:-> [Accept-Control-Allow-Origin:*]
// Additional HTTPS:-> [Accept-Control-Allow-Method:*]

//* A preflight request is an HTTP request that a browser sends to a resource on another origin using the OPTIONS method to determine if the actual 
//* request is safe to send. Preflight requests are an important part of Cross-Origin Resource Sharing (CORS) that help keep the web safe and secure. 
