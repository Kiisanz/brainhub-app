<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import InputForm from "$lib/components/InputForm.svelte";
    import Button from "$lib/components/Button.svelte";
    import Icon from "@iconify/svelte";

    let role = '';

    // Reaktif terhadap perubahan pada URL
    $: role = $page.url.searchParams.get('role') || '';

    const handleSignupTeacher = () => {
        // Handle the teacher signup logic here
        console.log('Signing up as Teacher');
    };

    const handleSignupStudent = () => {
        // Handle the student signup logic here
        console.log('Signing up as Student');
    };
</script>

<div class="w-full flex flex-col gap-2">
    {#if role === 'teacher'}
        <form on:submit|preventDefault={handleSignupTeacher}>
            <div class="flex flex-col gap-3 mt-4">
                <div class="grid grid-cols-2 gap-3">
                    <InputForm type="text" id="nameInput" placeholder="Full Name" label="Full Name" icon="fluent:person-28-regular"/>
                    <InputForm type="text" id="subjectInput" placeholder="Subject expertise" label="Subject Expertise" icon="ph:chalkboard-teacher" />
                </div>
                <InputForm type="email" id="emailInput" placeholder="@example.com" label="Email Address" icon="mage:email" />
                <InputForm type="password" id="passwordInput" placeholder="Password must be at least 8 characters long." label="Password" icon="solar:lock-linear"/>
                <div class="mt-3">
                    <Button label="Sign Up" />
                </div>
                <div class="flex justify-center items-center gap-1 text-zinc-800 text-sm">
                    <p>Already have an account?</p>
                    <a href="/auth/login" class="text-blue-500 hover:underline text-end text-sm">Login</a>
                </div>
            </div>
        </form>
    {:else if role === 'student'}
        <form on:submit|preventDefault={handleSignupStudent}>
            <div class="flex flex-col gap-3 mt-4">
                <InputForm type="text" id="nameInput" placeholder="Full Name" label="Full Name" icon="fluent:person-28-regular"/>
                <div class="grid grid-cols-2 gap-3">
                    <InputForm type="text" id="subjectInput" placeholder="Subject" label="Subject" icon="emojione-monotone:books" />
                    <InputForm type="text" id="gradeInput" placeholder="Grade Level" label="Grade Level" icon="solar:square-academic-cap-outline" />
                </div>
                <InputForm type="email" id="emailInput" placeholder="@example.com" label="Email Address" icon="mage:email" />
                <InputForm type="password" id="passwordInput" placeholder="Password must be at least 8 characters long." label="Password" icon="solar:lock-linear"/>
                <div class="mt-3">
                    <Button label="Sign Up" />
                </div>
                <div class="flex justify-center items-center gap-1 text-zinc-800 text-sm">
                    <p>Already have an account?</p>
                    <a href="/auth/login" class="text-blue-500 hover:underline text-end text-sm">Login</a>
                </div>
            </div>
        </form>
    {:else}
        <div class="flex flex-col items-center justify-center mt-12">
            <h1 class="text-xl font-bold text-zinc-800 mb-8">
                Who Are You in the Collaboration?
            </h1>
            <div class="flex gap-14 items-center">
                <a href="signup?role=teacher" class="group bg-white shadow-xl rounded-2xl p-4 hover:bg-primary transition-all duration-300 ease-in-out flex flex-col gap-3 items-center ">
                    <Icon icon="fluent-emoji:woman-teacher-medium-light" width="10rem" height="10rem" />
                    <p class="group-hover:text-white text-xl font-bold text-zinc-800">Teacher</p>
                </a>
                <a href="signup?role=student" class="group bg-white shadow-xl rounded-2xl p-4 hover:bg-primary transition-all duration-300 ease-in-out flex flex-col gap-3 items-center hover:text-red-100">
                    <Icon icon="fluent-emoji:student-light" width="10rem" height="10rem" />
                    <p class="group-hover:text-white text-xl font-bold text-zinc-800">Student</p>
                </a>
            </div>
        </div>
    {/if}
</div>
