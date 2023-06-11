const { getALLNotes , addNote , deleteNote} = require('../controllers/notesController')

const router = require('express').Router()

router.post('/addNote', addNote)
router.get('/getAllNotes', getALLNotes)
router.delete('/deleteNote/:id', deleteNote)

module.exports= router