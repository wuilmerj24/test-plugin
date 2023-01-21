import { Application, Color, Screen } from '@nativescript/core';
import { notify } from '@nativescript/core/application';
import { GridItemEventData } from '.';
import { PicturesCommon } from './common';

export class Pictures extends PicturesCommon {
  public nativeView: android.widget.GridView;
  createNativeView(): Object {
    this.nativeView = new android.widget.GridView(Application.android.foregroundActivity);
    this.nativeView.setId(Math.random());
    this.nativeView.setLayoutParams(new android.view.ViewGroup.LayoutParams(Screen.mainScreen.widthPixels, Screen.mainScreen.heightPixels));
    this.nativeView.setNumColumns(4);
    this.nativeView.setHorizontalSpacing(10);
    this.nativeView.setVerticalSpacing(10);
    this.nativeView.setStretchMode(android.widget.GridView.STRETCH_COLUMN_WIDTH);

    this.nativeView.setBackgroundColor(new Color('red').android);
    let lista: java.util.ArrayList<any> = new java.util.ArrayList<any>();
    for (let i: number = 0; i < 100; i++) {
      lista.add(`item ${i + 1}`);
    }
    const that = this;
    this.nativeView.setAdapter(
      new ImageAdapter(lista, {
        onItemClicked(position) {
          console.log('adapter click ', position);
          that.sendEvent({
            eventName: 'itemTap',
          });
        },
      })
    );
    return this.nativeView;
  }

  onLoaded(): void {
    super.onLoaded();
  }

  disposeNativeView(): void {
    super.disposeNativeView();
  }
}

export interface ClickListener {
  onItemClicked(position: number);
}

@NativeClass()
class ImageAdapter extends android.widget.BaseAdapter {
  private clickListener: ClickListener;

  constructor(private files: java.util.ArrayList<any>, private _clickListener: ClickListener) {
    super();
    this.clickListener = _clickListener;
    console.log('Se llamo');
  }

  public getCount(): number {
    return this.files.size();
  }

  public getItem(param0: number) {
    return null;
  }

  public getItemId(param0: number): number {
    return 0;
  }

  public getView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View {
    let view: android.view.View = convertView;
    let imageView: android.widget.ImageView;

    try {
      if (convertView == null) {
        imageView = new android.widget.ImageView(Application.android.foregroundActivity);
      } else {
        imageView = <android.widget.ImageView>convertView;
      }

      imageView.setLayoutParams(new android.view.ViewGroup.LayoutParams(100, 100));
      imageView.setImageURI(android.net.Uri.parse('https://i.blogs.es/bc1dd2/naruto/1366_2000.png'));
      imageView.setBackgroundColor(new Color('black').android);
      imageView.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
      const that = this;
      imageView.setOnClickListener(
        new android.view.View.OnClickListener({
          onClick(param0) {
            console.log('click imageView ', param0, ' position', position);
            that.clickListener.onItemClicked(position);
          },
        })
      );
      return imageView;
    } catch (error) {
      console.log('Error: ', error);
    }
  }
}
