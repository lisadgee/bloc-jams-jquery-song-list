//Takes the album title and inserts it in the DOM.
{
  $('#album-title').text(album.title); //don't understand. why not h1?

  //Adds album.albumArtUrl to the src attribute of the img#album-cover-art tag.
  $('img#album-cover-art').attr('src',album.albumArtUrl); //comes from where?
}
