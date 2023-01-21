import { PicturesCommon } from './common';
import { TemplatedItemsView } from '@nativescript/core';

export declare class Pictures extends PicturesCommon implements TemplatedItemsView {
  public static itemLoadingEvent: string;
  public static itemTapEvent: string;
  public static loadMoreItemsEvent: string;
  public static scrollEvent: string;

  public items: any[] | ItemsSource;
  public itemTemplate: string | Template;
  public itemTemplates: string | KeyedTemplate[];
  public rowHeight: PercentLength;
  public colWidth: PercentLength;
  public orientation: Orientation;

  public ios: any; /* UICollectionView */
  public android: any; /* android.support.v7.widget.RecyclerView */

  public refresh();
  public scrollToIndex(index: number, animated?: boolean);

  on(eventNames: string, callback: (data: EventData) => void, thisArg?: any);
  on(event: 'itemLoading', callback: (args: GridItemEventData) => void, thisArg?: any);
  // tslint:disable-next-line:unified-signatures
  on(event: 'itemTap', callback: (args: GridItemEventData) => void, thisArg?: any);
  on(event: 'loadMoreItems', callback: (args: EventData) => void, thisArg?: any);
}

export interface GridItemEventData extends ItemEventData {}

export interface ScrollEventData extends EventData {
  eventName: string;
  object: Pictures;
  scrollX: number;
  scrollY: number;
}
