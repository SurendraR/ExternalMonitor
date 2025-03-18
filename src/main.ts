import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="container">
      <h1>Open Links on External Monitor</h1>
      <button (click)="openInExternalMonitor('https://angular.dev')">
        Open Angular Docs in External Monitor
      </button>
      <p class="info">
        Note: The link will attempt to open on your secondary monitor if one is available.
      </p>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
      font-family: Arial, sans-serif;
    }
    
    h1 {
      color: #333;
      margin-bottom: 20px;
    }
    
    button {
      background-color: #1976d2;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s;
    }
    
    button:hover {
      background-color: #1565c0;
    }
    
    .info {
      margin-top: 20px;
      color: #666;
      font-style: italic;
    }
  `]
})
export class App {
  openInExternalMonitor(url: string) {
    const screenWidth = window.screen.width;
    window.open(
      url,
      '_blank',
      `width=1200,height=800,left=${screenWidth + 50},top=50`
    );
  }
}

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(BrowserModule)
  ]
}).catch(err => console.error(err));