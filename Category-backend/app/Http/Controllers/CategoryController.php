<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    // get All Category
    function getAllCategory() {
        $data = Category::all();
        $data = $this->generateFormatArray($data, $parent = 0);
        return $data;
    }

    // Store New Category
    function store(Request $request) {
        $obj = new Category();
        $result = $obj->store($request);
        return $result;
    }

    // Update Category
    function update(Request $request, $id) {
        $obj = new Category();
        $result = $obj->updateRecord($request, $id);
        return $result;
    }

    // Delete Category
    function delete($id) {
        $obj = new Category();
        $result = $obj->deleteRecord($id);
        return $result;
    }

    function generateFormatArray($arr, $parent = 0) {
        $arr_all = array();
        foreach($arr as $page) {
            if( $page['parent_id'] == $parent ) {
                $page['sub'] = isset($page['sub']) ? $page['sub'] : $this->generateFormatArray($arr, $page['id']);
                $arr_all[] = $page;
            }
        }
        return $arr_all;
    }
}
