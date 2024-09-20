const fs = require('fs').promises;

async function readDatabase(filepath) {
  try {
    const data = await fs.readFile(filepath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1); // Remove header

    const fields = {};
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    });

    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
