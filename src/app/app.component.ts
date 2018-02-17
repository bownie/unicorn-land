import { Component, ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Unicorn Land';

  constructor(private elementRef: ElementRef) {

  }

  // Angular Overlays and Sprite animations
  //
  // http://teropa.info/blog/2016/12/12/graphics-in-angular-2.html


  getUrl()
  {
    return "url('../assets/magical-background.jpg')";
  }

  // this is a comment

  /* this is a comment */
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'lightblue';
  }

}
