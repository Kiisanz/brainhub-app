<script lang="ts">
      import type { PageData } from "../$types";
      import { onMount, onDestroy } from 'svelte';
      import Icon from "@iconify/svelte";
      import { initializeCalendar, updateCalendarSettings } from '../../utils/calendar';
      import type { IOptions, ISettings } from 'vanilla-calendar-pro/types';
      import type VanillaCalendar from "vanilla-calendar-pro";
  
      // Define props
      let { data }: { data: PageData } = $props();
  
      // Greeting initialization
      let currentHour: number = new Date().getHours();
      let greeting: string = "";
  
      // Calendar variable
      let calendar: VanillaCalendar; 
  
      // Calendar options
      let calendarOptions: IOptions = {
          settings: {
              selected: {
                  dates: ['2024-08-20'], 
              },
              visibility: {
                  theme: "light"
              }
          },
      };
  
      // Update greeting based on the current hour
      function updateGreeting() {
          currentHour = new Date().getHours();
  
          // Determine the appropriate greeting based on the hour
          if (currentHour < 12) {
              greeting = "Good Morning";
          } else if (currentHour < 18) {
              greeting = "Good Afternoon";
          } else if (currentHour < 22) {
              greeting = "Good Evening";
          } else {
              greeting = "Good Night";
          }
      }
  
      updateGreeting();
  
      // Update greeting every hour
      const interval = setInterval(updateGreeting, 3600000); // Update every hour
  
      // Cleanup the interval when the component is destroyed
      onDestroy(() => clearInterval(interval));
  
      // Set up calendar on component mount
      onMount(() => {
          const calendarContainer = document.querySelector('#calendar') as HTMLElement;
          if (calendarContainer) {
              calendar = initializeCalendar(calendarContainer, calendarOptions);
          }
      });
  </script>
  
  <div class="w-full flex">
      <div class="w-[70%] p-4 border-r bg-gray border-dark-alt">
      <div class="flex justify-between items-center mb-3">
          <h1 class="text-xl font-bold p-3">{data.title}</h1>
      </div>
      <div class="bg-primary p-6 rounded-2xl flex justify-between items-center">
          <div class="w-3/4 flex flex-col">
              <h1 class="text-3xl font-bold text-white">{greeting}, Rifki Maulana!</h1>
              <p class="leading-tight mt-3 text-white">Welcome to BrainHub! We're excited to have you. Let’s make today productive!</p>
              <div class="mt-4">
              <button class="bg-white hover:bg-opacity-80 text-primary font-semibold px-3 py-2 rounded-lg inline-flex items-center gap-2 w-auto transition-all duration-300 ease-in-out">
                  <Icon icon="ic:baseline-plus" width="1.2rem" height="1.2rem" />
                  Start a Collaborative Session
              </button>
            </div>
          </div>
         
          <div class="w-1/4 flex justify-center">
              <img src="/profile.png" alt="Profile image" class="rounded-full object-cover h-36 w-auto" />
          </div>
      </div>
</div>
<div class="w-[30%]">
      <aside class="w-[full] p-4 bg-white">
            <h1 class="text-xl font-bold text-zinc-800 text-start px-3">My Activity</h1>
            <div class="flex flex-col justify-center items-center">
            <div class="bg-white rounded-xl border border-dark-alt">
                  Tes
            </div>
            <div id="calendar"></div>
      </div>
            
        </aside>
      </div>
  </div>
  