<script>
	let rangeValue = 50; // 레인지 초기값
</script>

<main>
	<section>
		<h2>count는 {rangeValue}입니다.</h2>
		<input
			type="range"
			bind:value={rangeValue}
			step="1"
			min="1"
			max="100"
		/>
	</section>
</main>
