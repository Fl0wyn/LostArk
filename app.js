Vue.createApp({
    data() {
        return {
            documentTitle: 'Lost Ark - Guide des boss',
            title: 'Guide des boss',
            subtitle: 'Mon mémo des boss',
            items: []
        }
    },
    mounted() {
        document.title = this.documentTitle

        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                this.items = data.items
            });

        fetch('README.md')
            .then(response => response.text())
            .then(data => {

                /* Markdown converter */
                var converter = new showdown.Converter();
                document.getElementById("doc").innerHTML = converter.makeHtml(data);

                document.getElementsByTagName("h1")[0].style.display = "none";
                document.getElementsByTagName("h6")[0].style.display = "none";

                /* Background image for <h4> */
                items = document.getElementsByTagName('h4')
                for (var i = 0; i < items.length; i++) {
                    let id = items[i].id.innerHTML = items[i].id
                    document.getElementById(id).style.background = 'url(' + 'images/boss/' + id + '.jpg' + ')';
                }

            });
    }
}).mount('#app')