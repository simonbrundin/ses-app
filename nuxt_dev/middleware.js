const middleware = {}

middleware['force_login'] = require('../middleware/force_login.js')
middleware['force_login'] = middleware['force_login'].default || middleware['force_login']

export default middleware
