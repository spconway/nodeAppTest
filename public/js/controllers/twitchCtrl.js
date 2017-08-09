function twitchCtrl(twitchService) {
    var self = this;
    self.twitch = {};
    self.twitch.clientID = '157839697499-ja57em5o62j6b6d8smrck5reitm6k840.apps.googleusercontent.com';
    self.twitch.clientSecret = 'ZHmJCgCi2-bx3cJdq1QC74Oi';
    //bajheera
    self.title = 'Twitch stuff';
    self.twitch.searchUrl = 'https://api.twitch.tv/kraken/search/channels?query=';
    self.twitchSearchChannel = 'bajeera';
    self.twitchSearchResults = {};

    self.submit = function() {
        var search = self.twitch.searchUrl + encodeURIComponent(self.twitchSearchChannel);
        console.log(search);

        twitchService.searchByChannel(search, self.twitch.clientID)
            .then(function(response) {
                console.log(response);
                self.twitchSearchResults.channels = response.data.channels;
                self.twitchSearchResults.config = response.config;
            });
    }
}

app.controller('twitchCtrl', twitchCtrl);