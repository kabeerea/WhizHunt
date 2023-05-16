import express from 'express'

const router = express.Router(); 

router.get('/', (req, res) => { res.send('Get All') });
router.get('/:id', (req, res) => { res.send('Get One') });
router.post('/', (req, res) => { res.send('Create One') });
router.put('/:id', (req, res) => { res.send('Update One') });
router.delete('/:id', (req, res) => { res.send('Delete One') });

export default router