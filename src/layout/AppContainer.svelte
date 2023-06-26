<div class="container">
 <slot />  
</div>

<style>
    :global(html) {
        border-top: 20px solid hsl(11.87deg 93.81% 61.96%);
        border-bottom: 64px solid hsl(11.87deg 93.81% 61.96%);
        height: 91vh;
    }
    :global(body) {
        margin: 0;
    }
    .container {
        padding: 2rem;
    }
</style>