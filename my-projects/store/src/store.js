// readable 꺼내기
import { writable, readable } from "svelte/store";

export const count = writable(10);

console.log("스토어", count);

export const time = readable(new Date(), function start(set) {
    console.log("구독이 시작되었습니다");
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    return function stop() {
        console.log("모든 구독이 종료되었습니다");
        clearInterval(interval);
    };
});