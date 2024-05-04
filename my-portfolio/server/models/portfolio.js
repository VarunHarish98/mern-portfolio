const mongoose = require("mongoose");
// import { v4 as uuidv4 } from 'uuid';
const introSchema = new mongoose.Schema({
    welcomeText: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    },
    introduction: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
const aboutSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    description_first: {
        type: String,
        required: true
    },
    description_last: {
        type: String,
        required: true
    },
    techVerbiage: {
        type: String,
        required: true
    },
    skills: {
        type: Array,
        required: true
    }
})
const experienceSchema = new mongoose.Schema({
    period: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
const projectSchema = new mongoose.Schema({
    technologies: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})
const educationSchema = new mongoose.Schema({
    courses: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})
const detailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})
const otherSchema = new mongoose.Schema({
    linkedinUrl: {
        type: String,
        required: true
    },
    githubUrl: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    resumeUrl: {
        type: String,
        required: true
    }
})

module.exports = {
    Intro: mongoose.model('Intro', introSchema),
    About: mongoose.model('about', aboutSchema),
    Experience: mongoose.model('experiences', experienceSchema),
    Project: mongoose.model('projects', projectSchema),
    Education: mongoose.model('education', educationSchema),
    Contact: mongoose.model('Contact', detailsSchema),
    Others: mongoose.model('others', otherSchema)
}
