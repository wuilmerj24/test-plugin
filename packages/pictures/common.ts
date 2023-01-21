import { ContainerView, EventData, GestureTypes, KeyedTemplate, PercentLength, ShownModallyData } from '@nativescript/core';
import { NotifyData } from '@nativescript/core/data/observable';
import { GridItemEventData, Pictures } from '.';

export class PicturesCommon extends ContainerView implements Pictures {
  public items: any;
  public itemTemplate: any;
  public itemTemplates: string | KeyedTemplate[];
  public rowHeight: any;
  public colWidth: any;
  public orientation: any;
  public refresh() {
    throw new Error('Method not implemented.');
  }
  public scrollToIndex(index: number, animated?: boolean) {
    throw new Error('Method not implemented.');
  }

  public sendEvent(data) {
    this.notify({
      eventName: 'itemTap',
      object: this,
      data,
    });
    console.log('notify ', data);
  }
}
