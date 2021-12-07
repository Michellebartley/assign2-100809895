<?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */


function hobbyblogchild_wp_enqueue_scripts() {
    wp_enqueue_style( 
        'parent-style', 
        get_stylesheet_directory_uri().'./style.css'
    );
    wp_enqueue_style( 
        'hobbyblogchild-style', 
        get_stylesheet_directory_uri().'./css/style.css'
    );
}
add_action( 'wp_enqueue_scripts', 'hobbyblogchild_wp_enqueue_scripts' );

// function hobbyblogchild_wp_enqueue_scripts() {
//     wp_enqueue_style( 
//         'hobbyblogchild-style', 
//         get_stylesheet_uri(),
//         array( 'twenty-twenty-one-style' ), 
//         wp_get_theme()->get('Version')
//     );
// }
// add_action( 'wp_enqueue_scripts', 'hobbyblogchild_wp_enqueue_scripts' );
?>