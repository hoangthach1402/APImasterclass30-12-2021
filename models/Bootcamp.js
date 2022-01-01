const mongoose = require('mongoose')

const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters'],
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'Please add a description'],

    maxlength: [500, 'Name can not be more than 500 characters'],
  },
  website: {
    type: String,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
  },
  phone: {
    type: String,
    maxlength: [20, 'Phone number can not be lonnger than 20'],
  },
  address: {
    type: String,
    required: [true, 'Please add an address'],
  },
  location: {
    //   Geo Json
    type: {
      type: String,
      enum: ['Point'],
      //   required: true,
    },
    coordinates: {
      type: [Number],
      //   required: true,
      index: '2dsphere',
    },
    formattedAddress: String,
    stress: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },

  careers: {
    type: [String],
    required: true,
    enum: [
      'Web Development',
      'Mobile Development',
      'UI/UX',
      'Data Science',
      'Business',
      'Other',
    ],
  },
  averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [10, 'Rating must can not be more than 10'],
  },
  averageCost: Number,
  photo: {
    type: String,
    default: 'no-photo.jpg',
  },
  housing: {
    type: Boolean,
    default: false,
  },
  jobAssistance: {
    type: Boolean,
    default: false,
  },
  jobGuarantee: {
    type: Boolean,
    default: false,
  },
  acceptGi: {
    type: Boolean,
    default: false,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Bootcamp', BootcampSchema)
