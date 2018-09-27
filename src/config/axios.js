import axios from 'axios'

// This axios configuration is important
// if we're using cors in server and want to keep session
// We only need this in development mode, as we're using cors
// Reference: https://medium.com/@alexishevia/using-cors-in-express-cac7e29b005b
if( window.isDelvelopment )
    axios.defaults.withCredentials = true;

