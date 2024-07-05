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
        const newEvent = await EventModel.create({
            ...req.body,
            flier: req.file.filename
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
