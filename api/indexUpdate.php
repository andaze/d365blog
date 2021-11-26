<?php

require __DIR__ . '/vendor/autoload.php';
// $demo = \Algolia\AlgoliaSearch\Log\DebugLogger::enable(); 
$client = \Algolia\AlgoliaSearch\SearchClient::create(
   '9V4M3BO2Z4',
   'dd1924d20e515d93102e66e25235e0a2'
 );


$index_en = $client->initIndex('d365_english_content');
$index_ja = $client->initIndex('d365_japanese_content');
$records = json_decode(file_get_contents('https://www.andaze.com/ja/dynamics365/algolia.json'), true);

foreach ($records as $value) {
  if($value['lang'] == "en")
  {
    $index_en->saveObjects($value, ['autoGenerateObjectIDIfNotExist' => true]);
  }
  if($value['lang'] == "ja")
  {
    $index_ja->saveObjects($value, ['autoGenerateObjectIDIfNotExist' => true]);
  }
}
// Batching is done automatically by the API client
// $index->saveObjects($records, ['autoGenerateObjectIDIfNotExist' => true]);
?>