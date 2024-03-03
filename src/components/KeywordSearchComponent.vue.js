/* __placeholder__ */
import axios from "axios";
export default (await import('vue')).defineComponent({
    data() {
        return {
            keyword: "",
            searchResults: [],
        };
    },
    methods: {
        async searchWords() {
            if (!this.keyword) {
                alert("キーワードを入力してください。");
                return;
            }
            try {
                const response = await axios.get(`/api/word?keyword=${encodeURIComponent(this.keyword)}`);
                this.searchResults = response.data;
            }
            catch (error) {
                console.error("キーワード検索に失敗しました。", error);
            }
        },
    },
});
const __VLS_componentsOption = {};
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
    __VLS_intrinsicElements.input;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.ul;
    __VLS_intrinsicElements.ul;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: ("keyword-search-container"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: ("keyword-search-container"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["input"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, placeholder: ("キーワードを入力"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, placeholder: ("キーワードを入力"), }));
            (__VLS_ctx.keyword);
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_10 = __VLS_intrinsicElements["button"];
            const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
            const __VLS_12 = __VLS_11({ ...{ 'onClick': {}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{ 'onClick': {}, }, }));
            let __VLS_15 = { 'click': __VLS_pickEvent(__VLS_14['click'], {}.onClick) };
            __VLS_15 = { click: (__VLS_ctx.searchWords) };
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            let __VLS_14;
        }
        if (__VLS_ctx.searchResults.length) {
            {
                const __VLS_16 = __VLS_intrinsicElements["div"];
                const __VLS_17 = __VLS_elementAsFunctionalComponent(__VLS_16);
                const __VLS_18 = __VLS_17({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_17));
                ({}({ ...{}, }));
                {
                    const __VLS_21 = __VLS_intrinsicElements["ul"];
                    const __VLS_22 = __VLS_elementAsFunctionalComponent(__VLS_21);
                    const __VLS_23 = __VLS_22({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_22));
                    ({}({ ...{}, }));
                    for (const [result, index] of __VLS_getVForSourceType((__VLS_ctx.searchResults))) {
                        {
                            const __VLS_26 = __VLS_intrinsicElements["li"];
                            const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
                            const __VLS_28 = __VLS_27({ ...{}, key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
                            ({}({ ...{}, key: ((index)), }));
                            (result);
                            (__VLS_29.slots).default;
                            const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
                        }
                        // @ts-ignore
                        [keyword, searchWords, searchResults, searchResults,];
                    }
                    (__VLS_24.slots).default;
                    const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23);
                }
                (__VLS_19.slots).default;
                const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
            }
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
}
let __VLS_internalComponent;
