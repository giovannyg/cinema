<?php

namespace App\Http\Controllers;

use App\Models\Showtime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\ShowtimeRequest;

class ShowtimeController extends Controller
{
  public function index()
  {
    return Showtime::orderedByIdDesc()->get();
  }

  public function store(ShowtimeRequest $request) {
    try {
      return Showtime::create($request->all());
    } catch (\Exception $e) {
      Log::error($e);
      return response(['message' => $e->getMessage()], 500);
    }
  }

  public function update(ShowtimeRequest $request, Showtime $model) 
  {
    try {
      return $model->update($request->all());
    } catch (\Exception $e) {
      Log::error($e);
      return response(['message' => $e->getMessage()], 500);
    }
  }

  public function changeStatus(Showtime $model) 
  {
    try {
      $model->update(request()->only('status'));
    } catch (\Exception $e) {
      Log::error($e);
      return response(['message' => $e->getMessage()], 500);
    }
  }

  public function destroy(Showtime $model) 
  {
    try {
      if($model->movies->count() > 0)
        return response(['message' => 'El turno está asignado a una o más películas.'], 400);
      $model->delete();
    } catch (\Exception $e) {
      Log::error($e);
      return response(['message' => $e->getMessage()], 500);
    }
  }
}
