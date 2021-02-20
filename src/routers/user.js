const express =  require('express')
const User = require('../models/user')
const router = new express.Router()


// this method is used to create the data
router.post('/users', async (req, res) => { // with the help of the await save() funx all the users will be saved. And every thing after it will be saved first either successfully or unsuccessfully 
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)

    }

})
// this method is used to fetch the data

router.get('/users', async (req, res) => {

    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }

})
// to fetch the data from id

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.send(500).send(e)
    }


})
// to update the user and fileds in the database
router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)// to convert array to string
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: '! NOT Allowed Invalid Update '})
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

//to DELETE the data from user account

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router