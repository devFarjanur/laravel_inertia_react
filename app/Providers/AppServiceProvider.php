<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot()
    {
        // Inertia::share([
        //     'routes' => function () {
        //         return [
        //             'login' => route('login'),
        //             'registration' => route('registration'),
        //             'home' => route('home'),
        //         ];
        //     },
        // ]);
    }
}
