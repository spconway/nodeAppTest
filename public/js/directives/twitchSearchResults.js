/**
 * Created by Spconway on 8/8/17.
 */
function twitchSearchResults(){
    return {
        restrict: 'E',
        templateUrl: '/templates/twitchSearchResults.tmpl.html'
    };
}

app.directive('twitchSearchResults', twitchSearchResults);