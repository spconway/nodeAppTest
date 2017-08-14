function navCtrl(appService) {
    var self = this;

    self.paths = [];
    self.navReload = true;
    self.loadPaths = function(reload) {
        // set reload to true for force reload
        if (reload || self.navReload) {
            appService.getRoutes()
                .then(function(response) {
                    console.log(response);
                    var data = response.data.paths,
                        path;
                    for (var p in data) {
                        path = data[p];
                        self.paths.push(
                            path === '/' ? (path + 'index') : path
                        );

                    }
                    self.navReload = false;
                });
        }

    }

    self.loadPaths();
}

app.controller('navCtrl', navCtrl);