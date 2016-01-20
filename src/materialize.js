/**
 * @license MIT
 * @author 0@39.yt (Yurij Mikhalevich)
 */
define('materialize', [
  'global', 'waves', 'animation', 'buttons', 'cards', 'character_counter',
  'collapsible', 'dropdown', 'forms', 'hammerjs', 'jquery.easing',
  'jquery.hammer', 'jquery.timeago', 'leanModal', 'materialbox',
  'parallax', 'picker', 'picker.date', 'pushpin', 'scrollFire',
  'scrollspy', 'sideNav', 'slider', 'tabs', 'toasts', 'tooltip',
  'transitions', 'velocity'
], function (Materialize, Waves) {
  Materialize.Waves = Waves;
  // default DOMContentLoad will not trigger because of this code will
  // execute after the DOMContent was loaded
  Materialize.Waves.displayEffect();
  return Materialize;
});
