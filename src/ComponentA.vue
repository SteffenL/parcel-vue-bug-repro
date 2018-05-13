<template>
<span>A
    <ComponentB />
    <ComponentC />
</span>
</template>

<script>
import ComponentB from './ComponentB.vue';
import ComponentC from './ComponentC.vue';

export default {
    components: {
        ComponentB,
        ComponentC
    }
};
</script>
