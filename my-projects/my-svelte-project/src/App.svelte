<!-- 6.8. {#each ...} 블록에서 속성값 바인딩하기 -->

<script>
    // 고객 정보가 담긴 JSON 객체를 요소로 갖는 배열 정의
    let customers  = [
        { disable: false, email: "hong@mail.com", mailType:"home"  , name: "홍길동", age: 25,  grade:"gold"   },
        { disable: false, email: "kim@mail.com", mailType:"office", name: "김길동", age: 39,  grade:"silver" },
        { disable: false, email: "lee@mail.com", mailType:"home"  , name: "이길동", age: 35,  grade:"normal" }
    ];  
</script>
<!-- 데이터를 표로 표현하기 -->
<table border=1>
    <thead>
        <th>탈퇴여부</th><th>이메일</th><th>메일 타입</th><th>이름</th><th>나이</th><th>등급</th>
    </thead>
    <tbody>
    {#each customers as cust} <!-- customers 배열 요소 개수만큼 tr 생성 -->
        <tr>  <!-- JSON 객체의 키 값으로 td 생성 -->
            <td>{cust.disable}</td>
            <td>{cust.email}</td>
            <td>{cust.mailType}</td>
            <td>{cust.name}</td>
            <td>{cust.age}</td>
            <td>{cust.grade}</td>
        </tr>
    {/each}        
    </tbody>
</table>

<style>
  table {
    width: 100%;               /* 가로 사이즈 */
    border: 1px solid;         /* table 테두리 */
    border-collapse: collapse; /* table 안쪽 선은 한줄로 표시*/
  }
  th, td {
    border: 1px solid;         /* 선 두께 1px, solid는 일반적인 선 */
    padding: 10px;             /* 선과 안쪽 내용의 거리를 10px */
  }
</style>
