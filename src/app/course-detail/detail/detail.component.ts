import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router , ParamMap } from '@angular/router';

interface queryParams  {
  name: string;
  c: string;
}


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent  implements OnInit {

  urlData: any = null;
  dynamicData: string[];

  activatedRoutePram: string[];
  queryParam: queryParams;
  // DI injection
  // const activeRoute = new ActivateRoute(url ,)
  constructor(private activeRoute: ActivatedRoute , private route: Router) { }

  ngOnInit(): void {
    console.log(this.route, this.activeRoute);
    this.urlData = this.route.url;
    // /course/detail/angualr/all
    this.getDynamicProp(this.route.url);
    this.activateRoute();


  }
// path parm , query param use activated route
  activateRoute(){
    this.activatedRoutePram = this.activeRoute.snapshot.params.course;
    this.queryParam = this.activeRoute.snapshot.queryParams as queryParams;
  }

  getDynamicProp(url: string){
    this.dynamicData = url.split('/');
    console.log(this.dynamicData);
  }

}
