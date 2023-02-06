
<script lang='ts'>
	import Article from "../components/Article.svelte";
    import {copy}  from "../content/copy/00002";
    
    let src='hero_hamburg.jpg'
     
</script>

<div class="m-4 md:m-20">
    <div>
        <div class="flex items-center justify-between ">
            <h1 class="text-3xl font-extrabold">journal.</h1>
            <div class="flex flex-col items-end">
                <h1 class="text-xl font-bold">Aeulogy</h1>
                <p>Get your custom eulogy</p>
            </div>
            
    
        </div>
        
        <div class="mt-12 w-full">
            <!-- Hero -->
            <img {src} alt="Aeulogy Background Picture"/>
        </div>
    </div>
    <div>
        <!-- Intro -->
        <div class="font-bold mt-12 text-3xl">Lorem Ipsum</div>
    </div>
    <div>
        <!-- Grid -->
        <div class="mt-12">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-16">
                {#each copy as {headline, content, id}, i}
                    <div class="col-span-1">
                        <Article src={`src/content/images/${id}.jpg`} alt= {'Article hero picture'} title={headline} content={content}/>
                    </div>
                {/each}
            </div>
            </div>
    </div>
</div>
