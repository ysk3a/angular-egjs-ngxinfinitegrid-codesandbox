import { Component, OnInit } from '@angular/core';
import { OnRequestAppend } from "@egjs/infinitegrid";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // defaultDirection = defaultDirection;
  // gap = gap;
  // align = align;
  // column = column;
  // columnSize = columnSize;
  // columnSizeRatio = columnSizeRatio;

  items: any[] = [];

  ngOnInit(): void {
    let ran = this.randomArr();
    this.items = this.getItems(0, 10, ran);
  }
  randomArr(): any[] {
    let ran = Math.floor(Math.random() * (30 - 3 + 1) + 3);
    let ranList = Array.from({ length: ran }).map((_, i) => `Item #${i}`);
    return ranList;
  }
  getItems(nextGroupKey: number, count: number, ran: any[]) {
    const nextItems = [];
    const nextKey = nextGroupKey * count;

    for (let i = 0; i < count; ++i) {
      // let ran = Math.floor(Math.random() * (30 - 3 + 1) + 3);
      // let ranList = Array.from({ length: ran }).map((_, i) => `Item #${i}`);
      nextItems.push({
        groupKey: nextGroupKey,
        key: nextKey + i,
        inList: ran,
      });
    }
    return nextItems;
  }
  groupBy(_: any, item: any) {
    return item.groupKey;
  }
  trackBy(_: any, item: any) {
    return item.key;
  }
  onRequestAppend(e: OnRequestAppend) {
    const nextGroupKey = (+e.groupKey! || 0) + 1;

    this.items = [
      ...this.items,
      ...this.getItems(nextGroupKey, 10, this.randomArr()),
    ];
  }
}
