import { Observable, EventData, Page, TapGestureEventData } from '@nativescript/core';
import { DemoSharedPictures } from '@demo/shared';
import {} from '@arepa/pictures';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export function gridViewItemTap(args: EventData) {
  console.log('ridViewItemTap ');
  alert('ss');
}

export class DemoModel extends DemoSharedPictures {}
