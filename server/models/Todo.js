const mongoose = require("mongoose");

const todoSchema  = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    status: {
        type: Boolean,
        default: false,
    },
    priority: {
        type: Boolean,
        default: false,
    }
});

const Todos = mongoose.model("todolist" , todoSchema);
module.exports = Todos;