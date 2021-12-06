<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use JWTAuth;

use App\Http\Traits\JsonTrait;

class ApiController extends Controller
{
    use JsonTrait;
    //
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    // /**
    //  * User API
    //  * @authenticated
    //  * Get all the users by pagination
    //  *
    //  */

    // public function users() {
    //     $users = User::where('name','Super Admin');
    //     return $this->jsonResponse(
    //         new UserResource($users)
    //     );
    // }

    /**
     * Login Api
     * @bodyParam email string required User email Example:superadmin@invoke.com
     * @bodyParam password string required Give password  Example:password
     */

    public function login(Request $request){
    	$validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return $this->jsonResponse(
                $validator->errors(),
                'Email and password is required',
                422);
        }

        if (! $token = JWTAuth::attempt($validator->validated())) {
            return response()->json(['message' => 'Incorrect email or password'], 401);
        }

        return $this->createNewToken($token);
    }

     /**
     * Register a User
     *
     * @bodyParam name string required User name Example:Arjun
     * @bodyParam email string required User email Example:test@test.com
     * @bodyParam password string required Give password  Example:password
     * @bodyParam password_confirmation string required Repeat password  Example:password
     * @bodyParam job_title string required User job Example:Manager
     * @bodyParam department string required User dept Example:Sales
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:6',
            'job_title' => 'required|string|between:2,100',
            'department' => 'required|string|between:2,100',
        ]);

        if($validator->fails()){
            return $this->jsonResponse(
                $validator->errors(),
                'Invalid Input Parameters',
                400);
        }

        $user = User::create(array_merge(
                    $validator->validated(),
                    ['password' => bcrypt($request->password)]
                ));

        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
    }


    /**
     * Log the user out (Invalidate the token).
     *
     *
     * @authenticated
     * @header Authorization Bearer {{token}}
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout() {
        auth()->logout();
        // return('Return log out');
        // auth()->user()->tokens()->delete();

        return response()->json(['message' => 'User successfully signed out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh() {
        return $this->createNewToken(auth()->refresh());
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userProfile() {
        return response()->json(auth()->user());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token){
        return $this->jsonResponse(
            [
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            'user' => auth()->user()
            ],
            'Invalid Input Parameters',
            200);
    }


}
