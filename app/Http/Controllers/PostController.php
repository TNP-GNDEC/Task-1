<?php

namespace App\Http\Controllers;
use DB;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$posts = App\Models\Post::find(1);
        $posts=Post::with('tags')->orderBy('created_at', 'desc')->get();
        //$posts->tags()->get();
        //$posts=DB::select('select * from posts as p, tags as t, posts_tags as pt where p.id=pt.post_id and t.id=pt.tag_id');
        //$tags = $posts->tags()->get();
        return response()->json($posts);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'title' => 'required',
            'description' => 'required' //optional if you want this to be required
        ]);
        $post = post::create($request->all());
        return response()->json(['message'=> 'post created', 
        'post' => $post]);

    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //
        return $post;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
        
        $post->title = $request->input('title');
        $post->description = $request->input('description');
        $post->save();
        
        return response()->json([
            'message' => 'post updated!',
            'post' => $post
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
        $post->delete();
        return response()->json([
            'message' => 'post deleted'
        ]);
    }
}
