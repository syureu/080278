<script>
	import { count } from "./store.js";
</script>

<main>
	<section>
		<h2>count는 {$count}입니다.</h2>
		<input type="range" bind:value={$count} step="1" min="1" max="100" />
	</section>
</main>
