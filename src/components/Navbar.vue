<template>
  <nav class="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
    <div class="container">
      <!-- Logo -->
      <a class="navbar-brand fw-bold text-primary" href="#">Horizon Blog</a>

      <!-- Toggle Button for Mobile -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav ms-auto">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/category">Category</router-link>
          <router-link class="nav-link" to="/about">About Us</router-link>
        </div>

        <!-- Login & Sign Up Buttons -->
        <div class="d-flex gap-2">
          <button class="btn btn-outline-primary rounded-pill">Login</button>
          <button class="btn btn-primary rounded-pill">Sign Up</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Navbar Styling */
nav {
  border-radius: 12px;
  padding: 12px 0;
  transition: all 0.3s ease-in-out;
}

/* Navbar Links */
.navbar-nav .nav-link {
  font-weight: 500;
  color: #333;
  transition: color 0.3s ease-in-out;
}

.navbar-nav .nav-link:hover {
  color: #007bff;
}

/* Buttons */
.btn {
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  transform: scale(1.05);
}
</style>
