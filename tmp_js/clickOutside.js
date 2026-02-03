"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    mounted: function (el, binding) {
        var documentHandler = function (e) {
            if (el.contains(e.target))
                return;
            binding.value && binding.value(e);
        };
        el._vueClickOutside_ = documentHandler;
        document.addEventListener('click', documentHandler);
        document.addEventListener('touchmove', documentHandler);
    },
    unmounted: function (el) {
        var documentHandler = el._vueClickOutside_;
        if (documentHandler) {
            document.removeEventListener('click', documentHandler);
            document.removeEventListener('touchmove', documentHandler);
            delete el._vueClickOutside_;
        }
    }
};
