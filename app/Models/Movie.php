<?php

namespace App\Models;

use App\Models\Showtime;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\MovieRequest;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Movie extends Model
{
  use HasFactory;

  protected $table = 'movies';
  protected $guarded = ['id'];
  public $casts = ['status' => 'integer'];
  protected $appends = ['release_date_fh'];

  
  public function scopeOrderedByIdDesc($query) 
  {
    return $query->orderBy('id', 'desc');
  }

  public function getReleaseDateFhAttribute()
  {
    return $this->release_date ? date('d/m/Y', strtotime($this->release_date)) : '';
  }

  /**
   * The roles that belong to the Movie
   *
   * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
   */
  public function showtimes()
  {
      return $this->belongsToMany(Showtime::class, 'movie_showtime', 'movie_id', 'showtime_id');
  }

  protected static function boot()
  {
    parent::boot();

    static::creating(function ($query) {
        $query->status = true;
    });
  }

  public static function store(MovieRequest $request)
  {
    $path = '';
    try {
      $data = $request->except(['image', 'showtimes']);
      $path = $request->file('image')->store(null, 'movies');
      $data['image'] = $path;
      DB::beginTransaction();
      $movie = self::create($data);
      $movie->showtimes()->attach(json_decode($request->showtimes));
      DB::commit();
      return $movie;
    } catch (\Throwable $th) {
      DB::rollback();
      Storage::disk('movies')->delete($path);
      throw $th;
    }
  }

  public function updateModel(MovieRequest $request)
  {
    $path = '';
    try {
      $data = $request->except(['id', 'image']);
      if($request->hasFile('image')) {
        $path = $request->file('image')->store(null, 'movies');
        $data['image'] = $path;
      }
      DB::beginTransaction();
      $this->update($data);
      $this->showtimes()->sync(json_decode($request->showtimes));
      DB::commit();
    } catch (\Throwable $th) {
      DB::rollback();
      Storage::disk('movies')->delete($path);
      throw $th;
    }
  }
  public function deleteModel()
  {
      DB::transaction(function() {
        $image = $this->image;
        $this->delete();
        Storage::disk('movies')->delete($image);
      });
  }
}
