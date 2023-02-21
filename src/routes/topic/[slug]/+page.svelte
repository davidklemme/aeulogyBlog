<script lang="ts">
	import TopicGrid from '../../../components/TopicGrid.svelte';
    import Header from '../../../components/Header.svelte';
	import Footer from '../../../components/Footer.svelte';
	import MainCta from '../../../components/MainCTA.svelte';
	import SecondaryCta from '../../../components/SecondaryCTA.svelte';
    const logoSrc = 'logo_aeulogy.png'    
    export let data: { 
        topic: {
            title: string, description: string 
            }, 
        copy: {
            category: string; headline: string; id: string; content: string; toc: string[]           
        }[] 
        };
</script>

<body>
    <Header />
    <div class="m-2 md:m-20">
        <div class="flex flex-col items-center justify-center">
            <div class="mt-12 w-9/12">             
                <TopicGrid 
                    category={data.topic} 
                    copy={
                        data.copy
                        .filter(
                            (it) => it.category === data.topic.title )              
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