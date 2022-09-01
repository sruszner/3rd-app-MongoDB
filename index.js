
const app = require('./server');
const {PORT} = require('./config/global')
const {getConnection} = require('./db/connection');

getConnection()
.then((message) => {
    console.log(message)
})

app.listen(PORT, () =>{
    console.log(`App runing on Port: ${PORT}`);
});
