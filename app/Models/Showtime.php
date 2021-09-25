<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Showtime extends Model
{
  use HasFactory;

  protected $guarded = ['id'];

  public function scopeOrderedByIdDesc($query) {
    $query->orderBy('id', 'desc');
  }
}
