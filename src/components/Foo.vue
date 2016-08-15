<template>
  <span>i am foo</span>
</template>

<script>
export default {
	route : {
      data : function(){
        this.$http.get('/api/novsky/getVendors').then((response) => {
            // success callback
            console.log("get:"+response.text());
        }, (response) => {
            console.log(response.status);
        });
        /*
        this.$http.post('/api/novsky/savePnrInfo').then((response) => {
            // success callback
            console.log("get:"+response.text());
        }, (response) => {
            console.log(response.status);
        });*/
      }
    }
};
</script>

<style lang='scss' scoped>
  span{background: red}
</style>
