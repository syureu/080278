<script>
	let rangeValue = 50; // 레인지 초기값

	//1. 파일 임포트 store.js에서 count를 꺼낸다
	import { count } from "./store.js";
	// svelte 임포트, 라이프사이클 함수 onDestroy 꺼냄
	import { onDestroy } from "svelte";

	//2. 구독(count 값 변경시 rangeValue 업데이트 하기)
	const unsubscribe = count.subscribe((v) => {
		rangeValue = v;
		console.log("변경 감지");
	});

	//3. 구독 종료하기
	onDestroy(unsubscribe);

	//4. 스토어 값 변경하기 (rangeValue 값 변경시 count 도 없데이트 하기)
	$: count.set(rangeValue);
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
