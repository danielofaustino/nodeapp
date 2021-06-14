const app = require('./server');
require('dotenv').config();

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server Running at ${PORT}`));
