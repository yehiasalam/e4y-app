import {Directive, ElementRef, Input} from '@angular/core';
import { ConfigService } from "../services/config"; 

@Directive({
    selector: 'ion-content, [random-bg]'
})
export class BackgroundImageDirective {
    private el: HTMLElement;
    private bg: string;

    constructor(el: ElementRef, config: ConfigService) {
        this.el = el.nativeElement;
        this.bg = config.bg;
    }

    ngAfterViewInit() {
        this.el.style.backgroundImage = 'url(../assets/images/' + this.bg + '.jpg)';
    }


 
}