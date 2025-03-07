<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Navbar />

  <!-- Section About -->
  <section class="about mt-5 py-5 d-flex align-items-center">
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

  <section class="team py-3">
  <div class="container">
    <hr>
    <h2 class="text-center fw-bold mb-4 text-primary">Meet the Visionary Squad</h2>
    <div class="row g-4">
      <!-- Team Member -->
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 text-center d-flex justify-content-center">
        <div class="card card-team">
          <div class="card-body text-center">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Profile" class="img-fluid rounded-circle mb-3">
            <h5 class="fw-bold">Natalie Musk</h5>
            <p class="text-muted">CEO</p>
            <div class="social-icons d-flex justify-content-center gap-3">
              <a href="#" class="round"><i class="bi bi-instagram"></i></a>
              <a href="#" class="round"><i class="bi bi-facebook"></i></a>
              <a href="#" class="round"><i class="bi bi-linkedin"></i></a>
              <a href="#" class="round"><i class="bi bi-twitter"></i></a>
              <a href="#" class="round"><i class="bi bi-github"></i></a>
            </div>
          </div>
        </div>
      </div>

      <!-- Duplicate this block for other team members -->
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 text-center d-flex justify-content-center">
        <div class="card card-team">
          <div class="card-body text-center">
            <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Profile" class="img-fluid rounded-circle mb-3">
            <h5 class="fw-bold">Emelie Erhart</h5>
            <p class="text-muted">CTO</p>
            <div class="social-icons d-flex justify-content-center gap-3">
              <a href="#" class="round"><i class="bi bi-instagram"></i></a>
              <a href="#" class="round"><i class="bi bi-facebook"></i></a>
              <a href="#" class="round"><i class="bi bi-linkedin"></i></a>
              <a href="#" class="round"><i class="bi bi-twitter"></i></a>
              <a href="#" class="round"><i class="bi bi-github"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-12 col-md-6 col-lg-4 text-center d-flex justify-content-center">
        <div class="card card-team">
          <div class="card-body text-center">
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Profile" class="img-fluid rounded-circle mb-3">
            <h5 class="fw-bold">Sophia Carter</h5>
            <p class="text-muted">Lead Designer</p>
            <div class="social-icons d-flex justify-content-center gap-3">
              <a href="#" class="round"><i class="bi bi-instagram"></i></a>
              <a href="#" class="round"><i class="bi bi-facebook"></i></a>
              <a href="#" class="round"><i class="bi bi-linkedin"></i></a>
              <a href="#" class="round"><i class="bi bi-twitter"></i></a>
              <a href="#" class="round"><i class="bi bi-github"></i></a>
            </div>
          </div>
        </div>
      </div>
      

          <!-- Team Member 4 -->
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 text-center d-flex justify-content-center">
      <div class="card card-team">
        <div class="card-body text-center">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Profile" class="img-fluid rounded-circle mb-3">
          <h5 class="fw-bold">Liam Novak</h5>
          <p class="text-muted">Project Manager</p>
          <div class="social-icons d-flex justify-content-center gap-3">
            <a href="#" class="round"><i class="bi bi-instagram"></i></a>
            <a href="#" class="round"><i class="bi bi-facebook"></i></a>
            <a href="#" class="round"><i class="bi bi-linkedin"></i></a>
            <a href="#" class="round"><i class="bi bi-twitter"></i></a>
            <a href="#" class="round"><i class="bi bi-github"></i></a>
          </div>
        </div>
      </div>
      </div>

      <!-- Team Member 5 -->
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 text-center d-flex justify-content-center">
      <div class="card card-team">
        <div class="card-body text-center">
          <img src="https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Profile" class="img-fluid rounded-circle mb-3">
          <h5 class="fw-bold">Oliver Chang</h5>
          <p class="text-muted">Full Stack Developer</p>
          <div class="social-icons d-flex justify-content-center gap-3">
            <a href="#" class="round"><i class="bi bi-instagram"></i></a>
            <a href="#" class="round"><i class="bi bi-facebook"></i></a>
            <a href="#" class="round"><i class="bi bi-linkedin"></i></a>
            <a href="#" class="round"><i class="bi bi-twitter"></i></a>
            <a href="#" class="round"><i class="bi bi-github"></i></a>
          </div>
        </div>
      </div>
      </div>

      <!-- Team Member 6 -->
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 text-center d-flex justify-content-center">
      <div class="card card-team">
        <div class="card-body text-center">
          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1867&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Profile" class="img-fluid rounded-circle mb-3">
          <h5 class="fw-bold">Ava Moretti</h5>
          <p class="text-muted">Marketing Strategist</p>
          <div class="social-icons d-flex justify-content-center gap-3">
            <a href="#" class="round"><i class="bi bi-instagram"></i></a>
            <a href="#" class="round"><i class="bi bi-facebook"></i></a>
            <a href="#" class="round"><i class="bi bi-linkedin"></i></a>
            <a href="#" class="round"><i class="bi bi-twitter"></i></a>
            <a href="#" class="round"><i class="bi bi-github"></i></a>
          </div>
        </div>
      </div>
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

section{
  min-height: 90vh;
}

.card-team {
    width: 100%;
    width: 300px;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
  }

  .card-team:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

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
