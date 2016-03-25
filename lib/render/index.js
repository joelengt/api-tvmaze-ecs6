/**
 * Module Dependencies
 */

import $ from 'jquery'
import $tvShowsContainer from '../tv-shows-container'

var template = `<article data-id=:id: class="tv-show">
          <div class="left img-container">
            <img src=":img:" alt=":img alt:">
          </div>
          <div class="right info">
            <h1>:name:</h1>
            <p>:summary:</p>
            <button class="like">💖</button>
            <button class="chat">💬</button>
          </div>
        </article>`

var chatTemplate = `<article data-id=:id: class="chat-container">
          <div class="left img-container">
            <img src=":img:" alt=":img alt:">
          </div>
          <div class="right chat-window">
            <h1>:name:</h1>
            <div class="chat-body"></div>
            <input type="text" name="nickname" class="chat-nick" placeholder="Enter your nickname..." />
            <input type="text" name="message" class="chat-input" disabled />
          </div>
        </article>`

export function renderShows (shows) {
  shows.forEach(function (show) {
    var article = template
      .replace(':name:', show.name)
      .replace(':img:', show.image ? show.image.medium : '')
      .replace(':summary:', show.summary)
      .replace(':img alt:', show.name + ' Logo')
      .replace(':id:', show.id)
      .replace(':count:', show.count)

    var $article = $(article)
    $tvShowsContainer.append($article.fadeIn(1500))
  })
}

export function renderChat (id) {
  $.ajax('http://api.tvmaze.com/shows/' + id, {
    success: function (show, textStatus, xhr) {
      var chat = chatTemplate
        .replace(':id:', id)
        .replace(':name:', show.name)
        .replace(':img:', show.image ? show.image.medium : '')
        .replace(':img alt:', show.name + ' Logo')

      var $chat = $(chat)
      $tvShowsContainer.append($chat.fadeIn(1000))
    }
  })
}

export function renderSearch (shows) {
  shows.forEach(function (element) {
    var article = template
      .replace(':name:', element.show.name)
      .replace(':img:', element.show.image ? element.show.image.medium : '')
      .replace(':summary:', element.show.summary)
      .replace(':img alt:', element.show.name + ' Logo')
      .replace(':id:', element.show.id)
      .replace(':count:', element.show.count)

    var $article = $(article)
    $tvShowsContainer.append($article.fadeIn(1500))
  })
}
