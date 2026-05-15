<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeSection = ref('home')
const menuOpen = ref(false)
const navbarRef = ref(null)

function handleScroll(){

    if(menuOpen.value){
        menuOpen.value = false
    }

    const sections = [
        'home',
        'about',
        'education',
        'skills',
        'experience',
        'projects',
        'contact'
    ]

    sections.forEach(section => {
        const el = document.getElementById(section)

        if(!el) return

        const top = el.offsetTop - 200
        const bottom = top + el.offsetHeight

        if(
            window.scrollY >= top &&
            window.scrollY < bottom
        ){
            activeSection.value = section
        }
    })
}

function handleClickOutside(event){
    if(!menuOpen.value) return

    if(
        navbarRef.value &&
        !navbarRef.value.contains(event.target)
    ){
        menuOpen.value = false
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)

    document.addEventListener(
        'click',
        handleClickOutside
    )
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)

    document.removeEventListener(
        'click',
        handleClickOutside
    )
})

</script>

<template>

<nav class="navbar-am" ref="navbarRef">
    <div class="hamburger-box">

        <transition name="menu" mode="out-in">
                <button key="burger" v-if="!menuOpen" class="hamburger-btn" @click.stop="menuOpen = true"> ☰ </button>
          
                <div key="menu" v-else class="dropdown-menu-am">
                    <a :href="route.path === '/' ? '#home' : '/#home'" @click="menuOpen = false" :class="{ active: activeSection === 'home' && route.path === '/' }"> Home </a>

                    <a :href="route.path === '/' ? '#about' : '/#about'" @click="menuOpen = false" :class="{ active: activeSection === 'about' && route.path === '/' }"> About Me </a>

                    <a :href="route.path === '/' ? '#education' : '/#education'" @click="menuOpen = false" :class="{ active: activeSection === 'education' && route.path === '/' }"> Education </a>

                    <a :href="route.path === '/' ? '#skills' : '/#skills'" @click="menuOpen = false" :class="{ active: activeSection === 'skills' && route.path === '/' }"> Skills </a>

                    <a :href="route.path === '/' ? '#experience' : '/#experience'" @click="menuOpen = false" :class="{ active: activeSection === 'experience' && route.path === '/' }"> Experience </a>

                    <a :href="route.path === '/' ? '#projects' : '/#projects'" @click="menuOpen = false" :class="{ active: activeSection === 'projects' || route.path.includes('/project/') }"> Projects</a>

                    <a :href="route.path === '/' ? '#contact' : '/#contact'" @click="menuOpen = false" :class="{ active: activeSection === 'contact' && route.path === '/' }"> Contact Me </a>

                </div>
      </transition>

    </div>
</nav>

</template>

<style lang="scss" scoped>

.navbar-am{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
}

.hamburger-box{
    position: fixed;
    margin-top: 1rem;
}

.hamburger-btn{
    border: none;
    background: #2B2238;
    color: #FFF9F6;
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
}

.hamburger-btn:hover{
    transform: scale(1.05);
}

.dropdown-menu-am{
    display: flex;
    gap: 3rem;
    background: #2b2238d9;
    padding: 1.5rem 3rem;
    border-radius: 0 50px 50px 0;
    box-shadow: 0 8px 40px #00000033;
    white-space: nowrap;
}

.dropdown-menu-am a{
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    color: #FFF9F6;
}

.dropdown-menu-am a.active{
    color: #F7C8D8;
    font-weight: 500;
}

.dropdown-menu-am a:hover{
    color: #E8CFAE;
    font-weight: 500;
    transform: scale(1.05);
}

.menu-enter-active,
.menu-leave-active{
    transition:
    opacity 0.28s ease,
    transform 0.28s ease;
}

.menu-enter-from,
.menu-leave-to{
    opacity: 0;
    transform: translateX(-12px);
}

</style>