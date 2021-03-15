const middleware = {}

middleware['forceLoggedIn'] = require('..\\middleware\\forceLoggedIn.js')
middleware['forceLoggedIn'] = middleware['forceLoggedIn'].default || middleware['forceLoggedIn']

export default middleware
