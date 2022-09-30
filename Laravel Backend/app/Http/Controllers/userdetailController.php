<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\userdetails;
use DateTime;

class userdetailController extends Controller
{
    function savedata(Request $request){
         $rules = array(
             "username" => 'required',
            "email"=>'required',
            );
            
            $validator = Validator::make($request->all(),$rules);
    
        if($validator -> fails())
        {
                // return $validator -> errors();
                           return response()->json([

            'status' => '203',
            'message' => 'Please Enter Required Feild',
            
]);
        }
        else
        {         
             $uname=$request -> username;
            $uemail=$request -> email;
           
             $email = DB::table('userdetails')
            ->select('user_name')
            ->where('email_id', '=', $uemail)
            ->get()->count();


            if($email==0){
                 $store = new userdetails;
                $store ->user_name = $uname;
                $store->email_id=$uemail;
                $savedata = $store->save();
                
                  if($savedata)
                {
            return response()->json([

            'status' => '200',
            'message' => 'Save Successful',
            'email'=> $uemail,
            
]);
}else{
                    return response()->json([
                        'status' => "201",
                        'message' => "Insert Error",

                    ]);
                }
        }else{
                    return response()->json([
                        'status' => "202",
                        'message' => "Email Already Exist",

                    ]);
                }
    }
}



    function getuser($id=null){ 
       
        return $id?DB::table('userdetails')->where('id', $id)->orderBy('id', 'ASC')->inRandomOrder()->limit(5)->get():DB::table('userdetails')->get(); 
    }
}