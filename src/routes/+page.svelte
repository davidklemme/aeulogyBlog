
<script lang='ts'>
	import Article from "../components/Article.svelte";
    import MainArticle from "../components/MainArticle.svelte";
    import {copy}  from "../content/copy/00002";
    
    let src='hero_hamburg.jpg'
     
</script>

<div>
    <!-- Logo -->
    <div></div>
    <!-- Divider -->
    <div class="w-full shadow-sm border-b-2" />
        <div class="m-4 md:m-6">
        <div>
            <!-- Top header -->
            <div class="flex items-center justify-between ">
                <h1 class="text-3xl font-extrabold">Aeulogy journal.</h1>
                <div class="flex flex-col items-end">
                    
                    <p class="text-xs font-sans">Resources around eulogies, writing eulogies, grief, loss and more</p>
                </div>
            </div>
            <div class="">
                <div class="mt-12 w-full flex flex-col md:flex-row -space-x-28 items-center justify-center">
                    <!-- Hero -->
                    <div class="w-9/12 ">
                        <img {src} alt="Aeulogy Background Picture"/>
                    </div>
                    <div class="">
                        <MainArticle src={`content/images/${copy[0].id}.jpg`} alt= {'Article hero picture'} category={copy[0].category} title={copy[0].headline} />
                    </div>
                </div>
            </div>

        </div>
        <div class="w-full mt-12 flex items-center justify-center">
            <!-- Intro -->
            <div class="w-9/12 flex justify-between items-center">
                <div class="font-serif text-3xl">Lorem Ipsum</div>
                <!-- Action to see all of category -->
                <div class="text-xs text-amber-600">view more</div>
            </div>
        </div>
        <div class="w-full flex items-center justify-center">
            <!-- Grid -->
            <div class="mt-12 w-9/12">
                <div class="w-full flex  flex-col items-center md:grid md:grid-cols-3 gap-4 md:gap-8">
                    {#each copy as {category, headline, id}, i}
                        <div class="col-span-1">
                            <Article src={`content/images/${id}.jpg`} alt= {'Article hero picture'} category={category} title={headline} />
                        </div>
                    {/each}
                </div>
                </div>
        </div>
    </div>
</div>
