<template>
  




<script>
  import { usetaskstroe1 } from './stores/taskstore1'
  export default {
    setup (){
   const taskstore1 = usetaskstroe1()

       return { taskstore }
    }
  }
</script>