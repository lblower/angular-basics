import { DoCheck } from '@angular/core';
import { AfterContentInit, OnDestroy, AfterContentChecked, OnChanges, SimpleChanges , Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit , OnChanges , OnDestroy, AfterContentInit, AfterContentChecked ,DoCheck {
  @Input() showNgChange = 1;
  @Input() showN2nd = 1;

  printWhoischand = ""; // "2nd is updated"; // "Counter is updated";

  constructor() { }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
      console.log('Dpo Cheked  ---- 3----');
  }
  // life-cyle of a component
  ngOnInit(): void {
    // before ui stat rendring and after component is registered in Angular
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('%c 2nd Method, automatically called Only called once','background: red');
    // used for intilization , forms , or API call or one time data setup .
    // this is first mehtod autmoalllcy  excuted when a component is created
  }

    ngOnChanges(changes: SimpleChanges): void {
      //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
      //Add '${implements OnChanges}' to the class.
      console.log('%c 1st Method, automatically called called every time there is change in INPUT property','background:orange');
      console.log(changes);
      if(changes.showNgChange){
        this.printWhoischand = "Counter is updated via show ng chngage";
      }
      if(changes.showN2nd){
        this.printWhoischand = "2nd is updated by show 2nd hanege"; // "Counter is updated";
      }

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
