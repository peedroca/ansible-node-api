import { Router } from 'express';
import { UserModel } from '../models/User.js';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const { name, email, age } = req.body;

        const instance = new UserModel();
        instance.name = name;
        instance.email = email;
        instance.age = age;

        await instance.save();
        
        res.status(200).send(`User #${instance._id} created successfully`);
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await UserModel.find({});
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
});

export default router;
