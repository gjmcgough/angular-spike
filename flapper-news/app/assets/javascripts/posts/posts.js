var app = agular.module('flapperNews');

app.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}]);
