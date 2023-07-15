const router = require('express').Router()
const { body } = require('express-validator')
const {
    createExercise,
    getExercises,
    editExercise,
    deleteExercise,
    getExercisesByType,
} = require('../controllers/exerciseController')
const verifyToken = require('../middlewares/auth')

router.post('/', verifyToken, createExercise)
router.get('/', verifyToken, getExercises)
router.put('/:exerciseId', verifyToken, editExercise)
router.patch('/:exerciseId', verifyToken, editExercise)
router.delete('/:exerciseId', verifyToken, deleteExercise)
router.get('/:type', verifyToken, getExercisesByType)

module.exports = router
