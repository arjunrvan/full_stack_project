<?php

namespace App\Http\Controllers;

use App\Http\Traits\JsonTrait;
use App\Models\Tasks;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{

    use JsonTrait;
    //

    public function __construct() {
        $this->middleware('auth:api');
    }

    /**
     * Add Task
     *
     * @authenticated
     * @header Authorization Bearer {{token}}
     * @bodyParam name string required User job Example:Get 25 sales
     * @bodyParam description string required User dept Example:Get 25 sales by 12 March 2021
     * @bodyParam target numeric required User job Example:12.02
     * @bodyParam current_progress numeric required User dept Example:24.15
     * @bodyParam target_completion_days integer required User job Example:50
     * @bodyParam user_id integer required User dept Example:1
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function addTask(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'required|string',
            'target' => 'required|numeric',
            'current_progress' => 'required|numeric',
            'target_completion_days' => 'required|integer',
            'user_id' => 'required|integer',
        ]);

        if($validator->fails()){
            return $this->jsonResponse(
                $validator->errors(),
                'Invalid Input Parameters',
                400);
        }

        $task = Tasks::create($validator->validated());

        return response()->json([
            'message' => 'Task successfully added',
            'task' => $task
        ], 201);
    }

    /**
     * Fetch Tasks
     *
     * @authenticated
     * @header Authorization Bearer {{token}}
     *
     * @bodyParam user_id integer required User id Example:1
     * @return \Illuminate\Http\JsonResponse
     */

    public function fetchTasks(Request $request) {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|integer',
        ]);

        if($validator->fails()){
            return $this->jsonResponse(
                $validator->errors(),
                'Invalid Input Parameters',
                400);
        }

        $tasks = Tasks::where('user_id',$validator->validated('user_id'))->where('is_active',true)->get();

        return response()->json([
            'message' => 'Task successfully retrieved',
            'tasks' => $tasks
        ], 201);
    }

    /**
     * Fetch Everything
     *
     * @authenticated
     * @header Authorization Bearer {{token}}
     *
     *
     * @return \Illuminate\Http\JsonResponse
     */

    public function fetchEverything() {

        // $data = User::select('tasks','tasks.user_id', '=', 'users.id')
        // ->select('users.*','tasks.*')
        // ->get('users.name','tasks.name');

        $data = DB::table('tasks')->where('is_active',true)
        ->select('user_id', DB::raw('count(*) as total'))
        ->groupBy('user_id')
        ->get();

        return response()->json([
            'message' => 'Task successfully retrieved',
            'tasks' => $data
        ], 201);
    }

    /**
     * Delete Tasks
     *
     * @authenticated
     * @header Authorization Bearer {{token}}
     *
     * @bodyParam id integer required task id Example:1
     * @bodyParam user_id integer required User id Example:1
     * @return \Illuminate\Http\JsonResponse
     */

    public function deleteTask(Request $request) {
        $validator = Validator::make($request->all(), [
            'id' => 'required|integer',
            'user_id' => 'required|integer',
        ]);

        if($validator->fails()){
            return $this->jsonResponse(
                $validator->errors(),
                'Invalid Input Parameters',
                400);
        }

        $tasks = Tasks::where('id',$validator->validated('id'))->where('id',$validator->validated('user_id'))->update(['is_active' => false]);

        return response()->json([
            'message' => 'Task successfully deleted',
            'tasks' => $tasks
        ], 201);
    }

    /**
     * Update Task
     *
     * @authenticated
     * @header Authorization Bearer {{token}}
     * @bodyParam name string required User job Example:Get 25 sales
     * @bodyParam description string required User dept Example:Get 25 sales by 12 March 2021
     * @bodyParam target numeric required User job Example:12.02
     * @bodyParam current_progress numeric required User dept Example:24.15
     * @bodyParam target_completion_days integer required User job Example:50
     * @bodyParam id integer required Task id Example:1
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateTask(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'required|string',
            'target' => 'required|numeric',
            'current_progress' => 'required|numeric',
            'target_completion_days' => 'required|integer',
            'id' => 'required|integer',
        ]);

        if($validator->fails()){
            return $this->jsonResponse(
                $validator->errors(),
                'Invalid Input Parameters',
                400);
        }

        $task = Tasks::find($validator->validated('id'))->first();
        $task->update($validator->validated());

        return response()->json([
            'message' => 'Task successfully updated',
            'task' => $task
        ], 201);
    }

    /**
     * Fetch Employees list
     *
     * @authenticated
     * @header Authorization Bearer {{token}}
     *
     * @return \Illuminate\Http\JsonResponse
     */

    public function fetchEmployees() {

        $employees = User::where('is_admin',0)->get();

        $data = DB::table('tasks')->where('is_active',true)
        ->select('user_id', DB::raw('count(*) as total'))
        ->groupBy('user_id')
        ->get();

        return response()->json([
            'message' => 'Task successfully retrieved',
            'employees' => $employees,
            'count' => $data,
        ], 201);
    }

}





