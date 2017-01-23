<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    protected $fillable = [
      'user_id',
      'participant_id',
      'give',
      'take',
      'place',
      'image_url'
    ];

    public function user(){
      return $this->belongsTo(User::class);
    }
}
