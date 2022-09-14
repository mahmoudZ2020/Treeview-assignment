<template>
  <div class="container-sidemenu">
   
    <div class="container-key">
     <JsonTreeView @selected="grouplist($event)" :data="JSON.stringify(de)" :maxDepth="1" />
   </div>
   
 </div>
 <div class="main-content">
     
     <div class="container-main-content">
           <div class="box-1">
     <h2 class="contianer__label">English</h2>
   <h3 class="contianer__object">{{english_message}}</h3>    
   </div>
   
   
   <br>
   <br>
   <div class="box-2">
     <h2 class="contianer__label" >German</h2>
   <h3 class="contianer__object">{{german_message}}</h3>    
   </div>
     
     </div>
 
   
 </div>
 <div class="clearfix"></div>
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
 
   .main-content{
       width: 80%;
       float: right;
       margin: calc(100vh - 68vh) 0px;
   }
   
   .container-main-content{
       width: 60%;
       margin: 0 auto;
   }

   
   h2, h3 {
    font-family: monospace;
    color: #000;
 }

 
   .clearfix{
         clear: both;
     }
   .container .container-key {
     display: flex;
     width: 25%;
     height: 100%;
     flex-direction: column;
     overflow: auto;
     
   }
 
   .container-sidemenu {
     position: fixed;
     top: 0%;
     left: 0%;
     width: 25%;
     height: 100vh;
     background-color: #c4bc94;
     overflow-x: auto;
   }
     
     
     .box-1{
         width: 80%;
         border: 1px solid red;
         text-align: center;
         border-radius: 5px;
         padding: 10px 20px;
         margin: 20px 0px;
     }
     
     .box-2{
         width: 80%;
         border: 1px solid darkblue;
         text-align: center;  
         border-radius: 5px;
         padding: 10px 20px;
         margin: 20px 0px;
     }

 </style>