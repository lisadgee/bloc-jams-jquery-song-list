/*Each song in song list is a table row.  Each row should contain the following cells - song, number, song title and duration. 
Creates a song element using jQuery.  Passes it a template literal to insert data directly into the string.  
Assign it to song.element so the player object can access the element.  Then append the row to an existing element in the DOM.
Variables are in the template literal with the place holder expression ${}.

index + 1 makes song number start at 1 instead of 0 (from array).
*/

{
    album.songs.forEach( (song, index) => {
        song.element = $(`
            <tr>
                <td>
                    <button>
                        <span class="song-number">${index + 1}</span>
                        <span class="ion-play"></span>
                        <span class="ion-pause"></span>
                    </button>
                </td>
                <td>${song.title}</td>
                <td>${song.duration}</td>
            </tr>
        `);

        song.element.on('click', event => {
            player.playPause(song);
        });


        $('#song-list').append(song.element);
        
    });
}

