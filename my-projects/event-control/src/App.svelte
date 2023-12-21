<script>
	// 클릭 횟수 저장 변수
	let count = 0;
	// 버튼 이벤트 처리 함수
	const search = () => {
		console.log("조회 버튼 클릭~!"); // 이벤트 대상을 출력
		count = count + 1;
	};
</script>

<button on:click={search}>
	Search ({count}) <!-- 클릭 횟수를 버튼에 표시 -->
</button>
