
<script lang="ts">
    import Icon from "@iconify/svelte"
    export let label: string = "Default Label";
    export let { id, icon } = $$props;
</script>

<div>
    <label id={id} class="text-sm text-zinc-800 font-semibold px-1">
        {label}
    </label>
    <div class="w-full rounded-lg border border-dark-alt px-3 py-1 mt-1 flex items-center gap-1 text-zinc-800 group hover:border-zinc-800 focus-within:border-zinc-800 transition-all duration-300 ease-in-out">
        <Icon icon={icon} width="1.5rem" height="1.5rem" class="flex-shrink-0 pt-1" />
        <input
                class="border-node outline-none flex-1 px-2 py-1"
                placeholder="Enter your email"
                {...$$props}
        />
    </div>

</div>
