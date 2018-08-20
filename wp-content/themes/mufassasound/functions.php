<?php
/**
 * Mufassasound functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Mufassasound
 */

if ( ! function_exists( 'mufassa_sound_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function mufassa_sound_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Mufassasound, use a find and replace
		 * to change 'mufassa-sound' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'mufassa-sound', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'mufassa-sound' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'mufassa_sound_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'mufassa_sound_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function mufassa_sound_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'mufassa_sound_content_width', 640 );
}
add_action( 'after_setup_theme', 'mufassa_sound_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function mufassa_sound_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'mufassa-sound' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'mufassa-sound' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'mufassa_sound_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function mufassa_sound_scripts() {
	wp_enqueue_style( 'mufassa-sound-style', get_stylesheet_uri() );

	wp_enqueue_style( 'app-style',  get_template_directory_uri() . '/dist/css/app.css' );

	wp_enqueue_style( 'chunk-vendor-style',  get_template_directory_uri() . '/dist/css/chunk-vendors.css' );

	wp_enqueue_script( 'mufassa-sound-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'waves-js', 'https://cdnjs.cloudflare.com/ajax/libs/node-waves/0.7.6/waves.min.js', array(), '0.7.6', true );

	wp_enqueue_script( 'app', get_template_directory_uri() . '/dist/js/app.js', array(), null, true );

	function generatePages(){
		// WP_Query arguments
		$args = array(
			'post_type'              => array( 'page' ),
			'post_status'            => array( 'publish' ),
			'nopaging'               => true,
		);

		$localize = array();

		// The Query
		$query = new WP_Query( $args );

		// The Loop
		if ( $query->have_posts() ) {
			while ( $query->have_posts() ) {
				$query->the_post();
				
				array_push($localize, array(
					'id' => get_the_ID(),
					'title' => get_the_title()
				)) ;
			}
		} else {
			// no posts found
		}

		// Restore original Post Data
		wp_reset_postdata();
		return $localize;
	};
	
	wp_localize_script( 'app', 'pages', generatePages() );

	wp_enqueue_script( 'chunk-vendors', get_template_directory_uri() . '/dist/js/chunk-vendors.js', array('app'), null, true );

	wp_enqueue_script( 'mufassa-sound-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'mufassa_sound_scripts' );
if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page();
	
}
/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}
add_filter( 'acf/rest_api/field_settings/show_in_rest', '__return_true' );
add_filter( 'acf/rest_api/field_settings/edit_in_rest', '__return_true' );
