// import { EventModel } from "../models/eventModel.js";


// export const getEvents = async (req, res, next) => {
//     try {
//         const allEvents = await EventModel.find();
//         res.json(allEvents);
//     } catch (error) {
//         next(error);
//     }
// }

// export const getOneEvent = async (req, res, next) => {
//     try {
//         const singleEvent = await EventModel.findById(req.params.id);
//         res.json(singleEvent);
//     } catch (error) {
//         next(error);
//     }
// }

// export const addEvent = async (req, res, next) => {
//     try {
//         const { eventName, date, location, flier } = req.body;
//         if(!eventName || !date || !location || !flier) {
//             return res.status(400).json({ message: "All fields required" });
//         }
//         const addYourEvent = await EventModel.create({
//             eventName,
//             date,
//             location,
//             flier
//         });
//         res.status(201).json(addYourEvent);
//     } catch (error) {
//         next(error);
//     }
// }

// export const updateEvent = async (req, res, next) => {
//     try {
//         const eventUpdate = req.body
//         const newEvent = await EventModel.findByIdAndUpdate(req.params.id, eventUpdate, { new: true });
//         res.json(newEvent);
//     } catch (error) {
//         next(error);
//     }
// }

// export const deleteEvent = async (req, res, next) => {
//     try {
//         const deleteYourEvent = req.body;
//         const deletedEvent = await EventModel.findByIdAndDelete(req.params.id, deleteYourEvent, { new: true });
//         res.json(deletedEvent);
//     } catch (error) {
//         next(error);
//     }
// }



/////////////////


import { EventModel } from "../models/eventModel.js";

// GET all events
export const getEvents = async (req, res, next) => {
    try {
        const allEvents = await EventModel.find();
        res.json(allEvents);
    } catch (error) {
        next(error);
    }
};

// GET one event by ID
export const getOneEvent = async (req, res, next) => {
    try {
        const singleEvent = await EventModel.findById(req.params.id);
        if (!singleEvent) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.json(singleEvent);
    } catch (error) {
        next(error);
    }
};

// POST create a new event
export const addEvent = async (req, res, next) => {
    try {
        const { eventName, date, location, flier } = req.body;
        if (!eventName || !date || !location || !flier) {
            return res.status(400).json({ message: "All fields required" });
        }
        const newEvent = await EventModel.create({
            eventName,
            date,
            location,
            flier
        });
        res.status(201).json(newEvent);
    } catch (error) {
        next(error);
    }
};

// PATCH update an event by ID
export const updateEvent = async (req, res, next) => {
    try {
        const eventUpdate = req.body;
        const updatedEvent = await EventModel.findByIdAndUpdate(req.params.id, eventUpdate, { new: true });
        if (!updatedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.json(updatedEvent);
    } catch (error) {
        next(error);
    }
};

// DELETE delete an event by ID
export const deleteEvent = async (req, res, next) => {
    try {
        const deletedEvent = await EventModel.findByIdAndDelete(req.params.id);
        if (!deletedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.json(deletedEvent);
    } catch (error) {
        next(error);
    }
};
