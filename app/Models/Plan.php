<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    protected $fillable = [
        'creator_id',
        'participant_id',
        'give',
        'take',
        'place',
        'image_url',
        'has_next_page',
    ];

    // public function user(){
    //     return $this->belongsTo(User::class);
    // }

    public function users(){
        return $this->belongsToMany('App\Models\User')->withTimestamps();
    }
}
