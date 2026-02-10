import { Component, OnInit } from '@angular/core';
import { Footer } from '../../core/components/footer/footer';
import { Navbar } from '../../core/components/navbar/navbar';
import { Sidebar } from '../../core/components/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { Spinner } from '../../core/components/spinner/spinner';

@Component({
  selector: 'app-main',
  imports: [Footer, Navbar, Sidebar, RouterOutlet, Spinner],
  templateUrl: './main-pages.html',
  styleUrl: './main-pages.scss',
})
export class MainPages implements OnInit {
  isLoading: boolean = true;
  sidebarOpen: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  onToggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
