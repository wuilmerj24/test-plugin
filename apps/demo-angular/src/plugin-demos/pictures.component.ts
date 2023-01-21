import { Component, NgZone } from '@angular/core';
import { DemoSharedPictures } from '@demo/shared';
import {} from '@arepa/pictures';

@Component({
  selector: 'demo-pictures',
  templateUrl: 'pictures.component.html',
})
export class PicturesComponent {
  demoShared: DemoSharedPictures;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedPictures();
  }
}
