
<script lang='ts'>
    import MainArticle from "../components/MainArticle.svelte";
    import MainCta from "../components/MainCTA.svelte";
    import SecondaryCta from "../components/SecondaryCTA.svelte";
    import Footer from "../components/Footer.svelte";
	import TopicGrid from "../components/TopicGrid.svelte";
    import {topics} from "../content/topics";
    import {copy} from "../content/copy/00002";
    import Header from "../components/Header.svelte";
	
    const logoSrc = 'logo_aeulogy.png'


    const recentCopy = copy.sort((a, b) => (a.date > b.date) ? -1 : 1).slice(0, 3)
    let src='hero_hamburg.jpg'
    console.log('topics', topics)
     
</script>

<div>
    <Header />
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

        
        <div class="flex flex-col items-center justify-center">
            <div class="mt-12 w-9/12"> 
                <!-- Recent topics (3) -->

                    <TopicGrid category={{title: 'Most recent', description: ''}}  copy={recentCopy} collapsed={true}/>
                    {#each topics as category,i}
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
