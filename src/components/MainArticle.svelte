<script lang="ts">
    import { goto } from "$app/navigation";
    
    function routeToArticle(route: string, replaceState: boolean) {
        goto(`/${route}`, { replaceState })
    }
    export let src: string;
    export let alt: string;
    export let category: string = ''
    export let title: string = '';
    export let date: string = new Date().toLocaleDateString();
    export let id: string ='';
</script>

<style>
    .category {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        }
    .headline {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        }
</style>


<div class="shadow-xl max-w-xs bg-white text-sm">
    <div class="m-4 p-8 flex flex-col items-center justify-center">
        <div class="uppercase pb-8">
            Featured Article
        </div>
        <div class="category uppercase text-sm text-amber-600">
            {category}
        </div>
        <div class="headline font-normal font-serif text-2xl text-center">
            {title}
        </div>
        <div class="text-xs pt-6 pb-10">
            {date} by <span class="font-bold">Aeulogy</span>
        </div>
        <btn 
            class="flex text-amber-600 cursor-pointer"
            on:click={()=> routeToArticle(`blog/${id}`, false) }
            on:keydown={()=> routeToArticle(`/blog/${id}`, false) }
            on:keypress={()=> routeToArticle(`/blog/${id}`, false)}
            on:keyup={()=> routeToArticle(`/blog/${id}`, false) }
            >
            <div class="mr-4">
                Read more 
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            
            </btn>
    </div>
</div>