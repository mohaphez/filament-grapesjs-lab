<?php

namespace App\Providers;

use Filament\Support\Assets\Css;
use Filament\Support\Assets\Js;
use Filament\Support\Facades\FilamentAsset;
use Illuminate\Support\ServiceProvider;

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
    public function boot(): void
    {

        FilamentAsset::register([
            Css::make('grapesjs', __DIR__.'/../../packages/filament-grapesjs-v3/resources/dist/css/grapes.min.css'),
            Css::make('filament-grapesjs', __DIR__.'/../../packages/filament-grapesjs-v3/resources/dist/css/filament-grapesjs.css'),

            Js::make('grapesjs', __DIR__.'/../../packages/filament-grapesjs-v3/resources/dist/js/grapes.min.js'),
            Js::make('filament-grapesjs-tailwindcss', __DIR__.'/../../packages/filament-grapesjs-v3/resources/dist/js/grapesjs-tailwind.min.js'),
            Js::make('filament-grapesjs', __DIR__.'/../../packages/filament-grapesjs-v3/resources/dist/js/filament-grapesjs.js'),
                ]);
    }
}
