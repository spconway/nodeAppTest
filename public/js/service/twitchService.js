function twitchService($http, $q) {

    // Return public API.
    return ({
        searchByChannel: searchByChannel,
        searchSubsByChannel: searchSubsByChannel,
        searchAllLiveStreams: searchAllLiveStreams,
        searchVods: searchVods
    });

    function searchByChannel(searchParam, clientID) {
        var request = $http({
            method: 'GET',
            url: searchParam,
            headers: {
                'Client-id': clientID,
                'Accept': 'application/vnd.twitchtv.v5+json'
            }
        });

        return (request.then(handleSuccess, handleError));
    }

    /**
     * 1. Make service call by setting limit to maximum (100). Default sort is asc.
     * 2. Make another service call by setting limit to maximum (100) and setting offset
     *    to 100. Documentation does not specify a limit for offset so set offset to maximum.
     * 3. Continue until results are less than maximum which indicate no more return data if
     *    any more service calls are made.
     */
    function searchSubsByChannel(url, clientID){
        var request = $http({
            method: 'GET',
            url: url,
            headers: {
                'Client-id': clientID,
                'Accept': 'application/vnd.twitchtv.v5+json'
            }
        });

        return (request.then(handleSuccess, handleError));
    }

    function searchVods(url, clientID){
        var request = $http({
            method: 'GET',
            url: url,
            headers: {
                'Client-id': clientID,
                'Accept': 'application/vnd.twitchtv.v5+json'
            }
        });

        return (request.then(handleSuccess, handleError));
    }

    function searchAllLiveStreams(url, clientID){
        var request = $http({
            method: 'GET',
            url: url,
            headers: {
                'Client-id': clientID,
                'Accept': 'application/vnd.twitchtv.v5+json'
            }
        });

        return (request.then(handleSuccess, handleError));
    }

    function handleSuccess(response) {
        return (response);
    }

    function handleError(response) {
        // The API response from the server should be returned in a
        // nomralized format. However, if the request was not handled by the
        // server (or what not handles properly - ex. server error), then we
        // may have to normalize it on our end, as best we can.
        if (!angular.isObject(response.data) ||
            !response.data.message
        ) {
            return ($q.reject("An unknown error occurred."));
        }
        // Otherwise, use expected error message.
        return ($q.reject(response.data.message));
    }
}

app.service("twitchService", twitchService);