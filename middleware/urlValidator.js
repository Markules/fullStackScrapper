const validateUrl = (req, res, next) => {
  const expression = "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?";

  const regex = new RegExp(expression);

  if (req.url.match(regex)) {
    return req.url;
  } else {
    return Promise.reject("Invalid URL");
  }
};

module.exports = validateUrl;
