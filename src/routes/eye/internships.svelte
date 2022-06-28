<script>
// @ts-ignore
import FlipCard from "../../components/FlipCard.svelte";

    import {Internships} from "../../data/data.js";
</script>
<section class="bg-gray-100 min-h-screen" style="background-image: url('/src/assets/bg.png'); background-size: contain;">
    <article class="prose-base lg:prose-xl max-w-7xl mx-auto p-4 text-justify">

        <h2 class="text-3xl text-orange-700">Internships</h2>
        <div class="flex justify-center">
            <div class="grid grid-cols-3 lg:grid-cols-4 gap-7">
                {#each Internships as i }
                    <FlipCard Title={i.description} Description="" Link={i.link}/>
                {/each}
            </div>
    </article>

</section>

