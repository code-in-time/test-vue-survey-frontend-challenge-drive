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
      },
      isDisabled: {
        type: Boolean,
        default: true
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
    :disabled="isDisabled"
  ) {{ text }}

</template>

<style lang='stylus'>
  button
    margin 0 auto
    max-width: 478px;
    width: 100%;
    height: 120px;
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
    cursor: pointer;

    @media screen and (max-width 400px)
      height: 100px;

  button.check-button--selected
    border: solid 2px #3ecadd;
    background-color: #f4fcfd;
  
  button:disabled
    color: #ced0d9;
    border: solid 1px #e5e7f1;
    background-color: #ffffff;
    cursor: default

</style>
