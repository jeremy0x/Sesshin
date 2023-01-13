function setCookieAndRedirect() {
  // Create a new date object that is 1 month in the future
  var expirationDate = new Date();
  expirationDate.setMonth(expirationDate.getMonth() + 1);

  // Set the cookie with the desired value and expiration date
  document.cookie =
    'my-cookie=true; expires=' + expirationDate.toUTCString() + '; path=/';

  // Check the value of the cookie
  var cookieValue = getCookie('my-cookie');

  // If the cookie value is true, load the index.html file
  if (cookieValue === 'true') {
    window.location.replace('/home/');
  }
}

function getCookie(name) {
  var value = '; ' + document.cookie;
  var parts = value.split('; ' + name + '=');
  if (parts.length == 2) return parts.pop().split(';').shift();
}

window.onload = function () {
  // Check the value of the cookie
  var cookieValue = getCookie('my-cookie');

  // If the cookie value is true, load the index.html file
  if (cookieValue === 'true') {
    window.location.replace('/home/');
  }
};

function setCookie() {
  // Create a new date object that is 1 month in the future
  var expirationDate = new Date();
  expirationDate.setMonth(expirationDate.getMonth() + 1);

  // Set the cookie with the desired value and expiration date
  document.cookie =
    'my-cookie=true; expires=' + expirationDate.toUTCString() + '; path=/';
}

function getCookie(name) {
  var value = '; ' + document.cookie;
  var parts = value.split('; ' + name + '=');
  if (parts.length == 2) return parts.pop().split(';').shift();
}
