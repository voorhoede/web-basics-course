<script setup>
import { defineProps, onMounted } from "vue";

onMounted(() => {
  if (document.querySelector("script[codepen-embed]")) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("codepen-embed", "");

  script.src = "https://static.codepen.io/assets/embed/ei.js";

  document.body.appendChild(script);
});

defineProps({
  height: {
    type: Number,
    default: 300,
  },
  defaultTab: {
    type: String,
    default: "html,result",
  },
  slugHash: {
    type: String,
    required: true,
  },
  editable: {
    type: Boolean,
    default: true,
  },
  user: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    :data-height="height"
    :data-default-tab="defaultTab"
    :data-slug-hash="slugHash"
    :style="{
      height: '300px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid',
      margin: '1em 0',
      padding: '1em',
    }"
    data-editable="true"
    data-user="sjoerdb"
    class="codepen"
  ></div>
</template>