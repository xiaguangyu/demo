<template>
	<div>
		<qriously value="Hello Worldefedfdf!" :size="200" />
		<div>{{ msg | aaa}}</div>
	</div>
</template>
<script>
	export default {
	  name: 'test',
	  data () {
	    return {
	      msg: 'hahaha'
	    }
	  },
	  filters :{
	  	aaa: function(value){
	  		return value+'111'
	  	}
	  }
	}
</script>
