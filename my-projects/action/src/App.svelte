<script>
	// 기본 옵션 : 멀티 클릭 횟수 3, 활성화
	function multiClickButton(node, option = { count: 3, enabled: true }) {
		// 1. 버튼 클릭 누적 횟수
		let clickCount = 0;

		// 2. 클릭 이벤트 처리 함수
		const btnClick = () => {
			clickCount++;

			// 3. 클릭 카운트가 count와 같고 enabled 옵션도 true이면 실행
			if (clickCount == option.count && option.enabled == true) {
				// 4. multiClick 이벤트 발생
				node.dispatchEvent(new CustomEvent("multiClick", option));
				resetCount();
			}
		};

		// 5. 클릭 카운트 리셋
		const resetCount = () => {
			clickCount = 0;
		};

		// 6. use 지시가 선언된 엘리먼트(node)에 이벤트 처리
		node.addEventListener("click", btnClick);
		node.addEventListener("blur", resetCount);

		return {
			update(newOption) {
				// 7. 옵션이 변경되면 새 옵션으로 적용함
				option = newOption;
			},
			destroy() {
				// 8. 엘리먼트가 돔에서 제거되면 이벤트 제거
				node.removeEventListener("click", btnClick);
				node.removeEventListener("blur", resetCount);
			},
		};
	}

	function multiCLickHandler(e) {
		// 멀티 클릭 알림
		alert(`[${e.target.innerText}] 멀티 클릭되었습니다.`);
	}

	// 사용 여부
	let localEnabled = true;
	// 멀티 클릭 기준 횟수
	let localCount = 4;
</script>

<h1>use:action 테스트</h1>

<!-- 기본 옵션 멀티 클릭 버튼 생성(3번, 항상 활성화) -->
<button use:multiClickButton on:multiClick={multiCLickHandler}>
	기본 멀티 클릭 이벤트 버튼</button
>
<!-- 옵션을 주어 멀티 클릭 버튼 생성(4번, 활성화 여부 반영) -->

<button
	use:multiClickButton={{ count: localCount, enabled: localEnabled }}
	on:multiClick={multiCLickHandler}
>
	{localCount}번 클릭 이벤트 버튼</button
>
<!-- 활성화 토글 체크박스 -->

<input type="checkbox" bind:checked={localEnabled} />

<br />

<button
	on:click={() => {
		localCount--;
	}}
>
	이벤트 임계값 클릭수 내리기</button
>
<button
	on:click={() => {
		localCount++;
	}}
>
	이벤트 임계값 클릭수 올리기</button
>
