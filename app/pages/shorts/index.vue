<script setup lang="ts">

</script>

<template>
  <div class="short-container">
    <h1 class="text-2xl font-bold">Shorts Home</h1>
    <p class="mt-2 text-gray-600">Browse trending shorts videos</p>
    <div class="short-grid">
      <!-- Short items would go here -->
      <div class="short-item">Short 1</div>
      <div class="short-item">Short 2</div>
      <div class="short-item">Short 3</div>
      <div class="short-item">Short 4</div>
      <div class="short-item">Short 5</div>
      <div class="short-item">Short 6</div>
      <div class="short-item">Short 7</div>
      <div class="short-item">Short 8</div>
    </div>
  </div>
</template>

<style scoped>
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

.short-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.short-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    margin-top: 20px;
}

.short-item {
    background: #f5f5f5;
    border-radius: 8px;
    padding: 12px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.2s;
    aspect-ratio: 9/16;
    display: flex;
    align-items: center;
    justify-content: center;
}

.short-item:hover {
    background: #e5e5e5;
}
</style>