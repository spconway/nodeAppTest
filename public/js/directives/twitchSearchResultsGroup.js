/**
 * Created by Spconway on 8/13/17.
 */
function twitchSearchResultsGroup(){
    return {
        restrict: 'E',
        templateUrl: '/templates/twitchSearchResults.group.tmpl.html'
    };
}

app.directive('twitchSearchResultsGroup', twitchSearchResultsGroup);