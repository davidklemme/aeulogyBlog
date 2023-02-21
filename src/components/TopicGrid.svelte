<script lang="ts">
    export let category: { title: string, description: string} = {title: '', description: ''};
    export let copy: {
        category: string, 
        headline: string, 
        id: string
    }[] = [];
    export let collapsed: boolean = false;
    import Article from './Article.svelte';
    
</script>



<div>
        <!-- Category Intro -->
        <div class="flex justify-between items-center py-8">
            <div class="font-serif text-3xl">{category.title}</div>
            <!-- Action to see all of category -->
            {#if collapsed}
                <div class="text-xs text-amber-600">view more</div>
            {/if}
            
        </div>
        <div class="font-serif text-xs pb-8">
            {category.description}
        </div>

        <!-- Grid -->
        <div class="w-full flex  flex-col items-center md:grid md:grid-cols-3 gap-4 md:gap-8">
            {#each copy as {category, headline, id}, i}
                <div class="col-span-1">
                    <Article src={`/content/images/${id}.jpg`} alt= {'Article hero picture'} category={category} title={headline} {id}/>
                </div>
            {/each}
        </div>
</div>