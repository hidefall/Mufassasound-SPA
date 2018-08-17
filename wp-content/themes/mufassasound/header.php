<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Mufassasound
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400i|Poppins:200,400,700|Roboto:300,400" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/node-waves/0.7.6/waves.min.css" />
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<script>
	var rootURL = document.querySelector('link[rel="https://api.w.org/"]').href;
    window.apiRoot = {
      wp: rootURL + 'wp/v2',
      acf: rootURL + 'acf/v3'
    };
</script>


	

