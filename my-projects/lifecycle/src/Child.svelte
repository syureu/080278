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
