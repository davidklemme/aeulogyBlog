<script lang="ts">
    import { page } from '$app/stores';      
    import Header from '../../../components/Header.svelte';
	import Footer from '../../../components/Footer.svelte';
	import MainCta from '../../../components/MainCTA.svelte';
	import SecondaryCta from '../../../components/SecondaryCTA.svelte';
    import Toc from '../../../components/Article/Toc.svelte';
	import BackOneLevel from '../../../components/Article/BackOneLevel.svelte';
	import type { Article } from '../../+layout.server';
	import attribution from '../../../fixtures/attribution'

    
    export let data: Article;

    const index = $page.data.articles.find((it:Article) => it.id.toString() === $page.params.slug) || {}

    const logoSrc = '/logo_aeulogy.png'
    let src='/hero_hamburg.jpg'

    const imageAttribution = (attribution.find((it) => it.id.toString() === $page.params.slug))?.attribution
    

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
                    {index?.category}
                </div>
                <div class="text-slate-800 text-5xl font-serif my-2 md:w-3/6">
                    {index?.headline}
                </div>
                <div class="text-slate-800 text-sm">
                    {index?.date}
                </div>
            </div>
            <div class="mt-12 w-4/12 hidden md:block">
                <img class="pr-20" src={src} alt="Aeulogy hero picture" />
            </div>
        </div> 
        <!-- article  -->
        <div class="flex flex-col md:grid md:grid-cols-7 gap-6 md:m-24 items-center md:items-start m-2">
            <!-- ToC -->
            <div class="flex w-full md:col-span-1 md:sticky top-1">
                <Toc data={index?.content} />
            </div>
            <!-- Content -->
            <div class="col-span-4">
                {#each index?.content as {subtitle, content},i }
                    <div class="mb-8">
                        {#if i === 1}
                        <div class="my-4">
                            <img src={`/content/images/${index.id}.jpg`} alt="Article hero picture" class="w-full"/>
                            <div class="text-xs font-thin text-rightds">
                                Picture by{' '}
                                <a href="{imageAttribution?.nameLink}">
                                    {imageAttribution?.name}
                                </a>{' '}
                                on{' '}
                                <a href="{imageAttribution?.link}">
                                    Unsplash
                                </a>
                            </div>
                        </div>
                        {/if}
                        <div class="text-2xl font-serif"><a href="">{subtitle}</a></div>
                        
                        <div class="pt-6">{content}</div>
                    </div>
                {/each}
            </div>        
            
            <!-- End content -->
            <div class="flex flex-col items-center my-12 md:m-0 col-span-2 sticky top-1">
                <MainCta orientation='col'/>
                <SecondaryCta orientation='col' />
            </div>
        </div>
    </div>
    <Footer />
</body>