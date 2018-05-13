<template>
<div id="app">
    <ComponentA />
    <ComponentD />
</div>
</template>

<script>
import ComponentA from './ComponentA.vue';
import ComponentD from './ComponentD.vue';

export default {
    components: {
        ComponentA,
        ComponentD
    }
};
</script>
