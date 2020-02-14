<script>
  export default {
    name: 'CheckButton',
    props: {
      text: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      selected: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<template lang='pug'>
  button(
    :class="{ 'check-button--selected': selected }",
    tabindex='0'
    v-value=value
    v-on:click="$emit('checkButtonClick', value)"
  ) {{ text }}

</template>

<style lang='stylus'>
  button
    margin 0 auto
    width: 280px;
    height: 100px;
    border-radius: 4px;
    border: solid 1px #ced0d9;
    background-color: #ffffff;
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 100px;
    letter-spacing: normal;
    text-align: center;
    color: #3d4250;
    display: block;

  .check-button--selected
    border: solid 2px #3ecadd;
    background-color: #f4fcfd;
  
</style>
