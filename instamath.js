Object.defineProperty(Object.prototype, 'instamath', {
    value: function(options) {
        if(options.user) {
            var element = this;
            var http = new XMLHttpRequest();

            http.onreadystatechange = function() {
                if(this.readyState === 4 && this.status === 200) {
                    var sharedData = JSON.parse(http.responseText.match(/window._sharedData = (.*);/)[1]);
                    var limit = options.limit ? options.limit : 12;
                    var resolution = 0;
                    var html = '';
                    
                    if(!(limit >= 1 && limit <= 12))
                        limit = 12;

                    switch(options.resolution) {
                        case 150:
                            resolution = 0;
                            break;
                        case 240:
                            resolution = 1;
                            break;
                        case 320:
                            resolution = 2;
                            break;
                        case 480:
                            resolution = 3;
                            break;
                        case 640:
                            resolution = 4;
                            break;
                    }

                    var itens = sharedData.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media;

                    for(var index = 0; index < limit && index < itens.count; index++) {
                        var item = itens.edges[index].node;

                        if(item.is_video) {
                            if(limit < 12)
                                limit += 1;
                        } else {
                            html += '<a href="https://www.instagram.com/p/' + item.shortcode + '/"><img src="' + item.thumbnail_resources[resolution].src + '"></a>';
                        }
                    }

                    if(typeof element.length === 'undefined') {
                        element.innerHTML = html;
                    } else {
                        element.html(html);
                    }

                    if(options.after)
                        options.after();
                }
            };

            http.open('GET', 'https://www.instagram.com/' + options.user + '/', true);

            http.send();
        }
    },
    enumerable: false
});