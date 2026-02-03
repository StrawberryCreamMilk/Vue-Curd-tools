<template>
  <div class="relative">
    <div class="tag-input flex flex-items-center flex-justify-start">
      <div
        :style="fatherBoxStyle"
        class="father_box w-100% box-border bg-white b-rd-2 font-size-2 text-align-left p-l-1 wrap-break-word overflow-hidden flex flex-wrap z-999 overflow-y-hidden h-[32px]"
        @click="fatherOnclick"
      >
        <div
          v-for="(item, index) in yldata.filter((x) => x.xzyf)"
          :key="index"
          class="inline-block font-size-3 mt-1 mb-1 mr-1 pr-1 bg-[#ecf5ff] border border-1 border-[#e8eaec] rounded-[3px] h-[23px] leading-[21px]"
        >
          <span
            class="h-[24px] leading-[22px] max-w-[99%] relative inline-block pl-2 text-[14px] opacity-100 align-middle overflow-hidden transition-all duration-250 ease-linear"
            >{{ item.label }}</span
          >
          <CloseOutlined
            class="i-close p-1 opacity-100 filter-none text-[#409eff] cursor-pointer align-middle text-[10px] hover:bg-[#409eff] hover:rounded-full hover:text-white"
            @click="removeTag(item)"
          />
        </div>
        <div class="flex-1 min-w-[50px] h-[32px] leading-[32px]">
          <a-input
            ref="inputTag"
            type="text"
            style="border: none !important"
            :placeholder="disabled ? placeholder : ''"
            class="w-100% text-[16px] shadow-none outline-none bg-transparent p-0 flex-grow-1 align-top h-[32px] text-[#495060] leading-[32px]"
            v-model="selectTagBq"
            @blur="searchInputFocus = false"
            @keyup.delete="deleteTags"
          />
        </div>
      </div>
    </div>
    <div
      v-if="zsSelect"
      class="w-[47%] bg-white p-4 border border-[1px] border-[#eee] shadow-[3px_3px_3px_#f0f9f9,3px_-3px_3px_#f0f9f9,-3px_3px_3px_#f0f9f9,-3px_-3px_3px_#f0f9f9] absolute z-99 w-full"
      v-click-outside="handleClickOutside"
    >
      <a-tag
        v-model="selectArr"
        style="margin-bottom: 12px;"
        v-for="(item, index) in Options"
        :key="item.value"
        :color="yldata.length > 0 ? yldata[index].color : ''"
        @click="selectTag(index)"
        >{{ item.label }}</a-tag
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed, nextTick, watch } from "vue";
import { VcSelectBoxProps, VcSelectBoxEmits } from "./types";
import { yldataType, NumberOrString } from "./interface";
import { CloseOutlined } from "@ant-design/icons-vue";

const props = withDefaults(defineProps<VcSelectBoxProps>(), {
  Options: () => [],
  checkbox: () => [],
  modelValue: () => [],
  hcArr: () => [],
  disabled: false,
  type: "label",
  sxwzz: () => ["无症状"],
  startX: "",
  zzTitle: "症状",
  placeholder: '请选择'
});
// const emit = defineEmits<{
//   selectBox: [result: any]
//   'update:modelValue': [value: typeof props.checkbox]
// }>();
const emit = defineEmits<VcSelectBoxEmits>();
const selectTagBq = ref("");

const yldata = ref<yldataType[]>([]);
//@ts-ignore
let result = reactive({
  zw: "",
  sz: "",
});

const zsSelect = ref(false);
const selectArr = ref(true);
const MustChoose = ref(false); // 必选验证显示文字提示

const searchInputFocus = ref(true); // input 聚焦
const inputTag = ref<any>(null);

// 使用计算属性来确定要监听的值，支持向后兼容
const selectedValues = computed(() => {
  return props.modelValue.length > 0 ? props.modelValue : props.checkbox;
});

watch(
  selectedValues,
  async () => {
    await nextTick();
    setTimeout(() => {
      yldata.value = [];
      props.Options.forEach((item) => {
        const isInclude =
          selectedValues.value &&
          ((props.type === "label" && selectedValues.value.includes(item.label)) ||
            (props.type === "value" && selectedValues.value.includes(item.value)));
        yldata.value.push({
          ...item,
          label: String(item.label),
          value: String(item.value),
          color: isInclude ? "#87CEFA" : "",
          xzyf: isInclude,
        });
      });
    }, 1000);
  },
  { immediate: true, deep: true }
);

const fatherBoxStyle = computed(() => {
  return {
    border: `1px solid ${MustChoose.value ? "#F5222D" : "#d9d9d9"}`,
    backgroundColor: props.disabled ? "#f5f5f5" : "",
    cursor: props.disabled ? "not-allowed" : "default",
  };
});

// 点击父盒子输入框获取焦点
function fatherOnclick() {
  if (props.disabled) {
    return;
  }
  nextTick(() => {
    // Safely call focus if the ref is set and has a focus method
    inputTag.value?.focus?.();
    searchInputFocus.value = true;
    zsSelect.value = true;
  });
}

function handleClickOutside() {
  // 处理点击外部的逻辑
  nextTick(() => {
    if (!searchInputFocus.value) {
      // 输入框不在焦点时点击外层隐藏
      zsSelect.value = false;
    } else {
      // 输入框在焦点时点击外层显示
      zsSelect.value = true;
    }
  });
}

function selectTag(index: number) {
  if (props.disabled) return;
  const item = yldata.value[index];
  if (!item.xzyf) {
    handleItemSelection(item, index);
  } else {
    resetItem(item);
  }

  // qtgx(yldata.value);
  hqdata(yldata.value);

  const selectedItems = yldata.value.filter(item => item.xzyf);
  const selectedValues = selectedItems.map(item =>
    props.type === "value" ? item.value : item.label
  );
  emit("update:modelValue", selectedValues);
  // emit("selectBox", result);
}

/* 获取数据 */
function hqdata(arr: yldataType[]) {
  result = { zw: "", sz: "" };
  let c = [];
  let b = [];
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
function removeTag(item: any) {
  if (props.disabled) {
    return;
  }
  item["color"] = "";
  item["xzyf"] = false;
  // qtgx(yldata.value);
  hqdata(yldata.value);

  // Emit v-model update first so parent reading `modelValue` in the
  // `selectBox` handler will observe the latest value.
  const selectedItems = yldata.value.filter(item => item.xzyf);
  const selectedValues = selectedItems.map(item =>
    props.type === "value" ? item.value : item.label
  );
  emit("update:modelValue", selectedValues);
  // emit("selectBox", result);
}

function handleItemSelection(item: any, index: number) {
  selectTagBq.value = item.label;
  const flag = props.type === "value" || props.type === "label";
  if (flag) {
    if (item.hc_value?.length > 0) {
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
function handleRepeatSelection(item: any) {
  if (yldata.value.some((x) => x.label === selectTagBq.value && x.xzyf)) {
    // .warning('标签已存在')
    return;
  }

  selectTagBq.value = "";
  item.color = "#87CEFA";
  item.xzyf = true;
  // 检查当前index是否属于任何一个互斥组
  const currentGroup = props.hcArr.find((group) =>
    String(group).split(",").includes(String(item.value))
  );

  if (currentGroup) {
    // 找到当前item.value所在的互斥组，处理组内其他元素
    const groupValues = String(currentGroup).split(",");
    for (let i = 0; i < yldata.value.length; i++) {
      const ylItem = yldata.value[i];
      // 如果该item的value在当前互斥组中，但不是当前选中的item
      if (
        groupValues &&
        groupValues.includes(String(ylItem.value)) &&
        ylItem.value !== item.value
      ) {
        ylItem.color = "";
        ylItem.xzyf = false;
      }
    }
  }
}

function resetItem(item: any) {
  item.xzyf = false;
  item.color = "";
}

/**
 * 互斥项
 * @param item
 */
function handleHcValueItems(item: any) {
  item.color = "#87CEFA";
  item.xzyf = true;

  item.hc_value.forEach((val: any) => {
    const _index = Number(val) - 1;
    yldata.value[_index].color = "";
    yldata.value[_index].xzyf = false;
  });
}

// 辅助方法：处理sxwzz项
function handleSxwzzItems(item: any, index: number) {
  for (const sxItem of props.sxwzz) {
    if (!item.hc_value && (item.label === sxItem || item.value === sxItem)) {
      updateAllItems(index);
      selectTagBq.value = "";
      return;
    }
    updateNonSxwzzItems(index, sxItem);
  }
}

// 辅助方法：更新所有项目状态
function updateAllItems(index: number) {
  yldata.value.forEach((item, i) => {
    item.color = i === index ? "#87CEFA" : "";
    item.xzyf = i === index;
  });
}

function updateNonSxwzzItems(index: number, sxItem: NumberOrString) {
  yldata.value.forEach((yItem, i) => {
    const isSxwzz =
      (props.type === "label" && yItem.label === sxItem) ||
      (props.type === "value" && yItem.value === sxItem);

    if (isSxwzz) {
      yItem.color = "";
      yItem.xzyf = false;
    } else if (i === index) {
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
  const resultZw = result?.zw || "";
  MustChoose.value = props.startX === "*" && resultZw.length <= 0;

  if (MustChoose.value) {
    scrollError();
    callback(new Error(`请选择${props.zzTitle}！`));
  } else {
    callback();
  }
}

// 键盘删除键删除tag
function deleteTags() {
  if (props.disabled) {
    return;
  }
  for (let i = yldata.value.length - 1; i > -1; i--) {
    if (yldata.value[i]["xzyf"]) {
      yldata.value[i]["xzyf"] = false;
      yldata.value[i]["color"] = "";
      // qtgx(yldata)
      hqdata(yldata.value);

      // Emit v-model update first so parent reading `modelValue` in the
      // `selectBox` handler will observe the latest value.
      const selectedItems = yldata.value.filter(item => item.xzyf);
      const selectedValues = selectedItems.map(item =>
        props.type === "value" ? item.value : item.label
      );
      emit("update:modelValue", selectedValues);
      // emit("selectBox", result);
      return;
    }
  }
}

function scrollError() {
  if (!MustChoose.value) return;
  nextTick(() => {
    const errorDiv = document.body.getElementsByClassName("father_box");
    if (errorDiv) {
      document.body
        .getElementsByClassName("father_box")[0]
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}

/* 判断其他是否勾选 */
// function qtgx(arr: yldataType[]) {
//   var a = arr.filter(
//     (item) =>
//       (item.label === props.endwx && item.xzyf && props.type === "label") ||
//       (item.value === props.endwx && item.xzyf && props.type === "value")
//   );
//   if (a.length > 0) {
//     iszs.value = true;
//   } else {
//     ZZ2QT.value = "";
//     iszs.value = false;
//   }
// }
</script>

<style scoped></style>
