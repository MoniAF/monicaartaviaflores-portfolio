<template>
    <div class="space"></div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;

.space{
    background-color: $color-morado;
    width: 100%;
    height: 16.7vh;
}

@media (min-width: 1800px){
    .space{
        height: 9.8vh;
    }
}
</style>