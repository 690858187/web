<template>
    <div>
        <svg>
            <use :xlink:href="prefix + name"></use>
        </svg>
    </div>
</template>

<script setup lang="ts">

defineProps({
    prefix: { type: String, default: '#icon-' },
    name: String
})

</script>

<style  lang="scss" scoped></style>