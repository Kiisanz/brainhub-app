<script>
    import Button from "$lib/components/Button.svelte";
    import InputForm from "$lib/components/InputForm.svelte";

</script>

<div class="mt-6 flex flex-col gap-4">
    <InputForm id="emailInput" type="email" placeholder="@example.com" label="Email Address" icon="mage:email"/>
    <InputForm id="passwordInput" type="password" placeholder="Password must be at least 8 characters long." label="Password" icon="solar:lock-linear"/>
    <a href="/auth/forgot-password" class="text-blue-500 hover:underline text-end text-sm">Forgot Password?</a>
    <Button label="Login"/>
    <div class="flex justify-center items-center gap-1 text-zinc-800 text-sm">
        <p>Don't have an account?</p>
        <a href="/auth/signup" class="text-blue-500 hover:underline text-end text-sm">Sign Up for free</a>
    </div>
</div>
