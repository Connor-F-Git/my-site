import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-fp-feedback',
    templateUrl: './fp-feedback.component.html',
    styleUrls: ['./fp-feedback.component.scss']
})
export class FpFeedbackComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    feedbackSlides: OwlOptions = {
        items: 1,
		nav: true,
		loop: true,
		margin: 30,
		dots: false,
		autoplay: true,
		smartSpeed: 500,
		autoplayHoverPause: true,
		navText: [
			"<i class='fa-solid fa-chevron-left'></i>",
			"<i class='fa-solid fa-chevron-right'></i>"
		]
    }

}