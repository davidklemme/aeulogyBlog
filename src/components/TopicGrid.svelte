<script lang="ts">
    import Article from './Article.svelte';
    import { goto } from '$app/navigation';
	import BackOneLevel from './Article/BackOneLevel.svelte';
    import { page } from '$app/stores';

    export let category: { title: string, description: string, id: string} = {title: '', description: '', id:''};
    export let copy: {
        category: string, 
        headline: string, 
        id: string
    }[] = [];
    export let collapsed: boolean = false;
    
    function routeToArticle(route: string, replaceState: boolean) {
        goto(`/${route}`, { replaceState }) 
    }
</script>



<div>
    {#if category.id === '0' || copy.length > 0}
        <!-- Category Intro -->
        <div class="flex justify-between items-center py-8">
            <div>
                {#if $page.url.pathname !== '/'}
                    <BackOneLevel upperLevelRoute=''/> 
                {/if}
                <div class="font-serif text-3xl">{category.title}</div>
            </div>
            
            <!-- Action to see all of category -->
            {#if collapsed}
                    <a href={`/topic/${category.id}`} class="text-xs text-amber-600 cursor-pointer">
                        {#if copy.length > 3}
                            view more
                        {/if}
                    </a>
            {/if}
            
        </div>
        <div class="font-serif text-xs pb-12">
            {category.description}
        </div>

        <!-- Grid -->
        <div class="w-full flex flex-col items-center md:grid md:grid-cols-3 gap-4 md:gap-8">
            {#each copy as {category, headline, id}, i}
                <div class="col-span-1">
                    <Article src={`/content/images/${id}.jpg`} alt= {'Article hero picture'} category={category} title={headline} {id}/>
                </div>
            {/each}
        </div>
    {/if}
</div>