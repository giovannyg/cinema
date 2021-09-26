<?php

namespace App\Models;

use App\Models\Movie;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Showtime extends Model
{
  use HasFactory;

  protected $guarded = ['id'];
  public $casts = ['status' => 'integer'];

  /**
   * The roles that belong to the Movie
   *
   * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
   */
  public function movies()
  {
      return $this->belongsToMany(Movie::class, 'movie_showtime', 'showtime_id', 'movie_id');
  }

  public function scopeOrderedByIdDesc($query) {
    $query->orderBy('id', 'desc');
  }
  public function scopeActive($query) {
    $query->where('status', 'true')->orderBy('id', 'desc');
  }
}
