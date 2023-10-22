<template>
  <div class="hello">
    <img alt="Calenshare Logo" src="../assets/logo.png" aria-hidden style="width: 200px;">
    <h1>Welcome to Calenshare</h1>
    
    <form>
      <input class="left-side" placeholder="Enter link here"> <!-- TODO: add screen-reader friendly placeholder -->
      <button type="submit" class="right-side" aria-label="Open this link" title="Open this link">➔</button>
    </form>
    <p class="or-separator"><i>———— or ————</i></p>
    <button><span aria-hidden>🔗</span> Create new link</button> 
  <!--
    Source:
    <a href="https://www.freepik.com/free-vector/schedule-calendar-flat-style_41411895.htm#query=calendar&position=7&from_view=keyword&track=sph">Image by juicy_fish</a> on Freepik
  -->
  </div>
</template>

<script>
export default {
  name: 'loginPage',
  props: {
    
  }
}
</script>