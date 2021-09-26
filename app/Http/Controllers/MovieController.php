<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Models\Showtime;
use Illuminate\Http\Request;
use App\Http\Requests\MovieRequest;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class MovieController extends Controller
{
  public function index()
  {
    return [
      'list' => Movie::orderedByIdDesc()->with('showtimes')->get(),
      'activeShowtimes' => Showtime::active()->get()
    ];
  }

  public function store(MovieRequest $request) 
  {
    try {
      $movie = Movie::store($request);
      return $movie;
    } catch (\Exception $e) {
      Log::error($e);
      return response(['message' => $e->getMessage()], 500);
    }
  }

  public function update(MovieRequest $request, Movie $model) 
  {
    try {
      $model->updateModel($request);
    } catch (\Exception $e) {
      Log::error($e);
      return response(['message' => $e->getMessage()], 500);
    }
  }

  public function changeStatus(Movie $model) 
  {
    try {
      $model->update(request()->only('status'));
    } catch (\Exception $e) {
      Log::error($e);
      return response(['message' => $e->getMessage()], 500);
    }
  }

  public function destroy(Movie $model) 
  {
    try {
      $model->deleteModel();
    } catch (\Exception $e) {
      Log::error($e);
      return response(['message' => $e->getMessage()], 500);
    }
  }
}
