/* __placeholder__ */
import axios from "axios";
export default (await import('vue')).defineComponent({
    data() {
        return {
            loading: false,
            error: null,
            results: "",
        };
    },
    watch: {
        // resultsデータプロパティの変更を監視
        results() {
            this.$nextTick(() => {
                this.adjustHeight();
            });
        },
    },
    async mounted() {
        await this.fetchResults();
    },
    methods: {
        async fetchResults() {
            const searchWord = sessionStorage.getItem("searchWord");
            if (!searchWord) {
                this.error = "検索語が見つかりません。";
                return;
            }
            this.loading = true;
            try {
                const response = await axios.post("/api/search", { word: searchWord });
                this.results = response.data;
            }
            catch (e) {
                this.error = e.toString();
            }
            finally {
                this.loading = false;
            }
        },
        adjustHeight() {
            const textarea = this.$refs.responseInput;
            if (!textarea)
                return;
            textarea.style.height = "auto";
            textarea.style.height = textarea.scrollHeight + "px";
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.textarea;
    __VLS_intrinsicElements.textarea;
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        if (__VLS_ctx.loading) {
            {
                const __VLS_5 = __VLS_intrinsicElements["div"];
                const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
                const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
                ({}({ ...{}, }));
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
                const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, }));
                (__VLS_ctx.error);
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            // @ts-ignore
            [error, error,];
        }
        else {
            {
                const __VLS_15 = __VLS_intrinsicElements["div"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, }));
                {
                    const __VLS_20 = __VLS_intrinsicElements["textarea"];
                    const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                    const __VLS_22 = __VLS_21({ ...{ 'onInput': {}, }, ref: ("responseInput"), class: ("response-input"), value: ((__VLS_ctx.results)), placeholder: ("検索結果"), readonly: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{ 'onInput': {}, }, ref: ("responseInput"), class: ("response-input"), value: ((__VLS_ctx.results)), placeholder: ("検索結果"), readonly: (true), }));
                    // @ts-ignore
                    (__VLS_ctx.responseInput);
                    let __VLS_25 = { 'input': __VLS_pickEvent(__VLS_24['input'], {}.onInput) };
                    __VLS_25 = { input: (__VLS_ctx.adjustHeight) };
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                    let __VLS_24;
                }
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            // @ts-ignore
            [results, results, responseInput, adjustHeight,];
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
