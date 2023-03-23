<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Session\Middleware\AuthenticateSession;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use function Termwind\render;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/', function () {
//     return view('app');
// });

Route::redirect('/', 'Home');
Route::redirect('/register', '/Register');
Route::redirect('/login', '/Login');

Route::get('/Home', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/Login', [LoginController::class, 'create'])->name('login');
Route::post('/Login', [LoginController::class, 'authenticate']);

Route::get('/Register', [RegisteredUserController::class, 'create']);
Route::post('/Register', [RegisteredUserController::class, 'store']);

Route::middleware('auth')->group(function () {

    Route::get('/User/Home', function () {
        return Inertia::render('Home');
    })->name('home.user');
    
    Route::get('/Logout', [AuthenticatedSessionController::class, 'destroy']);

});

// Route::controller('register', RegisteredUserController::class);
// Route::post('/submit', );

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';
