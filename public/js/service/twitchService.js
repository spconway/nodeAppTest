function twitchService($http) {

    // Return public API.
    return ({
        searchByChannel: searchByChannel
    });

    function searchByChannel(searchParam, clientID) {
        var request = $http({
            method: 'GET',
            url: searchParam,
            headers: {
                'Client-id': clientID
            },
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

app.service("twitchService", twitchService)