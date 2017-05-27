import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppService } from "../../providers/app-service";


@Component({
  selector: 'page-generarencuesta',
  templateUrl: 'generarencuesta.html'
})
export class generarencuesta {
 form: FormGroup;
  constructor(public navCtrl: NavController, private fb: FormBuilder, private appService: AppService) {
this.form = this.fb.group({
      nombre: ["", [Validators.required]],
      pregunta: ["", [Validators.required]],
      respuesta1: ["", [Validators.required]],
      respuesta2: ["", [Validators.required]],
      respuesta3: ["", [Validators.required]]
    });

    
  }
altaencuesta(){
let formdata ={
     
     nombre:this.form.get("nombre").value,
     
     pregunta: this.form.get("pregunta").value,
     
     respuesta1: this.form.get("respuesta1").value,

      respuesta2:this.form.get("respuesta2").value,

      respuesta3:this.form.get("respuesta3").value


}
this.appService.altaEncuest(formdata);

}
}
