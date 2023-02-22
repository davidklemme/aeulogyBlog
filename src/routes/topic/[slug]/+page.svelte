<script lang="ts">
	import TopicGrid from '../../../components/TopicGrid.svelte';
    import Header from '../../../components/Header.svelte';
	import Footer from '../../../components/Footer.svelte';
	import MainCta from '../../../components/MainCTA.svelte';
	import SecondaryCta from '../../../components/SecondaryCTA.svelte';
	import { topics } from '../../../content/topics';
    const logoSrc = 'logo_aeulogy.png'    
    export let data: { 
        topic: {
            title: string, description: string, id:string 
            }, 
        copy: {
            category: string; headline: string; id: string; content: {subtitle:string, content:string}; date:string            
        }[] 
        };

    if (data.topic.id==='0'){
        data.copy.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime())
    }
</script>

<svelte:head>
    <title>Aeulogy - {data.topic.title}</title>
</svelte:head>


<body>
    <Header />
    <div class="m-2 md:m-20">
        <div class="flex flex-col items-center justify-center">
            <div class="mt-12 w-9/12">            
                <TopicGrid 
                    category={data.topic} 
                    copy={
                        data.topic.id !== '0' ? data.copy
                        .filter(
                            (it) => it.category === data.topic.title )              
                            :  data.copy.slice(0,6)
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