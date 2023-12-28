<script>
    let txt; // input 박스 위치 저장용 전역 변수 생성

    // svelte 컴포넌트 임포트, 라이프 사이클 함수 4종 꺼내기
    // 1. tick import 하기
    import {
        tick,
        onMount,
        beforeUpdate,
        afterUpdate,
        onDestroy,
    } from "svelte";

    // onMount 예제 코드
    onMount(() => {
        txt = document.getElementById("text01"); // 돔에서 엘리먼트 찾아오기
        txt.focus(); // 포커스 주기
        console.log("Child onMount 호출됨");
    });

    // onDestory 예제 코드
    onDestroy(() => {
        console.log("Child onDestroy 호출됨");
    });

    // beforeUpdate 예제 코드
    beforeUpdate(() => {
        console.log("Child beforeUpdate 호출됨", x); // 바인딩 변수 x의 변화를 확인
    });

    // afterUpdate 예제 코드
    afterUpdate(() => {
        console.log("Child afterUpdate 호출됨", x); // 바인딩 변수 x의 변화를 확인
    });
    let x = 0; //바인딩 변수 x를 선언
</script>

<h1>Child</h1>
<input type="text" id="text01" bind:value={x} />
<!-- 테스트용 input 박스 -->

<button
    on:click={() => {
        x = x + 1; //클릭할 때 마다 x값 1씩 증가
    }}>add</button
>
