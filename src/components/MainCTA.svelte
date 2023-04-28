<script lang="ts">
    export let orientation: 'col'| 'row' = 'row';
    let orientationClass = `bg-tertiary shadow-lg m-4 p-8 flex flex-col md:flex-${orientation} items-center justify-around w-11/12`
</script>

<div class={orientationClass}>
    <div class="text-white flex flex-col justify-center items-center">
        <div class="font-serif text-xl">Let us help you write their story.</div>
        <div class="text-xs mt-2">Get a professional, custom eulogy within one business day.</div>
    </div>
    {#if orientation === 'col'}
        <div class="pt-6">
            <a href="https://www.aeulogy.com">
                <button class="btn bg-slate-600 hover:bg-slate-500 text-white p-4 rounded-md m-2 px-8">Get Started Now</button>
            </a>
        </div>
    {/if}
    {#if orientation === 'row'}
        <div class="pt-6 md:pt-0">
            <a href="https://www.aeulogy.com">
                <button class="btn bg-slate-600 hover:bg-slate-500 text-white p-4 rounded-md">Get Started Now</button>
            </a>
        </div>
    {/if}
    
</div>