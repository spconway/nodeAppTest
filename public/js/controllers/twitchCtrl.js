function twitchCtrl(twitchService) {
    var self = this;
    self.twitch = {};
    self.twitch.clientID = '157839697499-ja57em5o62j6b6d8smrck5reitm6k840.apps.googleusercontent.com';
    self.twitch.clientSecret = 'ZHmJCgCi2-bx3cJdq1QC74Oi';
    self.twitch.searchUrl = 'https://api.twitch.tv/kraken/search/channels?query=';
    self.twitch.urlmap = {
        searchSubs: 'https://api.twitch.tv/kraken/channels/channelID/subscriptions',
        searchUrl: 'https://api.twitch.tv/kraken/search/channels?query=',
        searchAllLiveStreams: 'https://api.twitch.tv/kraken/streams/',
        searchVods: 'https://api.twitch.tv/kraken/channels/channelID/videos'
    };
    self.twitchSearchChannel = 'bajheera';
    self.twitchSearchResults = {};
    self.oneAtATime = true;
    self.searchAllStreams = true;
    self.moreChannelDetails = true;
    self.title = title;
    console.log('title: ', self.title);

    self.submitChannelSearch = function(channel) {
        var url = self.twitch.urlmap.searchUrl + encodeURIComponent(channel);

        twitchService.searchByChannel(url, self.twitch.clientID)
            .then(function(response) {
                console.log((response.data.channels));
                self.twitchSearchResults.data = response.data.channels;
                self.twitchSearchResults.config = response.config;
            });
    };

    self.submitAllLiveStreams = function() {
        var url = self.twitch.urlmap.searchAllLiveStreams;

        twitchService.searchAllLiveStreams(url, self.twitch.clientID)
            .then(function(response){
                console.log(response);
                self.twitchSearchResults.data = response.data.streams;
                self.twitchSearchResults.config = response.config;
            });
    };

    self.channelMoreDetails = function(id){
        var url = self.twitch.urlmap.searchVods + encodeURIComponent(id);

        twitchService.searchVods(url, self.twitch.clientID)
            .then(function(response){
                console.log(response);

            });
    }
}

app.controller('twitchCtrl', twitchCtrl);