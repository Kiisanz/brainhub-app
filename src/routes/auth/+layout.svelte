<div class="bg-gray w-full h-screen flex justify-center items-center">
    <div class="bg-white shadow-2xl w-1/2 max-w-2xl rounded-2xl overflow-hidden px-6 py-2">
        <div class="flex flex-col w-full items-start p-10">
            <div class="w-full">
            <img src="/logo.svg" alt="logo" class="w-56 h-auto"/>
            <h1 class="text-2xl font-bold text-zinc-800 pt-8">Let’s make things happen—together!</h1>
            <p class="text-sm text-zinc-800">Join us in a workspace designed for seamless teamwork—tackle tasks, share ideas, and achieve goals as one.</p>
            </div>
            <div class="w-full">
                <slot/>
            </div>
        </div>
    </div>
</div>
