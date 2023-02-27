import { HttpClient } from "@angular/common/http";
export class HeroService { 
    callApi() {
      this.http
        .get('http://worldtimeapi.org/api/timezone/Europe/Amsterdam')
        .subscribe((data) => {
          const centralContainer = document.querySelector('.d-flex.justify-content-center');
          centralContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        });
    }
}