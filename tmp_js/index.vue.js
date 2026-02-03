"use strict";
/// <reference types="D:/LearningDocument/styleshadCn/vue-crud-tools/node_modules/.pnpm/@vue+language-core@3.2.2/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="D:/LearningDocument/styleshadCn/vue-crud-tools/node_modules/.pnpm/@vue+language-core@3.2.2/node_modules/@vue/language-core/types/props-fallback.d.ts" />
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var icons_vue_1 = require("@ant-design/icons-vue");
var props = withDefaults(defineProps(), {
    Options: function () { return []; },
    checkbox: function () { return []; },
    modelValue: function () { return []; },
    hcArr: function () { return []; },
    disabled: false,
    type: "value",
    sxwzz: function () { return ["无症状"]; },
    startX: "",
    zzTitle: "症状",
    placeholder: '请选择'
});
var emit = defineEmits();
var selectTagBq = (0, vue_1.ref)("");
var yldata = (0, vue_1.ref)([]);
//@ts-ignore
var result = (0, vue_1.reactive)({
    zw: "",
    sz: "",
});
var zsSelect = (0, vue_1.ref)(false);
var selectArr = (0, vue_1.ref)(true);
var MustChoose = (0, vue_1.ref)(false); // 必选验证显示文字提示
var searchInputFocus = (0, vue_1.ref)(true); // input 聚焦
var inputTag = (0, vue_1.ref)(null);
// 使用计算属性来确定要监听的值，支持向后兼容
var selectedValues = (0, vue_1.computed)(function () {
    return props.modelValue.length > 0 ? props.modelValue : props.checkbox;
});
(0, vue_1.watch)(selectedValues, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, vue_1.nextTick)()];
            case 1:
                _a.sent();
                setTimeout(function () {
                    yldata.value = [];
                    props.Options.forEach(function (item) {
                        var isInclude = selectedValues.value &&
                            ((props.type === "label" && selectedValues.value.includes(item.label)) ||
                                (props.type === "value" && selectedValues.value.includes(item.value)));
                        yldata.value.push(__assign(__assign({}, item), { label: String(item.label), value: String(item.value), color: isInclude ? "#87CEFA" : "", xzyf: isInclude }));
                    });
                }, 1000);
                return [2 /*return*/];
        }
    });
}); }, { immediate: true, deep: true });
var fatherBoxStyle = (0, vue_1.computed)(function () {
    return {
        border: "1px solid ".concat(MustChoose.value ? "#F5222D" : "#d9d9d9"),
        backgroundColor: props.disabled ? "#f5f5f5" : "",
        cursor: props.disabled ? "not-allowed" : "default",
    };
});
// 点击父盒子输入框获取焦点
function fatherOnclick() {
    if (props.disabled) {
        return;
    }
    (0, vue_1.nextTick)(function () {
        var _a, _b;
        // Safely call focus if the ref is set and has a focus method
        (_b = (_a = inputTag.value) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
        searchInputFocus.value = true;
        zsSelect.value = true;
    });
}
function handleClickOutside() {
    // 处理点击外部的逻辑
    (0, vue_1.nextTick)(function () {
        if (!searchInputFocus.value) {
            // 输入框不在焦点时点击外层隐藏
            zsSelect.value = false;
        }
        else {
            // 输入框在焦点时点击外层显示
            zsSelect.value = true;
        }
    });
}
function selectTag(index) {
    if (props.disabled)
        return;
    var item = yldata.value[index];
    if (!item.xzyf) {
        handleItemSelection(item, index);
    }
    else {
        resetItem(item);
    }
    // qtgx(yldata.value);
    hqdata(yldata.value);
    var selectedItems = yldata.value.filter(function (item) { return item.xzyf; });
    var selectedValues = selectedItems.map(function (item) {
        return props.type === "value" ? item.value : item.label;
    });
    emit("update:modelValue", selectedValues);
    // emit("selectBox", result);
}
/* 获取数据 */
function hqdata(arr) {
    result = { zw: "", sz: "" };
    var c = [];
    var b = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].xzyf) {
            c.push(arr[i].label);
            b.push(arr[i].value.toString());
        }
    }
    result = {
        zw: c.join(","),
        sz: b.join(","),
    };
}
// 点击叉叉删除tag
function removeTag(item) {
    if (props.disabled) {
        return;
    }
    item["color"] = "";
    item["xzyf"] = false;
    // qtgx(yldata.value);
    hqdata(yldata.value);
    // Emit v-model update first so parent reading `modelValue` in the
    // `selectBox` handler will observe the latest value.
    var selectedItems = yldata.value.filter(function (item) { return item.xzyf; });
    var selectedValues = selectedItems.map(function (item) {
        return props.type === "value" ? item.value : item.label;
    });
    emit("update:modelValue", selectedValues);
    // emit("selectBox", result);
}
function handleItemSelection(item, index) {
    var _a;
    selectTagBq.value = item.label;
    var flag = props.type === "value" || props.type === "label";
    if (flag) {
        if (((_a = item.hc_value) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            handleHcValueItems(item);
            selectTagBq.value = "";
            return;
        }
        handleSxwzzItems(item, index);
    }
    if (props.repeat) {
        handleRepeatSelection(item);
    }
}
// 辅助方法：处理重复选择
function handleRepeatSelection(item) {
    if (yldata.value.some(function (x) { return x.label === selectTagBq.value && x.xzyf; })) {
        // .warning('标签已存在')
        return;
    }
    selectTagBq.value = "";
    item.color = "#87CEFA";
    item.xzyf = true;
    // 检查当前index是否属于任何一个互斥组
    var currentGroup = props.hcArr.find(function (group) {
        return String(group).split(",").includes(String(item.value));
    });
    if (currentGroup) {
        // 找到当前item.value所在的互斥组，处理组内其他元素
        var groupValues = String(currentGroup).split(",");
        for (var i = 0; i < yldata.value.length; i++) {
            var ylItem = yldata.value[i];
            // 如果该item的value在当前互斥组中，但不是当前选中的item
            if (groupValues &&
                groupValues.includes(String(ylItem.value)) &&
                ylItem.value !== item.value) {
                ylItem.color = "";
                ylItem.xzyf = false;
            }
        }
    }
}
function resetItem(item) {
    item.xzyf = false;
    item.color = "";
}
/**
 * 互斥项
 * @param item
 */
function handleHcValueItems(item) {
    item.color = "#87CEFA";
    item.xzyf = true;
    item.hc_value.forEach(function (val) {
        var _index = Number(val) - 1;
        yldata.value[_index].color = "";
        yldata.value[_index].xzyf = false;
    });
}
// 辅助方法：处理sxwzz项
function handleSxwzzItems(item, index) {
    for (var _i = 0, _a = props.sxwzz; _i < _a.length; _i++) {
        var sxItem = _a[_i];
        if (!item.hc_value && (item.label === sxItem || item.value === sxItem)) {
            updateAllItems(index);
            selectTagBq.value = "";
            return;
        }
        updateNonSxwzzItems(index, sxItem);
    }
}
// 辅助方法：更新所有项目状态
function updateAllItems(index) {
    yldata.value.forEach(function (item, i) {
        item.color = i === index ? "#87CEFA" : "";
        item.xzyf = i === index;
    });
}
function updateNonSxwzzItems(index, sxItem) {
    yldata.value.forEach(function (yItem, i) {
        var isSxwzz = (props.type === "label" && yItem.label === sxItem) ||
            (props.type === "value" && yItem.value === sxItem);
        if (isSxwzz) {
            yItem.color = "";
            yItem.xzyf = false;
        }
        else if (i === index) {
            yItem.color = "#87CEFA";
            yItem.xzyf = true;
        }
    });
    selectTagBq.value = "";
}
//@ts-ignore
// 用于form validator的校验方法
function validator(rule, value, callback) {
    // 先同步最新 result，再做校验，避免使用旧值
    hqdata(yldata.value);
    var resultZw = (result === null || result === void 0 ? void 0 : result.zw) || "";
    MustChoose.value = props.startX === "*" && resultZw.length <= 0;
    if (MustChoose.value) {
        scrollError();
        callback(new Error("\u8BF7\u9009\u62E9".concat(props.zzTitle, "\uFF01")));
    }
    else {
        callback();
    }
}
// 键盘删除键删除tag
function deleteTags() {
    if (props.disabled) {
        return;
    }
    for (var i = yldata.value.length - 1; i > -1; i--) {
        if (yldata.value[i]["xzyf"]) {
            yldata.value[i]["xzyf"] = false;
            yldata.value[i]["color"] = "";
            // qtgx(yldata)
            hqdata(yldata.value);
            // Emit v-model update first so parent reading `modelValue` in the
            // `selectBox` handler will observe the latest value.
            var selectedItems = yldata.value.filter(function (item) { return item.xzyf; });
            var selectedValues_1 = selectedItems.map(function (item) {
                return props.type === "value" ? item.value : item.label;
            });
            emit("update:modelValue", selectedValues_1);
            // emit("selectBox", result);
            return;
        }
    }
}
function scrollError() {
    if (!MustChoose.value)
        return;
    (0, vue_1.nextTick)(function () {
        var errorDiv = document.body.getElementsByClassName("father_box");
        if (errorDiv) {
            document.body
                .getElementsByClassName("father_box")[0]
                .scrollIntoView({ behavior: "smooth", block: "center" });
        }
    });
}
var __VLS_defaults = {
    Options: function () { return []; },
    checkbox: function () { return []; },
    modelValue: function () { return []; },
    hcArr: function () { return []; },
    disabled: false,
    type: "value",
    sxwzz: function () { return ["无症状"]; },
    startX: "",
    zzTitle: "症状",
    placeholder: '请选择'
};
var __VLS_ctx = __assign(__assign(__assign(__assign(__assign({}, {}), {}), {}), {}), {});
var __VLS_components;
var __VLS_intrinsics;
var __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "relative" }));
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "tag-input flex flex-items-center flex-justify-start" }));
/** @type {__VLS_StyleScopedClasses['tag-input']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-justify-start']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign({ onClick: (__VLS_ctx.fatherOnclick) }, { style: (__VLS_ctx.fatherBoxStyle) }), { class: "father_box w-100% box-border bg-white b-rd-2 font-size-2 text-align-left p-l-1 wrap-break-word overflow-hidden flex flex-wrap z-999 overflow-y-hidden h-[32px]" }));
/** @type {__VLS_StyleScopedClasses['father_box']} */ ;
/** @type {__VLS_StyleScopedClasses['w-100%']} */ ;
/** @type {__VLS_StyleScopedClasses['box-border']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['b-rd-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-size-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-align-left']} */ ;
/** @type {__VLS_StyleScopedClasses['p-l-1']} */ ;
/** @type {__VLS_StyleScopedClasses['wrap-break-word']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['z-999']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[32px]']} */ ;
var _loop_1 = function (item, index) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ key: (index) }, { class: "inline-block font-size-3 mt-1 mb-1 mr-1 pr-1 bg-[#ecf5ff] border border-1 border-[#e8eaec] rounded-[3px] h-[23px] leading-[21px]" }));
    /** @type {__VLS_StyleScopedClasses['inline-block']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-size-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['pr-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-[#ecf5ff]']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-[#e8eaec]']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-[3px]']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-[23px]']} */ ;
    /** @type {__VLS_StyleScopedClasses['leading-[21px]']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ class: "h-[24px] leading-[22px] max-w-[99%] relative inline-block pl-2 text-[14px] opacity-100 align-middle overflow-hidden transition-all duration-250 ease-linear" }));
    /** @type {__VLS_StyleScopedClasses['h-[24px]']} */ ;
    /** @type {__VLS_StyleScopedClasses['leading-[22px]']} */ ;
    /** @type {__VLS_StyleScopedClasses['max-w-[99%]']} */ ;
    /** @type {__VLS_StyleScopedClasses['relative']} */ ;
    /** @type {__VLS_StyleScopedClasses['inline-block']} */ ;
    /** @type {__VLS_StyleScopedClasses['pl-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-[14px]']} */ ;
    /** @type {__VLS_StyleScopedClasses['opacity-100']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-middle']} */ ;
    /** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
    /** @type {__VLS_StyleScopedClasses['duration-250']} */ ;
    /** @type {__VLS_StyleScopedClasses['ease-linear']} */ ;
    (item.label);
    var __VLS_0 = void 0;
    /** @ts-ignore @type {typeof __VLS_components.CloseOutlined} */
    icons_vue_1.CloseOutlined;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0(__assign({ 'onClick': {} }, { class: "i-close p-1 opacity-100 filter-none text-[#409eff] cursor-pointer align-middle text-[10px] hover:bg-[#409eff] hover:rounded-full hover:text-white" })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ 'onClick': {} }, { class: "i-close p-1 opacity-100 filter-none text-[#409eff] cursor-pointer align-middle text-[10px] hover:bg-[#409eff] hover:rounded-full hover:text-white" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_5 = void 0;
    var __VLS_6 = ({ click: {} },
        { onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.removeTag(item);
                // @ts-ignore
                [fatherOnclick, fatherBoxStyle, yldata, removeTag,];
            } });
    /** @type {__VLS_StyleScopedClasses['i-close']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['opacity-100']} */ ;
    /** @type {__VLS_StyleScopedClasses['filter-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-[#409eff]']} */ ;
    /** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-middle']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-[10px]']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:bg-[#409eff]']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:rounded-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:text-white']} */ ;
    // @ts-ignore
    [];
};
var __VLS_3, __VLS_4;
for (var _i = 0, _a = __VLS_vFor((__VLS_ctx.yldata.filter(function (x) { return x.xzyf; }))); _i < _a.length; _i++) {
    var _b = _a[_i], item = _b[0], index = _b[1];
    _loop_1(item, index);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "flex-1 min-w-[50px] h-[32px] leading-[32px]" }));
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['min-w-[50px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[32px]']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-[32px]']} */ ;
var __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.aInput | typeof __VLS_components.AInput} */
aInput;
// @ts-ignore
var __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7(__assign(__assign(__assign(__assign(__assign(__assign({ 'onBlur': {} }, { 'onKeyup': {} }), { ref: "inputTag", type: "text" }), { style: {} }), { placeholder: (__VLS_ctx.disabled ? __VLS_ctx.placeholder : '') }), { class: "w-100% text-[16px] shadow-none outline-none bg-transparent p-0 flex-grow-1 align-top h-[32px] text-[#495060] leading-[32px]" }), { modelValue: (__VLS_ctx.selectTagBq) })));
var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([__assign(__assign(__assign(__assign(__assign(__assign({ 'onBlur': {} }, { 'onKeyup': {} }), { ref: "inputTag", type: "text" }), { style: {} }), { placeholder: (__VLS_ctx.disabled ? __VLS_ctx.placeholder : '') }), { class: "w-100% text-[16px] shadow-none outline-none bg-transparent p-0 flex-grow-1 align-top h-[32px] text-[#495060] leading-[32px]" }), { modelValue: (__VLS_ctx.selectTagBq) })], __VLS_functionalComponentArgsRest(__VLS_8), false));
var __VLS_12;
var __VLS_13 = ({ blur: {} },
    { onBlur: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.searchInputFocus = false;
            // @ts-ignore
            [disabled, placeholder, selectTagBq, searchInputFocus,];
        } });
var __VLS_14 = ({ keyup: {} },
    { onKeyup: (__VLS_ctx.deleteTags) });
var __VLS_15 = {};
/** @type {__VLS_StyleScopedClasses['w-100%']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-none']} */ ;
/** @type {__VLS_StyleScopedClasses['outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-transparent']} */ ;
/** @type {__VLS_StyleScopedClasses['p-0']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
/** @type {__VLS_StyleScopedClasses['align-top']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[32px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#495060]']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-[32px]']} */ ;
var __VLS_10;
var __VLS_11;
if (__VLS_ctx.zsSelect) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "w-[47%] bg-white p-4 border border-[1px] border-[#eee] shadow-[3px_3px_3px_#f0f9f9,3px_-3px_3px_#f0f9f9,-3px_3px_3px_#f0f9f9,-3px_-3px_3px_#f0f9f9] absolute z-99 w-full" }));
    __VLS_asFunctionalDirective(__VLS_directives.vClickOutside, {})(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.handleClickOutside) }), null, null);
    /** @type {__VLS_StyleScopedClasses['w-[47%]']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-[1px]']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-[#eee]']} */ ;
    /** @type {__VLS_StyleScopedClasses['shadow-[3px_3px_3px_#f0f9f9,3px_-3px_3px_#f0f9f9,-3px_3px_3px_#f0f9f9,-3px_-3px_3px_#f0f9f9]']} */ ;
    /** @type {__VLS_StyleScopedClasses['absolute']} */ ;
    /** @type {__VLS_StyleScopedClasses['z-99']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    var _loop_2 = function (item, index) {
        var __VLS_17 = void 0;
        /** @ts-ignore @type {typeof __VLS_components.aTag | typeof __VLS_components.ATag | typeof __VLS_components.aTag | typeof __VLS_components.ATag} */
        aTag;
        // @ts-ignore
        var __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17(__assign(__assign(__assign({ 'onClick': {} }, { modelValue: (__VLS_ctx.selectArr) }), { style: {} }), { key: (item.value), color: (__VLS_ctx.yldata.length > 0 ? __VLS_ctx.yldata[index].color : '') })));
        var __VLS_19 = __VLS_18.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onClick': {} }, { modelValue: (__VLS_ctx.selectArr) }), { style: {} }), { key: (item.value), color: (__VLS_ctx.yldata.length > 0 ? __VLS_ctx.yldata[index].color : '') })], __VLS_functionalComponentArgsRest(__VLS_18), false));
        var __VLS_22 = void 0;
        var __VLS_23 = ({ click: {} },
            { onClick: function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    if (!(__VLS_ctx.zsSelect))
                        return;
                    __VLS_ctx.selectTag(index);
                    // @ts-ignore
                    [yldata, yldata, deleteTags, zsSelect, vClickOutside, handleClickOutside, Options, selectArr, selectTag,];
                } });
        var __VLS_24 = __VLS_20.slots.default;
        (item.label);
        // @ts-ignore
        [];
        // @ts-ignore
        [];
    };
    var __VLS_20, __VLS_21;
    for (var _c = 0, _d = __VLS_vFor((__VLS_ctx.Options)); _c < _d.length; _c++) {
        var _e = _d[_c], item = _e[0], index = _e[1];
        _loop_2(item, index);
    }
}
// @ts-ignore
var __VLS_16 = __VLS_15;
// @ts-ignore
[];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
exports.default = {};
