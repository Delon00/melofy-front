import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { LocalStorageService } from '@app/core/services/local-storage.service';
import { UserService } from '@app/core/services/user.service';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  constructor(private router: Router, private authService: UserService, private localStorage:LocalStorageService) {}

  connectSpotify() {
    this.authService.getSpotify().subscribe({
      next: (response) => {
        console.log('Réponse Spotify :', response);

        const token = response.token;
        const user = response.user;
        this.localStorage.createToken
        this.router.navigate(['/dashboard']);

      },
      error: (err) => {
        console.error('Erreur Spotify :', err);
      }
    });
  }

}
