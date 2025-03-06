<script setup>


</script>


<template>
<div class="card mb-4">
  <div class="card-header">Categories</div>
    <div class="card-body">
      <div class="d-flex flex-wrap gap-2">
        <span class="badge bg-primary">
          Indonesia
        </span>
        <span class="badge bg-primary">
          Javascript
        </span>
        <span class="badge bg-primary">
          Java
        </span>
      </div>
  </div>
</div>

</template>

<style scoped>
  .card{
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  .card-header{
    background-color:#f8f9fa;
  }

  .badge {
  font-size: 0.7rem;
  padding: 8px 12px;
  cursor: pointer;
  transition: 0.3s;
}

  .badge:hover {
    background-color: #0056b3;
  }
</style>