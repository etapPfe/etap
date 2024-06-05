const db = require('../Database/index'); // Assuming db exports the Sequelize connection and User model

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {
   
    addOne:async function(req,res){
        try {
            const user= await db.User.create(req.body)
            res.status(200).send(user)
            
        } catch (error) {
            res.status(500).json(error)
            
        }
    
    
     },
     getAll :async function(req,res){
        try {
            const user= await db.User.findAll({})
            res.status(200).send(user)
    
        } catch (error) {
           console.log(error)
    
        }
     },
     selectOne: async function(req, res) {
        try {
            const user = await db.User.findOne({ where: { id: req.params.id } })
                res.status(200).json(user);
        
        } catch (error) {
           console.log(error);
        }
    
        },
     deleteOne:async (req, res) => {
        try {
        const product = await db.User.destroy({
            where: { id: req.params.id },
        })
    
        res.json(product);
        } catch (error) {
       console.log(error)
        }
        },

        updateOne: async (req, res)  => {
            const { id } = req.params;
            const { Name, Email, Password,ImageUrl } = req.body;

            try {
                // Find the user by ID
                let user = await db.User.findByPk(id);

                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }

                // Update the user
                user.Name = Name || user.Name;
                user.Email = Email||  user.Email;
                user.Password = Password  ||user.Password;
                user.ImageUrl= ImageUrl|| user.ImageUrl
 
                // Hash the password if it is being updated
                if (Password) {
                    const salt = await bcrypt.genSalt(10);
                    user.Password = await bcrypt.hash(Password, salt);
                }

                // Save the updated user
                await user.save();

                return res.status(200).json({ user });
            } catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Server Error' });
            }
        }}
          