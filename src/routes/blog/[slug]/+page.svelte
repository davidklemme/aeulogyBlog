<script>
	import Article from '../../../components/Article.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<body>
    <div class="m-2 md:m-20">
        <div class="flex items-center justify-between py-8 md:py-12">
            <h1 class="text-2xl md:text-3xl font-extrabold">journal.</h1>
            <div class="flex flex-col items-end">
                <h1 class="md:text-xl font-bold">Aeulogy</h1>
                <p class="text-sm md:text-xl">Get your custom eulogy</p>
            </div>
        </div>

        <div class="">
            <img class="rounded-md" src={`/src/content/images/${data.id}.jpg`} alt='Article Hero Picture' />
        </div>
        <div class="headline text-2xl font-extrabold m-2 md:m-4 my-4 md:my-8 w-5/6">{data.headline}</div>
        
        <p class="content m-2 md:m-4 md:w-3/5">{data.content}</p>
    </div>
</body>