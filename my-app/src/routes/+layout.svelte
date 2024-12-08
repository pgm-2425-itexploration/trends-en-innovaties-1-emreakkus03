<script>
    import { theme } from '$lib/stores';

    let currentTheme;

    $: currentTheme = $theme;

    function toggleTheme() {
        theme.update((value) => (value === 'light' ? 'dark' : 'light'));
    }
</script>

<button on:click={toggleTheme}>
    Switch to {currentTheme === 'light' ? 'dark' : 'light'} theme
</button>

<div style="background-color: {currentTheme === 'light' ? '#fff' : '#333'}; color: {currentTheme === 'light' ? '#000' : '#fff'}">
    <slot></slot> 
</div>
