<template>
	<div>
		<anchored-heading :level='1'>Hello World!!!</anchored-heading>
		<anchored-heading :level='2'>123456</anchored-heading>
		<anchored-heading :level='3'>Hello World!!!</anchored-heading>
		<anchored-heading :level='4'>Hello World!!!</anchored-heading>
		<anchored-heading :level='5'>Hello World!!!</anchored-heading>
	</div>
</template>
<script>
	import Vue from 'vue';

	var getChildrenTextContent = function (children) {
  return children.map(function (node) {
    return node.children
      ? getChildrenTextContent(node.children)
      : node.text
  }).join('')
}

var aa = async function(){
	return 'a';
}
	Vue.component('anchored-heading', {
	  	render: function (createElement) {
	    	// 创建 kebab-case 风格的ID
		    var headingId = getChildrenTextContent(this.$slots.default)
		      .toLowerCase()
		      .replace(/\W+/g, '-')
		      .replace(/(^\-|\-$)/g, '')

		    return createElement(
		      'h' + this.level,
		      {
		      	domProps:{
		      		align:'center'
		      	}
		      },
		      [
		        createElement('a', {
		          attrs: {
		            name: headingId
		          },
		          domProps:{
		          	// href:'11111'
		          }
		        }, this.$slots.default)
		      ]
		    )
		},
		 props: {
		    level: {
		      type: Number,
		      required: true
		    }
		 }
	})
</script>
<style scoped>
	.foo{
		color: red;
	}
</style>