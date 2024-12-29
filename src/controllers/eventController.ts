import { Request, Response } from 'express';
import Event, { IEvent } from '../models/Event';

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events: IEvent[] = await Event.find().sort({ date: 1 }).limit(100);
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events' });
  }
};

export const createEvent = async (req: Request, res: Response) => {
  try {
    const newEvent: IEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: 'Error creating event' });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const updatedEvent: IEvent | null = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: 'Error updating event' });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const deletedEvent: IEvent | null = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting event' });
  }
};

