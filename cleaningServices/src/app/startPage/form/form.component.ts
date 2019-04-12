import { Component} from '@angular/core'
import { NgForm } from '@angular/forms';

@Component ({
  selector: 'app-forder',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  submit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    alert(form.value.name);
    form.resetForm();
  }
}
