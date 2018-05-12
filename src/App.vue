<template>
<div id="app"></div>
</template>

<script>
// Fix #1: change name of the imported file, e.g. to Hello.js
import Auth from './Auth';

export default {
    // Fix #2: remove data()
    data() {
        return {};
    },
    mounted() {
        // Fix #3: change name of isAuthenticated(), e.g. to asdf()
        return Auth.isAuthenticated().then(() => {
            this.setStage();
            // Fix #4: uncomment the following line
            //console.log(1);
        });
    },
    methods: {
        // Fix #5: change name of setStage(), e.g. to qwer()
        setStage() {}
    }
};
</script>
