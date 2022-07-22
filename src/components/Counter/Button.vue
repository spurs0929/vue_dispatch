<template>
  <button
    class="counter-btn"
    :action="action"
    @click="count"
  >{{innerText}}</button>
</template>

<script>
export default {
  name: 'CounterButton',
  props: {
    innerText: String,
    action: String
  },
  methods: {
    count(){
      this.$emit('dispatch', this.action);
    }
  }
}
</script>

<style>
  .counter-btn{
    width: 60px;
    height: 40px;
    margin: 5px;
  }
</style>