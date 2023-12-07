<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        <span v-if="props.hasConflict" class="has-text-danger mr-1">⚠</span>
        {{ props.event.title }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="block is-flex is-align-items-center">
          <strong class="mr-1">Start:</strong>
          <span>{{ dateTimeFormat.format(props.event.start) }}</span>
        </div>
        <div class="block is-flex is-align-items-center">
          <strong class="mr-1">End:</strong>
          <span>{{ dateTimeFormat.format(props.event.end) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CalendarEvent } from "@/models/event";

const props = defineProps<{
  event: CalendarEvent;
  hasConflict: boolean;
}>();
const dateTimeFormat = Intl.DateTimeFormat(undefined, {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});
</script>
