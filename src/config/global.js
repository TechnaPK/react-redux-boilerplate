// Importang Global Variables and Functions
// These vars and functions can be accessed from anywhere
// This file must be imported before any other file

import { isMobile } from 'react-device-detect'
import M from 'materialize-css/dist/js/materialize.min.js'

window.isDelvelopment = (window.location.hostname === 'localhost')
// window.isMobile = window.isDelvelopment || isMobile // Always consider as mobile device if Development Mode, otherwise checking using react-device-detect
window.isMobile = isMobile
window.baseURL = window.isDelvelopment ? 'http://localhost:5000' : ''

window.showLoading = () => { document.body.className = '' }
window.hideLoading = () => { document.body.className = 'loaded' }

window.notify = (message = '', type = '') => {

    let classes;
    switch (type) {
        case 'success':
            classes = 'green'
            break
        case 'error':
            classes = 'red'
            break
        default:
            classes = 'black'
            break
    }

    M.toast({ classes: classes, html: message })

}