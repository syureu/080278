// 1. 스토어 패키지를 임포트 합니다.
import { writable } from "svelte/store";

// 2. Count 변수를 writable로 적용하고 10으로 설정합니다.
export const count = writable(10);

// 3. 로그를 찍어 봅니다.
console.log("스토어", count);