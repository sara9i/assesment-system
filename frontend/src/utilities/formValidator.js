const isValidWebLinkWithHTTP = function (value) {
  const re = new RegExp(
    'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)',
    'i'
  );
  return re.test(value);
};

export const validateLink = (value, allowEmptyValue = false) => {
  if (allowEmptyValue) {
    if (!value || value === '') {
      return true;
    }
  }
  return isValidWebLinkWithHTTP(value);
};

export const validateLinks = (links, allowEmptyValue = false) => {
  links.forEach((link) => {
    if (!validateLink(link, allowEmptyValue)) return false;
  });
  return true;
};
