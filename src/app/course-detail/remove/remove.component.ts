import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  constructor() { }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
      console.log('Dpo Cheked  ---- 3----');
  }
  // life-cyle of a component
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('%c 2nd Method, automatically called Only called once','background: red');
    // used for intilization , forms , or API call or one time data setup .
    // this is first mehtod autmoalllcy  excuted when a component is created
  }

    ngOnChanges(changes: SimpleChanges): void {
      //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
      //Add '${implements OnChanges}' to the class.
      console.log('%c 1st Method, automatically called','called every time there is change in INPUT property','background:orange');

    }


    ngAfterContentInit(): void {
      //Called after ngOnInit when the component's or directive's content has been initialized.
      //Add 'implements AfterContentInit' to the class.
        console.log('%c I am Content Initalization', 'background: #cce');
    }

    ngAfterContentChecked(): void {
      //Called after ngOnInit when the component's or directive's content has been initialized.
      //Add 'implements AfterContentInit' to the class.
      console.log('%c I am Content end Mode now','background: #ccc');
    }

    ngAfterViewInit(){
      console.log('%c I am View Part-------------- Initalization', 'background: #aa1');
    }
    ngAfterViewChecked(){
      console.log('%c I am view Part ---------- ended','background: #aaa');
    }

    ngOnDestroy(){
        console.log('%c When u leave from this component When this is removed from UI ','background: #aae');
    }


}
