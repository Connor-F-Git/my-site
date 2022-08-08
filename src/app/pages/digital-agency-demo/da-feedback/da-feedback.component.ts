import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-da-feedback',
    templateUrl: './da-feedback.component.html',
    styleUrls: ['./da-feedback.component.scss']
})
export class DaFeedbackComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    feedbackSlides: OwlOptions = {
        items: 1,
		nav: false,
		loop: true,
		margin: 30,
		dots: true,
		autoplay: true,
		smartSpeed: 500,
		autoplayHoverPause: true,
		navText: [
			"<i class='fa-solid fa-chevron-left'></i>",
			"<i class='fa-solid fa-chevron-right'></i>"
		]
    }

}