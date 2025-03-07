<script setup>


</script>


<template>

    <!-- Side widget-->
    <div class="card mb-4">
        <div class="card-header">Author</div>
        <div class="card-body d-flex flex-column">
          <div class="row img-name">
            <div class="col-4 d-flex flex-column justify-content-center">
              <img src="https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Profile" class="img-fluid rounded-circle mb-3">
            </div>
            <div class="col-8 d-flex flex-column justify-content-center">
              <h4>Jane Rockfeller</h4>
              <div class="social-icons d-flex justify-content-start gap-3">
                <a href="#" class="round"><i class="bi bi-instagram"></i></a>
                <a href="#" class="round"><i class="bi bi-facebook"></i></a>
                <a href="#" class="round"><i class="bi bi-linkedin"></i></a>
                <a href="#" class="round"><i class="bi bi-twitter"></i></a>
              </div>
            </div>
          </div>
          <div class="row moto">
            <p> <em>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Distinctio quo fugit rerum minima dicta. Id a, aspernatur 
              tempore libero. 
            </em>   
            </p>
          </div>
        </div>
      </div>


</template>



<style scoped>
.card .img-fluid {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  .round {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #f8f9fa;
    color: #333;
    font-size: 16px;
    transition: 0.3s;
    text-decoration: none;
  }

  .round:hover {
    background-color: #0d6efd;
    color: white;
  } 


</style>