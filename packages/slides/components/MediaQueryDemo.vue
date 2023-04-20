<template>
  <div class="selector">
    <p>Media query demo</p>
  </div>
</template>

<style scoped>
.selector {
  color: blue;
}

@media (max-width: 800px) {
  .selector {
    color: green;
  }
}

@media (min-width: 1000px) {
  .selector {
    color: red;
  }
}

@media print {
  .selector {
    color: purple;
  }
}
</style>