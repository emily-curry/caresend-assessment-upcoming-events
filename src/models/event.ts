export interface Event {
  /** A unique identifier representing the event. */
  id: string;
  /** The display name of the event. */
  title: string;
  /** The instant the event starts. */
  start: number;
  /** The instant the event ends. */
  end: number;
}
