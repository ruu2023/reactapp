<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/hello', function() {
    return Inertia::render('hello');
});

Route::post('/update-message', function() {
    $max = request()->number;
    $total = 0;
    for ($i = 0; $i<= $max; $i++) {
        $total += $i;
    }
    return response()->json(['message'=>'total: ' . $total ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
