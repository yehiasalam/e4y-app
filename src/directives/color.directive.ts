import {Directive, ElementRef, Input} from '@angular/core';
import { ConfigService } from "../services/config"; 

@Directive({
    selector: '[color-primary]'
})
export class ColorDirective {
    private el: HTMLElement;
    private color: string;

    @Input('color-primary') target: string;

    constructor(el: ElementRef, config: ConfigService) {
        this.el = el.nativeElement;
        this.color = config.color;
    }

    ngAfterViewInit() {

        switch (this.target) {
            case "bg":
                this.el.style.backgroundColor = this.color;
                break;
            case "color":
                this.el.style.color = this.color;
                break;
            default:
                break;
        }
    }


 
}