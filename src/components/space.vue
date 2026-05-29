<template>
    <div class="space"></div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixins.scss' as *;

.space{
    background-color: $color-morado;
    width: 100%;
    height: 16.7vh;

    @include mobile {
        height: 10vh;
    }

    @include desktop {
        height: 9.8vh;
    }
}
</style>