<script setup>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

// Data kategori dinamis
const categories = ref([
  {
    title: 'Technology',
    description: 'Discover the latest trends in technology and innovation.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop',
    updated: '5 mins ago'
  },
  {
    title: 'Business',
    description: 'Insights and tips for growing your business.',
    image: 'https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?q=80&w=2070&auto=format&fit=crop',
    updated: '10 mins ago'
  },
  {
    title: 'Health',
    description: 'Explore ways to live a healthier and happier life.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop',
    updated: '2 hours ago'
  },
  {
    title: 'Lifestyle',
    description: 'Tips and ideas to enhance your everyday life.',
    image: 'https://images.unsplash.com/photo-1504194104404-433180773017?q=80&w=2070&auto=format&fit=crop',
    updated: '30 mins ago'
  },
  {
    title: 'Travel',
    description: 'Explore new places and plan your next adventure.',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop',
    updated: '1 day ago'
  },
  {
    title: 'Education',
    description: 'Enhance your knowledge and learn new skills.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    updated: '3 hours ago'
  }
]);
</script>

<template>
  <Navbar />

  <!-- Section Category -->
  <section class="category mt-4">
    <div class="container">
      <h2 class="text-center fw-bold text-primary mb-4">Explore Our Categories</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div v-for="(category, index) in categories" :key="index" class="col">
          <div class="card text-bg-dark category-card">
            <img :src="category.image" class="card-img" alt="Category Image">
            <div class="card-img-overlay">
              <div class="overlay"></div>
              <h5 class="card-title">{{ category.title }}</h5>
              <p class="card-text">{{ category.description }}</p>
              <p class="card-text"><small>Last updated {{ category.updated }}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<style scoped>
.category-card {
  border: none;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card img {
  object-fit: cover;
  height: 250px;
  width: 100%;
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.category-card .card-img-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
}
</style>
