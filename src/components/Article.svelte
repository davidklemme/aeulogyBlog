<script lang="ts">
    export let src: string;
    export let alt: string;
    export let category: string = ''
    export let title: string = '';
    export let id: string = '00000';
    import { goto } from '$app/navigation';

    
</script>

<style>
    .category {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        height: 2em;
        }
    .headline {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        
        }
</style>


<div 
    class="shadow-lg max-h-3xl max-w-sm cursor-pointer" 
>
    <a href={`/blog/${id}`}>
        <div class="">
            <img {src} {alt} class="aspect-[14:9] h-72"/>
        </div>
        <div class="m-4 pb-4">
            <div class="category uppercase font-thin text-base text-amber-600">{category}</div>
            <p class="headline font-normal font-serif text-lg">{title}</p>
        </div>
    </a>
</div>