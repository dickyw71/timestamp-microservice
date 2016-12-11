// I can pass a string as a parameter, and it will check to see whether 
// that string contains either a unix timestamp
// or a natural language date (example: January 1, 2016).

// If it does, it returns both the Unix timestamp 
// and the natural language form of that date.

// User Story: If it does not contain a date or Unix timestamp, 
// it returns null for those properties.

var moment = require('moment');
moment().format();

const timestampService = (inString) => { 
  if (moment(inString, 'X', true).isValid())
  {
     return { 
      unix: Number.parseInt(inString),
      natural: moment(inString, "X").format("MMMM DD, YYYY")
    } 

  }
  else if (moment(inString, "MMMM DD, YYYY", true).isValid()) {
    return { 
      unix: moment(inString, "MMMM DD, YYYY").format("X"),
      natural: inString
    }
  }
  else  {
    return { 
      unix: null,
      natural: null
    }
  }
}


module.exports = timestampService
