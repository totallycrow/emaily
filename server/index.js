const express = require('express');
require('./services/passport') // not pulling any code out of passport, just need it to run, so no need to assign it to a const;



const app = express();

require('./routes/authRoutes')(app);






const PORT = process.env.PORT || 5000;

app.listen(PORT);