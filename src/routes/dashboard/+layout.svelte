<script lang="ts">
      import type { Snippet } from "svelte";
      import { onMount } from "svelte";
      import Icon from "@iconify/svelte";
      import "../../app.css";
  
      // Define props
      // export let data: PageData;
      export let children: Snippet;
  
      // Navigation items
      const NavItem = [
        { label: "Overview", icon: "si:dashboard-fill", path: "/dashboard" },
        { label: "Tasks", icon: "simple-icons:task", path: "/dashboard/tasks" },
        { label: "Schedule", icon: "uis:schedule", path: "/dashboard/schedule" },
        { label: "Friends", icon: "fa-solid:user-friends", path: "/dashboard/friends" },
        { label: "Goals", icon: "mage:goals-fill", path: "/dashboard/goals" },
        { label: "Settings", icon: "rivet-icons:gears", path: "/dashboard/settings" }
    ];

  
      // Generate breadcrumbs from URL
      let breadcrumbs: string[] = [];
      let currentPath = "";
      onMount(() => {
          // Get the current path and split into breadcrumb items
          currentPath = window.location.pathname;
          breadcrumbs = currentPath.split('/').filter(crumb => crumb); // Remove empty segments
          breadcrumbs.unshift("Dashboard"); // Add "Dashboard" as the root
      });
  
      // Set up Ctrl+K event listener
      onMount(() => {
          const focusSearchInput = (event: KeyboardEvent) => {
              if (event.ctrlKey && event.key === 'k') {
                  event.preventDefault();
                  const searchInput = document.getElementById('searchInput') as HTMLInputElement;
                  searchInput?.focus();
              }
          };
          
          document.addEventListener('keydown', focusSearchInput);
          
          return () => {
              document.removeEventListener('keydown', focusSearchInput);
          };
      });
  </script>
  
  <div class="flex h-screen container mx-auto max-w-screen-2xl">
      <!-- Left Sidebar -->
      <aside class="w-[15%] p-4 bg-white border-r border-dark-alt">
          <div class="p-3">
            <img src="/logo.svg" alt="logo">
          </div>
          <ul class="py-3 mt-4">
              {#each NavItem as Item}
                  <li>
                        <a href="{Item.path}" class="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-primary w-full text-start text-zinc-600 hover:text-white transition-all duration-300 ease-in-out mb-2 {currentPath === Item.path ? 'bg-primary text-white' : ''}">
                              <Icon icon={Item.icon} width="1.2rem" height="1.2rem" />
                              <p class="text-lg font-semibold">{Item.label}</p>
                          </a>                          
                  </li>
              {/each}
          </ul>
      </aside>
  
      <!-- Main Content Area -->
      <main class="flex-grow bg-white">
          <header class="border-b border-dark-alt p-4">
              <div class="flex justify-between items-center">
                  <!-- Breadcrumbs -->
                  <nav class="text-sm text-gray-600">
                      {#each breadcrumbs as crumb, index}
                          <a href={"/" + breadcrumbs.slice(1, index + 1).join('/')} class="{index === 0 ? 'font-bold text-black' : 'text-gray-500'}">
                              {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
                          </a>
                          {#if index < breadcrumbs.length - 1}
                              <span class="mx-2">/</span>
                          {/if}
                      {/each}
                  </nav>
  
                  <!-- Searchbar and Icon -->
                  <div class="flex items-center gap-3">
                      <div class="flex gap-2 pl-3 pr-4 py-2 rounded-2xl border border-dark-alt items-center max-w-md mx-auto">
                          <Icon icon="rivet-icons:magnifying-glass" width="22px" height="22px" class="pt-1 text-zinc-500"/>
                          <input id="searchInput" type="text" placeholder="Search Something..." class="w-full outline-none bg-transparent text-zinc-600" />
                          <div class="flex items-center gap-0 text-zinc-600">
                              <Icon icon="tabler:command" />
                              <p class="text-sm">K</p>
                          </div>
                      </div>    
                      <div class="rounded-full p-3 border border-dark-alt text-zinc-600">
                          <Icon icon="tabler:message" width="1.3rem" height="1.3rem" />
                      </div>
                      <div class="rounded-full p-3 border border-dark-alt text-zinc-600">
                          <Icon icon="mdi:bell-outline" width="1.3rem" height="1.3rem" />
                      </div>                      
                  </div>
              </div>
          </header>
          <div class="w-full">
              <!-- Render children content from +page.svelte -->
                  {#if children}
                      {@render children()}
                  {/if}
              </div>
      </main>
  </div>
  