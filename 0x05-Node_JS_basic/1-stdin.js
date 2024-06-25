// Output a welcome message to the user
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for input on the standard input (stdin)
process.stdin.on('readable', () => {
  // Read the chunk of input from stdin
  const chunk = process.stdin.read();

  // Check if there is input
  if (chunk) {
    // Output the user's name
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// Listen for the 'end' event on stdin (when the input stream is closed)
process.stdin.on('end', () => {
  // Output a closing message when the input stream ends
  process.stdout.write('This important software is now closing\n');
});
