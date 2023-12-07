<template>
  <main>
    <header><h1>Events</h1></header>
    <section v-for="item in store.events" :key="item.id" class="mt-4 mb-4">
      <EventCard :event="item" :hasConflict="store.conflicts.has(item.id)" />
    </section>
  </main>
</template>

<script lang="ts" setup>
import EventCard from "@/components/EventCard.vue";
import { useEventsStore } from "@/store";

const store = useEventsStore();
store.loadEvents();
</script>
