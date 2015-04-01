module.exports = {
  'isValue': function (value) {
    if (value === '') {
      return "This is a required field";
    }
    return "";
  },
  'isEmail': function (value) {
    if (!value.match(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i)) {
      return "Please, enter a valid email"
    }
    return "";
  },
  'isTrue': function (value) {
    if (value !== true) {
      return "This field has to be true"
    }
    return "";
  },
  'isNumeric': function (value) {
    if (typeof value === 'number') {
      return "";
    } else {
      var matchResults = value.match(/[-+]?(\d*[.])?\d+/);
      if (!! matchResults) {
        if (matchResults[0] == value) {
          return "";
        } else {
          return "This field has to be a number";
        }
      } else {
        return "This field has to be a number";
      }
    }
  },
  'isAlpha': function (value) {
    if (!value.match(/^[a-zA-Z]+$/)) {
      return "This field can only contain letters";
    }
    return "";
  },
  'isWords': function (value) {
    if (!value.match(/^[a-zA-Z\s]+$/)) {
      return "This field can only contain words";
    }

    return "";
  },
  'isSpecialWords': function (value) {
    if (!value.match(/^[a-zA-Z\s\u00C0-\u017F]+$/)) {
      return "This field can only contain words with special characters";
    }

    return "";
  },
  isLength: function (value, min, max) {
    if (max !== undefined) {
      if (value.length < min || value.length > max) {
        return "This field has to be between " + min + " and " + max + " characters";
      }
    }
    if (value.length < min) {
      return "This field has to be at least " + min + " characters long";
    }

    return "";
  },
  equals: function (value, eql) {
    if (value != eql) {
      return "This field has to match '" + eql + '"';
    }

    return "";
  },
  equalsField: function (value, field) {
    if (value != this[field]) {
      return "This field has to match " + field
    }

    return "";
  }
};
