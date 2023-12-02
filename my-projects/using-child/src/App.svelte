<!-- 스크립트 블록 -->
<script>
	import CustomSelect from "./CustomSelect.svelte";
	// 개발자 A의 코드
	// 개발자 B의 코드
	let fruit = "apple";
	// 개발자 C의 코드
</script>

<!-- HTML 블록 -->
<main>
	<ul>
		<!-- 개발자 A의 HTML 코드 -->
		<li>개발자 A: <CustomSelect /></li>
		<!-- 개발자 B의 HTML 코드 -->
		<li>개발자 B: <CustomSelect bind:choice={fruit} /> - {fruit} 선택됨</li>
	</ul>
</main>

<style>
</style>
