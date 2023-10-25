<template>
  <div class="hello">
    <img alt="Calenshare Logo" src="../assets/logo.png" aria-hidden="true" style="width: 200px;">
    <h1>Welcome to Calenshare</h1>
    
    <form>
      <label for="link-box" class="fa-sr-only">Link: </label>
      <input id="link-box" class="left-side" placeholder="Enter link here">
      <button type="submit" class="right-side" title="Open Link"><i class="fas fa-arrow-right" aria-hidden="true"></i><span class="fa-sr-only">Open Link</span></button>
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