import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss']
})
export class VideoEmbedComponent implements OnInit {
  @Input() site: string = 'YouTube';
  @Input() key: string | null = null;

  videoUrl: SafeResourceUrl = '';
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    console.log(this.site, this.key);
    switch (this.site) {
      case 'YouTube':
        this.videoUrl = this.getSaveUrl('https://www.youtube.com/embed/' + this.key);
        break;
      case 'Vimeo':
        this.videoUrl = this.getSaveUrl('https://www.vimeo.com/embed/' + this.key);
        break;
    }
  }

  getSaveUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
