
<script lang='ts'>
    import MainArticle from "../components/MainArticle.svelte";
    import MainCta from "../components/MainCTA.svelte";
    import SecondaryCta from "../components/SecondaryCTA.svelte";
    import Footer from "../components/Footer.svelte";
	import TopicGrid from "../components/TopicGrid.svelte";
    import {topics} from "../content/topics";

    import Header from "../components/Header.svelte";
    import {page} from '$app/stores';
	
	import type Article from "../components/Article.svelte";
	

      /** @type {import('./$types').PageData} */
    export let data: Article[];

    const logoSrc = 'logo_aeulogy.png'

    const copy =  $page.data.articles
    const recentCopy = copy.sort((a:Article, b:Article) => (a.date > b.date) ? -1 : 1).slice(0, 3)
    const noDummyTopics =  topics.slice(1)
    let src='hero_hamburg_small.jpg'

    
    
</script>

<svelte:head>
    <title>Aeulogy Blog</title>
</svelte:head>

<div class="max-w-[1920px] flex flex-col justify-center items-center">
    <div class="w-full">
        <Header />
                <div class="">
                    <div class="mt-12 w-full flex flex-col md:flex-row md:-space-x-28 items-center justify-center">
                        <!-- Hero -->
                        <div class="w-9/12 ">
                            <img {src} alt="Aeulogy Background Picture"/>
                        </div>
                        <div class="">
                            <MainArticle src={`content/images/${copy[0].id}.jpg`} alt= {'Article hero picture'} category={copy[0].category} title={copy[0].headline} id={copy[0].id} date={copy[0].date}/>
                        </div>
                    </div>
                </div>

            
            <div class="flex flex-col items-center justify-center">
                <div class="mt-12 w-9/12"> 
                    <!-- Recent topics (3) -->

                        <TopicGrid category={{title: 'Most recent', description: '', id: '0'}}  copy={recentCopy} collapsed={true}/>
                        {#each noDummyTopics as category,i}
                                <TopicGrid category={category} copy={copy.filter((it) => it.category === category.title ).slice(0,3)} collapsed={true} />                        
                        {/each}
                </div>
            </div>  
            <div class="flex flex-col items-center my-12">
                <MainCta />
                <SecondaryCta />
            </div>

        
        <Footer />
    </div>
</div>
