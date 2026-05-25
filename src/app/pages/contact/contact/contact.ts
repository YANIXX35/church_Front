import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChurchService } from '../../../services/church';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  private fb = inject(FormBuilder);
  private churchService = inject(ChurchService);

  contactForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      sujet: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) return;
    this.isSubmitting = true;
    this.submitError = '';
    this.churchService.envoyerContact(this.contactForm.value).subscribe({
      next: () => {
        this.submitSuccess = true;
        this.isSubmitting = false;
        this.contactForm.reset();
      },
      error: () => {
        this.submitError = 'Une erreur est survenue. Veuillez réessayer.';
        this.isSubmitting = false;
      }
    });
  }

  get f() { return this.contactForm.controls; }
}
