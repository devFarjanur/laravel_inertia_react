<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});





Route::get('/admin-login', function () {
    return inertia('AdminLogin');
});
