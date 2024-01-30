import readDatabase from '../utils';

/**
 * The list of supported majors.
 */
const VALID_MAJORS = ['CS', 'SWE'];

/**
 * Contains the student-related route handlers.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
class StudentsController {
  // Handler for retrieving all students
  static getAllStudents(request, response) {
    // Get the path to the data file from command line arguments
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    // Read the database asynchronously
    readDatabase(dataPath)
      .then((studentGroups) => {
        const responseParts = ['This is the list of our students'];
        // A comparison function for ordering a list of strings in ascending
        // order by alphabetic order and case insensitive
        const cmpFxn = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        // Iterate through student groups, sorting them and building the response
        for (const [field, group] of Object.entries(studentGroups).sort(cmpFxn)) {
          responseParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        // Send a 200 status response with the joined response parts
        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        // Handle errors by sending a 500 status response with the error message
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  // Handler for retrieving students by major
  static getAllStudentsByMajor(request, response) {
    // Get the path to the data file from command line arguments
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    // Extract the major parameter from the request
    const { major } = request.params;

    // Validate the major parameter
    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    // Read the database asynchronously
    readDatabase(dataPath)
      .then((studentGroups) => {
        let responseText = '';

        // Check if the major exists in the student groups
        if (Object.keys(studentGroups).includes(major)) {
          const group = studentGroups[major];
          responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }

        // Send a 200 status response with the response text
        response.status(200).send(responseText);
      })
      .catch((err) => {
        // Handle errors by sending a 500 status response with the error message
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

// Export the StudentsController class as the default export
export default StudentsController;
// Also, export the StudentsController class using CommonJS syntax
module.exports = StudentsController;
