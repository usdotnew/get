import entryDenied from './entryDenied';
import entryGranted from './entryGranted';

let htmlResponse = "";

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
});

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {

  if (Math.random() <= 0.55) { 
    htmlResponse= entryDenied();
  } else { 	
    htmlResponse= entryGranted();
  }
  return new Response(htmlResponse, {
    headers: { 'content-type': 'text/html' },
  })
}
