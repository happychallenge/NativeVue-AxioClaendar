<template lang="html">
    <Page loaded="pageLoaded" class="page">

        <ActionBar title="Calendar" class="action-bar">
        </ActionBar>

        <RadCalendar id="calendar" 
              :eventSource="calendarEvents" 

              eventsViewMode="Inline" 
              selectionMode="Single" 
              viewMode="Month"
              transitionMode="Stack" 
              locale="en-US" 
              
              @dateSelected="onDateSelected" 
              @dateDeselected="onDateDeselected" 
              @navigatedToDate="onNavigatedToDate"
              @navigatingToDateStarted="onNavigatingToDateStarted" 
              @viewModeChanged="onViewModeChanged" />
    </Page>
</template>


<script>
import * as calendarModule from 'nativescript-ui-calendar';
import { Color } from 'color';
export default {
  methods: {
    onDateSelected(args) {
      console.log("onDateSelected: " + args.date);
    },

    onDateDeselected(args) {
      console.log("onDateDeselected: " + args.date);
    },

    onNavigatedToDate(args) {
      console.log("onNavigatedToDate: " + args.date);
    },

    onNavigatingToDateStarted(args) {
      console.log("onNavigatingToDateStarted: " + args.date);
    },

    onViewModeChanged(args) {
      console.log("onViewModeChanged: " + args.newValue);
    }
  },
  created() {
    // Creating dummy events
    let events = [];
    let now = new Date();
    let startDate;
    let endDate;
    let event;
    let colors = [new Color(200, 188, 26, 214), new Color(220, 255, 109, 130), new Color(255, 55, 45, 255), new Color(199, 17, 227, 10), new Color(255, 255, 54, 3)];
    for (let i = 1; i < 10; i++) {
      startDate = new Date(now.getFullYear(), now.getMonth(), i * 2, 1);
      endDate = new Date(now.getFullYear(), now.getMonth(), (i * 2), 3);
      event = new calendarModule.CalendarEvent("생산활동 " + i, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]);
      events.push(event);
      if (i % 3 == 0) {
        event = new calendarModule.CalendarEvent("영업활동 " + i, startDate, endDate, true, colors[i * 5 % (colors.length - 1)]);
        events.push(event);
      }
    }
    this.calendarEvents = events;
  },
  data() {
    return {
      calendarEvents: []
    }
  },
  /*
       Event view mode can be one of "None", "Inline" or "Popover"
       Selection mode can be one of "None", "Single", "Multiple" or "Range"
       View mode can be one of "Week", "Month", "MonthNames", "Year" or "Day"

      Available transition modes
         http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/Calendar/transition-modes
    

      For styling the calendar, please go through this part in the docs
         http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/Calendar/Styling/styling
  */

};
</script>