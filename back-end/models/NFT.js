

const mongoose = require('mongoose');

const Joi = require("joi");

const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: { type: String },
    type: { type: String },
    imageUrl: { type: String },
    description: { type: String }
})

const validateNFT = async (pet) => {
    const schema = Joi.object({
        
        name: Joi.string().min(2).max(255).required(),
        type: Joi.string().min(2).max(255),
        imageUrl: Joi.string().min(2).max(255).required(),
        description: Joi.string().min(2).max(100000),
        
    });

    return await schema.validateAsync(product);
};

module.exports = mongoose.model('Pet', petSchema);
module.exports.validate = validateNFT;