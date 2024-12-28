<?php

use Illuminate\Support\Facades\Route;

Route::get('/login', function () {
    return inertia('Login');
});

Route::get('/registration', function () {
    return inertia('Registration');
});

Route::get('/', function () {
    return inertia('Home');
});





Route::get('/admin-login', function () {
    return inertia('AdminLogin');
});
