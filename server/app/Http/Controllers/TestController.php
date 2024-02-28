<?php

namespace App\Http\Controllers;

use App\Models\ContactUS;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TestController extends Controller
{
    public function testDB() {
        try {
         DB::connection()->getPdo();
        $dbname = DB::connection()->getDatabaseName();
        echo "Connected successfully to the database. Database name is :".$dbname;
        } catch(\Exception $e) {
         dd($e);
         die("Could not connect to the database.  Please check your configuration. error:" . $e );
        }
     }
}
