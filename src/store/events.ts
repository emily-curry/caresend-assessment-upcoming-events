import { EventsApi } from "@/api/events-api";
import type { Event } from "@/models/event";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useEventsStore = defineStore("events", () => {
  const eventsApi = new EventsApi();
  const events = ref<Event[]>([]);

  async function loadEvents() {
    const result = await eventsApi.fetchEventsList();
    const sorted = [...result].sort((a, b) => {
      if (a.start > b.start) return 1;
      if (a.start < b.start) return -1;
      return 0;
    });
    events.value = sorted;
  }

  return { loadEvents, events };
});
