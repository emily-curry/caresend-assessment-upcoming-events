import type { CalendarEvent } from "@/models/event";
import z from "zod";

const eventSchema = z.object({
  title: z.string(),
  start: z.coerce.date(),
  end: z.coerce.date(),
});

const eventsListSchema = z.array(eventSchema);

export class EventsApi {
  public readonly fetchEventsList = async (): Promise<CalendarEvent[]> => {
    const response = await fetch("./mock.json");
    const body = await response.json();
    const parsed = eventsListSchema.parse(body);
    return parsed.map((p) => {
      const result: CalendarEvent = {
        id: window.crypto.randomUUID(),
        title: p.title,
        start: p.start.getTime(),
        end: p.end.getTime(),
      };
      return result;
    });
  };
}
