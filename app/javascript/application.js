//= require jquery3
//= require popper
//= require bootstrap-sprockets
// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

$(window).on('load', function () {
  $("#loading").delay(1500).fadeOut('slow'); // ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#loading_box").delay(1500).fadeOut('slow'); // ローディング画像を1.2秒（1200ms）待機してからフェードアウト
});