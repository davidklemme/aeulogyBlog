<script lang="ts">
    import Header from '../../../components/Header.svelte';
	import Footer from '../../../components/Footer.svelte';
	import MainCta from '../../../components/MainCTA.svelte';
	import SecondaryCta from '../../../components/SecondaryCTA.svelte';
    import Toc from '../../../components/Article/Toc.svelte';
	import BackOneLevel from '../../../components/Article/BackOneLevel.svelte';
    export let data: { 
            id: string,
            date: string,
            headline: string,
            category: string,
            content: { 
                content: string,
                subtitle: string
            }[], 
    }

    const logoSrc = '/logo_aeulogy.png'
    let src='/hero_hamburg.jpg'

</script>

<svelte:head>
    <title>Aeulogy - {data.headline}</title>
</svelte:head>

<body>
    <div class="flex items-center justify-center my-4">
        <img src={logoSrc} height='40px' width="104px" alt="Aeulogy Logo" />
    </div>
    <!-- Divider -->
    <div class="w-full shadow-sm border-b-2" />
    
    <div class="m-0">
        <!-- headline -->
        <div class="flex flex-col items-end -space-y-48">
            <div class="bg-background-focus w-full p-2 md:p-12 md:py-14">
                <!-- Back -->
                <div class="mb-12">
                    <BackOneLevel upperLevelRoute={``} />
                </div>
                <div class="text-tertiary uppercase text-md">
                    {data?.category}
                </div>
                <div class="text-slate-800 text-5xl font-serif my-2 w-3/6">
                    {data?.headline}
                </div>
                <div class="text-slate-800 text-sm">
                    {data?.date}
                </div>
            </div>
            <div class="mt-12 w-4/12">
                <img class="pr-20" src={src} alt="Aeulogy hero picture" />
            </div>
        </div> 
        <!-- article  -->
        <div class="grid grid-cols-7 gap-6 md:m-24">
            <!-- ToC -->
            <div class="flex col-span-1">
                <Toc data={data?.content} />
            </div>
            <!-- Content -->
            <div class="col-span-4">
                {#each data?.content as {subtitle, content},i }
                    <div class="mb-8">
                        {#if i === 1}
                        <div class="my-4">
                            <img src={`/content/images/${data.id}.jpg`} alt="Article hero picture" class="w-full"/>
                        </div>
                        {/if}
                        <div class="text-2xl font-serif">{subtitle}</div>
                        
                        <div class="pt-6">{content}</div>
                    </div>
                {/each}
            </div>        
            
            <!-- End content -->
            <div class="flex flex-col items-center my-12 md:m-0 col-span-2 sticky">
                <MainCta orientation='col'/>
                <SecondaryCta orientation='col' />
            </div>
        </div>
    </div>
    <Footer />
</body>