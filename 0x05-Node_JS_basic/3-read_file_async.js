const fs = require('fs');

/**
 * Counts the students in a CSV data file and logs the results.
 * @param {string} path - The path to the CSV data file.
 * @returns {Promise<void>} A Promise that resolves after processing the data.
 */
module.exports = function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the content of the CSV data file asynchronously
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      // Handle any errors that may occur during file reading
      if (err) return reject(Error('Cannot load the database'));

      // Split data into lines and exclude the header
      const lines = data.split('\n').slice(1, -1);
      
      // Extract the header of the data
      const header = data.split('\n').slice(0, 1)[0].split(',');

      // Find the indices of 'firstname' and 'field' in the header
      const idxFn = header.findIndex((ele) => ele === 'firstname');
      const idxFd = header.findIndex((ele) => ele === 'field');

      // Declare dictionaries to count each field and store lists of students
      const fields = {};
      const students = {};

      // Process each line of the CSV data
      lines.forEach((line) => {
        const list = line.split(',');
        
        // Update the count for the field
        if (!fields[list[idxFd]]) fields[list[idxFd]] = 0;
        fields[list[idxFd]] += 1;

        // Update the list of students for the field
        if (!students[list[idxFd]]) students[list[idxFd]] = '';
        students[list[idxFd]] += students[list[idxFd]] ? `, ${list[idxFn]}` : list[idxFn];
      });

      // Output the total number of students
      console.log(`Number of students: ${lines.length}`);

      // Output the number of students in each field along with their names
      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          const element = fields[key];
          console.log(`Number of students in ${key}: ${element}. List: ${students[key]}`);
        }
      }

      // Resolve the promise after processing the data
      return resolve();
    });
  });
};
