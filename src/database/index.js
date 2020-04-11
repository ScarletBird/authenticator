const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/noderest')
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-60vsa.mongodb.net/test?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true 
}).then(response => console.log('Conected to Database..'))
.catch(error => console.log('error ->', error.message));
mongoose.Promise = global.Promise;

module.exports = mongoose;