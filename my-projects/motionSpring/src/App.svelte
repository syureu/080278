<script>
	// tweened 사용 선언
	import { tweened } from "svelte/motion";
	// easing 효과 중 cubicIn 사용 선언
	import { cubicIn } from "svelte/easing";
	// tweened를 통하여 progress 스토어 생성, duration 옵션 사용
	const progress = tweened(0, {
		duration: 1000,
	});

	// 스토어의 값이 변하는 추이를 보기 위해 로그 출력
	progress.subscribe((v) => console.log(v));
</script>

<progress value={$progress}></progress>
<!-- 프로그레스 바 -->
<button
	on:click={() => {
		// 0으로 움직이게 하는 버튼
		$progress = 0;
	}}>0%</button
>
<button
	on:click={() => {
		// 0.5로 움직이게 하는 버튼
		progress.set(0.5);
	}}>50%</button
>
<button
	on:click={() => {
		// 1로 움직이게 하는 버튼
		progress.set(1);
	}}>100%</button
>

<style>
	progress {
		width: 100%;
	}
</style>
