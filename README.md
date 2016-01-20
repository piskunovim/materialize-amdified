# materialize-amdified

Materialize framework built for usage in AMD ecosystem


## Installation & usage

```sh
$ bower install materialize-amdified
```

```javascript
require.config({
  materialize: '/bower_components/materialize-amdified/materialize.amd'
});

require(['materialize'], function(Materialize) {
  // that's all, but do not forget to include Materialize css
});
```
