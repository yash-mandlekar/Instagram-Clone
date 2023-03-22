const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    emailornumber: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: 'https://imgs.search.brave.com/3AOI0r1EWtWK5S8cWg5lI6XOgy_QsYE-M8A1CvsVWlE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/eW9TTC1XTzBZVTVt/UUtST3VkdnN3SGFI/YSZwaWQ9QXBp'
    },
    bio: {
        type: String,
        default: 'Hello, I am a new user!'
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    stories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Story'
    }],
    token: {
        type: String
    }
}
, {
    timestamps: true
});


module.exports = mongoose.model('InstaUser', userSchema);