<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const activeSection = ref('home')
const menuOpen = ref(false)
const navbarRef = ref(null)

const sections = ['home', 'about', 'education', 'skills', 'experience', 'projects', 'contact']

function scrollToSection(sectionId) {
  menuOpen.value = false

  if (route.path === '/') {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  } else {
    router.push({ path: '/', query: { to: sectionId } })
  }
}

function handleScroll(){
  if(menuOpen.value) {
    menuOpen.value = false
  }

  if (route.path !== '/') return

  sections.forEach(section => {
    const el = document.getElementById(section)
    if(!el) return

    const top = el.offsetTop - 220
    const bottom = top + el.offsetHeight

    if(window.scrollY >= top && window.scrollY < bottom){
      activeSection.value = section
    }
  })
}

function handleClickOutside(event){
  if(!menuOpen.value) return
  if(navbarRef.value && !navbarRef.value.contains(event.target)){
    menuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
  if (route.path === '/' && route.query.to) {
    setTimeout(() => {
      const el = document.getElementById(route.query.to)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
      router.replace({ path: '/' })
    }, 300)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>

<nav class="navbar-am" ref="navbarRef">
    <div class="hamburger-box">

        <transition name="menu" mode="out-in">
                <button key="burger" v-if="!menuOpen" class="hamburger-btn" @click.stop="menuOpen = true"> ☰ </button>
          
                <div key="menu" v-else class="dropdown-menu-am">
                    <a @click.prevent="scrollToSection('home')" :class="{ active: activeSection === 'home' && route.path === '/' }"> Home </a>
    
                    <a @click.prevent="scrollToSection('about')" :class="{ active: activeSection === 'about' && route.path === '/' }"> About Me </a>
                    
                    <a @click.prevent="scrollToSection('education')" :class="{ active: activeSection === 'education' && route.path === '/' }"> Education </a>
                    
                    <a @click.prevent="scrollToSection('skills')" :class="{ active: activeSection === 'skills' && route.path === '/' }"> Skills </a>
                    
                    <a @click.prevent="scrollToSection('experience')" :class="{ active: activeSection === 'experience' && route.path === '/' }"> Experience </a>
                    
                    <a @click.prevent="scrollToSection('projects')" :class="{ active: activeSection === 'projects' || route.path.includes('/project/') }"> Projects</a>
                    
                    <a @click.prevent="scrollToSection('contact')" :class="{ active: activeSection === 'contact' && route.path === '/' }"> Contact Me </a>
                </div>
      </transition>

    </div>
</nav>

</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixins.scss' as *;

.navbar-am {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  .hamburger-box {
    position: fixed;
    margin-top: 1rem;
  }

  .hamburger-btn {
    border: none;
    background: $color-oscuro;
    color: $color-blanco;
    font-size: 1.8rem;
    border-radius: 50px;
    width: 4rem;
    height: 4rem;
    padding: 1rem;
    box-shadow: 0 8px 30px #00000026;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.5rem;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }

    @include celular {
      font-size: 2rem;
      margin-left: 1rem;
    }
  }

  .dropdown-menu-am {
    display: flex;
    gap: 3rem;
    background: $color-oscuro-alfa;
    padding: 1.5rem 3rem;
    border-radius: 0 50px 50px 0;
    box-shadow: 0 8px 40px #00000033;
    white-space: nowrap;
    transition: all 0.2s ease;

    @include tablet {
      background: $color-oscuro;
      flex-direction: column;
      gap: 1.5rem;
      padding: 1.2rem 2rem;
    }

    @include tablet-horizontal {
      flex-direction: column; 
      gap: 1.8rem;            
      padding: 1.8rem 2.5rem;
      max-height: 80vh;       
      overflow-y: auto;
    }

    @include celular {
      flex-direction: column; 
      gap: 1.2rem;
      padding: 1.5rem 2.5rem;
      border-radius: 0 30px 30px 0;
      background: $color-oscuro;
    }

    @include celular-horizontal {
      gap: 0.6rem;
      padding: 1rem 2rem;
      max-height: 75vh;
      overflow-y: auto;
    }

    a {
      font-size: 1rem;
      font-weight: 400;
      text-decoration: none;
      color: $color-blanco;
      transition: color 0.2s ease, transform 0.2s ease;
      cursor: pointer;

      &.active {
        color: $color-rosa;
        font-weight: 500;
      }

      &:hover {
        color: $color-crema;
        font-weight: 500;
        transform: scale(1.05);
      }
      
      @include celular {
        font-size: 1.1rem;
      }

      @include celular-horizontal {
        font-size: 0.95rem;
      }

      @include tablet {
        font-size: 1.25rem;
      }

      @include tablet-horizontal {
        font-size: 1.25rem;
      }
    }
  }
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.28s ease, transform 0.28s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateX(-12px);
}
</style>