<template>
  <form class="p-8 mt-12 border" ref="formEl" @submit.prevent>
    <label class="block mb-2" for="name">Name</label>
    <input
      class="block border mb-8"
      type="text"
      id="name"
      name="name"
      value="John Doe"
    />

    <button
      v-for="method in methods"
      :key="method"
      class="p-2 border mr-4"
      @click="handleSubmit($event, method)"
    >
      {{ method }}
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const formEl = ref(null);
const methods = ["POST", "GET", "PUT", "PATCH", "DELETE"];

function handleSubmit(event, method) {
  event.preventDefault();

  const formData = new FormData(formEl.value);
  const queryParam = new URLSearchParams(formData).toString();

  fetch(
    `https://mockbin.com/request${method === "GET" ? `?${queryParam}` : ""}`,
    {
      method,
      body: ["GET"].includes(method) ? undefined : formData,
      headers: {
        accept: "application/json",
      },
    }
  );
}
</script>



