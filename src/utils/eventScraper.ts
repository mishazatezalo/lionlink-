import axios from 'axios';
import cheerio from 'cheerio';
import Event from '../models/Event';

export const scrapeEvents = async () => {
  try {
    const response = await axios.get('https://example.com/events'); // Replace with the actual events page URL
    const $ = cheerio.load(response.data);

    const events = $('.event-item').map((_, element) => {
      const title = $(element).find('.event-title').text().trim();
      const description = $(element).find('.event-description').text().trim();
      const dateString = $(element).find('.event-date').text().trim();
      const date = new Date(dateString);

      return { title, description, date };
    }).get();

    for (const event of events) {
      await Event.findOneAndUpdate(
        { title: event.title, date: event.date },
        event,
        { upsert: true, new: true }
      );
    }

    console.log(`Scraped and updated ${events.length} events`);
  } catch (error) {
    console.error('Error scraping events:', error);
  }
};

