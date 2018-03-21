/*Takes the album title, artist and release info and inserts it in the DOM.
*/
{
  $('#album-title').text(album.title); //don't understand. why not h1?
  $('.artist').text(album.artist);
  $('#release-info').text(album.releaseInfo);
  //Adds album.albumArtUrl to the src attribute of the img#album-cover-art tag.
  $('img#album-cover-art').attr('src',album.albumArtUrl); //comes from where?
}
