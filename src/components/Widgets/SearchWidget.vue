<script setup>



</script>


<template>

<div class="card mb-4">
    <div class="card-header">Search</div>
    <div class="card-body">
        <div class="input-group">
            <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
            <button class="btn btn-primary" id="button-search" type="button">Go!</button>
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
</style>