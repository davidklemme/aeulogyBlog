<script lang="ts">
    import { goto } from '$app/navigation';
    
    export let upperLevelRoute: string = '';
    
    function routeToArticle(route: string, replaceState: boolean) {
        goto(`/${route}`, { replaceState })
    }
</script>
<div class=" text-tertiary">
    <btn 
        class="cursor-pointer flex"
        on:click={()=> routeToArticle(`${upperLevelRoute}`, false) }
        on:keydown={()=> routeToArticle(`${upperLevelRoute}`, false) }
        on:keypress={()=> routeToArticle(`${upperLevelRoute}`, false)}
        on:keyup={()=> routeToArticle(`${upperLevelRoute}`, false) }
        >
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width={1.5} 
            stroke="currentColor" 
            class="w-6 h-6 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>  
        <span>Return</span>
    </btn>
</div>