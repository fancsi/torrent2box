import {DirectiveFunction} from "vue";
import {VNode, VNodeDirective} from "vue/types/vnode";

export const focusDirective: DirectiveFunction = (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode) => {
    console.log("inserted: focusDirective");
    if (el.tagName === "FORM") {
        // Focus the first input element
        const inputEl: Element | null = el.querySelector("input:first-of-type");
        if (inputEl) {
            (inputEl as HTMLElement).focus();
        }
    }
};
