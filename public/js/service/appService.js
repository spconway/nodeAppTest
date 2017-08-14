/**
 * Created by Spconway on 8/9/17.
 */
function appService($http, $q) {

    return ({
        getRoutes: getRoutes
    });

    function getRoutes() {
        var request = $http({
            method: 'GET',
            url: '/api/paths/all'
        });

        navLoaded = 1;

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

app.service('appService', appService);