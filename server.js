const express = require('express');
const app = express();

app.get('/hello-world', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'I am working!',
  });
});

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome DevOps!',
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
