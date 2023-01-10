import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
      
  buttons = ['AC','Del','%','/',1,2,3,'*',4,5,6,'-',7,8,9,'+','.',0,'=','']
  val ="";
  result="0";
  calc($event:any){
    var button= $event.srcElement.innerText;
    console.log($event);
    if (button === '='){
      this.result = eval(this.val);
    }else if(button === 'AC'){
      this.val = '';
      this.result = '0';
    }else if(button === 'Del'){
      this.val = this.val.slice(0,-1);  
    }else {
      this.val = this.val + button;
    }
  }

 
}
