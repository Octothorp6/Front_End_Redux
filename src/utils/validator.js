const addressRegex = RegExp(/\d+\w+\s\w+\s\w+/);
const dateRegex = RegExp(/^(19|20)\d\d[- /.](0[1-9]|1[012])$/);
const creditCardRegex = RegExp(/(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/);
const zipCodeRegex = RegExp(/[0-9]{5}(?:-[0-9]{4})?$/);
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);