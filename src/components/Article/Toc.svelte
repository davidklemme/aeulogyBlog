<script lang="ts">
    export let data: {content: string, subtitle: string}[];
</script>

<div class="">
    <div class="shadow-lg p-2">
        <div class="font-serif uppercase text-xs p-2">
            What's in this article
        </div>
        <ul>
            {#each data as {content, subtitle}}
                <li class="text-slate-800 text-xs px-4 py-2 font-serif list-none flex items-center">
                    {subtitle} 
                    <div class="pl-2 text-tertiary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-2 h-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</div>

  