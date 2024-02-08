import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; 
import { Gallery, GalleryItem, GalleryModule, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import {   Lightbox } from 'ng-gallery/lightbox';
@Component({
  selector: 'app-life-cycle-hooks',
  standalone: true,
  imports: [GalleryModule,MatButtonModule,CommonModule],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.css'
})
export class LifeCycleHooksComponent {
  items: GalleryItem[] = [];

  imageData = data;
  
  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  ngOnInit() {
    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );

    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
}

 
const data = [
  {
    srcUrl: 'assets/images/image1.png',
    previewUrl: 'assets/images/image1.png',
  },
  {
    srcUrl: 'assets/images/image2.png',
    previewUrl: 'assets/images/image2.png',
  },{
    srcUrl: 'assets/images/image3.jpg',
    previewUrl: 'assets/images/image3.jpg',
  },
   
];

