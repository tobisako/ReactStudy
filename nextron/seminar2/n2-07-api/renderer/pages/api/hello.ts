// Fake data
const fake_data = { id: 1, data: 'Hello World!' };

export default function handler(req, res) {
  console.log('/api/hello');
  // Get data from your database
  res.status(200).json(fake_data);
}
