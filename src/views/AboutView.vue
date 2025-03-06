<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Navbar />

  <!-- Section About -->
  <section class="about mt-5 py-5">
    <div class="container">
      <div class="row align-items-center g-4">
        <!-- Story -->
        <div class="col-lg-6 col-md-12">
          <p class="text-primary fw-bold">Who We Are</p>
          <h1 class="fw-bold">Unleashing Potential with Creative Strategy</h1>
          <p class="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul class="list-unstyled">
            <li>✅ Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li>✅ Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li>✅ Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          </ul>
        </div>

        <!-- Image -->
        <div class="col-lg-6 col-md-12">
          <div class="row g-2">
            <div class="col-6">
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid rounded shadow-sm" alt="">
            </div>
            <div class="col-6">
              <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid rounded shadow-sm" alt="">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid rounded shadow-sm mt-2" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section Team -->
  <section class="team py-5">
    <div class="container">
      <hr>
      <h2 class="text-center fw-bold mb-4">Meet Our Team</h2>
      <div class="row g-4">
        <!-- Person 1 -->
        <div class="col-lg-3 col-md-6 text-center">
          <img src="https://via.placeholder.com/150" class="img-fluid rounded-circle mb-2" alt="">
          <h5 class="fw-bold">John Doe</h5>
          <p class="text-muted">CEO</p>
        </div>
        <!-- Person 2 -->
        <div class="col-lg-3 col-md-6 text-center">
          <img src="https://via.placeholder.com/150" class="img-fluid rounded-circle mb-2" alt="">
          <h5 class="fw-bold">Jane Smith</h5>
          <p class="text-muted">Marketing</p>
        </div>
        <!-- Person 3 -->
        <div class="col-lg-3 col-md-6 text-center">
          <img src="https://via.placeholder.com/150" class="img-fluid rounded-circle mb-2" alt="">
          <h5 class="fw-bold">Mark Johnson</h5>
          <p class="text-muted">Designer</p>
        </div>
        <!-- Person 4 -->
        <div class="col-lg-3 col-md-6 text-center">
          <img src="https://via.placeholder.com/150" class="img-fluid rounded-circle mb-2" alt="">
          <h5 class="fw-bold">Emily Brown</h5>
          <p class="text-muted">Developer</p>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<style scoped>
.about ul {
  padding-left: 0;
}
.about ul li {
  margin-bottom: 8px;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>
