<template>
  <div class="hello">
    <h1>Welcome to Calenshare</h1>
    
    <form>
      <input class="left-side" placeholder="Enter link here"> <!-- TODO: add screen-reader friendly placeholder -->
      <button type="submit" id="submit-link" class="right-side" aria-label="Open this link" title="Open this link">➔</button>
    </form>
    <p class="or-separator"><i>———— or ————</i></p>
    <button class="primary"><span aria-hidden>🔗</span> Create new link</button> 
  </div>
</template>

<script>
export default {
  name: 'loginPage',
  props: {
    
  }
}
</script>