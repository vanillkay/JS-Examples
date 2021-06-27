import {binarySearch} from "./BinarySearch/script.js";
import {bitOperations} from "./BitOperations/script.js";
import {recursion} from "./Recursion/scripts.js";
import {sort} from "./Sort/script.js";

const readyBlock = document.querySelector(".ready");
const buttons = document.querySelector(".buttons");

const scripts = {
    binaryScript: binarySearch,
    bitScript: bitOperations,
    recursionScript: recursion,
    sortScript: sort,
}

buttons.addEventListener("click", event => {
    const parent = event.target.parentNode;
    if (parent.tagName !== "SPAN" || !parent.dataset.script) return;
    console.clear();
    scripts[parent.dataset.script]();
    readyBlock.classList.add("active");
    const timeout = setTimeout(() => readyBlock.classList.remove("active"), 3000);
})


