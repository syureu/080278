<script>
    //document.getElementById("text01").focus();
    import { onMount, beforeUpdate, afterUpdate, onDestroy } from "svelte";

    // onMount 예제 코드
    onMount(() => {
        //      document.getElementById("text01").focus();
        console.log("Child onMount 호출됨");
    });
    onDestroy(() => {
        console.log("Child onDestroy 호출됨");
    });
</script>

<h1>Child</h1>
<input type="text" id="text01" />
<!-- 테스트용 input 박스 -->
