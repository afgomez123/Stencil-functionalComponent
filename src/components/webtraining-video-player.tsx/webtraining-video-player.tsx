import { Component, Prop, h } from '@stencil/core';
import { YouTubePlayer } from './functional-components/youtube-player';
import { VimeoPlayer } from './functional-components/vimeo-player';

enum VIDEO_PROVIDERS {
  YOUTUBE = 'youtube',
  VIMEO = 'vimeo',
}

@Component({
  tag: 'webtraining-video-player',
  styleUrl: 'webtraining-video-player.css',
})
export class WebVideoTraining {
  @Prop() source: string;
  @Prop() provider: string = VIDEO_PROVIDERS.YOUTUBE;
  @Prop() videos: string[] = [
    'https://www.youtube.com/embed/IEvX1i-TDc4?si=mkioAgMf32_orDW-',
    'https://player.vimeo.com/video/546204866?h=c3045d344a&badge=0',
    'https://www.youtube.com/embed/wcAtgRAYQ7o?si=gHH_QtqXj-r3zTgT',
  ]; // Obt

  render() {
    if (!this.source) {
      return <div>No video source provided!</div>;
    }

    console.log(this.videos.map((videoSource, index) => index));
    return (
      <div class="b-video">
        {/* Renderizar cada video en la lista */}
        {this.videos.map((videoSource, index) =>
        (

          <div key={index}>
            {this.provider === VIDEO_PROVIDERS.VIMEO && <VimeoPlayer source={videoSource}></VimeoPlayer>}
            {this.provider === VIDEO_PROVIDERS.YOUTUBE && <YouTubePlayer source={videoSource}></YouTubePlayer>}
          </div>
        ))}
      </div>
    );
  }
}
