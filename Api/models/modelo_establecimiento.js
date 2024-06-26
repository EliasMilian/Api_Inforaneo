const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estabSchema = new Schema({
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    priceRange: { type: String, trim: true, required: true },
    category: { type: String, trim: true, required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    comments: [{
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        opinion: {
            type: String,
            required: true
        }
    }] // Arreglo de objetos para los comentarios
});

const Establecimientos = mongoose.model('Establecimientos', estabSchema);
module.exports = Establecimientos;
