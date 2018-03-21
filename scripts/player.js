/* This file declares a class, Player, instantiates it, and
assigns it to a global
 player variable (see last line of code).

The Player class contains four methods:  constructor(), playPause(), SkipTo()
and setVolume().

 */
class Player {
  constructor () {  //Method that sets initial values of object properties below.
    this.currentlyPlaying = album.songs[0]; //first item in song list
    this.playState = 'stopped';
    this.volume = 80;
    /*
     Instantiates a new buzz.sound object using the  soundFileUrl property of
     this.currentlyPlaying. The buzz variable doesn't appear to be initialized
     here, so presumably it's a dependency loaded elsewhere.
    */
    this.soundObject = new buzz.sound(this.currentlyPlaying.soundFileUrl);
  }

  getDuration() {
    //Wrapper for a method available on this.soundObject.
    return this.soundObject.getDuration();
  }

  getTime() {
    /*Returns this.soundObject.getTime(). Wrapper for a method
    available on this.soundObject.*/
    return this.soundObject.getTime();
  }

  /*
    Accepts one parameter, song. It sets it to  this.currentlyPlaying by
    default. It checks to see if this.currentlyPlaying is different from
    song, and if so, it does the following below:
  */
  playPause (song = this.currentlyPlaying) {
    if (this.currentlyPlaying !== song) {
      // Stop the currently playing sound file (even if nothing is playing)
      this.soundObject.stop();
      // Clear classes on the song that's currently playing
      this.currentlyPlaying.element.removeClass('playing paused');

      /* Update our currentlyPlaying and playState properties

        Instantiates a new sound object using this.currentlyPlaying,
        which was just updated to song.
      */
      this.currentlyPlaying = song;
      this.playState = 'stopped';
      /*
      The soundObject instantiates a new buzz.sound object using the
      soundFileUrl property of this.currentlyPlaying. The buzz variable
      doesn't appear to be initialized here, so presumably it's a
      dependency loaded elsewhere.
      */
      this.soundObject = new buzz.sound(this.currentlyPlaying.soundFileUrl);
    }
    if (this.playState === 'paused' || this.playState === 'stopped') {
      this.soundObject.setVolume( this.volume );
      this.soundObject.play();
      this.playState = 'playing';
      this.currentlyPlaying.element.removeClass('paused').addClass('playing');
    } else {
      this.soundObject.pause();
      this.playState = 'paused';
      this.currentlyPlaying.element.removeClass('playing').addClass('paused');
    }
  }

  skipTo (percent) {
    if (this.playState !== 'playing') { return }
    this.soundObject.setTime( (percent / 100) * this.soundObject.getDuration() );
  }

  setVolume (percent) {
    this.volume = percent;
    this.soundObject.setVolume(percent);
  }
}

const player = new Player();
