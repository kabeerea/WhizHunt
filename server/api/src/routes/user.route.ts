import express from 'express'
import { create } from '../controllers/user.controller'
const router = express.Router(); 

router.get('/', (req, res) => { res.send('Get All') });
router.get('/:id', (req, res) => { res.send('Get One') });
router.post('/', create);
router.put('/:id', (req, res) => { res.send('Update One') });
router.delete('/:id', (req, res) => { res.send('Delete One') });

export default router