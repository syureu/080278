<script>
    // 테스트용 input 박스에 포커스 주기
    // document.getElementById("text01").focus();

    let txt; // input 박스 위치 저장용 전역 변수 생성

    import { onMount, beforeUpdate, afterUpdate, onDestroy } from "svelte";

    // onMount 예제 코드
    onMount(() => {
        txt = document.getElementById("text01");
        txt.focus();
        console.log("Child onMount 호출됨");
    });
    onDestroy(() => {
        console.log("Child onDestroy 호출됨");
    });
</script>

<h1>Child</h1>
<input type="text" id="text01" />
<!-- 테스트용 input 박스 -->
