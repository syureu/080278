<!-- 5.7. JSON 객체의 변화 감지하기 1 -->

<script>
    // 원본 JSON 객체 정의
    let man = {
          age: "10",
          name: { first: "승현", last: "박" }
    };
    let name = man.name; // name으로 man.name 복사
    man.name.last = "park";  // 원본 JSON 객체의 last 값을 "박"에서 "park"으로 변경
</script>
  
<p>man.name.last: {man.name.last}</p> <!-- 원본 JSON 객체 man 으로 접근한 last의 값 출력 -->
<p>name.last: {name.last}</p>         <!-- 참조 변수 name 으로 접근한 last의 값 출력-->