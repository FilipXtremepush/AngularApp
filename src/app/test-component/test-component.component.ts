import { Component, OnInit } from '@angular/core';

interface CustomWindow extends Window {
  [key: string]: any; // Allows string indexing
  XtremePushObject?: string;
}

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [],
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'], // Corrected property name and type
})
export class TestComponentComponent implements OnInit {
  // Implements OnInit
  constructor() {}

  ngOnInit(): void {
    console.log('the component has loaded!');
    this.loadScript();
  }

  loadScript(): void {
    (function (p: CustomWindow, u: Document, s: string, h: string) {
      p['XtremePushObject'] = s;
      p[s] =
        p[s] ||
        function () {
          (p[s].q = p[s].q || []).push(arguments);
        };

      let i = u.createElement('script');
      i.async = true;
      i.src = h;

      let b = u.getElementsByTagName('script')[0];
      if (b && b.parentNode) {
        b.parentNode.insertBefore(i, b);
      }
    })(
      window,
      document,
      'XtremePush',
      'https://us.webpu.sh/m_nX3HIZe0YLwSKp-qkdLeeMc26Zb7lk/sdk.js'
    );
  }
}
