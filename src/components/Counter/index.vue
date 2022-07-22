<template>
  <div class="container">
    <!-- 結果 -->
    <counter-result :result="result" />
    <!-- 按鈕 -->
    <div>
      <counter-button
        innerText="+"
        action="PLUS"
        @dispatch="dispatch"
      />
      <counter-button
        innerText="-"
        action="MINUS"
        @dispatch="dispatch"
      />
    </div>
  </div>
</template>

<script>
  import CounterButton from './Button.vue';
  import CounterResult from './Result.vue';
  import dispatch from './dispatchers/counter';

  export default {
    name: 'Counter',
    components: { 
      CounterButton,
      CounterResult
    },
    data(){
      return {
        result: 0
      }
    },
    methods: {
      dispatch(...args){
        dispatch(this)(...args);  
      }
    }
  } 
</script>

<style>

</style>