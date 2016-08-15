<template>
  <span>i am foo</span>
</template>

<script>
export default {
	route : {
      data : function(){
      	this.$http.get('/api/localTest').then((response) => {
            // success callback
            console.log("local test get:"+response.text());
        }, (response) => {
            console.log(response.status);
        });

        this.$http.post('/api/localTest').then((response) => {
            // success callback
            console.log("local test post:"+response.text());
        }, (response) => {
            console.log(response.status);
        });

        this.$http.get('/api/novsky/getVendors').then((response) => {
            // success callback
            console.log("get:"+response.text());
        }, (response) => {
            console.log(response.status);
        });
        
        let postParam = {"pnrNo":"KEXF0Y","passengerVos":[{"name":"程迪","tid":"123"},{"name":"薛喜明","tid":"123"}],"segmentVos":[{"arrivalAirport":"SHA","departureAirport":"PEK","departureAirportTerminal":"T2","arrivalAirportTerminal":"T2","arrivalDateTime":"2016-11-22 09:40:00","departureDateTime":"2016-11-22 07:30:00","airlineCode":"FM","flightNumber":"9108","cabincode":"Z"},{"arrivalAirport":"PEK","departureAirport":"SHA","departureAirportTerminal":"T2","arrivalAirportTerminal":"T2","arrivalDateTime":"2016-11-30 23:55:00","departureDateTime":"2016-11-30 21:30:00","airlineCode":"FM","flightNumber":"9107","cabincode":"Z"}],"companyCid":"123","vendorId":"1","ticketPsgSegListVos":[{"cairTicketNumber":"123","psgTid":"","segmentVos":[0],"segmentShow":[true],"settlePrice":"123","ticketPrice":"123","cash":"123","tax":"123"}]};
        this.$http.post('/api/novsky/savePnrInfo',postParam).then((response) => {
            // success callback
            console.log("post:"+response.text());
        }, (response) => {
            console.log(response.status);
        });
      }
    }
};
</script>

<style lang='scss' scoped>
  span{background: red}
</style>
