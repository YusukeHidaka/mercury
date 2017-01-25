<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|max:255',
            'email' => 'required|max:255|unique:users',
            // 'password' => 'required|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
    }

    public function createForApi(Request $request)
    {
        try {
            $data = $request->toArray();
            //すでにユーザーが存在している場合、パスワードをアップデートして終了
            if ($this->isRegistered($data)){
                $updateUserObject = User::where('email', $data['email']);
                $updateUserObject->update(['password' => bcrypt($data['password'])]);
                $updatedUserArray = $updateUserObject->get()->toArray();

                return response()->json([
                    'status' => 'true',
                    'did' => 'update',
                    'data' => $updatedUserArray[0]
                ], 201);
            }
            $messages = $this->validator($data)->errors()->messages();

            if (!empty($messages)) {

                return response()->json([
                    'status' => 'error',
                    'messages' => $messages
                ], 400);
            }

            $createdUserArray = $this->create($data)->toArray();
            if ($createdUserArray) {

                return response()->json([
                    'status' => 'true',
                    'did' => 'create',
                    'data' => $createdUserArray
                ], 201);
            }

        } catch (Exception $e) {
            \Log::info($e->getMessage());
        }

        return 'Failed';
    }

    public function isRegistered(array $data){
        $messages = $this->validator($data, ['email' => 'unique:users'])->errors();

        if ($messages->has('email')) {
            return true;
        } else {
            return false;
        }
    }
}
