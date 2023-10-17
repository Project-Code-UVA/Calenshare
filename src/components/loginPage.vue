<template>
  <div class="hello">
    <h1>Welcome to Calenshare</h1>
    
    <form>
      <input style="display: inline;" placeholder="Enter link here">
      <button type="submit" id="submit-link">➔</button>
    </form>
    <p><i><small>———— or ————</small></i></p>
    <button class="primary">🔗 Create new link</button>
  </div>
</template>

<script>
export default {
  name: 'loginPage',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
