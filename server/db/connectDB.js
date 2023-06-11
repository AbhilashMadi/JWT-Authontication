const mongoose = require('mongoose');

// Check if there is an active connection
if (mongoose.connection.readyState !== 1) {
    // Connect to DB
    mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log('Connected to DB Successfully...🤩'))
        .catch((err) => console.log(`ERROR: ${err}`));
} else {
    console.log('Already connected to DB...🚀');
}
