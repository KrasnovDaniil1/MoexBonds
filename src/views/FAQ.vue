<script setup>
import { ref } from "vue";

let faq = [
    {
        question: "вопрос1",
        answer: "ответ1",
    },
    {
        question: "вопрос2",
        answer: "ответ2",
    },
];

let active = ref(0);
</script>

<template>
    <div class="p-10 relative" v-for="(item, i) in faq" :key="i">
        <div
            @click="active = i"
            class="disactive relative p-5 bg-emerald-400 text-white font-2xl font-medium cursor-pointer after:absolute after:top-1/2 after:translate-y-[-50%] after:right-5 after:text-2xl after:font-semibold"
            :class="{ active: active == i }"
        >
            {{ item.question }}
        </div>
        <div
            class="disactiveText relative bg-slate-200 overflow-hidden transition"
            :class="{ activeText: active == i }"
        >
            <p class="p-5">
                {{ item.answer }}
            </p>
        </div>
    </div>
</template>
<style scoped>
.disactive::after {
    content: "+";
}

.active::after {
    content: "\2014";
}

.disactiveText {
    max-height: 0;
}

.activeText {
    max-height: 100%;
}
</style>
