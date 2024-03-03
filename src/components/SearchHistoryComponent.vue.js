/* __placeholder__ */
import axios from "axios";
export default (await import('vue')).defineComponent({
    data() {
        return {
            searchHistory: [],
            loading: false,
            error: null,
        };
    },
    async mounted() {
        await this.fetchSearchHistory();
    },
    methods: {
        async fetchSearchHistory() {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get("/api/searches");
                this.searchHistory = response.data;
                this.loading = false;
            }
            catch (error) {
                this.error = "エラーが発生しました。";
                this.loading = false;
                console.error("検索履歴の取得に失敗しました。", error);
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.ul;
    __VLS_intrinsicElements.ul;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: ("search-history-container"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: ("search-history-container"), }));
        if (__VLS_ctx.loading) {
            {
                const __VLS_5 = __VLS_intrinsicElements["div"];
                const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
                const __VLS_7 = __VLS_6({ ...{}, class: ("loading"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
                ({}({ ...{}, class: ("loading"), }));
                (__VLS_8.slots).default;
                const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
            }
            // @ts-ignore
            [loading,];
        }
        else if (__VLS_ctx.error) {
            {
                const __VLS_10 = __VLS_intrinsicElements["div"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, class: ("error"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, class: ("error"), }));
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            // @ts-ignore
            [error,];
        }
        else {
            {
                const __VLS_15 = __VLS_intrinsicElements["ul"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, }));
                for (const [search, index] of __VLS_getVForSourceType((__VLS_ctx.searchHistory))) {
                    {
                        const __VLS_20 = __VLS_intrinsicElements["li"];
                        const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                        const __VLS_22 = __VLS_21({ ...{}, key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                        ({}({ ...{}, key: ((index)), }));
                        (search);
                        (__VLS_23.slots).default;
                        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                    }
                    // @ts-ignore
                    [searchHistory,];
                }
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["search-history-container"];
        __VLS_styleScopedClasses["loading"];
        __VLS_styleScopedClasses["error"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
let __VLS_internalComponent;
