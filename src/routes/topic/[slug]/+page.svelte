<script lang="ts">
    import { page } from '$app/stores';      
	import TopicGrid from '../../../components/TopicGrid.svelte';
    import Header from '../../../components/Header.svelte';
	import Footer from '../../../components/Footer.svelte';
	import MainCta from '../../../components/MainCTA.svelte';
	import SecondaryCta from '../../../components/SecondaryCTA.svelte';
	import { topics } from '../../../content/topics';
	import type { Article } from '../../+layout.server';
	
    
    const logoSrc = 'logo_aeulogy.png'    
    
    const articles:Article[] = $page.data.articles
    const isLatest = $page.params.slug==='0'
    const topic:         {title: string, description: string, id:string } = topics.find((it)=>it.id === $page.params.slug) || {title: 'Most recent', description: '', id: '0'}
    if (isLatest){
        articles.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime())
    }
</script>

<svelte:head>
    <title>Aeulogy - {topic.title}</title>
</svelte:head>


<body>
    <Header />
    <div class="m-2 md:m-20">
        <div class="flex flex-col items-center justify-center">
            <div class="mt-12 w-9/12">            
                <TopicGrid 
                    category={topic} 
                    copy={
                        !isLatest ? articles
                        .filter(
                            (it) => it.category === topic.title )              
                            :  articles.slice(0,6)
                        }
                />                        
            </div>
        </div>  
        <div class="flex flex-col items-center my-12 md:my-24">
            <MainCta />
            <SecondaryCta />
        </div>
    </div>
    <Footer />
</body>