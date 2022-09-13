<template>
  <div class="container">
  <div class="container__key">
    <JsonTreeView class="keys" @selected="grouplist($event)" :data="JSON.stringify(de)" :maxDepth="1" />
  </div>
<div class="container__sidemenu">
  <h2 class="contianer__label">English</h2>
  <h3 class="contianer__object">{{english_message}}</h3>
  <br>
  <br>
  <h2 class="contianer__label" >German</h2>
  <h3 class="contianer__object">{{german_message}}</h3>
</div>
</div>
</template>
<script>
import { defineComponent } from "vue";
import { JsonTreeView } from "json-tree-view-vue3";
import de from "../locales/de.json"


export default defineComponent({
  components: { JsonTreeView },
  data() {
    return {
      english_message: '',
      german_message: '',
    }
  },
  setup() {
    return {
      de
    };
  },
  methods:{
    grouplist($event){
      console.log($event);
      this.$i18n.locale = 'de'
      let key = $event.path.replace('/.', '');
      this.german_message = this.$t(key)
      this.$i18n.locale = 'en'
      this.english_message = this.$t(key)
    }
  }
});
</script>

<style>
  /* common */


  .container{
    width: 100%;
    height: 100%;
    align-items: center;
    display: grid;
    grid-template: 1fr 1fr;
  }

  .container .container__key {
    display: flex;
    
    width: 25%;
    height: 100%;
    flex-direction: column;
    overflow: auto;
  }

  .container__sidemenu {
    position: fixed;
    top: 30%;
    left: 50%;
    width: 100%
    
  }


</style>

