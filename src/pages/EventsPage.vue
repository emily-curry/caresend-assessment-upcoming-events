<template>
  <main>
    <header><h1>Events</h1></header>
    <section v-for="item in store.events" :key="item.id">
      <h3>{{ item.title }}</h3>
      <div>
        {{
          Intl.DateTimeFormat(undefined, { dateStyle: "short", timeStyle: "short" }).format(
            item.start,
          )
        }}
      </div>
      <div>
        {{
          Intl.DateTimeFormat(undefined, { dateStyle: "short", timeStyle: "short" }).format(
            item.end,
          )
        }}
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useEventsStore } from "@/store";

const store = useEventsStore();
store.loadEvents();
</script>
