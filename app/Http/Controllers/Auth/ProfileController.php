<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Exception;

class ProfileController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = \Auth::user()->get();

        return response()->json(
            $data,
            200,
            ['Content-Type' => 'application/json; charset=UTF-8', 'charset' => 'utf-8'],
            JSON_UNESCAPED_UNICODE
        );
    }

    /**
     * Update profile users.
     * @param StoreUpdateRequest|Request $request
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function update(Request $request)
    {
        $userData = $request->only(['name', 'image_data']);
        try {
            $profile = \Auth::user();
            $profile->update($userData);

            return response()->json([
                'status' => 'true',
                'did' => 'update',
                'data' => $userData
            ], 201);

        } catch (Exception $e) {
            \Log::info($e->getMessage());
        }

        return response()->json([
            'status' => 'false'
        ], 404);
    }

    public function updateFcmToken(Request $request)
    {
        $userData = $request->only(['fcm_token']);
        try {
            $profile = \Auth::user();
            $profile->update($userData);

            return response()->json([
                'status' => 'true',
                'did' => 'update',
                'data' => $userData
            ], 201);

        } catch (Exception $e) {
            \Log::info($e->getMessage());
        }

        return response()->json([
            'status' => 'false'
        ], 404);
    }
}
