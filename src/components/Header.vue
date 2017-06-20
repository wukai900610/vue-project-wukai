<style scoped>
</style>

<template>

<div class="header">
    <mt-header :title="title" :fixed="isFixed">
        <mt-button icon="back" slot="left" @click.native="goback">返回</mt-button>
        <mt-button icon="more" slot="right" v-if="hasMore"></mt-button>
    </mt-header>
</div>

</template>

<script>

export default {
    data() {
        return {
        }
    },
    props:['title','hasMore','isBackTop','isFixed'],
    methods: {
        goback:function () {
            if(this.isBackTop){
                this.$router.push({'name':'Home'})
            }else{
                this.$router.back()
            }

        }
    },
}

</script>
