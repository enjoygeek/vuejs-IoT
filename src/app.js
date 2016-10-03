import $ from 'jquery';
//because we're reactive we can go to the console and type app.message
window.app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!!'
    }
});
//go to console and check the id, app2.id
window.app2 = new Vue({
    el: '#app-2',
    data: {
        id: 'inspect-me'
    }
});

//enter app3.seen = false in the console.
window.app3 = new Vue ({
    el: "#app-3",
    data: {
        seen: true
    }
});
//app4.todos.push({ text: 'New item' })
window.app4 = new Vue({
    el: "#app-4",
    data: {
        todos: [
            { text: 'Learn Javascript'},
            { text: 'Learn Vue'},
            { text: 'Build something awesome'}
        ]
    }
});

window.app5 = new Vue({
     el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});