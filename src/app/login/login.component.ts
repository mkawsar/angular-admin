import { Component, OnInit } from '@angular/core';
declare var $: any;

function backgroundImg() {
    let $page = $('.full-page');
    let image_src = $page.data('image');

    if (image_src !== undefined) {
        let image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
        $page.append(image_container);
    }
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        backgroundImg();
    }

}
