import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'secondpro';

  data={
    firstname : '',
    lastname :'',
    phone : '',
    mail : '',
  }
  onsubmit(){
    alert(JSON.stringify(this.data))
  }
}
