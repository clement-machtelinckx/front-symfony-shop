<template>

<p>
    {{ cart }}
</p>

</template>

<script>


const cart = localStorage.getItem('cart')
console.log(cart)
</script>