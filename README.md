![CareSend](https://gitlab.com/pumposh/caresend-assessment-upcoming-events/-/raw/master/src/assets/logos/CareSend%20Horizontal.png)

# Upcoming Events

#### Introduction

Your assignment is to build a prototype of a Vue.js web app called “Upcoming Events”. The app must display a list of events, sectioned by start date, and listed in chronological order. The app must also correctly identify conflicts between events.

#### Getting Started

Fork or clone this repository and run the following commands to initialize your development environment:

```bash
yarn
yarn serve
```

Within this repo in the directory `/src/assets/data/` is a JSON file titled `mock.json`. This file contains the input for this assignment: an array of `Event` objects that match the following schema:

```typescript
interface Event {
  title: string;
  start: string; // i.e. “November 6, 2018 1:26 PM”
  end: string;
}
```

Note that the events in the input file are not presorted chronologically. The application must interpret this data and meet the following requirements:

#### UI Requirements

In this project, SASS and Buefy are configured for your convenience, but you may install any style preprocessor or UI bootstrap framework you prefer as long as you provide an explanation for your preference.

- All event information must be displayed (title, start, end)
- Events are listed in chronological order
- Events are grouped by date
- There is some indication that an event conflicts (overlaps) with another event.

#### Functional Requirements

To implement the event conflict feature, you will need to design an algorithm to find events that overlap with each other. Note that an event ending at the same time another event starts should not be considered a conflict.

- Sort all events chronologically
- Design and implement an algorithm to determine event conflicts
- Determining event conflicts in the entire data set must perform better than *O(n<sup>2</sup>)*
- Clear separation of concerns, good software architecture
- Comments with a brief description of the algorithm

#### Analytical Requirements

Edit this `README.md` in your forked repository and at the bottom of the document, provide an analysis of your implementation process with consideration of the following:

- Thought process while designing your application
- Explanation of additionally installed dependencies
- Trade-offs or assumptions you made in your design
- Run time complexity analysis

#### Submission

To submit your work, deploy your project to GitHub/GitLab and make sure to have your analysis within the `README.md` file. Provide a link to the working application (Heroku, Google Cloud, AWS or any other web hosting should work)

#### Tips & FAQs

- Don’t worry too much about UI design. You can use any bootstrap framework of your choice and keep it simple
- You can use any external libraries and dependencies as long as you can clearly explain how they work
- You can assume that events occur in your local timezone (i.e., you may ignore time zones for this assignment)
- An event ending at the same time another event starts should not be considered a conflict

### Project Analysis

Full Name: Emily Curry

#### Dependency changes

- `prettier` + `eslint-plugin-prettier`: Lint warnings for code style issues are noise, they are a category of issue that can be fully offloaded to a tool and I rather not think about them at all. `prettier` allows me 100% consistent formatting on save, `eslint-plugin-prettier` disables all lint rules that will be fixed by prettier on save so that I'm not seeing those lint warnings while I work.
- `vue` updates + `node-gyp`: Just to allow building with node >= v18.
- `zod`: I/O at the boundaries of the application should be validated at runtime to assert our data matches our type declarations. `zod` is a pretty great schema validation library.

#### Conflict detection

The strategy for detecting conflicts is as follows:

- Create an array containing one `start` and one `end` object for each event.
- Sort this array in ascending order. If times are the same, take the `end` events first.
- As we iterate through the array, we'll keep track of the currently `open` time range. For each element in this array:
  - If it's a `start` type:
    - If we have no `open` range, make this element the `open` range.
    - If we do have an `open` range, then a conflict has been detected. Add both the `open` range and the current element to the result set, then set the `open` range to whichever range ends later.
  - If it's an `end` type:
    - If we have an `open` range and it matches the current element, clear the `open` range.
    - Otherwise, do nothing.

The actual start/end event list happens in linear time, the bottleneck in time complexity comes from the sort operation (which is dependent on the implementation of the JS engine).

Note that this does not tell you *which* events conflict with which. I can't think of a way to do that that's not O(n^2) in the worst case (every event conflicts with every other event), though that solution could be described as O(n*k) where n is the input size and k is the number of conflicts in the set. That might look something like:

```ts
const result = new Map<string, Set<string>>();
// assuming events is sorted by start time asc
for (const i = 0; i < events.length - 1; i++) {
  const a = events[i];
  for (const k = i + 1; k < events.length; k++) {
    const b = events[k];
    if (b.start >= a.end) break;
    if (!result.has(a.id)) result.set(a.id, new Set());
    if (!result.has(b.id)) result.set(b.id, new Set());
    result.get(a.id)!.add(b.id);
    result.get(b.id)!.add(a.id);
  }
}
