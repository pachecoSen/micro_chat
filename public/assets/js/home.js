const componentHomeBox = new Vue({
    el: '#home_box',
    name:'Component_Home_Box',
    data: {
        msg: ""
    },
    methods: {
        sendMsg: function(e) {
            console.log(this.msg);

            e.preventDefault();
        }
    }
});