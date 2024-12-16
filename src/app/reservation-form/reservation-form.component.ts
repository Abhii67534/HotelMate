import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent {
  reservationForm =new FormGroup({
    GuestName:new FormControl('',[Validators.required]),
    Email:new FormControl('',[Validators.required,Validators.email]),
    CheckInDate:new FormControl('',[Validators.required]),
    CheckOutDate:new FormControl('',[Validators.required]),
    RoomNumber:new FormControl(0,Validators.required),
  })

  onSubmit(){
    if(this.reservationForm.valid){
      console.log(this.reservationForm.value);
    }
    if(this.reservationForm.invalid){
      console.error("Please fill all fields")
    }
    
  }

  get GuestName(){
    return this.reservationForm.get('GuestName');
  }

}