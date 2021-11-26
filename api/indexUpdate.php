<?php

require __DIR__ . '/vendor/autoload.php';
// $demo = \Algolia\AlgoliaSearch\Log\DebugLogger::enable(); 
$client = \Algolia\AlgoliaSearch\SearchClient::create(
   '9V4M3BO2Z4',
   'dd1924d20e515d93102e66e25235e0a2'
 );


$index = $client->initIndex('netlify_23ba4425-f265-49c0-b287-cb888a5f951c_devlop_all');
$records = json_decode(file_get_contents('https://www.andaze.com/ja/dynamics365/algolia.json'), true);

// Batching is done automatically by the API client
$index->saveObjects($records, ['autoGenerateObjectIDIfNotExist' => true]);
?>