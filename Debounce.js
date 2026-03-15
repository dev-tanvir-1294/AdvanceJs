// Debounce function implementation

function debounce(func, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const search = (query) => {
  console.log("Searching for: ", query);
};

// search("h");
// search("he");
// search("hel");
// search("hell");
// search("hello");

searchWithDebounce = debounce(search, 300);

searchWithDebounce("h");
searchWithDebounce("he");
searchWithDebounce("hel");
searchWithDebounce("hell");
searchWithDebounce("hello");

// throttle function implementation

const throttle = (func, limit) => {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall < limit) {
      return;
    }

    lastCall = now;

    return func(...args);
  };
};

const sendMessage = (message) => {
  console.log("Message sent: ", message);
};

const sendMessageWithThrottle = throttle(sendMessage, 1000);

// sendMessage("Hi");
// sendMessage("Hello");
// sendMessage("How are you?");

sendMessageWithThrottle("Hi");
sendMessageWithThrottle("Hello");
sendMessageWithThrottle("How are you?");
