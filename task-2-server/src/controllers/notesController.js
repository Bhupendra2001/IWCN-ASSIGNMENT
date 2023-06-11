const db = require('../models')

// create main Model

const Notes = db.notes


const addNote = async(req, res)=>{
    try{
        const { title , content  } = req.body;
        const release_date = new Date()
        const  note = await Notes.create({ title , content, release_date})
        return res.status(201).json(note)
    }catch(error){
        console.error(error.message)
    return res.status(500).send({ error : 'Failed to create the note .'})
    }
}

const getALLNotes = async (req, res)=>{
    try{

        let Note = await Notes.findAll({})
        return res.status(200).send(Note)
    }catch(error){
        return res.status(500).send({ error : 'Failed to get  the notes .'})
    }
}

const deleteNote = async (req, res)=>{
    try{
        const noteId = req.params.id;
        const deletedNote = await Notes.destroy({ where: { id: noteId } });
        if (deletedNote) {
         return  res.status(200).json({ message :"Note Deleted successfully"});
        } else {
         return  res.status(404).json({ error: 'Note not found.' });
        }
    }catch(error){
        return res.status(500).send({ error : 'Failed to get  the notes .'})
    }
}

module.exports = { addNote , getALLNotes , deleteNote}