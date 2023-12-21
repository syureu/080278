<script>
	// 클릭 횟수 저장 변수
	let count = 0;
	// 버튼 이벤트 처리 함수
	const search = () => {
		console.log("search: 조회 버튼 클릭~!"); // 텍스트 수정
		count = count + 1;
	};

	// 버튼 이벤트 처리 함수 한 개 더!
	const increase = () => {
		console.log("increase: 조회 버튼 클릭~!");
		count = count + 1;
	};
</script>

<button on:click={search} on:click={increase}>
	<!-- search, increase 두 개의 함수 연결-->
	Search ({count}) <!-- 클릭 횟수를 버튼에 표시 -->
</button>
