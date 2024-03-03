/* __placeholder__ */
import axios from "axios";
import { useToast } from "vue-toastify";
import ResponseComponent from "./SearchResultComponent.vue";
export default (await import('vue')).defineComponent({
    components: {
        ResponseComponent,
    },
    data() {
        return {
            searchWord: "",
            searchResult: "",
            isSearched: true,
        };
    },
    mounted() {
        this.adjustTextareaHeight();
    },
    watch: {
        searchWord() {
            this.adjustTextareaHeight();
        },
    },
    methods: {
        goToHistory() {
            this.$router.push("/history");
        },
        goToKeywordSearch() {
            this.$router.push("/keyword-search");
        },
        adjustTextareaHeight() {
            this.$nextTick(() => {
                const textarea = this.$el.querySelector(".search-input");
                if (textarea) {
                    textarea.style.height = "auto";
                    textarea.style.height = textarea.scrollHeight + "px";
                }
            });
        },
        // SearchComponent.vue の submitSearch メソッド
        async submitSearch() {
            const toast = useToast();
            try {
                // 検索語をセッションストレージに保存
                sessionStorage.setItem("searchWord", this.searchWord);
                // 検索結果ページへ遷移
                this.$router.push({ name: "search-result" });
                toast.success("検索が成功しました", {
                    position: "top",
                });
            }
            catch (error) {
                console.error(error);
                toast.error("検索に失敗しました", {
                    position: "top",
                });
            }
        },
    },
});
const __VLS_componentsOption = {
    ResponseComponent,
};
const __VLS_name = undefined;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    /* CSS variable injection */
    /* CSS variable injection end */
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.textarea;
    __VLS_intrinsicElements.textarea;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: ("container"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: ("container"), }));
        if (__VLS_ctx.isSearched) {
            {
                const __VLS_5 = __VLS_intrinsicElements["textarea"];
                const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
                const __VLS_7 = __VLS_6({ ...{}, value: ((__VLS_ctx.searchWord)), placeholder: ("検索ワードを入力"), class: ("search-input"), rows: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
                ({}({ ...{}, value: ((__VLS_ctx.searchWord)), placeholder: ("検索ワードを入力"), class: ("search-input"), rows: ("1"), }));
                const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
            }
            // @ts-ignore
            [isSearched, searchWord, searchWord,];
        }
        if (__VLS_ctx.isSearched) {
            {
                const __VLS_10 = __VLS_intrinsicElements["button"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{ 'onClick': {}, }, class: ("search-button"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{ 'onClick': {}, }, class: ("search-button"), }));
                let __VLS_15 = { 'click': __VLS_pickEvent(__VLS_14['click'], {}.onClick) };
                __VLS_15 = { click: (__VLS_ctx.submitSearch) };
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
                let __VLS_14;
            }
            // @ts-ignore
            [isSearched, submitSearch,];
        }
        {
            const __VLS_16 = __VLS_intrinsicElements["button"];
            const __VLS_17 = __VLS_elementAsFunctionalComponent(__VLS_16);
            const __VLS_18 = __VLS_17({ ...{ 'onClick': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_17));
            ({}({ ...{ 'onClick': {}, }, }));
            let __VLS_21 = { 'click': __VLS_pickEvent(__VLS_20['click'], {}.onClick) };
            __VLS_21 = { click: (__VLS_ctx.goToHistory) };
            (__VLS_19.slots).default;
            const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
            let __VLS_20;
        }
        {
            const __VLS_22 = __VLS_intrinsicElements["button"];
            const __VLS_23 = __VLS_elementAsFunctionalComponent(__VLS_22);
            const __VLS_24 = __VLS_23({ ...{ 'onClick': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_23));
            ({}({ ...{ 'onClick': {}, }, }));
            let __VLS_27 = { 'click': __VLS_pickEvent(__VLS_26['click'], {}.onClick) };
            __VLS_27 = { click: (__VLS_ctx.goToKeywordSearch) };
            (__VLS_25.slots).default;
            const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24);
            let __VLS_26;
        }
        {
            const __VLS_28 = __VLS_intrinsicElements["div"];
            const __VLS_29 = __VLS_elementAsFunctionalComponent(__VLS_28);
            const __VLS_30 = __VLS_29({ ...{}, class: ("search-result"), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
            ({}({ ...{}, class: ("search-result"), }));
            (__VLS_ctx.searchResult);
            (__VLS_31.slots).default;
            const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["container"];
        __VLS_styleScopedClasses["search-input"];
        __VLS_styleScopedClasses["search-button"];
        __VLS_styleScopedClasses["search-result"];
    }
    var __VLS_slots;
    // @ts-ignore
    [goToHistory, goToKeywordSearch, searchResult,];
    return __VLS_slots;
}
let __VLS_internalComponent;
