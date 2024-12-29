const userController = require('../controllers/user-controller')
const express = require('express')
const router = express.Router()

const userAuth = require('../middleware/user_auth')

router.get('/',userController.getAllStudent)
router.get('/:id',userController.getStudentById)
router.post('/',userController.addStudent)
router.delete('/:id', userAuth, userController.deleteStudent)
module.exports = router

module.exports = router