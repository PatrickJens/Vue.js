console.log("running...");

/* Vue.js */

  const app = Vue.createApp({
    data() {
      return {
        title: 'Final Empire',
        author: 'Brandon Sanderson',
        age: 45,
        showBooks: true
      }
    },
    methods:{
      toggleShowBooks() {
        this.showBooks = !this.showBooks
      }
    }
  })
  app.mount('#comp1')