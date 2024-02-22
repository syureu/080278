<script>
	import { count } from "./store.js";
	import Increase from "./Increase.svelte"; // count 증가 기능 컴포넌트
	import Decrease from "./Decrease.svelte"; // count 감소 기능 컴포넌트
</script>

<main>
	<section>
		<h2>count는 {$count}입니다.</h2>
		<input type="range" bind:value={$count} step="1" min="1" max="100" />
	</section>
	<section>
		<!-- 감소 / 증가 버튼 인스턴스 생성 -->
		<Decrease />
		<Increase />
	</section>
</main>
