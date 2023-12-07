import { EventsApi } from "@/api/events-api";
import type { CalendarEvent } from "@/models/event";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useEventsStore = defineStore("events", () => {
  const eventsApi = new EventsApi();
  const events = ref<CalendarEvent[]>([]);

  const conflicts = computed(() => {
    const result = new Set<string>();

    const flatEvents = events.value
      .flatMap((e, idx) => {
        const start = { idx: idx, type: "start", value: e.start } as const;
        const end = { idx: idx, type: "end", value: e.end } as const;
        return [start, end];
      })
      .sort((a, b) => {
        if (a.value > b.value) return 1;
        if (a.value < b.value) return -1;
        if (a.type === "end" && b.type === "start") return -1;
        if (a.type === "start" && b.type === "end") return 1;
        if (a.idx > b.idx) return 1;
        if (a.idx < b.idx) return -1;
        return 0;
      });

    let open: number | undefined;
    for (let i = 0; i < flatEvents.length; i++) {
      const current = flatEvents[i];
      if (current.type === "start") {
        if (open === undefined) {
          open = current.idx;
        } else {
          result.add(events.value[current.idx].id);
          result.add(events.value[open].id);

          if (events.value[current.idx].end > events.value[open].end) {
            open = current.idx;
          } else if (
            events.value[current.idx].end === events.value[open].end &&
            current.idx > open
          ) {
            open = current.idx;
          }
        }
      } else {
        if (open === undefined)
          throw new Error(`Invariant violation: Tried to close a range but none is currently open`);

        if (current.idx === open) {
          open = undefined;
        }
      }
    }

    return result;
  });

  async function loadEvents() {
    const result = await eventsApi.fetchEventsList();
    const sorted = [...result].sort((a, b) => (a.start > b.start ? 1 : a.start < b.start ? -1 : 0));
    events.value = sorted;
  }

  return { loadEvents, events, conflicts };
});
