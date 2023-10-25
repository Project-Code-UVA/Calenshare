<template>
  <div class="hello">
    <img alt="Calenshare Logo" src="../assets/logo.png" aria-hidden style="width: 200px;">
    <h1>Welcome to Calenshare</h1>
    
    <form>
      <input class="left-side" placeholder="Enter link here"> <!-- TODO: add screen-reader friendly placeholder -->
      <button type="submit" class="right-side" title="Open this link"><i class="fas fa-arrow-right"></i><span class="fa-sr-only">Open this link</span></button>
    </form>
    <p class="or-separator"><i>———— or ————</i></p>
    <button><i class="fas fa-link" aria-hidden="true"></i>&nbsp;&nbsp;Create new link</button> 
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