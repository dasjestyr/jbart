<template>
  <div>
    <b-list-group>
      <b-list-group-item>Foo</b-list-group-item>
      <b-list-group-item active>Bar</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<style>
</style>
