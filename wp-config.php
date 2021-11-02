<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'q1xyo1N/QFyR+uZknjWyHFs/Fqi9GY6Cm6dUA7A6scsWSiHKjXNJEqBxXoidMYPNb0KM+vYclLnWFDxZBzkySg==');
define('SECURE_AUTH_KEY',  'DphkPvnN5I/QuxGJ6aGM4GaPXNicmGK9sbtPqSZf+pwSoMa/sQXOWj/jAjTIGO8YRr7M7PhIWKLiWyPnxtf8Ag==');
define('LOGGED_IN_KEY',    'iDq60I5spnN1pArev4mgIaG2zras4iT0YoX1+hsa/Fei1q90GfNKdtJ/LYxGlCppzEPNbTct6txE4YnVzQWuwA==');
define('NONCE_KEY',        '8Vx+gWuZX5qdWxzkLClz2EltHaOp2SKunitvr8KLRzBU6hq6FKO01ENthUj3l2BbkbBXF9AbB3hNabQMrdSuNw==');
define('AUTH_SALT',        'qV5gSvB37Eim2kWX5z5qQVpccizRvXcFPWlhJ/Bn4rOAMOjl4NSlTYHcIpTwo7i7FAGrMwao81JVI8FJe9K3iQ==');
define('SECURE_AUTH_SALT', '1C3tPdX7Zy2BdqvP9Pyv3rpMcxNswpeW+EW3mxBf4I5/w9XMkTiwKQ5DH+DdDfn9h/7RsIY0/hGhxC6Ll8ex1g==');
define('LOGGED_IN_SALT',   'wHXEcJTcmRh9IqV2wPgkReLgBttximEnoKVnK+oPEF4oPnmcv4ib+KWj+dPUUrByY3nTaiLmRhqNVKpYeP+65w==');
define('NONCE_SALT',       'ygmubwiYHW8ylfYXjyMl+pT++gd7pFb6QHKNUhFt4YdkxRFznOvC7wL6X0R5nTeR+/hvV43kxOCkUEaa8lwcjw==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';



/**Disable Theme Editor */
define( 'DISALLOW_FILE_EDIT', true );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
