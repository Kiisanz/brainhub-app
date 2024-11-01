// calendar.ts
import VanillaCalendar from "vanilla-calendar-pro";
import type { IOptions, ISettings } from "vanilla-calendar-pro/types";
import "vanilla-calendar-pro/build/vanilla-calendar.min.css";

// Function to initialize the calendar
export function initializeCalendar(
  element: HTMLElement,
  options: IOptions
): VanillaCalendar {
  const calendar = new VanillaCalendar(element, options);
  calendar.init();
  return calendar;
}

// Function to update calendar settings
export function updateCalendarSettings(
  calendar: VanillaCalendar,
  newSettings: ISettings
) {
  calendar.settings = { ...calendar.settings, ...newSettings };
  calendar.update({ dates: true });
}
