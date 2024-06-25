const fs = require('fs');

// Export a function that reads a database file asynchronously and returns a Promise
module.exports = function readDatabase(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously with utf-8 encoding
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      // Handle read errors
      if (err) return reject(Error('Cannot load the database'));

      // Split data into lines and exclude the header
      const lines = data.split('\n').slice(1, -1);
      // Extract the header
      const header = data.split('\n').slice(0, 1)[0].split(',');
      // Find the indices of 'firstname' and 'field'
      const idxFn = header.findIndex((ele) => ele === 'firstname');
      const idxFd = header.findIndex((ele) => ele === 'field');
      // Dictionaries to count fields and store lists of students
      const fields = {};
      const students = {};
      // Object to store all data
      const all = {};

      lines.forEach((line) => {
        const list = line.split(',');
        if (!fields[list[idxFd]]) fields[list[idxFd]] = 0;
        fields[list[idxFd]] += 1;
        if (!students[list[idxFd]]) students[list[idxFd]] = '';
        students[list[idxFd]] += students[list[idxFd]]
          ? `, ${list[idxFn]}`
          : list[idxFn];
      });

      // Populate the 'all' object with the results
      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          const number = fields[key];
          all[key] = {
            students: `List: ${students[key]}`,
            number,
          };
        }
      }

      // Resolve the promise with the 'all' object
      return resolve(all);
    });
  });
};
