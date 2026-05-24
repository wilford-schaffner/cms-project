import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  selectedFeature: string = 'documents';

  switchView(selectedFeature: string): void {
    this.selectedFeature = selectedFeature;
  }
}
