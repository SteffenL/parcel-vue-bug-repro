<template>
<div id="app">
    <ComponentA />
    <ComponentB />
</div>
</template>

<script>
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';

export default {
    components: {
        ComponentA,
        ComponentB
    }
};
</script>
