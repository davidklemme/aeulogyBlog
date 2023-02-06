<script lang="ts">
    export let src: string;
    export let alt: string;
    export let title: string;
    export let content: string;
</script>

<style>
    .headline {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        height: 3em;

        }
    .content {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;  
        overflow: hidden;

        }
</style>


<div>
    <div class="rounded-md">
        <img class="rounded-md" {src} {alt} />
    </div>
    <div class="headline font-extrabold my-2 w-5/6">{title}</div>
    
    <p class="content text-sm">{content}</p>
</div>