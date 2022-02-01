<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use DB;

class Category extends Model
{
    use HasFactory;

    // all fileds of category table
    protected $fillable = [
        'id', 'name', 'parent_id', 'created_at', 'updated_at'
    ];
    protected $table = 'category';    // if table name is diffrent from default standards then we need to specify $table variable

    function store(Request $request) {
        $obj = new Category();
        $obj->name = $request['name'];
        $obj->parent_id = $request['parent_id'];
        $obj->save();
        return true;
    }

    function updateRecord(Request $request, $id) {
        $result = Category::where('id', $id)->update(array('name'=> $request['name']));
        return $result;
    }

    function deleteRecord($id) {
        $arr = array();
        $all_data = DB::select('select id,parent_id from category');
        $all_data = (array) $all_data;
        $result = $this->generateFormatArray($all_data,$id);
        $obj = Category::find($id);
        $results = $obj->delete();
        return $results;
    }

    function generateFormatArray($arr, $parent = 0) {
        $arr_all = array();
        foreach($arr as $page) {
            $page = (array) $page;
            if( $page['parent_id'] == $parent ) {
                $page['sub'] = isset($page['sub']) ? $page['sub'] : $this->generateFormatArray($arr, $page['id']);
                $obj = Category::find($page['id']);
                $result = $obj->delete();
                $arr_all[] = $page;    
            }
        }
    }
}
