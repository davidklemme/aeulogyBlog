<script lang="ts">
    export let src: string;
    export let alt: string;
    export let category: string = ''
    export let title: string = '';
    export let id: string = '00000';
    import { goto } from '$app/navigation';

    function routeToArticle(route: string, replaceState: boolean) {
        goto(`/${route}`, { replaceState }) 
    }
</script>

<style>
    .category {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        height: 2em;
        }
    .headline {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        
        }
</style>


<div 
    class="shadow-lg max-h-[302px] max-w-[265px]" 
    on:click={()=> routeToArticle(`blog/${id}`, false) } 
    on:keydown={()=> routeToArticle(`/blog/${id}`, true) } 
    on:keypress={()=> routeToArticle(`/blog/${id}`, true)} 
    on:keyup={()=> routeToArticle(`/blog/${id}`, true) }
>
    <div class="h-[170px]">
        <img {src} {alt} height="170px" width="265px"/>
    </div>
    <div class="m-4 pb-4">
        <div class="category uppercase font-thin text-sm text-amber-600">{category}</div>
        <p class="headline font-normal font-serif">{title}</p>
    </div>
</div>