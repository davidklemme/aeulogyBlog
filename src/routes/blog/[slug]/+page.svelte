<script lang="ts">
    import Header from '../../../components/Header.svelte';
	import Footer from '../../../components/Footer.svelte';
	import MainCta from '../../../components/MainCTA.svelte';
	import SecondaryCta from '../../../components/SecondaryCTA.svelte';
    import Toc from '../../../components/Article/Toc.svelte';
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
</script>

<body>
    <Header />
    
    <div class="m-2">
        <!-- headline -->
        <div class="bg-background-focus w-full p-2 md:p-14">
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
        <div class="flex flex-col items-center justify-center">
            <div class="mt-12 w-9/12">
                
            </div>
        </div> 
        <!-- article  -->
        <div class="flex justify-evenly md:m-24">
            <!-- ToC -->
            <div class="flex px-4">
                <Toc data={data?.content} />
            </div>
            <!-- Content -->
            <div class="max-w-lg">
                {#each data?.content as {subtitle, content} }
                    <div class="mb-8">
                        <div class="text-2xl font-serif">{subtitle}</div>
                        
                        <div class="pt-6">{content}</div>
                    </div>
                {/each}
            </div>        
            
            <!-- End content -->
            <div class="flex flex-col items-center my-12 md:m-0">
                <MainCta />
                <SecondaryCta />
            </div>
        </div>
    </div>
    <Footer />
</body>