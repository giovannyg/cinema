<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MovieController extends Controller
{
    public function index() 
    {
      Log::notice(request()->header('x-xsrf-token'));
      Log::notice(request()->user());
      return Movie::all();
    }
}
