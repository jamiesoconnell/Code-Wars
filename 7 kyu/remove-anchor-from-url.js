// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
    // Find the index of the "#" character.
    const anchorIndex = url.indexOf('#');
  
    // If "#" is found, slice the URL up to that index; otherwise, return the original URL.
    return anchorIndex !== -1 ? url.slice(0, anchorIndex) : url;
  }
